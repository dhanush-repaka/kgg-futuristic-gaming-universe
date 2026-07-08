"use client";

import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const EMBER = "#ff5a1f";
const ELECTRIC = "#3da9fc";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function Rings({ reduced }: { reduced: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  useFrame((_, delta) => {
    const d = reduced ? 0 : delta;
    if (outerRef.current) {
      outerRef.current.rotation.x += d * 0.12;
      outerRef.current.rotation.y += d * 0.18;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= d * 0.2;
      innerRef.current.rotation.z += d * 0.14;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += d * 0.3;
    }
    if (groupRef.current) {
      const targetX = pointer.current.y * 0.25;
      const targetY = pointer.current.x * 0.3;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.03;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={outerRef}>
        <torusGeometry args={[2.1, 0.02, 16, 100]} />
        <meshStandardMaterial color={EMBER} emissive={EMBER} emissiveIntensity={1.4} roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh ref={innerRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.55, 0.015, 16, 100]} />
        <meshStandardMaterial color={ELECTRIC} emissive={ELECTRIC} emissiveIntensity={1.6} roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color="#0a0e14"
          emissive="#1b2333"
          wireframe
          roughness={0.5}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  const reduced = useReducedMotion();
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[4, 2, 4]} color={EMBER} intensity={22} distance={12} />
      <pointLight position={[-4, -1, 3]} color={ELECTRIC} intensity={20} distance={12} />
      <Rings reduced={reduced} />
    </>
  );
}

export default function HUDReticle3D({ className = "" }: { className?: string }) {
  const dpr = useMemo<[number, number]>(() => [1, 1.5], []);

  return (
    <div className={className} aria-hidden="true">
      <Canvas
        dpr={dpr}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
