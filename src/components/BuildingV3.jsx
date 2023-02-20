/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useStore } from "../store/store";
import { useSpring, animated, easings } from "@react-spring/three";
import * as THREE from "three";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import { ang2Rad, rad2Ang } from "../helper/math";

export default function Model(props) {
  const { nodes, materials, scene } = useGLTF("./models/OPL.glb");

  // const gap = 1.8;

  const selectedMaterial = new THREE.MeshStandardMaterial({
    color: 0x237597,
  });

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
  const selectedArray = [
    selected0th,
    selected1st,
    selected2nd,
    selected3rd,
    selected4th,
    selected5th,
    selected6th,
    selected7th,
    selected8th,
    selected9th,
  ];

  const { camera } = useThree();

  useEffect(() => {
    selectedArray.forEach((floor, index) => {
      scene.traverse((mesh) => {
        if (mesh.name === `0${index}_RBrick`) {
          mesh.material = floor ? selectedMaterial : materials.RBrick;
        }
      });
    });
  }, [selectedArray]);

  useEffect(() => {
    const tempCamPos = camera.position;

    visibleFloor(track);
    const pos = {
      x: 100,
      y: 100,
      z: 100,
    };
    if (track === 99) {
      pos.x = 0;
      pos.y = 0;
      pos.z = 60;
    } else if (track === 100) {
      pos.x = 60;
      pos.y = 60;
      pos.z = 60;
    } else if (track > 0) {
      pos.x = 3;
      pos.y = 36 - track * 3;
      pos.z = 1;
    } else {
      pos.x = 0;
      pos.y = 0;
      pos.z = 35;
    }

    gsap.to(camera.position, {
      ...pos,
      delay: 1,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.lookAt(0, 0, 0);
      },
    });

    // gsap.to(camera, { fov: 100, duration: 1 });
  }, [track]);

  useEffect(() => {
    if (scene) {
      scene.traverse((n) => {
        if (n.isMesh) {
          n.castShadow = true;
          n.receiveShadow = true;
          if (n.material.map) n.material.map.anisotropy = 16;
        }
      });
    }
  }, [scene]);

  const visibleFloor = (track) => {
    console.log(track);

    if (track >= 2 && track <= 11) {
      scene.children.forEach((group) => {
        if (group.name[0] === "-") return;
        group.visible = parseInt(group.name[1]) < 11 - track ? true : false;
      });
    } else {
      scene.children.forEach((group) => {
        if (group.isObject3D && group.visible === false) group.visible = true;
      });
      return;
    }
  };

  return (
    <primitive object={scene} position={new THREE.Vector3(27.23, 0, -54.04)} />
  );
}

useGLTF.preload("./models/Export_OP1L-transformed.glb");
