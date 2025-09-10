'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import image from '@/assets/page2/images/image1.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Section3 = () => {

    const container = useRef(null)

    useGSAP(() =>{

        gsap.from('.grid-image', {
            y: 100,
            opacity: 0,
            duration: 2,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
                toggleActions: "play none none none",
               
            },
        })
    })



  return (
    <section className='w-full h-screen'>
        
        <div className=" ">
        <h1 className='text-[108px]  p-4' >
            Interior Design
        </h1>
        <div ref={container} className=" w-[50vw] mx-auto h-[60vh] grid grid-cols-4 relative">
         <div className="h-full  overflow-hidden relative">
            <div className=" grid-image  absolute w-[50vw] ">
                <Image src={image} alt='image' width={1000} height={1000} className='w-full h-full object-cover' />
            </div>
         </div>
         <div className="h-full  overflow-hidden relative ">
            <div className=" grid-image absolute w-[50vw] left-[-100%] ">
                <Image src={image} alt='image' width={1000} height={1000} className='w-full h-full object-cover' />
            </div>
         </div>
         <div className="h-full  overflow-hidden relative">
         <div className=" grid-image absolute w-[50vw] left-[-200%]  ">
                <Image src={image} alt='image' width={1000} height={1000} className='w-full h-full object-cover' />
            </div>
         </div>
         <div className="h-full  overflow-hidden relative">
         <div className=" grid-image absolute w-[50vw]  left-[-300%] ">
                <Image src={image} alt='image' width={1000} height={1000} className='w-full h-full object-cover' />
            </div>
         </div>
        </div>
        </div>
    </section>
  )
}

export default Section3
