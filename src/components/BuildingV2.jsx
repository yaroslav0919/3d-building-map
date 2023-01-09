import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useStore } from "../store/store";
import { useSpring, animated, easings } from "@react-spring/three";
import { useLoader } from "@react-three/fiber";

const selectedMaterial = new THREE.MeshStandardMaterial({
  color: 0xd7b176,
});

const mirrorMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0,
  metalness: 0.9,
});

export default function BuildingV2(props) {
  const cameraTextureMap = useLoader(THREE.TextureLoader, "/camera.png");

  const group = useRef();
  const { nodes, materials } = useGLTF("/models/blueprint.glb");

  const {
    selected9th,
    selected8th,
    selected7th,
    selected6th,
    selected5th,
    selected4th,
    selected3rd,
    selected2nd,
    selected1st,
    selected0th,
    setSelected9th,
    setSelected8th,
    setSelected7th,
    setSelected6th,
    setSelected5th,
    setSelected4th,
    setSelected3rd,
    setSelected2nd,
    setSelected1st,
    setSelected0th,
    track,
    setVrModal,
  } = useStore();

  const {
    roofPos,
    f9Pos,
    f8Pos,
    f7Pos,
    f6Pos,
    f5Pos,
    f4Pos,
    f3Pos,
    f2Pos,
    f1Pos,
    f0Pos,
  } = useSpring({
    config: {
      duration: 1000,
      easing: easings.easeInOutCubic,
    },
    roofPos: track === 99 ? [26.49, 60.19, -52.96] : [26.49, 33.19, -52.96],
    f9Pos: track === 99 ? [27.57, 54.56, -52.81] : [27.57, 29.56, -52.81],
    f8Pos: track === 99 ? [27.04, 48.18, -55.56] : [27.04, 26.18, -55.56],
    f7Pos: track === 99 ? [27.09, 42.04, -54.28] : [27.09, 23.04, -54.28],
    f6Pos: track === 99 ? [27.18, 36.53, -54.21] : [27.18, 19.53, -54.21],
    f5Pos: track === 99 ? [27.3, 30.02, -53.99] : [27.3, 16.02, -53.99],
    f4Pos: track === 99 ? [27.28, 24.66, -53.97] : [27.28, 12.66, -53.97],
    f3Pos: track === 99 ? [27.18, 18.3, -54.04] : [27.18, 7.3, -54.04],
    f2Pos: track === 99 ? [27.16, 12.85, -54] : [27.16, 5.85, -54],
    f1Pos: track === 99 ? [27.13, 6.98, -53.65] : [27.13, 1.98, -53.65],
    f0Pos: track === 99 ? [27.23, 0.5, -54.04] : [27.23, 0.5, -54.04],
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <animated.group
        position={f9Pos}
        userData={{ name: "09_Level" }}
        visible={
          track === 3 ||
          track === 4 ||
          track === 5 ||
          track === 6 ||
          track === 7 ||
          track === 8 ||
          track === 9 ||
          track === 10 ||
          track === 11
            ? false
            : true
        }
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected9th(!selected9th);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete009.geometry}
          material={
            selected9th && track === 99
              ? selectedMaterial
              : nodes.Concrete009.material
          }
          position={[-0.05, 0.04, -0.13]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          userData={{ name: "Concrete.009" }}
        />
      </animated.group>
      <animated.group
        position={f8Pos}
        userData={{ name: "08_Level" }}
        visible={
          track === 4 ||
          track === 5 ||
          track === 6 ||
          track === 7 ||
          track === 8 ||
          track === 9 ||
          track === 10 ||
          track === 11
            ? false
            : true
        }
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected8th(!selected8th);
        }}
      >
        {track !== 99 && (
          <mesh
            position={[-2, 0.1, 8.5]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            onPointerUp={(e) => {
              e.stopPropagation();
              setVrModal(true);
            }}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "default")}
          >
            <circleBufferGeometry attach="geometry" args={[1.5, 32]} />
            <meshBasicMaterial
              attach="material"
              color={0xffffff}
              map={cameraTextureMap}
              transparent
            />
          </mesh>
        )}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete008.geometry}
          material={
            selected8th && track === 99
              ? selectedMaterial
              : nodes.Concrete008.material
          }
          position={[0.21, 0.04, 2.81]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          userData={{ name: "Concrete.008" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass.geometry}
          material={mirrorMaterial || nodes.Glass.material}
          position={[11.5, -0.09, 0.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          userData={{ name: "Glass" }}
        />
      </animated.group>
      <animated.group
        position={f7Pos}
        userData={{ name: "07_Level" }}
        visible={
          track === 5 ||
          track === 6 ||
          track === 7 ||
          track === 8 ||
          track === 9 ||
          track === 10 ||
          track === 11
            ? false
            : true
        }
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected7th(!selected7th);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete007.geometry}
          material={
            selected7th && track === 99
              ? selectedMaterial
              : nodes.Concrete007.material
          }
          position={[0.66, -1.87, 14.38]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          userData={{ name: "Concrete.007" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass007.geometry}
          material={mirrorMaterial || nodes.Glass007.material}
          position={[4.57, 0.23, 14.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.97, 0.98, 0.98]}
          userData={{ name: "Glass.007" }}
        />
      </animated.group>
      <animated.group
        position={f6Pos}
        userData={{ name: "06_Level" }}
        visible={
          track === 6 ||
          track === 7 ||
          track === 8 ||
          track === 9 ||
          track === 10 ||
          track === 11
            ? false
            : true
        }
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected6th(!selected6th);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete006.geometry}
          material={
            selected6th && track === 99
              ? selectedMaterial
              : nodes.Concrete006.material
          }
          position={[0.57, 1.64, 14.31]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          userData={{ name: "Concrete.006" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass006.geometry}
          material={mirrorMaterial || nodes.Glass006.material}
          position={[-1.6, -1.91, -10.46]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          userData={{ name: "Glass.006" }}
        />
      </animated.group>
      <animated.group
        position={f5Pos}
        userData={{ name: "05_Level" }}
        visible={
          track === 7 ||
          track === 8 ||
          track === 9 ||
          track === 10 ||
          track === 11
            ? false
            : true
        }
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected5th(!selected5th);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete005.geometry}
          material={
            selected5th && track === 99
              ? selectedMaterial
              : nodes.Concrete005.material
          }
          position={[5.99, -1.62, 15.2]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "Concrete.005" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass005.geometry}
          material={mirrorMaterial || nodes.Glass005.material}
          position={[-1.73, -1.84, -10.68]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          userData={{ name: "Glass.005" }}
        />
      </animated.group>
      <animated.group
        position={f4Pos}
        userData={{ name: "04_Level" }}
        visible={
          track === 8 || track === 9 || track === 10 || track === 11
            ? false
            : true
        }
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected4th(!selected4th);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass004.geometry}
          material={mirrorMaterial || nodes.Glass004.material}
          position={[-1.7, -1.76, -10.7]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          userData={{ name: "Glass.004" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete004.geometry}
          material={
            selected4th && track === 99
              ? selectedMaterial
              : nodes.Concrete004.material
          }
          position={[-13.6, -11.65, 15.57]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "Concrete.004" }}
        />
      </animated.group>
      <animated.group
        position={f3Pos}
        userData={{ name: "03_Level" }}
        visible={track === 9 || track === 10 || track === 11 ? false : true}
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected3rd(!selected3rd);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass003.geometry}
          material={mirrorMaterial || nodes.Glass003.material}
          position={[-1.6, 0.22, -10.63]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          userData={{ name: "Glass.003" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete.geometry}
          material={
            selected3rd && track === 99
              ? selectedMaterial
              : nodes.Concrete.material
          }
          position={[-13.5, -6.29, 15.64]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "Concrete" }}
        />
      </animated.group>
      <animated.group
        position={f2Pos}
        userData={{ name: "02_Level" }}
        visible={track === 10 || track === 11 ? false : true}
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected2nd(!selected2nd);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete001.geometry}
          material={
            selected2nd && track === 99
              ? selectedMaterial
              : nodes.Concrete001.material
          }
          position={[-13.48, -4.83, 15.6]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "Concrete.001" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass001.geometry}
          material={mirrorMaterial || nodes.Glass001.material}
          position={[-1.58, -1.82, -10.67]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          userData={{ name: "Glass.001" }}
        />
      </animated.group>
      <animated.group
        position={f1Pos}
        userData={{ name: "01_Level" }}
        visible={track === 11 ? false : true}
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected1st(!selected1st);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass002.geometry}
          material={mirrorMaterial || nodes.Glass002.material}
          position={[3.96, -0.56, 15.16]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "Glass.002" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete002.geometry}
          material={
            selected1st && track === 99
              ? selectedMaterial
              : nodes.Concrete002.material
          }
          position={[-13.45, -0.96, 15.25]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "Concrete.002" }}
        />
      </animated.group>
      <animated.group
        position={f0Pos}
        userData={{ name: "00_Ground" }}
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected0th(!selected0th);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete003.geometry}
          material={
            selected0th && track === 99
              ? selectedMaterial
              : nodes.Concrete003.material
          }
          position={[3.02, -3, 15.57]}
          rotation={[0, 0, -Math.PI]}
          scale={[1, -1, 1]}
          userData={{ name: "Concrete.003" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass008.geometry}
          material={mirrorMaterial || nodes.Glass008.material}
          position={[-5.03, -2.69, 15.55]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "Glass.008" }}
        />
      </animated.group>
      <animated.group
        position={roofPos}
        userData={{ name: "10_Roof" }}
        visible={
          track === 2 ||
          track === 3 ||
          track === 4 ||
          track === 5 ||
          track === 6 ||
          track === 7 ||
          track === 8 ||
          track === 9 ||
          track === 10 ||
          track === 11
            ? false
            : true
        }
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Concrete010.geometry}
          material={nodes.Concrete010.material}
          position={[0, -1.07, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          userData={{ name: "Concrete.010" }}
        />
      </animated.group>
    </group>
  );
}

useGLTF.preload("/models/blueprint.glb");
