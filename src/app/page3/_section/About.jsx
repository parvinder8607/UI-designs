import React from 'react'
import Image from 'next/image'
import image from '@/assets/page3/images/image5.jpg'

const About = () => {
  return (
    <section className='w-full h-screen bg-gray-50 py-24 px-2' >
        <div className="container mx-auto h-full flex items-center justify-between" >
        <div className=" w-full lg:w-1/2 border-2 border-gray-200 rounded-lg p-6" >
        <h1 className='text-2xl font-bold' >
            About Us
        </h1>
        
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center" >
        <div className="image-cover">
            <Image src={image} alt="" className='w-full h-full object-cover saturate-0 ' />
        </div>
        </div>
        </div>
    </section>
  )
}

export default About
