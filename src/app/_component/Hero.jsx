'use client'
import image1 from '@/assets/page2/images/mimage1.jpg'
import image2 from '@/assets/page2/images/mimage2.jpg'
import image3 from '@/assets/page2/images/mimage3.jpg'
import image4 from '@/assets/page2/images/mimage4.jpg'
import image5 from '@/assets/page2/images/mimage5.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { Raleway } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const raleway = Raleway({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800', '900'] })

gsap.registerPlugin(SplitText);
const Hero = () => {
    const container = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const text1 = useRef(null);
  const text2 = useRef(null);

  
  // GSAP animation setup
  useGSAP(() => {
      const tl = gsap.timeline();
      const split1 = new SplitText(text1.current, { type: 'words,chars' });
      const split2 = new SplitText(text2.current, { type: 'words,chars' });
      
      tl.from(cardRefs.current, {
      yPercent: 100,
      x: 0,
      rotate: 0,
      ease: 'power1.inOut',
      stagger: {
        each: 0.2,
      },
    });
    tl.to(container.current, {
        yPercent: 50,
        ease: 'power1.inOut',
    }
    , "+=0.5"
    )
    tl.from(split1.chars, {
        opacity: 0,
        y: 20,
        ease: 'power1.inOut',
        stagger: {
            each: 0.05,
        },
    }, "-=.2")
    tl.from(split2.chars, {
        opacity: 0,
        y: 20,
        ease: 'power1.inOut',
        stagger: {
            each: 0.05,
        },
    }, "+=0.3") 
  }, []);

  return (
    <section className={` ${raleway.className} 'bg-black h-screen'`} >
        <h3 ref={text1} className='text-white text-center text-[40px] pt-28' >Introducing</h3>
        <h1 ref={text2} className='text-white text-center text-[120px] leading-[1] font-bold ' >New Era of Web</h1>
        <div ref={container} className="absolute top-0 w-full h-screen  flex items-center justify-center ">
    
      <div
        ref={(el) => cardRefs.current.push(el)}
        style={{
          transform: 'translateX(-250%) translateY(40%) rotate(-45deg)',
        }}
        className="H_card overflow-hidden absolute w-1/8 h-1/3 bg-white rounded-3xl"
      >
        <Image src={image1} alt="Card Image 1" fill className="object-cover" priority />
      </div>

   
      <div
        ref={(el) => cardRefs.current.push(el)}
        style={{
          transform: 'translateX(-125%) translateY(-25%) rotate(-22.5deg)',
        }}
        className="H_card overflow-hidden absolute w-1/8 h-1/3 bg-white rounded-3xl"
      >
        <Image src={image2} alt="Card Image 2" fill className="object-cover" priority />
      </div>

    
      <div
        ref={(el) => cardRefs.current.push(el)}
        style={{
          transform: 'translateX(0%) translateY(-50%) rotate(0deg)',
        }}
        className="H_card overflow-hidden absolute w-1/8 h-1/3 bg-white rounded-3xl"
      >
        <Image src={image3} alt="Card Image 3" fill className="object-cover" priority />
      </div>

     
      <div
        ref={(el) => cardRefs.current.push(el)}
        style={{
          transform: 'translateX(125%) translateY(-25%) rotate(22.5deg)',
        }}
        className="H_card overflow-hidden absolute w-1/8 h-1/3 bg-white rounded-3xl"
      >
        <Image src={image4} alt="Card Image 4" fill className="object-cover" priority />
      </div>

      
      <div
        ref={(el) => cardRefs.current.push(el)}
        style={{
          transform: 'translateX(250%) translateY(40%) rotate(45deg)',
        }}
        className="H_card overflow-hidden absolute w-1/8 h-1/3 bg-white rounded-3xl"
      >
        <Image src={image5} alt="Card Image 5" fill className="object-cover" priority />
      </div>
    </div>
    </section>
  );
};

export default Hero;
