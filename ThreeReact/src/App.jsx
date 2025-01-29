import {useRef} from 'react'
import React from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sparkles } from '@react-three/drei'
const RotatingCube = () => {
  const meshRef = useRef()
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.z += 0.01
    }
  })        
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={0x9CDBA6} />
      <Sparkles count={10} scale={5} size={1} speed={0.5} color="#000000" />
      </mesh>
  )
}
const App = () => {
  return (
    <Canvas className=" flex justify-center items-center">
      <OrbitControls enableZoom={true} enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
      <color name="red" attach="background" args={['#F1F0F0']} />
      <RotatingCube/>
    </Canvas>
  )
}
export default App