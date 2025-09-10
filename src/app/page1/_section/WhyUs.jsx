import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600', '700'],
})


const WhyUs = () => {
  return (
    <section className={`${inter.className} w-full h-screen `}>
        <div className="container mx-auto  h-full py-[48px] grid grid-cols-12 grid-rows-6 ">
            <div className="col-span-6 col-start-1 row-span-2 flex flex-col gap-6  ">
                <h2 className="text-[108px] leading-[100%] font-bold">Why <br /> Choose Us?</h2>
                <p className="text-[24px] ">We combine innovation, expertise, and dedication to deliver exceptional results that exceed expectations. Our passionate team works tirelessly to transform your vision into reality.</p>
                <button className='bg-black w-fit px-5 py-3 text-white text-lg  font-light cursor-pointer ' >
              EXPLORE COLLECTION
            </button>
            </div>
            <div className="col-span-6 col-start-7 row-start-3 row-span-4 flex flex-col   ">
                <div className="flex  items-end border-b font-extralight text-[54px] h-full">
                 <h1>Innovative Solutions</h1>
                </div>
                <div className="flex  items-end border-b font-extralight text-[54px] h-full">
                    <h1>Expert Team</h1>
                </div>
                <div className="flex  items-end border-b font-extralight text-[54px] h-full">
                    <h1>Quality Assurance</h1>
                </div>
                <div className="flex  items-end border-b font-extralight text-[54px] h-full">
                    <h1>24/7 Support</h1>
                </div>
            </div>
            
        </div>
    </section>
  )
}
export default WhyUs
