import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

import { Sky, Bird, Plane, Island } from "../models/index";
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */
}
const Home = () => {
  const adjustIslandForScreen = () => {
    let screenScale = null;
    let screenPostiton = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPostiton, rotation];
  };

  const [islandScale, islandPostion, islandRotation] = adjustIslandForScreen();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird/>
          <Sky />
          <Island
            position={islandPostion}
            scale={islandScale}
            rotation={islandRotation}
          />
          <Plane/>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
