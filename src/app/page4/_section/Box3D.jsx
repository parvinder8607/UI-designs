import React from 'react'
import Image from "next/image";
import image from "@/assets/page4/Product.avif";
import image2 from "@/assets/page4/Producttop.avif";

const box3D = () => {
  return (
    <div className=" perspective-distant cursor-default">
        <div className="box relative w-full origin-bottom transform-3d hover:-rotate-x-[40deg] transition-all duration-400 ">
          <div className="w-full absolute top-0 -translate-y-[100%] rotate-x-90 origin-bottom transform-3d "> 
            <Image src={image2} alt="image top" width={1158} height={220} className="w-full" />
          </div>


          <div className=" bg-amber-50 w-full  py-8 px-4 flex justify-between">
            <div className="flex flex-col justify-center">
              <h2 className="text-7xl font-bold">Product Design</h2>
              <p className="text-xl text-gray-400 mt-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae, ipsa.
              </p>
            </div>
            <div className="  float-end  w-48 aspect-square">
              <Image src={image} alt="product image" width={200} height={200} className="w-full" />
            </div>
          </div>
        </div>
        </div>
  )
}

export default box3D
