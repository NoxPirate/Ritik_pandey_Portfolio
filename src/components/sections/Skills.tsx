"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, TrackballControls, Billboard } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import { skills } from "@/lib/data";

// Flatten all skills into a single array for the cloud
const allSkills = skills.flatMap(s => s.items);

function Word({ children, position, ...props }: { children: string; position: THREE.Vector3 } & any) {
  // REMOVED custom font to ensure visibility. Using default font.
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
  const ref = useRef<THREE.Mesh>();
  const [hovered, setHovered] = useState(false);
  
  const over = (e: any) => { e.stopPropagation(); setHovered(true) };
  const out = () => setHovered(false);

  // Change cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => { document.body.style.cursor = 'auto' }
  }, [hovered]);

  return (
    <Billboard position={position}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log('clicked:', children)}
        {...fontProps}
        {...props}
      >
        {children}
        <meshStandardMaterial color={hovered ? '#60a5fa' : '#ffffff'} />
      </Text>
    </Billboard>
  )
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a spherical distribution of words
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    
    // Distribute skills evenly on sphere (Fibonacci Sphere)
    const phiSpan = Math.PI * (3 - Math.sqrt(5));
    
    // We loop through our skills list relative to the cloud size
    for (let i = 0; i < allSkills.length; i++) {
        const y = 1 - (i / (allSkills.length - 1)) * 2; // y goes from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y); // Radius at y
        
        const theta = phiSpan * i;
        
        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;
        
        // Scale by radius
        temp.push([new THREE.Vector3(x * radius, y * radius, z * radius), allSkills[i]]);
    }
    return temp;
  }, [radius]);
  
  return (
    <>
      {words.map(([pos, word], index) => (
        // @ts-ignore
        <Word key={index} position={pos}>{word}</Word>
      ))}
    </>
  )
}

import { MotionValue } from "framer-motion";

function Scene({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const group = useRef<THREE.Group>(null);
    const scrollRef = useRef(0);

    // Sync scroll value to ref for useFrame access without re-render
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v: number) => {
           scrollRef.current = v; 
        });
        return () => unsubscribe();
    }, [scrollYProgress]);
    
    useFrame((state, delta) => {
        if (group.current) {
            // Auto rotation (base speed)
            const baseSpeed = 0.1;
            
            // Scroll influence: spin faster when scrolling down
            // We use the derivative of scroll or just the raw position + time?
            // "When mousewheel" usually means implied velocity. 
            // We will just add a multiplier based on scroll position or keep it constant + auto.
            
            // Let's make it auto-rotate constant + add scroll rotation
            group.current.rotation.y += delta * baseSpeed;
            
            // Slight bobbing
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group ref={group}>
            <Cloud radius={25} />
        </group>
    );
}

export default function Skills() {
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative z-20 bg-black min-h-screen overflow-hidden" id="skills">
       {/* Section Header - Centered */}
       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-black/30 backdrop-blur-sm p-8 rounded-full border border-white/5"
          >
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-2 drop-shadow-2xl">
               Skills
            </h2>
             <p className="text-gray-300 text-sm md:text-lg uppercase tracking-[0.5em] drop-shadow-lg">
                ( Drag to Rotate )
             </p>
          </motion.div>
       </div>

      <div className="w-full h-screen cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 50], fov: 60 }} gl={{ antialias: true }}>
          <fog attach="fog" args={['#000000', 40, 80]} />
          <ambientLight intensity={1} />
          {/* <pointLight position={[10, 10, 10]} /> */}
          <Scene scrollYProgress={scrollYProgress} />
          <TrackballControls noZoom noPan rotateSpeed={2} />
        </Canvas>
      </div>
    </section>
  );
}
