import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Particles({ count = 600 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
  
      const seed = Math.sin(i * 12.9898) * 43758.5453
      const random1 = seed - Math.floor(seed)
      const random2 = Math.sin(i * 78.233) * 43758.5453
      const r2 = random2 - Math.floor(random2)
      const random3 = Math.sin(i * 45.164) * 43758.5453
      const r3 = random3 - Math.floor(random3)
      
      arr[i3] = (random1 - 0.5) * 30
      arr[i3 + 1] = (r2 - 0.5) * 10
      arr[i3 + 2] = (r3 - 0.5) * 30
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#9be7ff" size={0.06} sizeAttenuation />
    </points>
  )
}

export default function Background3D() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 12], fov: 50 }}
      style={{ position: 'fixed', inset: 0, zIndex: -1 }}
    >
      <ambientLight intensity={0.6} />
      <Particles count={window.innerWidth < 600 ? 200 : 700} />
    </Canvas>
  )
}