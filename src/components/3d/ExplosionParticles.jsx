import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ExplosionParticles = ({ active, count = 200, color = "#ffffff" }) => {
    const meshRef = useRef();

    // Create particles with random positions and velocities
    const particles = useMemo(() => {
        const data = [];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const theta = Math.random() * Math.PI; // Full sphere distribution
            const speed = 0.2 + Math.random() * 0.5;

            data.push({
                velocity: new THREE.Vector3(
                    Math.sin(theta) * Math.cos(angle) * speed,
                    Math.sin(theta) * Math.sin(angle) * speed,
                    Math.cos(theta) * speed
                ),
                position: new THREE.Vector3(0, 0, 0),
                scale: Math.random() * 0.5 + 0.1,
                life: 1.0
            });
        }
        return data;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame(() => {
        if (!active || !meshRef.current) return;

        particles.forEach((particle, i) => {
            // Move particle
            particle.position.add(particle.velocity);

            // Update life/scale
            particle.life -= 0.01;
            const currentScale = particle.scale * Math.max(0, particle.life);

            // Update instanced mesh matrix
            dummy.position.copy(particle.position);
            dummy.scale.set(currentScale, currentScale, currentScale);
            dummy.updateMatrix();

            meshRef.current.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    if (!active) return null;

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <sphereGeometry args={[0.2, 8, 8]} />
            <meshBasicMaterial color={color} toneMapped={false} />
        </instancedMesh>
    );
};

export default ExplosionParticles;
