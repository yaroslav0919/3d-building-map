import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, easings } from "@react-spring/three";
import { useStore } from "../store/store";

const selectedMaterial = new THREE.MeshStandardMaterial({
  color: 0x9c8961,
});

export default function Building(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/building.gltf");

  const selected6th = useStore((state) => state.selected6th);
  const selected5th = useStore((state) => state.selected5th);
  const selected4th = useStore((state) => state.selected4th);
  const selected3rd = useStore((state) => state.selected3rd);
  const selected2nd = useStore((state) => state.selected2nd);
  const selected1st = useStore((state) => state.selected1st);
  const selected0th = useStore((state) => state.selected0th);
  const setSelected6th = useStore((state) => state.setSelected6th);
  const setSelected5th = useStore((state) => state.setSelected5th);
  const setSelected4th = useStore((state) => state.setSelected4th);
  const setSelected3rd = useStore((state) => state.setSelected3rd);
  const setSelected2nd = useStore((state) => state.setSelected2nd);
  const setSelected1st = useStore((state) => state.setSelected1st);
  const setSelected0th = useStore((state) => state.setSelected0th);

  const track = useStore((state) => state.track);

  const setVrModal = useStore((state) => state.setVrModal);

  const { roofPos, f6Pos, f5Pos, f4Pos, f3Pos, f2Pos, f1Pos, f0Pos } =
    useSpring({
      config: {
        duration: 1000,
        easing: easings.easeInOutCubic,
      },
      roofPos: track === 99 ? [0.23, 2.1, -0.28] : [0.23, 0.68, -0.28],
      f6Pos: track === 99 ? [0.24, 1.8, -0.35] : [0.24, 0.6, -0.35],
      f5Pos: track === 99 ? [0.21, 1.5, -0.47] : [0.21, 0.55, -0.47],
      f4Pos: track === 99 ? [0.2, 1.2, -0.47] : [0.2, 0.46, -0.47],
      f3Pos: track === 99 ? [0.2, 0.9, -0.47] : [0.2, 0.36, -0.47],
      f2Pos: track === 99 ? [0.2, 0.6, -0.47] : [0.2, 0.27, -0.47],
      f1Pos: track === 99 ? [0.2, 0.3, -0.47] : [0.2, 0.18, -0.47],
      f0Pos: track === 99 ? [2.3765, 0.04, -0.785] : [2.3765, 0.04, -0.785],
    });
  return (
    <group ref={group} {...props} dispose={null}>
      {/* Lower ground */}
      <group position={[0.19, -0.08, -0.47]} scale={[0.03, 0.03, 0.03]}>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.BASEMENT_WALLS002.geometry}
          material={nodes.BASEMENT_WALLS002.material}
          position={[29.2, -1.74, -3.04]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.FLOOR_BASEMENT002.geometry}
          material={nodes.FLOOR_BASEMENT002.material}
          position={[-24.85, -1.66, 1.51]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.INTERNAL_WALLS_BASEMENT002.geometry}
          material={nodes.INTERNAL_WALLS_BASEMENT002.material}
          position={[4.49, -1.62, 0.97]}
          scale={[0.25, 0.25, 0.25]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.SERVICES.geometry}
          material={nodes.SERVICES.material}
          position={[-2.48, 1.72, 1.68]}
          scale={[1.64, 1.64, 1.64]}
        />
      </group>
      {/* 5th floor */}
      <animated.group
        visible={
          track === 4 ||
          track === 5 ||
          track === 6 ||
          track === 7 ||
          track === 8 ||
          track === 9
            ? false
            : true
        }
        position={f5Pos}
        scale={[0.03, 0.03, 0.03]}
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected5th(!selected5th);
        }}
      >
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.COLUMNS010.geometry}
          material={
            selected5th && track === 99
              ? selectedMaterial
              : nodes.COLUMNS010.material
          }
          position={[-20.66, -1.52, -18.59]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.GREENERY002.geometry}
          material={
            selected5th && track === 99
              ? selectedMaterial
              : nodes.GREENERY002.material
          }
          position={[-14.3, -0.87, -11.81]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.INTERIOR_WALLS_FIFTH002.geometry}
          material={
            selected5th && track === 99
              ? selectedMaterial
              : nodes.INTERIOR_WALLS_FIFTH002.material
          }
          position={[8.48, -1.61, 2.62]}
          scale={[0.25, 0.25, 0.25]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.TREES002.geometry}
          material={
            selected5th && track === 99
              ? selectedMaterial
              : nodes.TREES002.material
          }
          position={[-24.61, -1.52, 17.42]}
          scale={[0.49, 0.49, 0.49]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WINDOW_FIFTH000.geometry}
          material={
            selected5th && track === 99
              ? selectedMaterial
              : nodes.WINDOW_FIFTH000.material
          }
          position={[-21.91, 1, -10.01]}
          scale={[1.65, 0.3, 0.3]}
        />
        <group position={[11.89, -2.38, 7.24]}>
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh050.geometry}
            material={
              selected5th && track === 99
                ? selectedMaterial
                : nodes.Mesh050.material
            }
          />
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh050_1.geometry}
            material={
              selected5th && track === 99
                ? selectedMaterial
                : nodes.Mesh050_1.material
            }
          />
        </group>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.SERVICES001.geometry}
          material={
            selected5th && track === 99
              ? selectedMaterial
              : nodes.SERVICES001.material
          }
          position={[-3.26, 0.34, 1.69]}
          scale={[1.64, 1.64, 1.64]}
        />
      </animated.group>
      {/* 1st floor */}
      <animated.group
        visible={track === 8 || track === 9 ? false : true}
        position={f1Pos}
        scale={[0.03, 0.03, 0.03]}
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected1st(!selected1st);
        }}
      >
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.COLUMNS006.geometry}
          material={
            selected1st && track === 99
              ? selectedMaterial
              : nodes.COLUMNS006.material
          }
          position={[-20.49, -1.36, -18.62]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WALLS002.geometry}
          material={
            selected1st && track === 99
              ? selectedMaterial
              : nodes.WALLS002.material
          }
          position={[-16.25, -0.07, -17.28]}
          scale={[0.25, 0.25, 0.25]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WINDOW_FIRST000.geometry}
          material={
            selected1st && track === 99
              ? selectedMaterial
              : nodes.WINDOW_FIRST000.material
          }
          position={[-29.09, 1.32, -18.23]}
          rotation={[0, 1.57, 0]}
          scale={[0.3, 0.3, 0.3]}
        />
        <group position={[12.06, -2.13, 7.21]}>
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh053.geometry}
            material={
              selected1st && track === 99
                ? selectedMaterial
                : nodes.Mesh053.material
            }
          />
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh053_1.geometry}
            material={
              selected1st && track === 99
                ? selectedMaterial
                : nodes.Mesh053_1.material
            }
          />
        </group>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.SERVICES005.geometry}
          material={
            selected1st && track === 99
              ? selectedMaterial
              : nodes.SERVICES005.material
          }
          position={[-3.09, 0.96, 1.66]}
          scale={[1.64, 1.64, 1.64]}
        />
      </animated.group>
      {/* 4th floor */}
      <animated.group
        visible={
          track === 5 ||
          track === 6 ||
          track === 7 ||
          track === 8 ||
          track === 9
            ? false
            : true
        }
        position={f4Pos}
        scale={[0.03, 0.03, 0.03]}
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected4th(!selected4th);
        }}
      >
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.COLUMNS009.geometry}
          material={
            selected4th && track === 99
              ? selectedMaterial
              : nodes.COLUMNS009.material
          }
          position={[-20.49, -2.01, -18.62]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WALLS011.geometry}
          material={
            selected4th && track === 99
              ? selectedMaterial
              : nodes.WALLS011.material
          }
          position={[8.64, -1.95, 2.59]}
          scale={[0.25, 0.25, 0.25]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WINDOW_FOURTH000.geometry}
          material={
            selected4th && track === 99
              ? selectedMaterial
              : nodes.WINDOW_FOURTH000.material
          }
          position={[-27.54, -2.08, -18.21]}
          rotation={[0, 1.57, 0]}
          scale={[0.3, 0.3, 0.3]}
        />
        <group position={[12.06, -2.72, 7.22]}>
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh055.geometry}
            material={
              selected4th && track === 99
                ? selectedMaterial
                : nodes.Mesh055.material
            }
          />
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh055_1.geometry}
            material={
              selected4th && track === 99
                ? selectedMaterial
                : nodes.Mesh055_1.material
            }
          />
        </group>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.SERVICES002.geometry}
          material={
            selected4th && track === 99
              ? selectedMaterial
              : nodes.SERVICES002.material
          }
          position={[-3.09, 0.01, 1.66]}
          scale={[1.64, 1.64, 1.64]}
        />
      </animated.group>
      {/* Roof */}
      <animated.group
        position={roofPos}
        scale={[0.03, 0.03, 0.03]}
        visible={
          track === 2 ||
          track === 3 ||
          track === 4 ||
          track === 5 ||
          track === 6 ||
          track === 7 ||
          track === 8 ||
          track === 9
            ? false
            : true
        }
      >
        <mesh
          // castShadow
          // receiveShadow
          geometry={
            nodes["24m_BMU_Rvt18_24m_BMU_Rvt18_4401538_4401521002"].geometry
          }
          material={
            nodes["24m_BMU_Rvt18_24m_BMU_Rvt18_4401538_4401521002"].material
          }
          position={[5.67, 1.98, 2.68]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.3, 0.3, 0.3]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={
            nodes["Basic_Roof_SRA_Roof_Base_(Type1,2,4)_250Ins_3991133002"]
              .geometry
          }
          material={materials["BUILDING MASS.001"]}
          position={[-29.58, -51.24, 10.92]}
          scale={[0.3, 0.3, 0.3]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Plane001002.geometry}
          material={nodes.Plane001002.material}
          position={[18.46, 0.13, 8.62]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Plane002002.geometry}
          material={nodes.Plane002002.material}
          position={[-12.77, 1.27, -7.37]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={
            nodes.SRA_MechEquip_Solar_Panel_Array_SRA_MechEquip_Solar_Pan_167001
              .geometry
          }
          material={
            nodes.SRA_MechEquip_Solar_Panel_Array_SRA_MechEquip_Solar_Pan_167001
              .material
          }
          position={[-19.93, 0.48, 6.67]}
          rotation={[0, -1.57, 0]}
          scale={[0.3, 0.3, 0.3]}
        />
      </animated.group>
      {/* 2nd floor */}
      <animated.group
        visible={track === 7 || track === 8 || track === 9 ? false : true}
        position={f2Pos}
        scale={[0.03, 0.03, 0.03]}
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected2nd(!selected2nd);
        }}
      >
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.COLUMNS007.geometry}
          material={
            selected2nd && track === 99
              ? selectedMaterial
              : nodes.COLUMNS007.material
          }
          position={[-20.49, -1.53, -18.62]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WINDOW_SECOND000.geometry}
          material={
            selected2nd && track === 99
              ? selectedMaterial
              : nodes.WINDOW_SECOND000.material
          }
          position={[-29.09, 1.33, -18.23]}
          rotation={[0, 1.57, 0]}
          scale={[0.3, 0.3, 0.3]}
        />
        <group position={[12.06, -2.21, 7.21]}>
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh062.geometry}
            material={
              selected2nd && track === 99
                ? selectedMaterial
                : nodes.Mesh062.material
            }
          />
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh062_1.geometry}
            material={
              selected2nd && track === 99
                ? selectedMaterial
                : nodes.Mesh062_1.material
            }
          />
        </group>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.CLOCKFACES.geometry}
          material={
            selected2nd && track === 99
              ? selectedMaterial
              : nodes.CLOCKFACES.material
          }
          position={[8.63, -1.41, 2.61]}
          scale={[0.25, 0.25, 0.25]}
        />
        <group position={[8.63, -1.41, 2.61]} scale={[0.25, 0.25, 0.25]}>
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh063.geometry}
            material={
              selected2nd && track === 99
                ? selectedMaterial
                : nodes.Mesh063.material
            }
          />
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh063_1.geometry}
            material={
              selected2nd && track === 99
                ? selectedMaterial
                : nodes.Mesh063_1.material
            }
          />
        </group>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.SERVICES004.geometry}
          material={
            selected2nd && track === 99
              ? selectedMaterial
              : nodes.SERVICES004.material
          }
          position={[-3.09, 0.88, 1.66]}
          scale={[1.64, 1.64, 1.64]}
        />
      </animated.group>
      {/* 6th floor */}
      <animated.group
        position={f6Pos}
        scale={[0.03, 0.03, 0.03]}
        visible={
          track === 3 ||
          track === 4 ||
          track === 5 ||
          track === 6 ||
          track === 7 ||
          track === 8 ||
          track === 9
            ? false
            : true
        }
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected6th(!selected6th);
        }}
      >
        <mesh
          position={[4, 0.1, 8]}
          rotation={[-Math.PI / 2, 0, 0]}
          onClick={() => {
            setVrModal(true);
          }}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "default")}
        >
          <circleBufferGeometry attach="geometry" args={[2, 32]} />
          <meshBasicMaterial attach="material" color={0x606060} />
        </mesh>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.COLUMNS011.geometry}
          material={
            selected6th && track === 99
              ? selectedMaterial
              : nodes.COLUMNS011.material
          }
          position={[-21.97, -0.11, -23.31]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WALLS012.geometry}
          material={
            selected6th && track === 99
              ? selectedMaterial
              : nodes.WALLS012.material
          }
          position={[-21.08, -0.1, -8.35]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.3, 0.3, 0.3]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WINDOW_SIXTH000.geometry}
          material={
            selected6th && track === 99
              ? selectedMaterial
              : nodes.WINDOW_SIXTH000.material
          }
          position={[-24.52, 0.61, 4]}
          rotation={[0, -1.57, 0]}
          scale={[0.3, 0.3, 0.3]}
        />
        <group position={[25.5, -0.84, 1.4]}>
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh136.geometry}
            material={
              selected6th && track === 99
                ? selectedMaterial
                : nodes.Mesh136.material
            }
          />
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh136_1.geometry}
            material={
              selected6th && track === 99
                ? selectedMaterial
                : nodes.Mesh136_1.material
            }
          />
        </group>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.SERVICES007.geometry}
          material={
            selected6th && track === 99
              ? selectedMaterial
              : nodes.SERVICES007.material
          }
          position={[-19.45, 3.54, -2.77]}
          scale={[1.64, 1.64, 1.64]}
        />
      </animated.group>
      {/* 3rd floor */}
      <animated.group
        visible={
          track === 6 || track === 7 || track === 8 || track === 9
            ? false
            : true
        }
        position={f3Pos}
        scale={[0.03, 0.03, 0.03]}
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected3rd(!selected3rd);
        }}
      >
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.COLUMNS008.geometry}
          material={
            selected3rd && track === 99
              ? selectedMaterial
              : nodes.COLUMNS008.material
          }
          position={[-20.49, -1.62, -18.62]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WALLS013.geometry}
          material={
            selected3rd && track === 99
              ? selectedMaterial
              : nodes.WALLS013.material
          }
          position={[8.65, -1.29, 2.61]}
          scale={[0.25, 0.25, 0.25]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WINDOW_THIRD000.geometry}
          material={
            selected3rd && track === 99
              ? selectedMaterial
              : nodes.WINDOW_THIRD000.material
          }
          position={[-29.09, 1.43, -18.23]}
          rotation={[0, 1.57, 0]}
          scale={[0.3, 0.3, 0.3]}
        />
        <group position={[12.06, -2.37, 7.21]}>
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh138.geometry}
            material={
              selected3rd && track === 99
                ? selectedMaterial
                : nodes.Mesh138.material
            }
          />
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh138_1.geometry}
            material={
              selected3rd && track === 99
                ? selectedMaterial
                : nodes.Mesh138_1.material
            }
          />
        </group>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.SERVICES003.geometry}
          material={
            selected3rd && track === 99
              ? selectedMaterial
              : nodes.SERVICES003.material
          }
          position={[-3.09, 0.71, 1.66]}
          scale={[1.64, 1.64, 1.64]}
        />
      </animated.group>
      {/* Ground floor */}
      <animated.group
        visible={track === 9 ? false : true}
        position={f0Pos}
        scale={[0.0075, 0.0075, 0.0075]}
        onClick={(e) => {
          e.stopPropagation();
          track === 99 && setSelected0th(!selected0th);
        }}
      >
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Object001001.geometry}
          material={
            selected0th && track === 99
              ? selectedMaterial
              : nodes.Object001001.material
          }
          position={[-275.53, 0, 43.38]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WALLS014.geometry}
          material={
            selected0th && track === 99
              ? selectedMaterial
              : nodes.WALLS014.material
          }
          position={[-275.53, 0, 43.38]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.WINDOW_GROUND002.geometry}
          material={
            selected0th && track === 99
              ? selectedMaterial
              : nodes.WINDOW_GROUND002.material
          }
          position={[-405.71, -7.08, -25.25]}
          rotation={[0, 1.57, 0]}
          scale={[1.2, 1.2, 1.2]}
        />
        <group position={[-286.63, -4.42, 102.8]} scale={[3.95, 3.95, 3.95]}>
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh143.geometry}
            material={
              selected0th && track === 99
                ? selectedMaterial
                : nodes.Mesh143.material
            }
          />
          <mesh
            // castShadow
            // receiveShadow
            geometry={nodes.Mesh143_1.geometry}
            material={
              selected0th && track === 99
                ? selectedMaterial
                : nodes.Mesh143_1.material
            }
          />
        </group>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.VODA_NOTICE.geometry}
          material={
            selected0th && track === 99
              ? selectedMaterial
              : materials.VODA_NOTICE
          }
          position={[-221.53, 2.16, 75.77]}
          scale={[22.1, 22.1, 11.81]}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.SERVICES006.geometry}
          material={
            selected0th && track === 99
              ? selectedMaterial
              : nodes.SERVICES006.material
          }
          position={[-303.16, 9.02, 47.72]}
          scale={[6.47, 6.47, 6.47]}
        />
      </animated.group>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.mews.geometry}
        // material={nodes.mews.material}
        material={
          new THREE.MeshStandardMaterial({
            color: 0xa6bbcf,
            roughness: 0.8,
            metalness: 0,
          })
        }
        position={[-1.83, 0.02, 0.42]}
        rotation={[Math.PI / 2, 0, 2.34]}
        scale={[0.03, 0.03, 0.03]}
      />
    </group>
  );
}

useGLTF.preload("/building.gltf");
