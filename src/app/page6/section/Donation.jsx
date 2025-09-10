import React from "react";
import { FaArrowRight } from "react-icons/fa";
import image from "@/assets/page6/donation2.jpg";
import Image from "next/image";

const Donation = () => {
  return (
    <section className="w-full  py-24 bg-gray-800 text-white">
      <div className="container mx-auto max-w-[1200px] h-full flex">
        <div className=" w-full lg:w-1/2 flex flex-col justify-center items-center  ">

          <div className="image-cover2 relative w-full h-full">
            <Image src={image} alt="donation" fill className="object-cover object-center scale-90" />
          </div>
        
        </div>
        <div className=" w-full lg:w-1/2 flex flex-col justify-center   ">
          <span className="text-red-600 text-lg font-semibold">Donate</span>
          <h2 className="text-4xl font-semibold mt-2" >Help & Donate Now Find The poor people Change a life.</h2>
          <div className="bg-black/15 w-full h-full mt-8 rounded-4xl p-4 py-8 flex flex-col  gap-4">
          <label htmlFor="amount" className="text-xl font-semibold">
            Select a Gift Frequency
          </label>
          <div className=" flex gap-4 p-2 bg-white/5 rounded-full w-fit">
            <div className=" w-fit py-2 px-4 rounded-full bg-orange-600">
              Monthly
            </div>
            <div className=" w-fit py-2 px-4 rounded-full ">
              One Time
            </div>
          </div>
          <label htmlFor="amount" className="text-xl font-semibold">
            Select Amount <span className="text-sm text-red-600" >(In US Dollor)</span>
          </label>
          <div className="flex gap-4">
            <input type="text" className="w-32 py-2 px-4 border border-gray-500  rounded-full text-gray-500 placeholder:text-gray-500" value={'$30'}  placeholder="$30" />
            <div className=" border border-gray py-2 px-4 rounded-full">
              $30
            </div>
            <div className=" border border-gray py-2 px-4 rounded-full">
              $40
            </div>
            <div className=" border border-gray py-2 px-4 rounded-full">
              $50
            </div>
          </div>
          <button className=' w-fit border border-orange-500 text-white py-2 px-4 rounded-full flex items-center gap-2 mt-6' > 
        Donate Now <span className='inline-block p-2 bg-orange-500 rounded-full' ><FaArrowRight className='text-xl' /></span>
      </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
