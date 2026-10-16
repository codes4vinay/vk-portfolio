import React, { useRef, useEffect, Suspense, useState, Component } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, useTexture, OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.warn("3D Model load fallback:", error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

function MacbookScene() {
  const { scene, animations } = useGLTF("/macbook.glb");
  const { actions, names } = useAnimations(animations, scene);
  const meshRef = useRef();
  const elapsedRef = useRef(0);
  const { camera, controls } = useThree();
  const texture = useTexture("/wallpaper.jpeg");
  texture.flipY = true;

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        if (child.material) {
          child.material.polygonOffset = false;
          child.material.precision = "mediump";
          child.material.envMapIntensity = 1.2;
          child.material.needsUpdate = true;
        }
        if (child.name === "Object_7") {
          child.material.map = texture;
          child.material.emissiveMap = texture;
          child.material.emissive = new THREE.Color(0xffffff);
          child.material.emissiveIntensity = 0.9;
          child.material.precision = "mediump";
          child.material.needsUpdate = true;
        }
      }
    });

    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const cameraZ = Math.abs(maxDim / Math.sin(fov / 2));
    camera.position.set(center.x, center.y * 0.6, cameraZ * 0.85);
    camera.lookAt(center);

    if (controls) {
      controls.target.copy(center);
      controls.update();
    }

    if (actions && names && names[0] && actions[names[0]]) {
      actions[names[0]].reset().fadeIn(0.5).play();
      actions[names[0]].clampWhenFinished = true;
      actions[names[0]].setLoop(THREE.LoopOnce, 1);
    }
  }, [actions, names, scene, camera, controls, texture]);

  // Use delta to avoid THREE.Clock deprecation warnings
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    elapsedRef.current += delta;
    meshRef.current.rotation.y = Math.sin(elapsedRef.current * 0.4) * 0.12;
  });

  return <primitive ref={meshRef} object={scene} />;
}

// Fallback graphic matching tablet/mobile orbital design
export const OrbitalFallback = () => (
  <div className="relative flex h-full min-h-[22rem] w-full items-center justify-center select-none pointer-events-none">
    <div className="absolute h-[19rem] w-[19rem] rounded-full border border-indigo-500/20 animate-pulse" />
    <div className="absolute h-[13rem] w-[13rem] rounded-full border border-indigo-500/25" />
    <div className="absolute h-3.5 w-3.5 rounded-full bg-indigo-500 shadow-[0_0_28px_rgba(99,102,241,0.9)]" />
    <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 font-mono text-[10px] uppercase tracking-[0.35em] text-slate-400">
      Build / deploy / learn
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
      <span className="block font-mono text-[4.5rem] font-semibold leading-none tracking-[-0.12em] text-indigo-600/15">
        VK
      </span>
      <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
        Systems / web / AI
      </span>
    </div>
  </div>
);

const MacbookModel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    setIsMobile(media.matches);
    const handler = (e) => setIsMobile(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  if (isMobile) {
    return <OrbitalFallback />;
  }

  return (
    <div className="h-[520px] xl:h-[620px] w-full relative z-10">
      <ModelErrorBoundary fallback={<OrbitalFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 1.4, 11], fov: 40 }}
          gl={{
            antialias: true,
            logarithmicDepthBuffer: true,
            powerPreference: "high-performance",
          }}
        >
          {/* Pure local lights - No external HDR network request */}
          <ambientLight intensity={1.6} />
          <directionalLight position={[-5, 10, 5]} intensity={2.2} />
          <pointLight position={[10, 10, 10]} intensity={1.8} color="#ffffff" />
          <pointLight position={[-10, -5, -10]} intensity={0.9} color="#818cf8" />
          <directionalLight position={[0, -5, 5]} intensity={0.6} />
          <Suspense
            fallback={
              <Html center>
                <div className="text-indigo-600 animate-pulse font-mono font-bold tracking-widest text-xs">
                  BOOTING...
                </div>
              </Html>
            }
          >
            <MacbookScene />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        </Canvas>
      </ModelErrorBoundary>
    </div>
  );
};

export default MacbookModel;
