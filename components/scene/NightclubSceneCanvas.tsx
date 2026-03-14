"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function LightField() {
  const group = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    return Array.from({ length: 90 }, (_, index) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.25) * 8,
        -Math.random() * 12
      ] as [number, number, number],
      scale: 0.03 + Math.random() * 0.08,
      color: ["#5be7ff", "#ff4db8", "#8a6bff"][index % 3]
    }));
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.z = Math.sin(elapsed * 0.18) * 0.08;
      group.current.position.y = Math.sin(elapsed * 0.24) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial color={particle.color} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function LaserRig() {
  const leftBeam = useRef<THREE.Mesh>(null);
  const rightBeam = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (leftBeam.current) {
      leftBeam.current.rotation.z = -0.45 + Math.sin(elapsed * 0.8) * 0.12;
      leftBeam.current.position.x = -2.8 + Math.sin(elapsed * 0.5) * 0.4;
    }

    if (rightBeam.current) {
      rightBeam.current.rotation.z = 0.45 + Math.cos(elapsed * 0.74) * 0.12;
      rightBeam.current.position.x = 2.8 + Math.cos(elapsed * 0.45) * 0.4;
    }
  });

  return (
    <group position={[0, 0.6, -2]}>
      <mesh ref={leftBeam} position={[-2.8, 0.8, 0]}>
        <coneGeometry args={[0.8, 8, 24, 1, true]} />
        <meshBasicMaterial color="#5be7ff" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={rightBeam} position={[2.8, 0.8, 0]}>
        <coneGeometry args={[0.8, 8, 24, 1, true]} />
        <meshBasicMaterial color="#ff4db8" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export function NightclubSceneCanvas() {
  return (
    <div className="nightclub-canvas" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.8], fov: 50 }}>
        <color attach="background" args={["#04040a"]} />
        <fog attach="fog" args={["#04040a", 4, 12]} />
        <ambientLight intensity={0.25} />
        <pointLight position={[-2, 1.5, 2]} color="#5be7ff" intensity={14} distance={10} />
        <pointLight position={[2.2, 1.8, 2]} color="#ff4db8" intensity={12} distance={10} />
        <LightField />
        <LaserRig />
      </Canvas>
    </div>
  );
}
