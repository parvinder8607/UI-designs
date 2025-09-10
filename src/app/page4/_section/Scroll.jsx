'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollMultiAnimation = () => {
  const sectionRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: '+=500', // or 'bottom top'
          scrub: true,
        },
      });

      tl.to(box1Ref.current, { x: 200, duration: 1 })
        .to(box2Ref.current, { x: 200, duration: 1 }, "<0.5") // starts 0.5s after box1
        .to(box3Ref.current, { x: 200, duration: 1 }, "<0.5");
    }, sectionRef);

    return () => ctx.revert(); // kills all animations/tweens created inside this context
  }, []);

  return (
    <section ref={sectionRef} style={{ height: '200vh', padding: '50px' }}>
      <div
        ref={box1Ref}
        style={{
          width: '100px',
          height: '100px',
          background: 'tomato',
          marginBottom: '20px',
        }}
      >
        Box 1
      </div>
      <div
        ref={box2Ref}
        style={{
          width: '100px',
          height: '100px',
          background: 'skyblue',
          marginBottom: '20px',
        }}
      >
        Box 2
      </div>
      <div
        ref={box3Ref}
        style={{
          width: '100px',
          height: '100px',
          background: 'limegreen',
        }}
      >
        Box 3
      </div>
    </section>
  );
};

export default ScrollMultiAnimation;
