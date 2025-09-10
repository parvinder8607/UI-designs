"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Animate3D = () => {
  const container = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);

  useGSAP(() => {
    gsap.to(box1.current, {
      x: 100,
      rotate: 45,

      scrollTrigger: {
        trigger: container.current,
        start: "top top",

        pin: true,
      },
    });
    gsap.to(box2.current, {
      x: 100,
      rotate: 45,

      scrollTrigger: {
        trigger: container.current,
        start: "top -10%",

        pin: true,
      },
    });
  }, []);

  return (
    <section ref={container} className="w-full h-screen bg-black text-white">
      <div className="flex h-full">
        <div className="w-1/2 h-full border flex justify-center items-center">
          <div ref={box1} className="w-36 aspect-square bg-amber-200"></div>
        </div>
        <div className="w-1/2 h-full border flex justify-center items-center">
          <div ref={box2} className="w-36 aspect-square bg-blue-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Animate3D;
