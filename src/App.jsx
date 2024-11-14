import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacConainer from './MacConainer'
import { div } from 'three/webgpu'

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="navbar  pb-5 absolute top-2 left-1/2 flex text-xs font-semibold gap-8 text-[#dadada] -translate-x-1/2 ">
        {[
          "Store",
          "Mac",
          "iPad",
          "iPhone",
          "Watch",
          "AirPods",
          "TV & HOME",
          "Entertenment",
          "Accessories",
          "Support",
        ].map((e) => (
          <a href="">{e}</a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-[#dadada] top-20 left-[50%] -translate-x-1/2  font-['Helvetica_Now_Display]">
        <h1 className="font-[600] tracking-tighter text-6xl" id="glow-text">
          macbook pro.
        </h1>
        <h3>Oh so pro !</h3>
        <p className=" text-center w-3/4 tracking-tighter">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quibusdam perspiciatis veniam.
        </p>
      </div>

      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacConainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App