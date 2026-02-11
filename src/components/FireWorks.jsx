import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import fireworksUrl from "../models/fireworks.glb";

export function Fireworks(props) {
  const group = useRef();

  const { scene, animations } = useGLTF(fireworksUrl);
  const { actions } = useAnimations(animations, group);

  // Auto play first animation
  useEffect(() => {
    if (animations.length > 0) {
      const firstAnimation = animations[0].name;
      actions[firstAnimation]?.reset().play();
    }
  }, [animations, actions]);

  // Optional rotation animation
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={group} {...props}>
      <primitive object={scene} scale={2} />
    </group>
  );
}

useGLTF.preload(fireworksUrl);
