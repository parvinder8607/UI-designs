import { Raleway } from 'next/font/google'
import React from 'react'


const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

const Home = () => {
  return (
    <section className={` ${raleway.className} w-full h-screen p-[10rem] bg-black`} >
        <div style={{backgroundColor: '#daf5d4'}} className="relative container mx-auto h-full  rounded-4xl ">

        <div className="curve-box-tl pr-2 pb-2 cursor-pointer">
            <div  className="w-full h-full  rounded-3xl ">
               
              
            </div>
        </div>
        <div className="curve-box-tr pl-2 pb-2 cursor-pointer">
            <div  className="w-full h-full  rounded-3xl ">
               
              
            </div>
        </div>
        <div className="curve-box-br pl-2 pt-2 cursor-pointer">
            <div  className="w-full h-full  rounded-3xl">
               
              
            </div>
        </div>
        <div className="curve-box-bl pr-2 pt-2 cursor-pointer">
            <div  className="w-full h-full  rounded-3xl">
               
              
            </div>
        </div>
        </div>
    </section>
  )
}

export default Home
