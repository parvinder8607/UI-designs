'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'

const Section4 = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const rotations = [0, 90, 180, 270];

    gsap.utils.toArray('.drop-outer').forEach((el, i) => {
      gsap.fromTo(el,
        { rotation: 0,
            
         },
        {
          rotation: rotations[i],
          duration: 2,
          
          delay: i * 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",

        },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div className='w-full h-screen bg-black relative' ref={containerRef}>
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="relative flex">
          <div className="drop-outer"><div className="drop"></div></div>
          <div className="drop-outer"><div className="drop"></div></div>
          <div className="drop-outer"><div className="drop"></div></div>
          <div className="drop-outer"><div className="drop"></div></div>
        </div>
      </div>
    </div>
  )
}

export default Section4
