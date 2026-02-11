import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NeutronStar = ({ position, color, radius = 1, intensity = 1 }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            // Rotate the star slowly
            meshRef.current.rotation.y += 0.005;
            // Pulse intensity slightly
            meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
            meshRef.current.material.uniforms.uIntensity.value = intensity;
        }
    });

    const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

    const fragmentShader = `
    uniform vec3 uColor;
    uniform float uTime;
    uniform float uIntensity;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    // Noise function for surface detail
    float random(vec3 scale, float seed) {
      return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void main() {
      // Fresnel effect for the glowing rim
      vec3 viewDirection = normalize(cameraPosition - vPosition); // Simplified view dir approximation
      // In view space, view dir is (0,0,1) usually, but we need world/model space.
      // Actually vNormal is in view space if using normalMatrix.
      // Let's use simple dot product with view vector (0,0,1) in view space.
      
      vec3 normal = vNormal;
      vec3 viewDir = vec3(0.0, 0.0, 1.0); 
      float fresnel = pow(1.0 - dot(normal, viewDir), 2.0);

      // Core glow
      float noise = random(vec3(12.9898, 78.233, 151.7182), 0.0);
      vec3 coreColor = uColor * (1.0 + noise * 0.2);
      
      // Combine fresnel and core
      vec3 finalColor = coreColor + uColor * fresnel * 2.0 * uIntensity;

      // Add a time-based pulse to the rim
      float pulse = sin(uTime * 2.0) * 0.1 + 0.9;
      finalColor *= pulse;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[radius, 64, 64]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uColor: { value: new THREE.Color(color) },
                    uTime: { value: 0 },
                    uIntensity: { value: intensity },
                }}
                transparent
            />
        </mesh>
    );
};

export default NeutronStar;
