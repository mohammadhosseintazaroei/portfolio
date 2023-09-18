import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Computer() {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  computer.scene.position.y = -2;

  return (
    <mesh>
      <pointLight intensity={1} position={[0, 5, 0]} />
      <primitive object={computer.scene} />
    </mesh>
  );
}

export const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: '300px' }}
    >
      <Suspense fallback={<>loader</>}>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
        <Preload />
      </Suspense>
    </Canvas>
  );
};
