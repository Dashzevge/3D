import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useMotionValue, useSpring, useTransform } from "motion/react";
import { useFrame } from "@react-three/fiber";
import rocketUrl from "../models/rocket.glb";

export function Rocket({
  scrollProgress,          // MotionValue 0..1 from useScroll
  from = [0.5, -1.5, 0.5],  // Point A
  to = [2.2, 1.2, -2.5],    // Point B
  rotFrom = 0.4,            // optional yaw start
  rotTo = 1.2,              // optional yaw end
  ...props
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(rocketUrl);
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    const first = animations?.[0]?.name;
    if (first && actions?.[first]) actions[first].play();
  }, [actions, animations]);

  
  // If scrollProgress isn't passed, don't crash
  // (rocket will just render at props.position)
  const hasScroll = !!scrollProgress;

  // Smooth the scroll signal (so motion doesn't jitter)
  const smooth = hasScroll
    ? useSpring(scrollProgress, { damping: 25, stiffness: 120 })
    : null;

  // Map scroll 0..1 -> x/y/z
  const x = hasScroll ? useTransform(smooth, [0, 1], [from[0], to[0]]) : null;
  const y = hasScroll ? useTransform(smooth, [0, 1], [from[1], to[1]]) : null;
  const z = hasScroll ? useTransform(smooth, [0, 1], [from[2], to[2]]) : null;

  const rotY = hasScroll ? useTransform(smooth, [0, 1], [rotFrom, rotTo]) : null;

  useFrame((_, delta) => {
    if (!group.current) return;

    // keep gltf animation running
    mixer?.update(delta);

    // apply scroll-driven transforms
    if (hasScroll) {
      group.current.position.set(x.get(), y.get(), z.get());
      group.current.rotation.y = rotY.get();
    }
  });

  return (
     <group
      ref={group}
      {...props}
      dispose={null}
      // Try removing this rotation first if it looks wrong:
      // rotation={[0, Math.PI / 2, 0]}
      scale={props.scale ?? 0.07}
      position={props.position ?? [0.4, -1.0, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="648d44d75b514670a133ce6e37da93c6fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.rocket_mtl}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.character_mtl}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.fire_mtl}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.fire_mtl}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.fire_mtl}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.fire_mtl}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <group
                    name="Object_6"
                    position={[11.766, 51.4, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_8"
                    position={[5.22, 89.677, 2.621]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_10"
                    position={[-97.652, 51.4, 35.247]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_12"
                    position={[-97.652, 51.4, -35.247]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_14"
                    position={[-97.652, 16.152, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_16"
                    position={[-97.652, 86.647, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Sphere001"
                    position={[11.766, 51.4, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Sphere004"
                    position={[5.22, 89.677, 2.621]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Plane004"
                    position={[-97.652, 51.4, 35.247]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Plane005"
                    position={[-97.652, 51.4, -35.247]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Plane006"
                    position={[-97.652, 16.152, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Plane007"
                    position={[-97.652, 86.647, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(rocketUrl)
