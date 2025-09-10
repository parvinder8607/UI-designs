'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import image from '@/assets/page2/images/mimage6.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Section8 = () => {

    const container = useRef(null)
    const wrapper = useRef(null)
    const textRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() =>{

        gsap.to(wrapper.current, {
            y: 0,
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 25%",
                end: "top -15%",
                toggleActions: "play none none reverse",
                scrub: 1,
               
                }
        })
        gsap.to(textRef.current, {
            y: 0,
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 25%",
                end: "top -15%",
                toggleActions: "play none none reverse",
                scrub: 1,
               
                }
        })
        gsap.to(imageRef.current, {
            clipPath: 'inset(0% )',
            y: 0,
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 25%",
                end: "top -15%",
                toggleActions: "play none none reverse",
                scrub: 1,
               
                }
        })
    })

  return (
    <section ref={container} className='w-full h-screen bg-orange-200  rounded-tr-4xl rounded-tl-4xl flex justify-center items-center'>
        <div ref={wrapper} style={{transform: 'translate(0%, -75%)'}} className=" flex flex-col justify-center items-center">
        <div className="">
            <h1 ref={textRef} style={{transform: 'translate(0%, 400%)'}} className='text-[78px] leading-tight font-semibold' >
                Elegance in Design
            </h1>
        </div>
        <div ref={imageRef} style={{clipPath: 'inset(50%)', transform: 'translate(0%, 50%)'}} className="w-[40vw] aspect-video overflow-hidden relative">
            <Image src={image} alt='image' fill className=' object-cover' />
        </div>
        <div className="">
            <h1 className='text-[78px] leading-tight font-semibold' >    
                Embraces Innovation
            </h1>
        </div>
        </div>
    </section>
  )
}

export default Section8
