'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

function QuietSolid() {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.06
    ref.current.rotation.y += delta * 0.09
  })

  return (
    <mesh ref={ref} scale={1.35}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#3a4f41"
        wireframe
        transparent
        opacity={0.28}
      />
    </mesh>
  )
}

export function HeroAccent3D() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(42vw,28rem)] motion-reduce:hidden lg:block"
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[4, 2.5, 3]} intensity={0.55} />
        <QuietSolid />
      </Canvas>
    </div>
  )
}
