import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import "./ThreeDShowcase.css";

function BeautyOrb() {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y =
      state.clock.elapsedTime * 0.35;

    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.8}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.35, 64, 64]} />

        <meshPhysicalMaterial
          color="#c9968a"
          roughness={0.18}
          metalness={0.08}
          transmission={0.15}
          thickness={0.8}
        />
      </mesh>
    </Float>
  );
}

function ThreeDShowcase() {
  return (
    <section className="three-d-showcase">
      <div className="nouran-container three-d-container">
        <div className="three-d-content">
          <span className="three-d-eyebrow">
            THE NOURAN EXPERIENCE
          </span>

          <h2>
            Beauty that feels
            <em> effortless.</em>
          </h2>

          <p>
            Discover a softer approach to beauty,
            where thoughtful details meet timeless
            elegance.
          </p>

          <div className="three-d-line">
            <span></span>
            <small>CRAFTED WITH INTENTION</small>
          </div>
        </div>

        <div className="three-d-canvas">
          <Canvas
            camera={{
              position: [0, 0, 4.5],
              fov: 45,
            }}
            dpr={[1, 1.5]}
          >
            <ambientLight intensity={1.5} />

            <directionalLight
              position={[3, 3, 4]}
              intensity={2}
            />

            <pointLight
              position={[-3, -2, 2]}
              intensity={1.5}
            />

            <BeautyOrb />

            <Environment preset="studio" />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default ThreeDShowcase;