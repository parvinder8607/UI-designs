import React from 'react'
import { GoClock } from "react-icons/go";
import image from '@/assets/page5/images/doctor.png'
import Image from 'next/image'


const Home = () => {
  return (
    <section className='w-full h-screen bg-blue-50 pt-[80px] px-2' >
       <div className="container mx-auto h-full flex ">
        <div className="w-1/2 h-full flex flex-col gap-2 justify-center ">
            <span className='font-bold text-xl text-blue-500' >Solutions For Healthcare Needs</span>
            <h1 className='text-[34px] lg:text-[56px] 2xl:text-[78px] font-bold leading-[1.2]' >
                Best Healthcare <br />
                & Medical 
                Solutions
            </h1>
            <h4 className='text-lg font-medium text-gray-500' >
                Empowering lives through innovative healthcare solutions. Our dedicated team of medical professionals combines cutting-edge technology with compassionate care to deliver exceptional medical services tailored to your unique needs.
            </h4>
            <div className="flex gap-4 mt-6">
                <button className='bg-blue-500 hover:bg-green-400 transition-all duration-100 text-white px-6 py-2 rounded-full cursor-pointer'  >
                    Get Appointment
                </button>
                <button className='border border-blue-500 text-blue-500 px-6 py-2 rounded-full cursor-pointer' >
                    Read More
                </button>
            </div>
        </div>
        <div className="relative w-1/2 h-full flex  items-end" >
        <div className="absolute -z-0 w-full aspect-square rounded-full bg-white"></div>
        <div className=" right-0 bottom-1/5 absolute z-20 bg-blue-600 text-white rounded-full flex gap-2 p-4">
            <div className="bg-green-400 rounded-full p-2 ">
                <GoClock className='text-4xl' />
            </div>
            <div className="flex flex-col justify-center">
                <h4 className=' font-bold' >
                    Openings Hours
                </h4>
                <span className='text-xs' >Mon-Sat: 9:00 AM - 07:00 PM</span>
            </div>
        </div>
        <Image src={image} alt="doctor" className='relative z-10' />
        </div>
       </div>
    </section>
  )
}

export default Home
