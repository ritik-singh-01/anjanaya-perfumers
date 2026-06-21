"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Environment,
  Lightformer,
  ContactShadows,
  PerformanceMonitor,
} from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

/**
 * Procedural glass attar bottle — no external GLB/HDR needed.
 * Performance-first: cheap glass (reflections + transparency, NOT a
 * per-frame refraction buffer), baked env + contact shadow, and the
 * whole canvas pauses when scrolled out of view.
 */
function Bottle() {
  // Bottle glass profile: [radius, height] points revolved around Y.
  const glassPoints = useMemo(
    () =>
      [
        [0.0, 0.0],
        [0.6, 0.0],
        [0.7, 0.08],
        [0.72, 0.5],
        [0.72, 1.0],
        [0.66, 1.26],
        [0.42, 1.5],
        [0.25, 1.62],
        [0.22, 1.72],
        [0.22, 1.95],
        [0.26, 1.99],
        [0.26, 2.06],
        [0.2, 2.06],
      ].map(([x, y]) => new THREE.Vector2(x, y)),
    []
  );

  // Amber attar fill — closed profile (starts and ends at x=0) for a solid liquid.
  const liquidPoints = useMemo(
    () =>
      [
        [0.0, 0.02],
        [0.56, 0.04],
        [0.64, 0.1],
        [0.66, 0.5],
        [0.66, 0.92],
        [0.0, 0.95],
      ].map(([x, y]) => new THREE.Vector2(x, y)),
    []
  );

  return (
    <group position={[0, -0.98, 0]}>
      {/* Amber liquid — opaque, renders behind the transparent glass */}
      <mesh>
        <latheGeometry args={[liquidPoints, 48]} />
        <meshStandardMaterial
          color="#9a4a12"
          roughness={0.35}
          metalness={0.1}
          emissive="#3a1605"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Glass body — cheap glass: clearcoat + reflections + transparency, no refraction pass */}
      <mesh>
        <latheGeometry args={[glassPoints, 48]} />
        <meshPhysicalMaterial
          color="#fff3ea"
          transparent
          opacity={0.45}
          roughness={0.08}
          metalness={0}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.12}
          envMapIntensity={1.5}
          depthWrite={false}
        />
      </mesh>

      {/* Gold collar */}
      <mesh position={[0, 2.04, 0]}>
        <cylinderGeometry args={[0.27, 0.27, 0.13, 32]} />
        <meshStandardMaterial color="#c8a44d" metalness={1} roughness={0.3} envMapIntensity={1.2} />
      </mesh>

      {/* Gold dauber stopper */}
      <mesh position={[0, 2.24, 0]}>
        <sphereGeometry args={[0.21, 32, 32]} />
        <meshStandardMaterial color="#d8b75e" metalness={1} roughness={0.25} envMapIntensity={1.4} />
      </mesh>
    </group>
  );
}

function Scene({ autoRotate }: { autoRotate: boolean }) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 4]} intensity={1.0} />
      <spotLight position={[-5, 5, 2]} intensity={12} angle={0.4} penumbra={1} color="#ffd9b8" />

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Bottle />
      </Float>

      {/* Baked once (frames={1}) — soft grounding shadow with no per-frame cost */}
      <ContactShadows
        position={[0, -1.45, 0]}
        opacity={0.3}
        scale={9}
        blur={2.4}
        far={3}
        frames={1}
        color="#3d1a0a"
      />

      {/* Studio reflections from light shapes — baked once, no HDR download */}
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={2} position={[0, 3, 2]} scale={[7, 3, 1]} color="#fff3e8" />
        <Lightformer
          form="rect"
          intensity={1.3}
          position={[-3.5, 1, 1]}
          scale={[3, 6, 1]}
          rotation={[0, Math.PI / 4, 0]}
          color="#ffd9b8"
        />
        <Lightformer form="circle" intensity={1.5} position={[3.5, 2, -2]} scale={4} color="#ffffff" />
      </Environment>

      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        autoRotate={autoRotate}
        autoRotateSpeed={0.7}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.85}
      />
    </>
  );
}

export default function AttarBottle() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [dpr, setDpr] = useState(1.25);

  // Pause all rendering while the hero is scrolled out of view.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-rotate keeps it lively, but never when the user prefers reduced motion.
  const autoRotate = !reduce;

  return (
    <div ref={wrapRef} className="h-full w-full">
      <Canvas
        dpr={dpr}
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0.3, 6], fov: 32 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        className="!touch-none"
      >
        {/* Drop resolution first if the GPU can't keep up */}
        <PerformanceMonitor
          onDecline={() => setDpr(1)}
          onIncline={() => setDpr(1.25)}
        />
        <Suspense fallback={null}>
          <Scene autoRotate={autoRotate} />
        </Suspense>
      </Canvas>
    </div>
  );
}
