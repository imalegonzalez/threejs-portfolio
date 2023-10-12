import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Scene from "./components/Scene";
import Interface from "./components/Interface";
import { DotScreen, EffectComposer, Pixelation } from "@react-three/postprocessing";
import Lenis from '@studio-freight/lenis'




const App = () => {
 
  

  return (<>

  
   
    
    <div className="fixed top-0 right-0 w-screen h-screen ">
      <Canvas camera={{ fov: 70, position: [1, 1, 3] }}>
        <Suspense fallback={null}>
            {/* Wrap contents you want to scroll into <ScrollControls> */}
            <ScrollControls pages={4} damping={0.2}>
            <EffectComposer>
              <Pixelation granularity={5} />
              
              </EffectComposer>
              <Scene />
              {/* <OrbitControls enableZoom={false}/> */}
              <Scroll html>
                <Interface/>
              </Scroll>
            </ScrollControls>
            
        </Suspense>
      </Canvas>
    </div>
  </>
  );
};

export default App;
