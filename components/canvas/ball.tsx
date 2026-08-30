import { Suspense, useRef, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import * as THREE from 'three'

import CanvasLoader from './loader';

interface ImgUrlTypes {
  src: string;
}

interface BallPropsTypes {
  imgUrl: ImgUrlTypes;
}

const Ball = (props: BallPropsTypes) => {
  const [decal] = useTexture([props.imgUrl.src]);
  const decalRef = useRef<THREE.Mesh>(null);

  useLayoutEffect(() => {
    if (decalRef.current) {
      const material = decalRef.current.material as THREE.MeshStandardMaterial;
      if (material) {
        material.flatShading = true;
        material.needsUpdate = true;
      }
    }
  }, [decal]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          ref={decalRef}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        >
          {/* <meshStandardMaterial
            // map={decal}
            flatShading
            transparent
          // polygonOffset
          // polygonOffsetFactor={-1} // Prevents z-fighting with the parent mesh
          /> */}
        </Decal>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: { icon: ImgUrlTypes }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
