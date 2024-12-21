import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Plane,
  Sphere,
  Circle,
} from "@react-three/drei";
import CanvasLoader from "./Loader";
import scene from "./scene1.gltf";

const Mobile = ({ isMobile, isTablet }) => {
  const computer = useGLTF(scene);
  const getScale = () => {
    if (isMobile) return 0.054;
    if (isTablet) return 0.065;
    return 0.08;
  };

  const getPosition = () => {
    if (isMobile) return [0, -3.9, 1.7];
    if (isTablet) return [-2, -4.7, 1.3];
    return [-4, -5.5, 1];
  };

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={getScale()}
        position={getPosition()}
        rotation={[-0.04, 0.8, -0.1]}
        castShadow
      />
    </mesh>
  );
};

const MobileCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width:1000px)");
    const tabletQuery = window.matchMedia(
      "(min-width: 1000px) and (max-width: 1203px)"
    );

    const updateMedia = () => {
      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
    };

    updateMedia(); // Initial check

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleTabletChange = (event) => {
      setIsTablet(event.matches);
    };

    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 27 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // autoRotate
          // autoRotateSpeed={6}
        />
        <ambientLight intensity={1} />
        <directionalLight
          position={[3, 2, 1]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Mobile isMobile={isMobile} isTablet={isTablet} />
        {/* <Circle
          args={[10, 64]}
          rotation={[-Math.PI / 2, 0.2, 3.91]}
          position={isMobile ? [0, 0, 0] : [0, -4.3, 0]}
          receiveShadow
          scale={isMobile ? 0.05 : [0.2, 0.1, 1]}
        >
          <meshStandardMaterial attach="material" color="#433e3e" />
        </Circle> */}
      </Suspense>
    </Canvas>
  );
};

export default MobileCanvas;
