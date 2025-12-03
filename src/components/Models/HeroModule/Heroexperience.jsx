import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { OrbitControls } from "@react-three/drei";
import { DeveloperRoom } from "./Optimized-room";
import HeroLights from './HeroLights';

const Heroexperience = () => {

  const isMobile = useMediaQuery({query: '(max-width: 768)'})
  const isTablet = useMediaQuery({query: '(max-width: 1024)'})

  return (
   <Canvas camera={{position: [0, 0, 15], fov: 45}}>

      <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI /5}
        maxPolarAngle={Math.PI /2}
      />

      <HeroLights />
      
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <DeveloperRoom />
      </group>
    </Canvas>
  )
};  

export default Heroexperience;
