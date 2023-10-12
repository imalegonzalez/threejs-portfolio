import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Environment, OrbitControls, useScroll } from "@react-three/drei";
import Model from "./Model";

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)


function Scene() {
    const boxRef = useRef();
    const scroll = useScroll();

    useEffect(()=>{
        console.log(scroll.offset)
    },[boxRef]);
    
    
    useFrame((state, delta) => {
        const offset = scroll.offset;
        boxRef.current.rotation.y = offset*5;
        boxRef.current.rotation.x = offset*1
        // console.log(offset)
        
    });
  
    return (
      <>
      <group ref={boxRef} position={[1.1,-0.1,0.6]} rotation={[0.35, 0, 0]}  >

          <Model  />
      </group>
        {/* <Box ref={boxRef} position={[1,0,0]} args={[1, 1, 1]} rotation={[0, 0, 0]}>
          
        </Box> */}
        <ambientLight />
        <pointLight position={[100, 200, 75]} intensity={3} color="#fff" />
        {/* <Environment files={suspend(city).default} /> */}
      </>
    );
}


export default Scene
