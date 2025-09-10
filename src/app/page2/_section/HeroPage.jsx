"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { getTimeline } from "@/util/gsapTimeline";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import image1 from "@/assets/page2/images/image1.jpg";
import image2 from "@/assets/page2/images/image2.jpg";
import image3 from "@/assets/page2/images/image3.jpg";
import image4 from "@/assets/page2/images/image4.jpg";






const HeroPage = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const overleyRef = useRef(null);

  useGSAP(() => {
    const tl = getTimeline();

    const split = new SplitText(textRef.current, { type: "words, chars" });

    tl.to(overleyRef.current, {
      display: "none",
      duration: 0.5,
    });
    tl.from(split.chars, {
      y: "100%",
      duration: 0.5,
      ease: "power4.out",
      stagger: 0.15,
    });
    tl.to(
      imageRef.current,
      {
        clipPath: "inset(0% 0px 0px)",
        y: "0%",
        duration: 2,
        ease: "power4.out",
        stagger: 0.3,
      },
      "<"
    );
    tl.to(textRef.current, {
      fontSize: "4vw",
      duration: 1,
      ease: "power3.out",
    });
    tl.to(
      imageRef.current,
      {
        width: "23vw",
        duration: 1,
        ease: "power3.out",
      },
      "<"
    );
    tl.from(
      ".img-box",
      {
        y: "50%",
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.1,
      },
      "-=0.2"
    );
    tl.to(
      ".image1",
      {
        opacity: 0,
        duration: 0.1,
        
      }
    )
  });

  return (
    <section className={` w-full h-screen `}>
      <div
        ref={overleyRef}
        className="absolute w-full h-screen bg-white z-10"
      ></div>
      <div className=" overflow-hidden h-[47vh] ">
        <h1 ref={textRef} className="text-[25vw] leading-[100%] font-light ">
          LIMOFIA
        </h1>
      </div>
      <div className="flex   ">
        <div className="absolute  m-4 overflow-hidden h-[53vh] ">
          <div className="">
            <span>01</span>
            <div
              ref={imageRef}
              style={{ clipPath: "inset(40% 0px 0px" }}
              className="w-[97vw] shrink-0 bg-white"
            >
              <Image src={image1} alt="hero" width={1920} height={1080} />
            </div>
          </div>
        </div>
        <div className=" invisible m-4 overflow-hidden h-[53vh] ">
          <div className="">
            <span>01</span>
            <div className="">
              <Image src={image1} alt="hero" width={1920} height={1080} />
            </div>
          </div>
        </div>

        <div className="  img-box m-4 overflow-hidden h-[53vh] ">
          <div className="">
            <span>02</span>
            <div className="image1">
              <Image src={image2} alt="hero" width={1920} height={1080} />
            </div>
          </div>
        </div>
        <div className=" img-box m-4 overflow-hidden h-[53vh] ">
          <div className="">
            <span>03</span>
            <div className="">
              <Image src={image3} alt="hero" width={1920} height={1080} />
            </div>
          </div>
        </div>
        <div className=" img-box m-4 overflow-hidden h-[53vh] ">
          <div className="">
            <span>04</span>
            <div className="">
              <Image src={image4} alt="hero" width={1920} height={1080} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
