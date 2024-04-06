import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
function Control() {
  const orbitRef = useRef();
  useFrame((state, delta) => {
    orbitRef.current.update();
  });
  return (
    <OrbitControls
      ref={orbitRef}
      enableDamping
      maxPolarAngle={Math.PI / 2}
      maxDistance={4}
      minDistance={4}
      autoRotate={false}
      // autoRotateSpeed={3}
    />
  );
}

export default Control;
