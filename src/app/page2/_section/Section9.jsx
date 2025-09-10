'use client'; 
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Section9() {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power1.out', duration: 1 },
    });

    // Springy downward motion with 3D effect
    tl.fromTo(
      [circle1Ref.current, circle2Ref.current],
      {
        y: -100,
        opacity: 0,
        transform: 'translateZ(0px)',
      },
      {
        y: 300,
        opacity: 1,
        transform: 'translateZ(100px) rotateX(15deg) scale(1.1)',
        stagger: 0.2,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
      }
    );

    // Extra movement/transform
    tl.to([circle1Ref.current, circle2Ref.current], {
      scale: 1,
      rotateY: 15,
      duration: 0.6,
      delay: 0.3,
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden flex justify-center items-start" style={{ perspective: '1000px' }}>
      <div
        ref={circle1Ref}
        className="w-24 h-24 rounded-full bg-red-500 absolute top-0 left-[40%]"
      />
      <div
        ref={circle2Ref}
        className="w-24 h-24 rounded-full bg-blue-500 absolute top-0 left-[50%]"
      />
    </div>
  );
}
