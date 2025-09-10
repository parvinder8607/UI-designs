import React from 'react'
import Image from 'next/image'
import image1 from '@/assets/page3/images/image1.jpg'
import image2 from '@/assets/page3/images/image2.jpg'
import image3 from '@/assets/page3/images/image3.jpg'
import image4 from '@/assets/page3/images/image4.jpg'
import { Raleway } from 'next/font/google'


const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});


const Home = () => {
  return (
    <section className={`${raleway.className} w-full h-screen`}>
      <div className=" container mx-auto h-full  flex gap-4 jub items-center">
        <div className="w-full  lg:w-1/2 h-full flex flex-col justify-center gap-2">
        <h1 className='text-[52px] leading-tight font-bold  max-w-[500px]'>
          Marketing Solution That Helps Business Grow
        </h1>
        <p className=' text-gray-500  max-w-[500px] '> 
          We help businesses achieve their goals through effective marketing strategies and innovative solutions that drive growth and success in today's competitive market.

        </p>
        <div className="w-full mt-8 flex gap-8">
          <button className='bg-black text-white px-4 py-2 rounded-md'>
            Get Started
          </button>
          <button className='bg-black text-white px-4 py-2 rounded-md'>
            Services
          </button>
        </div>
        </div>
        <div className="w-full lg:w-1/3 h-3/4 grid grid-cols-2 grid-rows-3 gap-4">
        <div className="relative col-span-1  row-span-2  ">
          <Image src={image1} alt='image' fill className=' object-cover rounded-full' />
        </div>
        <div className="relative col-span-1 row-start-3  row-span-1  ">
          <Image src={image2} alt='image' fill className=' object-cover object-center rounded-r-full rounded-bl-full' />
        </div>
        <div className="relative col-start-2 col-span-1 row-start-1  row-span-1  ">
          <Image src={image3} alt='image' fill className=' object-cover object-center rounded-r-full rounded-bl-full' />
        </div>
        <div className="relative col-span-1  row-span-2  ">
          <Image src={image4} alt='image' fill className=' object-cover rounded-full' />
        </div>
        </div>
      </div> 

        
    </section>
  )
}

export default Home
