import Image from 'next/image';
import React from 'react'
import image from '@/assets/page6/about1.jpg'
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";

const About = () => {
  return (
   <section className='w-full h-screen bg-gray-800 py-24 px-2' >
    <div className="container mx-auto h-full flex  ">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center  " >
          <span className='text-red-600 text-lg' >About</span>
          <h2 className='text-white text-4xl font-semibold' >
          We Believe This Give For Poor
          People Changing Lives
          </h2>
          <p className='text-gray-300 mt-6' >
            At our core, we are dedicated to making a meaningful difference in the lives of those facing poverty. Through our compassionate initiatives and sustainable programs, we strive to create lasting positive change. Join us in our journey to transform lives and create hope for those who need it most.
          </p>
          <div className="text-white flex gap-8">
            <div className="flex items-center gap-4 mt-6" >
                <div className="bg-orange-400 w-fit p-2 rounded-2xl rotate-45"><LiaHandHoldingHeartSolid className=' text-4xl -rotate-45' /></div>
                <h3 className='text-2xl font-semibold' >Treatment Help</h3>
            </div>
            <div className="flex items-center gap-4 mt-6" >
                <div className="bg-green-400 w-fit p-2 rounded-2xl rotate-45"><LiaHandHoldingUsdSolid className='text-4xl -rotate-45'  /></div>
                <h3 className='text-2xl font-semibold' >fund Raised</h3>
            </div>
          </div>
          <ul className='flex flex-col gap-2 text-gray-400 mt-6' >
            <li className='flex items-center gap-2' ><div className="inline-block border-red-600 p-1 border rounded-full"><FaCheck className='text-xs' /></div>Uniting Hearts, Healing Communities</li>
            <li className='flex items-center gap-2' ><div className="inline-block border-red-600 p-1 border rounded-full"><FaCheck className='text-xs' /></div>Always Support Charity Today Responsibility</li>
            <li className='flex items-center gap-2' ><div className="inline-block border-red-600 p-1 border rounded-full"><FaCheck className='text-xs' /></div>Helped fund 3,198 Project powerful corporate poor.</li>
          </ul>
          <button className=' w-fit border border-red-600 text-white py-3 px-6 rounded-full flex items-center gap-2 mt-6' > 
        Learn More <span className='inline-block p-2 bg-red-600 rounded-full' ><FaArrowRight className='text-2xl' /></span>
      </button>
        </div>
        <div className="relative w-full lg:w-1/2 h-full p-6 flex justify-center items-center">
                <div className="absolute bottom-0 right-25 bg-orange-400 w-36 aspect-square rounded-4xl z-10 text-white text-center flex flex-col justify-center items-center gap-2" >
                <LiaHandHoldingHeartSolid className=' text-6xl ' />
                <h4>
                    We Help 5K Families
                </h4>
                </div>
            <div className="image-cover scale-75  ">

                
                <Image src={image} alt='' className='w-full h-full object-cover saturate-0 ' />
            </div>
        </div>
    </div>
   </section>
  )
}

export default About
