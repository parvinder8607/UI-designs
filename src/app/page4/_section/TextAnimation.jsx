"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const TextAnimation = () => {
  const container = useRef(null);
  const centerText = useRef(null);
  const centerText2 = useRef(null);
  const centerText3 = useRef(null);
  const centerText4 = useRef(null);
  const topText = useRef(null);
  const bottomText = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true,
      },
      defaults: { ease: "power3.inOut" },
    });
  
    tl.from(centerText.current, { opacity: 0, duration: 1 }, 0)
  
      .fromTo(topText.current, { yPercent: 100 }, { yPercent: 0, duration: 1 }, 0)
      .fromTo(bottomText.current, { yPercent: -100 }, { yPercent: 0, duration: 1 }, 0)
  
      .to([topText.current, bottomText.current], { z: 200, opacity: 0.3, duration: 2 }, "+=0.2")
      .to(centerText.current, { z: 50, filter: "blur(15px)", opacity: 0.3, duration: 1 }, "<")
  
      .to(centerText2.current, { opacity: 1, z: 0, duration: 1 }, "+=0.2")
      .to(centerText2.current, { z: 50, filter: "blur(15px)", opacity: 0.3, duration: 1 }, "+=0.5")
  
      .to(centerText3.current, { opacity: 1, z: 0, duration: 1 }, "<")
      .to(centerText3.current, { z: 50, filter: "blur(15px)", opacity: 0.3, duration: 1.5 }, "+=0.5")
  
      .to(centerText4.current, { opacity: 1, z: 0, duration: 1 }, "<")
      .to(centerText4.current, { z: 50, opacity: 1, duration: 1.5 }, "+=0.5");
  }, []);

  return (
    <section
      ref={container}
      className="w-full h-screen bg-black relative overflow-hidden"
    >
      <div className="w-full h-full flex justify-center items-center text-white perspective-[420px] transform-3d perspective-origin-[50%]   ">
        <div ref={topText} className=" immersive-text  ">
          <div className="immersive-text-inner">
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold"
            >
              Immersive
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold"
            >
              Immersive
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold"
            >
              Immersive
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold"
            >
              Immersive
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold"
            >
              Immersive
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold"
            >
              Immersive
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold"
            >
              Immersive
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold"
            >
              Immersive
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold"
            >
              Immersive
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold"
            >
              Immersive
            </h2>
          </div>
        </div>
        <div ref={bottomText} className="exper-text">
          <div className="exper-text-inner">
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold "
            >
              Experience
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold "
            >
              Experience
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold "
            >
              Experience
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold "
            >
              Experience
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold "
            >
              Experience
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold "
            >
              Experience
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold "
            >
              Experience
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold "
            >
              Experience
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold "
            >
              Experience
            </h2>
            <h2
              style={{ lineHeight: "1" }}
              className="uppercase text-[19vw] font-extrabold "
            >
              Experience
            </h2>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 perspective-[100px]">
          <div className=" depth-gradient "></div>
          <h2
            ref={centerText}
            style={{ lineHeight: "1" }}
            className="absolute z-[2] uppercase text-[9vw] font-extrabold text-emerald-300 "
          >
            I Love Crafting
          </h2>
          <h2
            ref={centerText2}
            style={{ lineHeight: "1" }}
            className="absolute z-[2] w-full opacity-0 uppercase translate-z-[-50vw] text-[9vw] font-extrabold text-emerald-300 text-center "
          >
            I'm Not Afraid
          </h2>
          <h2
            ref={centerText3}
            style={{ lineHeight: "1" }}
            className="absolute z-[2] w-full opacity-0 uppercase translate-z-[-100vw] text-[9vw] font-extrabold text-emerald-300 text-center "
          >
            Of Exploring
          </h2>
          <h2
            ref={centerText4}
            style={{ lineHeight: "1" }}
            className="absolute z-[2] w-full opacity-0 uppercase translate-z-[-150vw] text-[9vw] font-extrabold text-emerald-300 text-center "
          >
            New Things
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TextAnimation;
