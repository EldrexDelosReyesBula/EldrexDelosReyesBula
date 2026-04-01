import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const points = useRef<THREE.Points>(null!);
  const { mouse, viewport } = useThree();
  const [isBursting, setIsBursting] = useState(false);
  const burstTime = useRef(0);

  const [positions, velocities, originalPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;
      
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return [pos, vel, orig];
  }, [count]);

  const handlePointerDown = () => {
    setIsBursting(true);
    burstTime.current = 0;
    setTimeout(() => setIsBursting(false), 1500);
  };

  useEffect(() => {
    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const array = points.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Basic drift and return to original position
      array[i3] += velocities[i3] + (originalPositions[i3] - array[i3]) * 0.01;
      array[i3 + 1] += velocities[i3 + 1] + (originalPositions[i3 + 1] - array[i3 + 1]) * 0.01;
      array[i3 + 2] += velocities[i3 + 2] + (originalPositions[i3 + 2] - array[i3 + 2]) * 0.01;

      // Mouse interaction (gentle repulsion)
      const mouseX = (mouse.x * viewport.width) / 2;
      const mouseY = (mouse.y * viewport.height) / 2;
      
      const dx = array[i3] - mouseX;
      const dy = array[i3 + 1] - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 3) {
        const force = (3 - dist) * 0.02;
        array[i3] += dx * force;
        array[i3 + 1] += dy * force;
      }

      // Burst effect on click
      if (isBursting) {
        const burstForce = Math.exp(-burstTime.current * 3) * 0.5;
        const bdx = array[i3] - mouseX;
        const bdy = array[i3 + 1] - mouseY;
        const bdist = Math.sqrt(bdx * bdx + bdy * bdy);
        
        if (bdist < 5) {
          array[i3] += bdx * burstForce;
          array[i3 + 1] += bdy * burstForce;
        }
      }
    }

    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y = Math.sin(time * 0.1) * 0.1;
    points.current.rotation.x = Math.cos(time * 0.1) * 0.1;
    burstTime.current += 0.016;
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#000000"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.15}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
        <Particles />
      </Canvas>
    </div>
  );
}
