import React, { useEffect, useRef } from "react";
import { extend, useThree, ReactThreeFiber } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Controls = (props) => {
  const { camera, gl, invalidate } = useThree();
  const ref = useRef();

  useEffect(() => {
    // ref.current?.update();
    ref.current?.addEventListener("change", invalidate);
  });

  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />;
};

export default Controls;
