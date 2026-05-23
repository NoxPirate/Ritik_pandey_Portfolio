"use client";

import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";
import { MotionValue, useSpring } from "framer-motion";

// 1. Define Custom Shader Material
const SparkleSphereMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0.2, 0.5, 1.0), // Main Blue
    uMouse: new THREE.Vector3(0, 0, 0),
    uResolution: new THREE.Vector2(1, 1),
    uHover: 0, // 0 = normal, 1 = inside-out
    uScroll: 0, // 0 to 1 based on scroll
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform float uHover;
    uniform float uScroll;
    uniform vec3 uMouse;
    
    attribute float aRandom;
    attribute float aSize;
    
    varying vec3 vPosition;
    varying float vRandom;

    void main() {
      vPosition = position;
      vRandom = aRandom;
      
      // Original Sphere Position
      vec3 pos = position;
      
      // --- MORPHING LOGIC ---
      // Target: Torus / Galaxy Ring
      // We map the sphere points to a ring.
      // Sphere: x,y,z
      // Ring: Flatten y, expand xz
      
      float angle = atan(pos.x, pos.z);
      float radius = length(pos.xz);
      
      // Torus shape: (R + r*cos(theta)) ...
      // Simple Galaxy approach: Flatten Y, expand Radius
      
      vec3 ringPos = vec3(0.0);
      ringPos.x = (radius + 2.0) * sin(angle + uTime * 0.05); // Twist
      ringPos.z = (radius + 2.0) * cos(angle + uTime * 0.05);
      ringPos.y = pos.y * 0.2; // Flatten height
      
      // Interpolate based on Scroll (uScroll 0 -> 1)
      // Smooth step for nicer transition
      float morph = smoothstep(0.0, 0.8, uScroll); 
      
      pos = mix(pos, ringPos, morph);
      
      
      // --- ROTATION ---
      // Slow rotation (slower uTime)
      float t = uTime * 0.05; // Much slower
      float c = cos(t);
      float s = sin(t);
      mat2 rotate = mat2(c, -s, s, c);
      pos.xz = rotate * pos.xz;
      
      
      // --- INTERACTION ---
      // Calculate distance to mouse (projected roughly)
      float dist = distance(pos, uMouse);
      
      // Influence radius
      float triggerRadius = 4.0; 
      float strength = max(0.0, triggerRadius - dist);
      strength = pow(strength, 3.0);
      
      // Inside-Out Effect
      vec3 direction = normalize(pos - uMouse);
      float displacement = strength * (0.2 + uHover * 1.0);
      
      // Add chaos/noise on hover
      float noise = sin(pos.x * 5.0 + uTime) * cos(pos.y * 5.0 + uTime) * displacement;
      
      pos += direction * displacement;
      pos += vec3(noise) * uHover; 

      vec4 viewPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * viewPosition;
      
      // Size attenuation
      // Pulse is slower
      float pulse = 1.0 + sin(uTime * 1.5 + aRandom * 10.0) * 0.4; 
      gl_PointSize = (40.0 * aSize * pulse) * (1.0 / -viewPosition.z);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColor;
    varying float vRandom;
    
    void main() {
      // Circular particle
      vec2 coord = gl_PointCoord - vec2(0.5);
      float r = length(coord);
      if (r > 0.5) discard;
      
      // Soft Glow
      float glow = 1.0 - (r * 2.0);
      glow = pow(glow, 2.0);
      
      vec3 finalColor = uColor + (vec3(1.0) - uColor) * glow; 
      
      gl_FragColor = vec4(finalColor, glow * 0.8); 
    }
  `
);

extend({ SparkleSphereMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      sparkleSphereMaterial: any;
    }
  }
}

function LivingSphere({ scrollYProgress }: { scrollYProgress?: MotionValue<number> }) {
  const mesh = useRef<THREE.Points>(null);
  const material = useRef<any>(null);
  const { viewport, mouse } = useThree();
  const [hovered, setHover] = useState(false);

  // Reduced particle count for better performance (12k)
  const particleCount = 12000;
  
  const [positions, randomness, sizes] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const rnd = new Float32Array(particleCount);
    const sz = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        const r = 2.5 * Math.cbrt(Math.random()); 
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = z;
        
        rnd[i] = Math.random();
        sz[i] = Math.random() * 0.5 + 0.5; 
    }
    return [pos, rnd, sz];
  }, []);
  
  // Listen to scroll changes safely
  const scrollVal = useRef(0);
  useEffect(() => {
    if (scrollYProgress) {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            scrollVal.current = latest;
        });
        return () => unsubscribe();
    }
  }, [scrollYProgress]);

  useFrame((state) => {
    if (material.current) {
        material.current.uTime = state.clock.elapsedTime;
        material.current.uScroll = scrollVal.current; // Pass scroll to shader
        
        // Mouse Interaction
        const x = (state.mouse.x * viewport.width) / 2;
        const y = (state.mouse.y * viewport.height) / 2;
        
        material.current.uMouse.x = THREE.MathUtils.lerp(material.current.uMouse.x, x, 0.1);
        material.current.uMouse.y = THREE.MathUtils.lerp(material.current.uMouse.y, y, 0.1);
        
        material.current.uHover = THREE.MathUtils.lerp(material.current.uHover, hovered ? 1 : 0, 0.05);
    }
    
    if (mesh.current) {
        // Very slow base rotation
        mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points 
        ref={mesh} 
        onPointerOver={() => setHover(true)} 
        onPointerOut={() => setHover(false)}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          args={[randomness, 1]}
        />
        <bufferAttribute
          attach="attributes-aSize"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      {/* @ts-ignore */}
      <sparkleSphereMaterial
        ref={material}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uColor={new THREE.Color("#60a5fa")}
      />
    </points>
  );
}

export default function Hero3D({ scrollYProgress }: { scrollYProgress?: any }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-0 h-full w-full bg-[#030303] overflow-hidden">
        {/* Animated premium glowing mesh for mobile */}
        <div 
          className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-blue-600/10 to-transparent blur-[120px] animate-pulse pointer-events-none" 
          style={{ animationDuration: "6s" }}
        />
        <div 
          className="absolute -bottom-[10%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-purple-600/10 to-transparent blur-[120px] animate-pulse pointer-events-none" 
          style={{ animationDuration: "9s" }}
        />
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} gl={{ antialias: false, alpha: true }}>
        <fog attach="fog" args={['#000000', 5, 20]} />
        <LivingSphere scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
