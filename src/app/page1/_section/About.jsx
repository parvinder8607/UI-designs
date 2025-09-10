import Image from 'next/image'
import React from 'react'
import about from '@/assets/page1/images/image3.jpg'
import { Inter } from 'next/font/google'



const inter = Inter({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600', '700'],
})

const About = () => {
  return (
    <section className={`${inter.className} w-full h-screen py-32`} >
        <div className="relative container mx-auto  h-full grid grid-cols-12 grid-rows-5 gap-4 ">
          <div className=" -z-10 absolute w-1/2 h-full  ">
           <div className="relative w-[90%] mx-auto aspect-square">
           <Image src={about} alt="about" fill className='absolute -z-10 object-cover w-[80%] mx-auto' />
            <div className="w-full h-full grid grid-cols-4 grid-rows-4 border-12 border-white">
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white bg-white"></div>
              <div className="   border-r-2 border-b-2 border-white bg-white "></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white"></div>
              <div className="   border-r-2 border-b-2 border-white bg-white"></div>
           </div>
            </div>
          </div>
          <div className="col-span-4 col-start-6 row-span-1  bg-white ">
            <h1 className='text-[128px] leading-[110%]  bg-white'>DESIGN</h1>
          </div>
          <div className="col-span-4 col-start-7 row-span-1 ">
          <h1 className='text-[128px] leading-[75%] '>CULTURE</h1>

          </div>
          <div className="col-span-3 col-start-7 row-span-2 row-start-4 flex flex-col justify-between ">
            <h3 className='text-[24px] max-w-[80%] leading-tight'>
              Delightful remarkably mr on announcing themselves entreaties favourable.
            </h3>
            <button className='bg-black w-fit px-5 py-3 text-white text-lg  font-light cursor-pointer ' >
              EXPLORE COLLECTION
            </button>
          </div>
          <div className="col-span-3 col-start-10  row-span-2 row-start-4 ">
            <p className='text-sm font-light max-w-[70%]'>
              of on affixed civility favourable. Sir joy northward sportsmen education.
      Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening.
            </p>
          </div>
          
        </div>
    </section>
  )
}

export default About
