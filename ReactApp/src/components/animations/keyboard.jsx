import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Keyboard(props) {
  const { nodes, materials } = useGLTF('/models/kb.glb')
  const [glowIntensity, setGlowIntensity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => prev === 0 ? 1 : 0)
    }, 200)
    
    return () => clearInterval(interval)
  }, [])

  const glowMaterial = materials['Letter Glow'].clone()
  glowMaterial.emissiveIntensity = glowIntensity
  const basicMaterial = materials['Letter Glow'].clone()
  basicMaterial.emissiveIntensity = 0

  return (
    <group {...props} dispose={null}>
     
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Keyboard}
      />
    
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_2.geometry}
        material={materials.Silver}
      />
   
     
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Label_keys.geometry}
        material={glowIntensity === 0 ? basicMaterial : glowMaterial}
        position={[-2.873, 0.303, 0.742]}
        scale={0.055}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logitech_Logo.geometry}
        material={glowIntensity === 0 ? basicMaterial : glowMaterial}
        position={[2.916, 0.187, -0.918]}
        scale={0.221}
      />
     
    </group>
  )
}

useGLTF.preload('/models/kb.glb')