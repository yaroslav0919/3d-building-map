import styled from "styled-components";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function VR({ image }) {
  return (
    <StyledVR>
      <Canvas camera={{ position: [0, 0, 0.1] }}>
        <OrbitControls enablePan={false} enableDamping reverseOrbit />
        <Suspense fallback={null}>
          <Sphere image={image} />
        </Suspense>
      </Canvas>
    </StyledVR>
  );
}

const Sphere = ({ image }) => {
  const texture = useLoader(TextureLoader, image);
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

const StyledVR = styled.div`
  width: 100%;
  height: 100%;
  cursor: grab;
`;
