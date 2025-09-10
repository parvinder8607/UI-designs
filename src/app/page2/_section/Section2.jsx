"use client";
import Image from "next/image";
import React, { useRef } from "react";
import image from "@/assets/page2/images/image2.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getTimeline } from "@/util/gsapTimeline";
import { SplitText } from "gsap/SplitText";



const Section2 = () => {
  const imageRef = useRef(null);
  const container = useRef(null);
  const textRef = useRef(null);
  const textdRef = useRef(null);

  useGSAP(() => {
    const tl = getTimeline();
    const split = new SplitText(textRef.current, { type: "words, chars" });
    const splitd = new SplitText(textdRef.current, { type: "words, chars" });

    tl.to(
      imageRef.current,
      {
        opacity: 1,
        duration: 0.1,
        ease: "power3.out",
      },
      "-=0.2"
    );

    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      width: "auto",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 3,
      },
    });

    gsap.from(split.words, {
      y: 50,
      opacity: 0,
      filter: "blur(10px)",
      duration: 2,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 25%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(splitd.words, {
      y: 50,
      opacity: 0,
      filter: "blur(10px)",
      duration: 2,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 20%",
        toggleActions: "play none none none", 
      },
    });
  });

  return (
    <section
      ref={container}
      className={` w-full h-screen p-4 flex justify-end items-center `}
    >
      <div className="w-1/2">
        <h1 ref={textRef} className="text-6xl font-bold">
          Elevate Your Space with Our Luxurious Furniture
        </h1>
        <span ref={textdRef} className="block text-2xl mt-4 ">
          Transform your living space into a masterpiece of modern design. Where
          comfort meets sophistication, and every detail tells your unique
          story.
        </span>
      </div>
      <div className="1/2">
      <div
        ref={imageRef}
        style={{
          transform: "translate(-214.7%, -256.7%)",
          width: "23.1vw",
          opacity: 0,
        }}
        className="w-1/2"
      >
        <Image
          src={image}
          alt="section2"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div></div>
    </section>
  );
};

export default Section2;
