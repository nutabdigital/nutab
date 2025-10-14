// Model.tsx
// 3js Particles Model with dynamic positioning and colour mapping, based on
// oscillating frequency and distance from (0,0,0).

"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./Model.css";
import { gsap } from "gsap";
import { useModelState } from "../../context/ModelStateProvider";

// currentSection from page.tsx
interface ModelProps {
  useModelState: () => {
    currentSection: number;
  };
}

let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer;
let particleSystem: THREE.Points;
const angles = { angleX: 0, angleY: 0 }; // Wrap angles in an object
let isDragging = false;
let camDistance = 50;
let targetDistance;
let isScroll = false;
let touchStartY = 0;

const previousMousePosition = { x: 0, y: 0 };
const particleCount = 10000;
const particleSize = 0.25;
const particleData = new Array(particleCount).fill(null).map(() => {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  return { theta, phi };
});

// Throttle function for windowlistener
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
  // const { state, setState } = useModelState();
  const { state, paused } = useModelState();

  // useEffect(() => {
  //   if (!renderer) return; // don’t run until renderer is set

  //   if (paused) {
  //     renderer.setAnimationLoop(null);
  //   } else {
  //     renderer.setAnimationLoop(() => {
  //       updateParticles();
  //       updateCam();
  //       renderer.render(scene, camera);
  //     });
  //   }
  // }, [paused, renderer]);


  // const { state, setState, paused } = useModelState();
  const [currentSection, setCurrentSection] = useState(state.current.currentSection);

  // Sync ref with local state
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSection !== state.current.currentSection) {
        setCurrentSection(state.current.currentSection);
      }
    }, 50); // poll 20fps
    return () => clearInterval(interval);
  }, [state, currentSection]);


  const canvasRef = useRef<HTMLCanvasElement>(null); //client side?
  const [isMobile, setIsMobile] = useState(false);
  const rotationSpeedX = 0.0047; // Adjust to control the speed of horizontal rotation
  const rotationSpeedY = 0.0047; // Adjust to control the speed of vertical rotation
  const slowRotationSpeedX = 0.002;
  const slowRotationSpeedY = 0.002;
  const frequencyRef = useRef(0);
  const directionRef = useRef(1);
  const burstTimeline = useRef<gsap.core.Timeline | null>(null);

  let camera = useRef(
    //client side?
    typeof window !== "undefined"
      ? new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      : new THREE.PerspectiveCamera(75, 1, 0.1, 1000) // Fallback for SSR
  ).current;

  // Initialize Three.js scene
  const initializeScene = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 85 : 50; // Increase Z on mobile for a zoomed-out effect
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      alpha: true,
    });
    renderer.setSize(
      isMobile ? window.innerWidth : window.innerWidth,
      window.innerHeight
    );
  };

  // Generate the particle system
  const createParticles = () => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    // Neutral coloured sphere shape to start
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 30;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      vertices.push(x, y, z);
      colors.push(0.5, 0.5, 0.5);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      vertexColors: true,
      size: particleSize,
    });
    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
  };

  // // frequency change and allow manual orbit with mouse drag
  // const onMouseDown = (event: MouseEvent) => {
  //   isDragging = true;
  //   previousMousePosition.x = event.clientX;
  //   previousMousePosition.y = event.clientY;
  //   document.addEventListener("mousemove", onMouseMove);
  //   document.addEventListener("mouseup", onMouseUp);
  // };

  // // Manual camera orbit around the model with mouse click + drag
  // const onMouseMove = (event: MouseEvent) => {
  //   if (!isDragging) return;

  //   const deltaX = event.clientX - previousMousePosition.x;
  //   const deltaY = event.clientY - previousMousePosition.y;
  //   const sensitivity = 0.005;

  //   angles.angleX += deltaX * sensitivity;
  //   angles.angleY -= deltaY * sensitivity;

  //   previousMousePosition.x = event.clientX;
  //   previousMousePosition.y = event.clientY;
  // };

  // // Resume frequency changes and block manual orbit
  // const onMouseUp = () => {
  //   isDragging = false;
  //   document.removeEventListener("mousemove", onMouseMove);
  //   document.removeEventListener("mouseup", onMouseUp);
  // };

  // Handle scroll to adjust frequency and camera angle for service section

  const onScroll = (event: WheelEvent) => {
    if (state.current.currentSection === 2) {
      let delta = event.deltaY * 0.02; // Adjust burst strength based on scroll
      // console.log("delta: ", delta);
      // console.log("event.delta: ", event.deltaY);
      isScroll = true;

      // Cancel any ongoing animation and create a new burst effect
      if (burstTimeline.current) {
        burstTimeline.current.kill();
      }
      burstTimeline.current = gsap.timeline();

      // Adjust frequency and reverse direction if needed
      let newFrequency = frequencyRef.current + 2 * directionRef.current;

      // Reverse direction if hitting upper or lower bounds
      if (newFrequency >= 20) {
        newFrequency = 20; // Prevent overshooting
        directionRef.current = -1; // Reverse direction
      } else if (newFrequency <= 0) {
        newFrequency = 0; // Prevent overshooting
        directionRef.current = 1; // Reverse direction
      }

      // Update angles
      const newAngleY = angles.angleY + 2 * 0.2; // Modify angleY based on scroll

      // Animate frequencyRef and angles
      burstTimeline.current
        .to(frequencyRef, {
          current: newFrequency,
          duration: 1.5,
          ease: "power2.out",
        })
        .to(
          angles, // Target angles object
          {
            angleY: newAngleY, // End value for angleY
            duration: 2.5,
            ease: "power2.out",
          },
          "<" // Align animations to run concurrently
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
    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (state.current.currentSection === 2) {
      let delta = deltaY * 0.02; // Adjust burst strength based on scroll
      // console.log("delta: ", delta);
      // console.log("event.delta: ", deltaY);
      isScroll = true;

      // Cancel any ongoing animation and create a new burst effect
      if (burstTimeline.current) {
        burstTimeline.current.kill();
      }
      burstTimeline.current = gsap.timeline();

      // Adjust frequency and reverse direction if needed
      let newFrequency = frequencyRef.current + 2 * directionRef.current;

      // Reverse direction if hitting upper or lower bounds
      if (newFrequency >= 20) {
        newFrequency = 20; // Prevent overshooting
        directionRef.current = -1; // Reverse direction
      } else if (newFrequency <= 0) {
        newFrequency = 0; // Prevent overshooting
        directionRef.current = 1; // Reverse direction
      }

      // Update angles
      const newAngleY = angles.angleY + 2 * 0.2; // Modify angleY based on scroll

      // Animate frequencyRef and angles
      burstTimeline.current
        .to(frequencyRef, {
          current: newFrequency,
          duration: 1.5,
          ease: "power2.out",
        })
        .to(
          angles, // Target angles object
          {
            angleY: newAngleY, // End value for angleY
            duration: 2.5,
            ease: "power2.out",
          },
          "<" // Align animations to run concurrently
        );
    }
    isScroll = false;
  };

  // Event listeners for scroll and mouse drag
  const attachEventListeners = () => {
    // Disable manual drag functionality
    // document.addEventListener("mousedown", onMouseDown);
  };
  // Apply left-center-right transformation of whole canvas based on the current section
  const getHorizontalPosition = () => {
    if (isMobile || currentSection === 1 || currentSection === 2 || currentSection === 4) {
      return "0%"; // Center the canvas horizontally on mobile or for sections 1, 2, 4
    }
    const position = currentSection % 2 === 0 ? "left" : "right";
    return position === "left" ? "-50%" : "50%"; // Left and
  };

  // Handle resize events
  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
    const width = isMobile ? window.innerWidth : window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  // Update particle positions and colors
  const updateParticles = () => {
    const positions = particleSystem.geometry.attributes.position
      .array as Float32Array;
    const colors = particleSystem.geometry.attributes.color
      .array as Float32Array;
    const minHeight = -30,
      maxHeight = 30;

    for (let i = 0; i < positions.length; i += 3) {
      const { theta, phi } = particleData[i / 3]; // Retrieve precomputed theta and phi
      const radius = Math.sqrt(
        positions[i] ** 2 + positions[i + 1] ** 2 + positions[i + 2] ** 2
      );
      const newRadius = 20 + Math.sin(frequencyRef.current * phi + theta) * 5;

      // Update particle positions using the stored theta and phi
      positions[i] = newRadius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = newRadius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = newRadius * Math.cos(phi);

      // Map height to color
      const height = Math.sqrt(
        positions[i] ** 2 + positions[i + 1] ** 2 + positions[i + 2] ** 2
      );
      const normalizedHeight = (height - minHeight) / (maxHeight - minHeight);
      const color = new THREE.Color();
      color.setHSL(normalizedHeight * 0.7, 1.0, 0.4);

      // Update color attributes
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.geometry.attributes.color.needsUpdate = true;
  };

  // Update the camera's position
  const updateCam = () => {
    camera.position.x = camDistance * Math.sin(angles.angleX);
    camera.position.y = camDistance * Math.sin(angles.angleY);
    camera.position.z =
      camDistance * Math.cos(angles.angleX) * Math.cos(angles.angleY);
    camera.lookAt(0, 0, 0);
  };

  // Cleanup function to remove listeners and dispose of the renderer
  const cleanup = (handleResizeThrottled: () => void) => {
    window.removeEventListener("resize", handleResizeThrottled);
    // document.removeEventListener("mousedown", onMouseDown);
    // document.removeEventListener("mousemove", onMouseMove);
    // document.removeEventListener("mouseup", onMouseUp);
    if (renderer) renderer.dispose();
  };

  // Initialize Scene and Model Particles
  useEffect(() => {
    initializeScene();
    createParticles();
    attachEventListeners();
    handleResizeThrottled(); // Adjust initial layout
  }, []);

  // Update camera distance from model whenever `isMobile` or `currentSection` changes
  useEffect(() => {
    // (x,y,z) camera coordinate value for 'z' distance from (0,0,0)
    const updateCamera = () => {
      if (isMobile) {
        targetDistance = 85;
      } else if (
        currentSection === 1 ||
        currentSection === 2 ||
        currentSection === 4
      ) {
        targetDistance = 35;
      } else {
        targetDistance = 60;
      }
      // Eased camera movement for smooth effect
      gsap.to(
        { value: camDistance },
        {
          value: targetDistance,
          duration: 1, // Adjust duration for desired smoothness
          ease: "expo.inOut", // Optional easing
          onUpdate: function () {
            camDistance = this.targets()[0].value; // Update camDistance as it animates
            // Update camera position based on the new camDistance
            camera.position.x = camDistance * Math.sin(angles.angleX);
            camera.position.y = camDistance * Math.sin(angles.angleY);
            camera.position.z =
              camDistance * Math.cos(angles.angleX) * Math.cos(angles.angleY);
            camera.lookAt(0, 0, 0);
          },
        }
      );
    };
    updateCamera();
  }, [isMobile, state.current.currentSection]); // dependencies: isMobile and currentSection

  // Frequency change loop
  useEffect(() => {
    let frameId: number;
    let lastTime = performance.now();

    const animateFrequency = (time: number) => {
      const deltaTime = (time - lastTime) / 1000; // seconds
      lastTime = time;

      const speedMultiplier = deltaTime * 60;

      const slowSections = [1, 2, 4];
      if (!slowSections.includes(state.current.currentSection)) {
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
  }, [state.current.currentSection]);



  // Service section scroll effect
  useEffect(() => {
    const handleScroll = throttle((event: WheelEvent) => {
      onScroll(event);
    }, 100); // Adjust throttle limit as needed

    const handleTouches = throttle((event: TouchEvent) => {
      touchStartHandler(event);
      touchScroll(event);
    }, 100);

    if (state.current.currentSection === 2) {
      document.addEventListener("wheel", handleScroll);
      document.addEventListener("touchmove", handleTouches, { passive: false });
    }

    return () => {
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchmove", handleTouches);
    };
  }, [state.current.currentSection]); // Rerun whenever currentSection changes

  // Model animation loop
  useEffect(() => {
    let frameId: number;

    const animate = () => {
      if (!paused) {
        updateParticles();
        updateCam();
        renderer.render(scene, camera);
      }
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [paused]);


  // Throttled resize handler
  const handleResizeThrottled = throttle(handleResize, 100);

  // useEffect(() => {
  //   console.log("Model component is mounted");
  // }, []);

  return (
    <div
      className="model-container"
      style={{
        transform: `translateX(${getHorizontalPosition()})`,
      }}
    >
      <canvas ref={canvasRef} className="model" />
    </div>
  );
};

export default Model;
