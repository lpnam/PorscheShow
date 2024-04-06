import {
  PerspectiveCamera,
  useGLTF,
  PerformanceMonitor,
  Environment,
  Center,
  Lightformer,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import Control from "./components/Control.jsx";
import Model from "./components/Porsche911.jsx";
import Lightformers from "./components/Lightformers.jsx";

useGLTF.preload("/porsche911.glb");

function App() {
  const [degraded, degrade] = useState(false);
  const sizes = {
    height: window.innerHeight,
    width: window.innerWidth,
  };
  const { nodes, materials } = useGLTF("/porsche911.glb");
  console.log(nodes);
  console.log(materials);

  return (
    <>
      <Canvas
        className="web3d"
        camera={{ position: [3.5, 2, 3.5] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <PerspectiveCamera
          fov={45}
          near={0.1}
          far={1000}
          aspect={sizes.width / sizes.height}
          lookAt={[0, 0, 0]}
        />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={1000}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.5} />
        <Control />
        <Center>
          <Model position={[0, 0, 0]} />
        </Center>
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <Environment
          frames={degraded ? 1 : Infinity}
          resolution={256}
          background
          blur={1}
        >
          <Lightformers />
        </Environment>
      </Canvas>
    </>
  );
}
export default App;
