
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import image from '@/assets/page6/home.jpg'



const Home = () => {
  return (
   <section   className='relative w-full h-screen flex flex-col gap-4 justify-center items-center  text-center' >
    <div style={{backgroundImage: `url(${image.src})`}} className="absolute w-full h-full bg-cover -z-10 saturate-0 ">
        <div className="absolute w-full h-full bg-black/60">

        </div>
    </div>
    <div className="relative z-0 flex items-center gap-4 text-red-600 ">
        <span className='inline-block w-10 h-0.5 bg-red-600' ></span> 
        Give Hope For Homeless 
        <span className='inline-block w-10 h-0.5 bg-red-600' ></span>
      </div>
      <h1 className=' max-w-[50%] mx-auto text-white text-[34px] lg:text-[56px] 2xl:text-[78px] font-bold leading-[1] ' >
        We Are Non Profit <span className='text-red-600' >Carity</span> Organization
      </h1>
      <button className='border border-red-600 text-white py-3 px-6 rounded-full flex items-center gap-2 mt-6' > 
        Donate Now <span className='inline-block p-2 bg-red-600 rounded-full' ><FaArrowRight className='text-2xl' /></span>
      </button>
   </section>
  )
}

export default Home
