import {
  Stats,
  useProgress,
  Billboard,
  Html,
  OrbitControls,
  Loader,
  Environment,
  softShadows,
  Sky,
  MapControls,
  TransformControls,
} from "@react-three/drei";
import * as THREE from "three";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import styled from "styled-components";
import Building from "../components/Building";
import Map from "../components/Map";
import gsap from "gsap";
import { useStore } from "../store/store";
import { useDrag } from "@use-gesture/react";

import { FcLibrary } from "react-icons/fc";
import { FaBusAlt } from "react-icons/fa";
import { MdTrain } from "react-icons/md";
import BuildingV3 from "../components/BuildingV3";
import Controls from "../components/Controls";
import { useLocation } from "react-router-dom";
import Markers from "../components/Markers";
import { orbitControlProps } from "../constants";

softShadows();

export default function Main() {
  const { pathname } = useLocation();
  const canvasRef = useRef();
  const { track } = useStore();
  const lightRef = useRef();

  return (
    <StyledMain>
      <Canvas
        className="render-canvas"
        ref={canvasRef}
        camera={{
          fov: 60,
          position: [0, 0, 60],
          near: 1.0,
          far: 10000,
        }}
        shadows
        gl={{
          antialias: true,
        }}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
          // gl.shadowMap.type = THREE.VSMShadowMap;

          const helper = new THREE.CameraHelper(lightRef.current.shadow.camera);
          scene.add(helper);

          const params = {
            lightPositionX: -20,
            lightPositionY: 20,
            lightPositionZ: 20,
          };
          const gui = new GUI({ width: 200 });
          gui.add(params, "lightPositionX", -50, 50).onChange(function (value) {
            lightRef.current.position.x = value;
          });

          gui.add(params, "lightPositionY", -50, 50).onChange(function (value) {
            lightRef.current.position.y = value;
          });

          gui.add(params, "lightPositionZ", -50, 50).onChange(function (value) {
            lightRef.current.position.z = value;
          });
        }}
      >
        <color attach="background" args={["#aab5bf"]} />
        {/* <Sky
          distance={450000}
          sunPosition={[5, 1, 8]}
          inclination={0}
          azimuth={0.25}
        /> */}

        <hemisphereLight
          intensity={1}
          skyColor={0xfdf8e7}
          groundColor={0x080820}
        />

        <spotLight
          intensity={2}
          color={0xffeedf}
          position={[-20, 20, 20]}
          castShadow
          shadow-mapSize-height={1024 * 8}
          shadow-mapSize-width={1024 * 8}
          shadow-bias={-0.0001}
          shadow-radius={5}
          shadow-blurSamples={50}
          ref={lightRef}
        />

        {/* <Stats showPanel={0} className="stats" /> */}

        <Suspense fallback={null}>
          {/* <axesHelper scale={[100, 100, 100]} /> */}

          <group position={[-27, track === 99 ? -28 : -14, 52]}>
            <Environment files="/images/scene-back.hdr" background />
            <BuildingV3 position={[0, 0, 0]} rotation={[0, 0, 0]} />
            {track === 100 && <Map position={[0, 0, 0]} />}
            {track === 100 && (
              <mesh position={[0, 5.0, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
                <planeGeometry args={[2000, 2000, 1, 1]} />
                <meshNormalMaterial visible={false} />
                <Markers />
              </mesh>
            )}
          </group>
        </Suspense>
        {track === 100 && (
          <>
            <Marker
              pos={[-1.5, 0.8, -1.1]}
              text={"Public Library"}
              modalNumber={1}
            />
            <Marker pos={[-0, 0.4, -1.1]} text={"Bus Stop"} modalNumber={2} />
            <Marker pos={[0.5, 1, -3]} text={"Train Station"} modalNumber={3} />
          </>
        )}
        {track === 100 ? (
          <MapControls maxPolarAngle={orbitControlProps.maxPolarAngle} />
        ) : (
          // <OrbitControls />
          <Controls
            maxPolarAngle={orbitControlProps.maxPolarAngle}
            minPolarAngle={orbitControlProps.minPolarAngle}
            maxDistance={orbitControlProps.maxDistance}
            minDistance={orbitControlProps.minDistance}
            enablePan={false}
            // target={orbitControlProps.target}
            // enableKeys
          />
        )}
        {/* <DebugCam /> */}
      </Canvas>
    </StyledMain>
  );
}

const StyledMain = styled.section`
  width: 100%;
  background-color: #1b1b1b;
  color: #fff;
  height: 100vh;
  transition: all 0.3s ease-in-out;
`;

const DebugCam = () => {
  const camRef = useRef();
  const { camera, gl } = useThree();

  let obj = useRef({
    x: 0.033,
    y: 0.839,
    z: -1.195,
  });
  let rot = useRef({
    x: -2.529,
    y: 0.022,
    z: 3.125,
  });

  useFrame(() => {
    obj.current.x = camRef.current?.object?.position.x;
    obj.current.y = camRef.current?.object?.position.y;
    obj.current.z = camRef.current?.object?.position.z;
    rot.current.x = camRef.current?.object?.rotation._x;
    rot.current.y = camRef.current?.object?.rotation._y;
    rot.current.z = camRef.current?.object?.rotation._z;

    camRef.current.update();
    console.log("pos", obj.current);
    console.log("rot", rot.current);
  });

  return <OrbitControls ref={camRef} args={[camera, gl.domElement]} />;
};

const Marker = ({ pos, text, modalNumber }) => {
  const { modal, setModal, setShowUI } = useStore();

  return (
    <Billboard follow={true} position={pos}>
      <Html
        occlude
        center
        zIndexRange={[1, 2]}
        style={{
          fontWeight: "900",
          fontSize: "1.2rem",
          backgroundColor: "transparent",
          color: "#606060",
          padding: "0.4rem 1rem 0.6rem",
          cursor: "pointer",
          whiteSpace: "nowrap",
          clipPath:
            "polygon(100% 0, 100% 90%, 55% 90%, 50% 100%, 45% 90%, 0 90%, 0 0)",
          opacity: 1,
          pointerEvents: modal ? "none" : "all",
        }}
      >
        <p
          onClick={() => {
            setShowUI(true);
            setModal(modalNumber);
          }}
        >
          {text}
        </p>
      </Html>
    </Billboard>
  );
};
