import { Anek_Devanagari } from "next/font/google";
import React from "react";

import Box3D from "./Box3D";
import Box3D2 from "./Box3D2";

const anek = Anek_Devanagari({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Boxes3D = () => {
  return (
    <section
      className={` ${anek.className} ' relative w-full  bg-black  py-24 '`}
    >
      <div className="absolute w-fit  top-0 left-1/2 -translate-x-1/2 text-white text-5xl font-bold py-4 text-nowrap flex group transition-all duration-300 cursor-pointer">
        <div className=" group-hover:-translate-x-[100%] transition-all duration-300 ">
          M{" "}
        </div>
        <div className="absolute -z-10 opacity-0 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-x-0  transition-all duration-300">
          eet
        </div>
      </div>
      <div className="container mx-auto max-w-[1200px]  h-full flex flex-col gap-4  ">
        <Box3D />
        <Box3D />
        <Box3D />
        <Box3D />
      </div>
    </section>
  );
};

export default Boxes3D;
