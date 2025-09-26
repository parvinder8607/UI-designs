"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";

  import image1 from "@/assets/page2/images/mimage1.jpg";
  import image2 from "@/assets/page2/images/mimage2.jpg";
  import image3 from "@/assets/page2/images/mimage3.jpg";
  import image4 from "@/assets/page2/images/mimage4.jpg";
  import image5 from "@/assets/page2/images/mimage5.jpg";
  import image6 from "@/assets/page2/images/mimage6.jpg";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Section5 = () => {
  const container = useRef(null);
  const slideRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".rt-card");
    const gap = 24; 
    const cardWidth = 400 + gap;
    const totalWidth = cards.length * cardWidth;
    const split = new SplitText(textRef.current, { type: "words,chars" });
    gsap.from(split.chars, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      stagger: {
        each: 0.02,  
        from: "center",
      },
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 25%",
        toggleActions: "play none none reverse",

      }
    });

    const horizontalTween = gsap.fromTo(
      slideRef.current,
      { x: window.innerWidth }, 
      {
        x: -totalWidth, 
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${totalWidth + window.innerWidth}`, 
          scrub: 1,
          pin: true,
          anticipatePin: 1,
         
        },
      }
    );
  
    
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { rotate: "3deg", y: 200, rotateY: "45deg" },
        {
          rotate: "0deg",
          y: 0,
          rotateY: "0deg",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalTween,
            start: "left right",
            end: "left center",
            scrub: true,
           
          },
        }
      );
  
      gsap.fromTo(
        card,
        { rotate: "0deg", y: 0, rotateY: "0deg" },
        {
          rotate: "-3deg",
          y: 200,
          rotateY: "-45deg",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalTween,
            start: "right center",
            end: "right left",
            scrub: true,
           
          },
        }
      );
    });
  });
  
  

  return (
    <section
      ref={container}
      className="relative w-full h-screen flex items-center overflow-hidden "
      style={{ perspective: "1000px" }}
    >
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 ref={textRef} className="text-[98px]  text-center">
                Unleash the Magic of Motion
            </h1>
        </div>
      <div
        ref={slideRef}
        className="flex gap-6"
        style={{ willChange: "transform" }}
      >
        {[image1,image2, image3, image4, image5, image6].map((img, i) => (
          <div
            key={i}
            className="rt-card relative w-[400px] h-[600px] shrink-0 rounded-xl shadow-xl "
          >
            <Image src={img} alt={`Image ${i + 1}`} fill className="object-cover rounded-xl" />

            </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
