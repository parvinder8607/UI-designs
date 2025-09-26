'use client';
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollTextAnimation = () => {
  useEffect(() => {
    // MAIN TITLE: Animate the main title with rotation, scaling, and staggered fade-in
    gsap.fromTo(
      ".main-title",
      {
        opacity: 0,
        y: 100,
        scale: 0.5,
        rotation: 45,
        color: "#ff0000",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        color: "#4b7bec",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".main-title",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    // SECONDARY TEXT: Staggered animation with scaling and opacity change
    gsap.fromTo(
      ".secondary-text p",
      {
        opacity: 0,
        y: 50,
        scale: 0.3,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,  // Delay each line of text to make it appear one-by-one
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".secondary-text",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    // PARALLAX EFFECT: Background scrolls at a different speed than the content
    gsap.to(".scroll-container", {
      backgroundPosition: "0% 50%",  // Changes the background position as you scroll
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // CHARACTER REVEAL: Break down the text into characters and animate them with staggered effect
    gsap.fromTo(
      ".reveal-text span",
      {
        opacity: 0,
        y: 50,
        rotationX: 90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
        },
      }
    );

    // SVG PATH ANIMATION: Animate the SVG paths on scroll
    gsap.fromTo(
      ".path-animation",
      { strokeDasharray: "1000", strokeDashoffset: "1000" },
      {
        strokeDashoffset: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".path-container",
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1,
        },
      }
    );

    // BACKGROUND COLOR ANIMATION: Change background color based on scroll position
    gsap.to(".scroll-container", {
      backgroundColor: "#1a202c",  // Dark background as you scroll
      duration: 3,
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 50%",
        end: "bottom top",
        scrub: 1,
      },
    });

  }, []);

  return (
    <div className="scroll-container h-[300vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      {/* Main Title */}
      <h1 className="main-title text-6xl font-extrabold text-white tracking-tight text-center">
        Welcome to the Scroll-based Animation
      </h1>

      {/* Secondary Text with Stagger */}
      <div className="secondary-text mt-8 text-2xl font-semibold text-white text-center space-y-6">
        <p>Scroll down and discover the magic.</p>
        <p>Explore the dynamic effects triggered by your scroll.</p>
        <p>Stay engaged as the content comes to life!</p>
      </div>

      {/* Text Reveal Effect */}
      <div className="reveal-text mt-16 text-4xl font-bold text-white text-center">
        <p>
          <span>Unveil</span>
          <span> each</span>
          <span> word</span>
          <span> as</span>
          <span> you</span>
          <span> scroll</span>
        </p>
      </div>

      {/* SVG Path Animation */}
      <div className="path-container mt-16 w-full flex justify-center items-center">
        <svg className="w-1/2 h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
          <path
            className="path-animation"
            fill="none"
            stroke="white"
            strokeWidth="4"
            d="M10 80 Q 52.5 10, 95 80 T 190 80"
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollTextAnimation;
