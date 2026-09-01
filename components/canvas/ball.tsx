import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  View
} from '@react-three/drei';

interface ImgUrlTypes { src: string; }
interface BallPropsTypes { imgUrl: ImgUrlTypes; }

const Ball = (props: BallPropsTypes) => {
  const [decal] = useTexture([props.imgUrl.src]);

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 1]} intensity={0.8} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1}>
          <meshStandardMaterial map={decal} flatShading transparent polygonOffset polygonOffsetFactor={-10} />
        </Decal>
      </mesh>
    </Float>
  );
};

export const BallView = ({ icon }: { icon: ImgUrlTypes }) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={setElement} className="w-28 h-28 relative">
      {element && (
        <View track={{ current: element }} className="w-full h-full absolute inset-0">
          <Suspense fallback={null}>
            <OrbitControls
              enableZoom={false}
              domElement={element}
            />
            <Ball imgUrl={icon} />
          </Suspense>
        </View>
      )}
    </div>
  );
};

export const GlobalCanvas = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full">
      {children}
      <Canvas
        className="pointer-events-none fixed inset-0 w-screen h-screen z-10"
        eventSource={typeof window !== 'undefined' ? document.getElementById('root-layout') || undefined : undefined}
      >
        <View.Port />
        <Preload all />
      </Canvas>
    </div>
  );
};
