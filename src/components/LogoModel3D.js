import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows } from '@react-three/drei';

function Model({ mousePos }) {
  const group = useRef();
  const { scene } = useGLTF('/logo-3d.glb');

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();

    // Gentle continuous Y rotation
    group.current.rotation.y = t * 0.35;

    // Floating up/down
    group.current.position.y = Math.sin(t * 0.6) * 0.12;

    // Subtle mouse parallax tilt
    group.current.rotation.x = mousePos.y * 0.12;
    group.current.rotation.z = -mousePos.x * 0.08;
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={1.8} />
    </group>
  );
}

const LogoModel3D = ({ mousePos = { x: 0, y: 0 } }) => {
  return (
    <div className="logo-3d-canvas-wrap" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 3]} intensity={1.2} color="#c4b5fd" />
        <directionalLight position={[-3, -2, -2]} intensity={0.4} color="#7c3aed" />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#a78bfa" distance={8} />

        <Suspense fallback={null}>
          <Model mousePos={mousePos} />
          <Environment preset="night" />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.25}
            scale={5}
            blur={2}
            color="#7c3aed"
          />
        </Suspense>
      </Canvas>

      {/* Ambient glow rings underneath the canvas */}
      <div className="logo-3d-glow" />
      <div className="logo-3d-ring logo-3d-ring-1" />
      <div className="logo-3d-ring logo-3d-ring-2" />
    </div>
  );
};

useGLTF.preload('/logo-3d.glb');

export default LogoModel3D;
