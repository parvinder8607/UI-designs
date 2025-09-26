'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const div1Ref = useRef();
  const div2Ref = useRef();
  const div3Ref = useRef();

  useEffect(() => {
    // Animation for the first div
    gsap.fromTo(
      div1Ref.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: div1Ref.current,
          start: "top 80%", // Trigger when the top of div1 hits 80% of the viewport height
          end: "top 50%",
          scrub: true, // Smooth scroll animation
        },
      }
    );

    // Animation for the second div
    gsap.fromTo(
      div2Ref.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: div2Ref.current,
          start: "top 75%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    // Animation for the third div
    gsap.fromTo(
      div3Ref.current,
      { opacity: 0, x: -300 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: div3Ref.current,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div style={{ height: "200vh" }}> {/* Increased height for scrolling */}
      <div
        ref={div1Ref}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "teal",
          margin: "50px auto",
        }}
      >
        Scroll-triggered Animation 1
      </div>

      <div
        ref={div2Ref}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "coral",
          margin: "50px auto",
        }}
      >
        Scroll-triggered Animation 2
      </div>

      <div
        ref={div3Ref}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "salmon",
          margin: "50px auto",
        }}
      >
        Scroll-triggered Animation 3
      </div>
    </div>
  );
};

export default ScrollAnimation;
