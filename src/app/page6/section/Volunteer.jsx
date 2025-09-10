import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import image from "@/assets/page6/volunteer1.jpg"
import image2 from "@/assets/page6/volunteer2.jpg"

const Volunteer = () => {
  return (
    <section className='w-full bg-gray-800 py-24 px-2' >
       <div className="container mx-auto h-full flex gap-4 ">
        <div style={{backgroundImage: `url(${image.src})`}} className="relative  text-center p-16  text-white w-full lg:w-1/2  rounded-2xl bg-cover bg-center" >
         <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/65 rounded-2xl" >
          {/* <Image src={image} alt ="volunteer1" fill className='object-cover rounded-2xl' /> */}
         </div>
          <div className="relative z-10 flex flex-col items-center justify-center">
          <h3 className='text-3xl font-semibold' >Join Us Volunteer</h3>
          <h5 className='font-light text-sm text-gray-300' >Becoming a volunteer with Chioary means joining a dedicated team
          committed to making a difference.</h5>
          <button className='border border-red-600 text-white py-2 px-4 rounded-full flex items-center gap-2 mt-6' > 
        See More <span className='inline-block p-2 bg-red-600 rounded-full' ><FaArrowRight className='text-xl' /></span>
      </button>
          </div>
        </div>
        <div style={{backgroundImage: `url(${image2.src})`}} className="relative  text-center p-16  text-white w-full lg:w-1/2  rounded-2xl bg-cover bg-center" >
         <div className="absolute top-0 left-0 z-0 w-full h-full bg-red-600/30 rounded-2xl" >
          {/* <Image src={image} alt ="volunteer1" fill className='object-cover rounded-2xl' /> */}
         </div>
          <div className="relative z-10 flex flex-col items-center justify-center">
          <h3 className='text-3xl font-semibold' >Become Volunteer</h3>
          <h5 className='font-light text-sm text-gray-300' >Becoming a volunteer with Chioary means joining a dedicated team
          committed to making a difference.</h5>
          <button className='border border-red-600 text-white py-2 px-4 rounded-full flex items-center gap-2 mt-6' > 
        See More <span className='inline-block p-2 bg-red-600 rounded-full' ><FaArrowRight className='text-xl' /></span>
      </button>
          </div>
        </div>

       </div>
    </section>
  )
}

export default Volunteer
