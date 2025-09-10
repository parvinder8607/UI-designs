'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/all';
import React, { useRef } from 'react'

gsap.registerPlugin(MotionPathPlugin);

const Section10 = () => {

    const container = useRef(null)
    const circle1 = useRef(null)
    const circle2 = useRef(null)


    useGSAP(()=>{

        const radius = 400;
        const steps = 200;
    
      
        const circle1Path = [];
        const circle2Path = [];
    
        for (let i = 0; i <= steps; i++) {
          const angle = (i / steps) * Math.PI * 2;
          circle1Path.push({
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
          });
          circle2Path.push({
            x: Math.cos(angle + Math.PI) * radius,
            y: Math.sin(angle + Math.PI) * radius,
          });
        }
    
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    
        tl.to(circle1.current, {
          duration: 3,
          motionPath: {
            path: circle1Path,
            curviness: 0,
            autoRotate: false,
          },
          ease: "power1.inOut",
        })
          .to(
            circle2.current,
            {
              duration: 3,
              motionPath: {
                path: circle2Path,
                curviness: 0,
                autoRotate: false,
              },
              ease: "power1.inOut",
            },
            "<"
          )
          .to(circle1.current, {
            x: 0,
            y: 0,
            duration: 1,
          })
          .to(circle2.current, {
            x: 0,
            y: 0,
            duration: 1,
          },"<")
          
       
    })



  return (
    <section ref={container} className='w-full h-screen flex justify-center items-center bg-black'>
        <div ref={circle1} style={{transformOrigin: '50%'}} className=" absolute w-10 aspect-square rounded-full bg-red-500 "></div>
        <div ref={circle2} style={{transformOrigin: '50%'}} className=" absolute w-10 aspect-square rounded-full bg-blue-500 "></div>
    </section>
  )
}

export default Section10
