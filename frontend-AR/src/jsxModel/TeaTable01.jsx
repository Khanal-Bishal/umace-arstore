/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 D:\projects\reactxr_learn\learn_hitTest\public\models\TeaTable01.glb --keepnames --shadows 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TeaTable01(props) {
  const { nodes, materials } = useGLTF("/models/TeaTable01.glb");
  return (
    <group {...props} dispose={null} rotation={props.rotation}>
      <mesh
        name="Tea_Table_1"
        castShadow
        receiveShadow
        geometry={nodes.Tea_Table_1.geometry}
        material={materials["Tea Table"]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/TeaTable01.glb");
