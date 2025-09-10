import React from 'react'
import image from "@/assets/page5/images/banner.jpg"
import { GoClock } from 'react-icons/go'

const NeedHelp = () => {
  return (
    <section style={{backgroundImage:`url(${image.src})`}}  className='relative w-full bg-cover bg-center  py-32' >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
        <div className="relative z-10 text-white text-center">
          <span className='text-lg font-bold' >Need Help?</span>
          <h2 className=' max-w-[50%] mx-auto text-4xl font-bold mt-2' >Schedule a Check-Up or Get
          Emergency Support — Call Now!</h2>
          <div className=" mx-auto mt-8 w-fit bg-blue-600 text-white rounded-full flex gap-2 p-4">
            <div className="bg-green-400 rounded-full p-2 ">
                <GoClock className='text-4xl' />
            </div>
            <div className="text-2xl font-bold flex justify-center items-center ">
                +91 98765 43210
            </div>
        </div>
        </div>
    </section>
  )
}

export default NeedHelp
