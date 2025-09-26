'use client';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

const FlipAnimation = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // Shuffle the items
  const shuffleItems = () => {
    const state = Flip.getState('.item');
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffledItems);
    Flip.from(state, {
      duration: 1,
      ease: 'power2.inOut',
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-semibold mb-4">Flip Animation Example</h2>
      <button
        onClick={shuffleItems}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 transition duration-200 hover:bg-blue-400"
      >
        Shuffle Items
      </button>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="item bg-blue-600 text-white text-lg px-6 py-3 rounded-lg cursor-pointer transform transition duration-300 ease-in-out"
          >
            Item {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipAnimation;
