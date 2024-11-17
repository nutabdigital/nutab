"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./Background.css";
import { gsap } from "gsap";

interface BackgroundProps {
  currentSection: number; // This can be used to control transformations if passed in
  hovered: boolean; // Make sure this is being used
}

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let particleSystem: THREE.Points;
let scrollSpeed = 0, frequency = 1, angleX = 0, angleY = 0;
let isDragging = false;
let camDistance = 50;
// let hoverLight: THREE.PointLight | undefined;

const previousMousePosition = { x: 0, y: 0 };
const particleCount = 10000;
const particleSize = 0.25;

const Background: React.FC<BackgroundProps> = ({ currentSection, hovered }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  // Initialize the texture loader
  // const textureLoader = new THREE.TextureLoader();

  // // Load the texture image
  // const texture = textureLoader.load('/wball.jpg'); // Replace with your image path
  // const testGeometry = new THREE.SphereGeometry(23, 64, 64);
  // const testMaterial = new THREE.MeshStandardMaterial({
  //   map: texture,         // Apply the loaded texture
  //   transparent: true,  // Enable transparency
  //   opacity: 0.3,       // Set opacity level (0 is fully transparent, 1 is fully opaque)
  // });
  // const testMesh = new THREE.Mesh(testGeometry, testMaterial);
  let camera = useRef(
    typeof window !== "undefined"
      ? new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      : new THREE.PerspectiveCamera(75, 1, 0.1, 1000) // Fallback for SSR
  ).current;
  


  // Adjust pulse color based on color scheme
  // const pulseColor = window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ? new THREE.Color(1, 1, 1)
  //   : new THREE.Color(0, 0, 0);

  useEffect(() => {
    // Update camera whenever `isMobile` or `currentSection` changes
    const updateCamera = () => {
      let targetDistance;

      if (isMobile) {
        targetDistance = 85;
      } else if (currentSection === 1) {
        targetDistance = 29;
      } else {
        targetDistance = 50;
      }

      gsap.to(
        { value: camDistance },
        {
          value: targetDistance,
          duration: 1,  // Adjust duration for desired smoothness
          ease: "expo.inOut",  // Optional easing
          onUpdate: function () {
            camDistance = this.targets()[0].value;  // Update camDistance as it animates

            // Update camera position based on the new camDistance
            camera.position.x = camDistance * Math.sin(angleX);
            camera.position.y = camDistance * Math.sin(angleY);
            camera.position.z = camDistance * Math.cos(angleX) * Math.cos(angleY);
            camera.lookAt(0, 0, 0);
          }
        }
      );
    };

    updateCamera();
  }, [isMobile, currentSection]); // dependencies: isMobile and currentSection

  // useEffect(() => {
  //   const handleHoverEvent = (event: CustomEvent) => {
  //     const { isHovering } = event.detail;

  //     if (isHovering) {
  //       // Add the light when hovering
  //       scene.add(testMesh);
  //     }

  //     if (!isHovering) {
  //       // Remove the light when not hovering
  //       scene.remove(testMesh);
  //     }
  //   };

  //   window.addEventListener('about-hover', handleHoverEvent as EventListener);

  //   // Return a cleanup function to remove the event listener
  //   return () => {
  //     window.removeEventListener('about-hover', handleHoverEvent as EventListener);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (hovered) {
  //     console.log("Hovered: Changing color to pulse"); // Test if hover is received
  //     // updateParticles();

  //   }

  // }, [hovered]);


  useEffect(() => {
    // Check if window is defined and set the mobile state
    setIsMobile(window.innerWidth < 600);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {

    // Handle resize events
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      const width = isMobile ? window.innerWidth : window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    // Initialize scene, camera, and renderer
    initializeScene();
    createParticles();
    attachEventListeners();
    handleResize(); // Adjust initial layout
    window.addEventListener("resize", handleResize);

    const rotationSpeedX = 0.012; // Adjust to control the speed of horizontal rotation
    const rotationSpeedY = 0.006; // Adjust to control the speed of vertical rotation

    // Start the animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // if (hovered) pulseParticles();

      if (!isFrequencyPaused) {
        // Increment angleX and angleY for continuous orbit
        angleX += rotationSpeedX;
        angleY += rotationSpeedY;
      }

      updateParticles();
      updateCamera();
      renderer.render(scene, camera);
    };
    animate();

    return () => cleanup(handleResize);
  }, [isMobile]);

  // Initialize Three.js scene
  const initializeScene = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, (window.innerWidth) / window.innerHeight, 0.1, 1000);
    camera.position.z = isMobile ? 85 : 50; // Increase Z on mobile for a zoomed-out effect
    renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, alpha: true });
    renderer.setSize(isMobile ? window.innerWidth : window.innerWidth, window.innerHeight);
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Brighter light from one direction
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Add hover light once here to test visibility
    // const hoverLight = new THREE.PointLight(0xffffff, 2); // Increased intensity to 2
    // hoverLight.position.set(10, 10, 10); // Position light so it shines on the sphere
    // scene.add(hoverLight);
    // const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
    // scene.add(ambientLight);

    // Test sphere to visualize light
    // const testGeometry = new THREE.SphereGeometry(5, 32, 32);
    // const testMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
    // const testMesh = new THREE.Mesh(testGeometry, testMaterial);
    // scene.add(testMesh);

    // const lightHelper = new THREE.PointLightHelper(hoverLight, 1);
    // scene.add(lightHelper);

    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);

  };


  // Generate the particle system
  const createParticles = () => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

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

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ vertexColors: true, size: particleSize });
    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
  };

  // Event listeners for scroll and mouse drag
  const attachEventListeners = () => {
    document.addEventListener("wheel", onScroll);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  let isFrequencyPaused = false;

  const onMouseDown = (event: MouseEvent) => {
    isDragging = true;
    isFrequencyPaused = true; // Pause frequency changes
    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
  };

  // Handle mouse move for drag
  const onMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = event.clientX - previousMousePosition.x;
    const deltaY = event.clientY - previousMousePosition.y;
    const sensitivity = 0.005;

    angleX += deltaX * sensitivity;
    angleY -= deltaY * sensitivity;

    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
  };

  // Handle mouse up to end drag
  const onMouseUp = () => {
    isDragging = false;
    isFrequencyPaused = false; // Resume frequency changes
  };

  // Handle scroll to adjust frequency and camera angle
  const onScroll = (event: WheelEvent) => {
    // scrollSpeed += event.deltaY * 0.01;
    // below used to change the frequency value based on scroll
    // frequency = Math.max(0.1, scrollSpeed);

    // angleX += event.deltaY * 0.001;
    // angleY += event.deltaY * 0.0005;
  };

  const minFrequency = 0;
  const maxFrequency = 20.0;
  let direction = 1; // 1 for increasing, -1 for decreasing

  // Update particle positions and colors
  const updateParticles = () => {

    // Update frequency only if it's not paused
    if (!isFrequencyPaused) {
      frequency += direction * 0.015;
      if (frequency >= maxFrequency || frequency <= minFrequency) {
        direction *= -1; // Reverse direction
      }
    }

    const positions = particleSystem.geometry.attributes.position.array as Float32Array;
    const colors = particleSystem.geometry.attributes.color.array as Float32Array;
    const minHeight = -30, maxHeight = 30;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i], y = positions[i + 1], z = positions[i + 2];
      const radius = Math.sqrt(x * x + y * y + z * z);
      const theta = Math.atan2(y, x), phi = Math.acos(z / radius);
      const newRadius = 20 + Math.sin(frequency * phi + theta) * 5;

      positions[i] = newRadius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = newRadius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = newRadius * Math.cos(phi);

      const height = Math.sqrt(positions[i] ** 2 + positions[i + 1] ** 2 + positions[i + 2] ** 2);
      const normalizedHeight = (height - minHeight) / (maxHeight - minHeight);

      const color = new THREE.Color();
      color.setHSL(normalizedHeight * 0.7, 1.0, 0.4);

      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.geometry.attributes.color.needsUpdate = true;
  };

  // Update the camera's position
  const updateCamera = () => {
    camera.position.x = camDistance * Math.sin(angleX);
    camera.position.y = camDistance * Math.sin(angleY);
    camera.position.z = camDistance * Math.cos(angleX) * Math.cos(angleY);
    camera.lookAt(0, 0, 0);
  };

  // Cleanup function to remove listeners and dispose of the renderer
  const cleanup = (handleResize: () => void) => {
    window.removeEventListener("resize", handleResize);
    document.removeEventListener("wheel", onScroll);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    if (renderer) renderer.dispose();
  };

  // Apply left-right transformation based on the current section
  const getHorizontalPosition = () => {
    const maxSections = 4; // Adjust based on the number of sections
    if (currentSection == 1) return "0%"
    const position = (currentSection % 2 === 0) ? "left" : "right";
    if (isMobile) return "0%"; // Center the canvas horizontally on mobile
    return position === "left" ? "-50%" : "50%"; // Example positions; customize as needed
  };

  return (
    <div
      className="model-container"
      style={{
        transform: `translateX(${getHorizontalPosition()})`,
      }}
    >
      <canvas ref={canvasRef} className="fixed inset-0 z-1" />
    </div>
  );
};

export default Background;
