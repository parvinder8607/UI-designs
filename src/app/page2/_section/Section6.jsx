'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import image1 from "@/assets/page2/images/mimage1.jpg";
import image2 from "@/assets/page2/images/mimage2.jpg";
import image3 from "@/assets/page2/images/mimage3.jpg";
import image4 from "@/assets/page2/images/mimage4.jpg";
import image5 from "@/assets/page2/images/mimage5.jpg";
import image6 from "@/assets/page2/images/mimage6.jpg";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top', 
      end: 'bottom center',
      scrub: 1,
      onEnter: () => {
        gsap.set(wrapperRef.current, {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 50,
        });
      },
      onLeave: () => {
        gsap.set(wrapperRef.current, {
          position: 'static',
          transform: 'none',
        });
      },
      onUpdate: (self) => {
        
        const progress = self.progress;
        gsap.to(cardRef.current, {
          rotateY: 180 * progress,
          scale: 1 + 15 * progress, 
          ease: 'power3.out',
          overwrite: true,
        });
      },
      toggleActions: 'play none none reverse',
    });
  }, []);

  return (
    <div className=' overflow-hidden'>
    <section ref={containerRef} className='w-full h-screen relative '>
      <div className='container mx-auto h-full flex flex-col justify-center items-center'>
        <div className=" w-full text-center absolute top-0 left-1/2 -translate-x-1/2  -z-10">
            <h1 className='text-[108px]   ' >
                Crafting Digital Experiences
            </h1>
        </div>
        <div
          ref={wrapperRef}
          className='rf-card-wrapper w-[200px] h-[300px] relative z-0 [perspective:1000px]'
        >
          <div
            ref={cardRef}
            className='rf-card absolute top-0 left-0 z-0 w-full h-full   transform-3d '
          >
            <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 backface-hidden">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 p-8 ">
              <div className="col-span-1 row-span-1 border-2 border-white aspect-square shadow-2xl shadow-gray-500"></div>
              <div className="col-span-1 row-span-1 border-2 border-white aspect-square shadow-2xl shadow-gray-500"></div>
              <div className="col-span-1 row-span-1 border-2 border-white aspect-square shadow-2xl shadow-gray-500"></div>
              <div className="col-span-1 row-span-1 border-2 border-white aspect-square shadow-2xl shadow-gray-500"></div>
            </div>
            <div className="text-center">
                <h2 className="text-3xl font-light text-white">
                    Projects
                </h2>
            </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 backface-hidden rotate-y-180"></div>
          </div>
        </div>
      </div>
    </section>
    <section className='w-full h-fit relative z-60 p-4 '>
        <div className="">
            <h1 className='text-[108px] text-gray-200  ' >
                Interior Design
            </h1></div>
            <div className=" h-screen my-16 grid grid-cols-24 grid-rows-12 gap-4 perspective-distant ">
            <div className="relative col-span-11 col-start-1 row-span-12 row-start-1 cursor-pointer gal-box ">
             <Image src={image6} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
            <div className="relative col-span-3  row-span-6 row-start-1 cursor-pointer gal-box ">
             <Image src={image3} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
            <div className="relative col-span-3  row-span-6 row-start-1 cursor-pointer gal-box ">
             <Image src={image2} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
            <div className="relative col-span-6  row-span-6 row-start-7 cursor-pointer gal-box ">
             <Image src={image4} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
            <div className="relative col-span-7  row-span-6 row-start-1 cursor-pointer gal-box ">
             <Image src={image5} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
            <div className="relative col-span-7  row-span-6  cursor-pointer gal-box ">
             <Image src={image1} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
        
        </div>
    </section>
    </div>
  );
};

export default Section6;
