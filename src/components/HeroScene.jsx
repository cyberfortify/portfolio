import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

const HeroScene = () => (
  <Canvas className="hero-canvas">
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <mesh rotation={[0, 0, Math.PI / 4]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="hotpink" wireframe />
    </mesh>
    <OrbitControls enableZoom={false} autoRotate />
    <Stars radius={100} depth={50} count={5000} factor={4} />
  </Canvas>
)