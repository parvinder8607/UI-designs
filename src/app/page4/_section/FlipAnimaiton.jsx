"use client";
// components/FlipAnimation.jsx
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

const FlipAnimation = () => {
  const [items, setItems] = useState([1, 2, 7, 4, 5]);

  useEffect(() => {
    // Initial animation to make the items appear smoothly when the page loads
    gsap.from('.flip-item', {
      opacity: 0,
      y: -50,
      stagger: 0.1,
      duration: 0.5,
    });
  }, []);

  const handleFlip = () => {
    // Capture the initial state of the items before shuffling
    const state = Flip.getState('.flip-item');

    // Shuffle the items array
    setItems((prev) => prev.sort(() => Math.random() - 0.5));

    // Animate the flip transition after the items have been shuffled
    gsap.to('.flip-item', {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      onComplete: () => {
        // Flip back to the new positions
        Flip.from(state, {
          duration: 1,
          ease: 'power2.inOut',
        });
      },
    });
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flip-item w-20 h-20 flex items-center justify-center bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={handleFlip}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md"
      >
        Flip Items
      </button>
    </div>
  );
};

export default FlipAnimation;
