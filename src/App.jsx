import { Canvas } from "@react-three/fiber";
import "./style.css";
import React from "react";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen bg-black font-[Helvetica_Now_Display]">
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {["iPhone", "iPad", 'Services', 'Mac', 'Products'].map((e)=>(
          <a href="" className=" text-white font-[500] text-md">{e}</a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-28 left-1/2 -translate-x-1/2 ">
        <h3 className=" masked text-8xl tracking-tighter font-[700]">macbook pro.</h3>
        <h5 className="">Oh so pro !</h5>
        <p className="text-center w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          quasi ex sunt amet.
        </p>
      </div>
      <Canvas camera={{ fov: 15, position: [0, -10, 210] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
