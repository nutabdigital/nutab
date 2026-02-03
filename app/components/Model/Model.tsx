// Model.tsx
// 3js Particles Model with dynamic positioning and colour mapping, based on
// oscillating frequency and distance from (0,0,0).

"use client";

import { useEffect, useRef, useState } from "react";
import { useModelState } from "../../context/ModelStateProvider";

// currentSection from page.tsx
interface ModelProps {
  useModelState?: () => {
    currentSection: number;
  };
}

// libs previously top-level (three, gsap) are now loaded dynamically
let scene: any,
  camera: any,
  renderer: any;
let particleSystem: any;
const angles = { angleX: 0, angleY: 0 }; // Wrap angles in an object
let isDragging = false;
let camDistance = 50;
let targetDistance: number | undefined;
let isScroll = false;
let touchStartY = 0;

const previousMousePosition = { x: 0, y: 0 };
// removed top-level particleCount & particleData to compute per-device
// ...existing code...

// Throttle function for window listener
const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
) => {
  let inThrottle = false;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

const Model: React.FC<ModelProps> = () => {
  const { state, paused } = useModelState();
  const [currentSection, setCurrentSection] = useState(state.current.currentSection);

  // Sync ref with local state (polling kept but could be optimized)
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSection !== state.current.currentSection) {
        setCurrentSection(state.current.currentSection);
      }
    }, 50); // poll 20fps
    return () => clearInterval(interval);
  }, [state, currentSection]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const rotationSpeedX = 0.0047;
  const rotationSpeedY = 0.0047;
  const slowRotationSpeedX = 0.002;
  const slowRotationSpeedY = 0.002;
  const frequencyRef = useRef(0);
  const directionRef = useRef(1);
  const burstTimeline = useRef<any | null>(null);

  // Use crypto-based randomness when available to satisfy security scanners
  const secureRandom = () => {
    if (typeof window !== "undefined" && (window.crypto || (window as any).msCrypto)) {
      const cryptoObj: Crypto = (window.crypto || (window as any).msCrypto) as Crypto;
      const arr = new Uint32Array(1);
      cryptoObj.getRandomValues(arr);
      // Convert to [0,1)
      return arr[0] / 0xffffffff;
    }
    return Math.random();
  };

  // dynamic library refs
  const THREERef = useRef<any>(null);
  const gsapRef = useRef<any>(null);
  const [libsLoaded, setLibsLoaded] = useState(false);

  // particle data kept in refs so other functions can access
  const particleCountRef = useRef<number>(0);
  const particleDataRef = useRef<{ theta: number; phi: number }[]>([]);
  const particleSize = useRef<number>(0);

  // user / device preferences
  const prefersReducedMotionRef = useRef<boolean>(false);
  const deviceLowEndRef = useRef<boolean>(false);

  // Track WebGL context state for recovery on Linux/Firefox
  const webglContextLostRef = useRef<boolean>(false);

  // Initialize Three.js scene (uses THREERef.current)
  const initializeScene = () => {
    const THREE = THREERef.current;
    if (!THREE) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 85 : 50; // Increase Z on mobile for a zoomed-out effect

    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        powerPreference: "default", // Let the browser/driver choose (helps on Linux)
        failIfMajorPerformanceCaveat: false, // Allow software rendering fallback
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      // Handle WebGL context lost (common on Linux + Firefox with Mesa drivers)
      canvas.addEventListener("webglcontextlost", (e) => {
        e.preventDefault();
        webglContextLostRef.current = true;
        console.warn("WebGL context lost — animation paused");
      }, false);

      // Handle WebGL context restored
      canvas.addEventListener("webglcontextrestored", () => {
        webglContextLostRef.current = false;
        console.log("WebGL context restored — reinitializing");
        // Reinitialize scene after context restore
        createParticles();
      }, false);

    } catch (e) {
      console.error("Failed to create WebGL renderer:", e);
      renderer = null;
    }
  };

  // Generate the particle system (uses THREERef.current)
  const createParticles = () => {
    const THREE = THREERef.current;
    if (!THREE) return;

    // Determine device capability & motion preferences at creation time
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    prefersReducedMotionRef.current = prefersReducedMotion;

    const deviceMemory = (navigator as any).deviceMemory || 4;
    const hwConcurrency = navigator.hardwareConcurrency || 4;
    const isMobileLocal = window.innerWidth < 700;
    setIsMobile(isMobileLocal);

    const lowEndDevice = deviceMemory <= 2 || hwConcurrency <= 2;
    deviceLowEndRef.current = lowEndDevice;

    // Compute particle count based on device and user preference
    let particleCount = 10000;
    let particleSize = 0.25;
    if (prefersReducedMotion || lowEndDevice || isMobileLocal) {
      particleCount = 4000; // much lighter on low-end / mobile / reduced-motion
      particleSize = 0.5;
    } else if (deviceMemory <= 4) {
      particleCount = 6000; // medium devices
      particleSize = 0.3;
    } else {
      particleCount = 10000; // full experience (reduced from 15000)
      particleSize = 0.2;
    }

    // Store chosen count for updates
    particleCountRef.current = particleCount;

    // Clean up previous system if present
    if (particleSystem) {
      try {
        if (particleSystem.geometry) particleSystem.geometry.dispose();
        if (particleSystem.material) particleSystem.material.dispose();
        scene.remove(particleSystem);
      } catch (e) {
        /* ignore */
      }
      particleSystem = null;
    }

    // build particleData for chosen count
    const particleData: { theta: number; phi: number }[] = new Array(particleCount)
      .fill(null)
      .map(() => {
        const theta = secureRandom() * Math.PI * 2;
        const phi = Math.acos(2 * secureRandom() - 1);
        return { theta, phi };
      });

    particleDataRef.current = particleData;

    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Neutral coloured sphere shape to start
    const radius = 30;
    for (let i = 0; i < particleCount; i++) {
      const { theta, phi } = particleData[i];
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const idx = i * 3;
      vertices[idx] = x;
      vertices[idx + 1] = y;
      vertices[idx + 2] = z;

      colors[idx] = 0.5;
      colors[idx + 1] = 0.5;
      colors[idx + 2] = 0.5;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      vertexColors: true,
      size: prefersReducedMotion ? particleSize * 0.8 : particleSize,
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
  };

  // Handle scroll to adjust frequency and camera angle for service section
  const onScroll = (event: WheelEvent) => {
    const gsap = gsapRef.current;
    if (!gsap) return;
    if (state.current.currentSection === 2) {
      isScroll = true;

      if (burstTimeline.current) {
        burstTimeline.current.kill();
      }
      burstTimeline.current = gsap.timeline();

      let newFrequency = frequencyRef.current + 2 * directionRef.current;

      if (newFrequency >= 20) {
        newFrequency = 20;
        directionRef.current = -1;
      } else if (newFrequency <= 0) {
        newFrequency = 0;
        directionRef.current = 1;
      }

      const newAngleY = angles.angleY + 2 * 0.2;

      burstTimeline.current
        .to(frequencyRef, {
          current: newFrequency,
          duration: 1.5,
          ease: "power2.out",
        })
        .to(
          angles,
          {
            angleY: newAngleY,
            duration: 2.5,
            ease: "power2.out",
          },
          "<"
        );
    }
    isScroll = false;
  };

  const touchStartHandler = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartY = e.touches[0].clientY;
    }
  };

  const touchScroll = (e: TouchEvent) => {
    const gsap = gsapRef.current;
    if (!gsap) return;
    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (state.current.currentSection === 2) {
      isScroll = true;

      if (burstTimeline.current) {
        burstTimeline.current.kill();
      }
      burstTimeline.current = gsap.timeline();

      let newFrequency = frequencyRef.current + 2 * directionRef.current;

      if (newFrequency >= 20) {
        newFrequency = 20;
        directionRef.current = -1;
      } else if (newFrequency <= 0) {
        newFrequency = 0;
        directionRef.current = 1;
      }

      const newAngleY = angles.angleY + 2 * 0.2;

      burstTimeline.current
        .to(frequencyRef, {
          current: newFrequency,
          duration: 1.5,
          ease: "power2.out",
        })
        .to(
          angles,
          {
            angleY: newAngleY,
            duration: 2.5,
            ease: "power2.out",
          },
          "<"
        );
    }
    isScroll = false;
  };

  // Event listeners for scroll and mouse drag (attach no-op drag)
  const attachEventListeners = () => {
    // intentionally left for future manual drag (disabled)
  };

  // Apply left-center-right transformation of whole canvas based on the current section
  const getHorizontalPosition = () => {
    if (isMobile || currentSection === 1 || currentSection === 2 || currentSection === 4 || currentSection === 5) {
      return "0%";
    }
    const position = currentSection % 2 === 0 ? "left" : "right";
    return position === "left" ? "-50%" : "50%";
  };

  // Handle resize events
  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (renderer && camera) {
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
  };

  // Update particle positions and colors (uses THREERef.current)
  const updateParticles = () => {
    if (!particleSystem) return;
    const THREE = THREERef.current;
    if (!THREE) return;

    const positions = particleSystem.geometry.attributes.position
      .array as Float32Array;
    const colors = particleSystem.geometry.attributes.color
      .array as Float32Array;
    const minHeight = -30,
      maxHeight = 30;

    const particleCount = particleCountRef.current;
    const particleData = particleDataRef.current;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const { theta, phi } = particleData[i];
      const newRadius = 20 + Math.sin(frequencyRef.current * phi + theta) * 5;

      positions[idx] = newRadius * Math.sin(phi) * Math.cos(theta);
      positions[idx + 1] = newRadius * Math.sin(phi) * Math.sin(theta);
      positions[idx + 2] = newRadius * Math.cos(phi);

      const height = Math.sqrt(
        positions[idx] ** 2 + positions[idx + 1] ** 2 + positions[idx + 2] ** 2
      );
      const normalizedHeight = (height - minHeight) / (maxHeight - minHeight);
      const color = new THREE.Color();
      color.setHSL(normalizedHeight * 0.7, 1.0, 0.4);

      colors[idx] = color.r;
      colors[idx + 1] = color.g;
      colors[idx + 2] = color.b;
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.geometry.attributes.color.needsUpdate = true;
  };

  // Update the camera's position
  const updateCam = () => {
    if (!camera) return;
    camera.position.x = camDistance * Math.sin(angles.angleX);
    camera.position.y = camDistance * Math.sin(angles.angleY);
    camera.position.z =
      camDistance * Math.cos(angles.angleX) * Math.cos(angles.angleY);
    camera.lookAt(0, 0, 0);
  };

  // Cleanup function to remove listeners and dispose of the renderer
  const cleanup = (handleResizeThrottled: () => void) => {
    window.removeEventListener("resize", handleResizeThrottled);
    if (renderer && renderer.dispose) renderer.dispose();
  };

  // Dynamic import of heavy libs (three + gsap)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [threeModule, gsapModule] = await Promise.all([
          import("three"),
          import("gsap"),
        ]);
        if (cancelled) return;
        THREERef.current = threeModule;
        // gsap may export default or named
        gsapRef.current = (gsapModule && (gsapModule.gsap || gsapModule.default || gsapModule));
        setLibsLoaded(true);
      } catch (err) {
        // silent fail — keep model disabled
        console.error("Failed to load 3D libs:", err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Initialize Scene and Model Particles only after libs are loaded
  useEffect(() => {
    if (!libsLoaded) return;
    initializeScene();
    createParticles();
    attachEventListeners();
    handleResizeThrottled(); // Adjust initial layout

    // add resize listener (passive)
    window.addEventListener("resize", handleResizeThrottled);

    return () => {
      cleanup(handleResizeThrottled);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [libsLoaded]);

  // Update camera distance from model whenever `isMobile` or `currentSection` changes
  useEffect(() => {
    if (!libsLoaded) return;
    const gsap = gsapRef.current;
    if (!gsap) return;

    const updateCamera = () => {
      if (isMobile) {
        targetDistance = 85;
      } else if (
        currentSection === 1 ||
        currentSection === 2 ||
        currentSection === 4 ||
        currentSection === 5
      ) {
        targetDistance = 35;
      } else {
        targetDistance = 60;
      }

      gsap.to(
        { value: camDistance },
        {
          value: targetDistance,
          duration: 1,
          ease: "expo.inOut",
          onUpdate: function () {
            camDistance = (this as any).targets()[0].value;
            if (camera) {
              camera.position.x = camDistance * Math.sin(angles.angleX);
              camera.position.y = camDistance * Math.sin(angles.angleY);
              camera.position.z =
                camDistance * Math.cos(angles.angleX) * Math.cos(angles.angleY);
              camera.lookAt(0, 0, 0);
            }
          },
        }
      );
    };
    updateCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, state.current.currentSection, libsLoaded]);

  // Frequency change loop
  useEffect(() => {
    if (!libsLoaded) return;
    let frameId: number;
    let lastTime = performance.now();

    const animateFrequency = (time: number) => {
      const deltaTime = (time - lastTime) / 1000; // seconds
      lastTime = time;

      const speedMultiplier = deltaTime * 60;

      if (state.current.currentSection !== 2) {
        angles.angleX += 0.0047 * speedMultiplier;
        angles.angleY += 0.0047 * speedMultiplier;
        frequencyRef.current += 0.02 * directionRef.current * speedMultiplier;
      } else {
        angles.angleX += 0.0007 * speedMultiplier;
        angles.angleY += 0.0007 * speedMultiplier;
        frequencyRef.current += 0.0014 * directionRef.current * speedMultiplier;
      }

      // Reverse direction at bounds
      if (frequencyRef.current >= 20) {
        frequencyRef.current = 20;
        directionRef.current = -1;
      } else if (frequencyRef.current <= 0) {
        frequencyRef.current = 0;
        directionRef.current = 1;
      }

      frameId = requestAnimationFrame(animateFrequency);
    };

    frameId = requestAnimationFrame(animateFrequency);

    return () => cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.current.currentSection, libsLoaded]);

  // Service section scroll effect
  useEffect(() => {
    if (!libsLoaded) return;

    const handleScroll = throttle((event: WheelEvent) => {
      onScroll(event);
    }, 100);

    const handleTouches = throttle((event: TouchEvent) => {
      touchStartHandler(event);
      touchScroll(event);
    }, 100);

    if (state.current.currentSection === 2) {
      document.addEventListener("wheel", handleScroll, { passive: true });
      document.addEventListener("touchmove", handleTouches, { passive: true });
    }

    return () => {
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchmove", handleTouches);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.current.currentSection, libsLoaded]);

  // Model animation loop
  useEffect(() => {
    if (!libsLoaded) return;
    let frameId: number;
    let lastTime = performance.now();

    const animate = (time?: number) => {
      // Skip rendering if WebGL context is lost (prevents frozen appearance on Linux/Firefox)
      if (webglContextLostRef.current) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      // Skip if renderer failed to initialize
      if (!renderer || !scene || !camera) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      // if user prefers reduced motion, update less frequently or skip heavy updates
      if (!prefersReducedMotionRef.current) {
        if (!paused) {
          updateParticles();
          updateCam();
          renderer.render(scene, camera);
        }
      } else {
        // light rendering for reduced motion: render but skip particle updates
        if (!paused) {
          renderer.render(scene, camera);
        }
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, libsLoaded]);

  // Throttled resize handler
  const handleResizeThrottled = throttle(handleResize, 100);

  const containerStyle: React.CSSProperties = {
    transform: `translateX(${getHorizontalPosition()})`,
    width: isMobile ? "100vw" : "50vw",
    maxWidth: isMobile ? "100vw" : "50vw",
  };

  const canvasClass = `fixed pointer-events-none z-[1] transition-opacity duration-[280ms] ease-linear will-change-opacity will-change-transform ${
    libsLoaded ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div
      className="fixed z-[1] pointer-events-none will-change-transform will-change-opacity transition-transform duration-[600ms] ease-in-out"
      style={containerStyle}
    >
      {/* hide canvas until libs loaded to prevent flash-on-top */}
      <canvas ref={canvasRef} className={canvasClass} aria-hidden="true" />
    </div>
  );
};

export default Model;
