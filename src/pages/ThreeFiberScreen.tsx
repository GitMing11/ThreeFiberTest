import React, { Suspense, useRef, useState } from "react";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber/native";
import * as THREE from "three";
import { ActivityIndicator, View } from "react-native";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Asset } from "expo-asset";
//import modelUrl from "../../assets/chachaping.glb";

const Model = ({ url }: { url: string }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

// function Box(props: ThreeElements["mesh"]) {
//   const meshRef = useRef<THREE.Mesh>(null!);
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   useFrame((state, delta) => (meshRef.current.rotation.x += delta));
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "#2f74c0"} />
//     </mesh>
//   );
// }

export default function ThreeFiberScreen() {
  //const modelUrl = Asset.fromModule(require("../../assets/chachaping.glb")).uri;

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }} camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* <Model url={modelUrl} /> */}
        <OrbitControls />
      </Canvas>
    </View>
  );
  //return (
  // <View style={{ flex: 1 }}>
  //   <Canvas>
  //     <ambientLight intensity={Math.PI / 2} />
  //     <spotLight
  //       position={[10, 10, 10]}
  //       angle={0.15}
  //       penumbra={1}
  //       decay={0}
  //       intensity={Math.PI}
  //     />
  //     <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
  //     <Suspense
  //       fallback={<ActivityIndicator size={"large"} color={"blue"} />}
  //     >
  //       <Box position={[-1.2, 0, 0]} />
  //       <Box position={[1.2, 0, 0]} />
  //     </Suspense>
  //   </Canvas>
  // </View>
  //);
}
