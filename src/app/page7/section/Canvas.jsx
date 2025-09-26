'use client';
import React, { useRef, useEffect, useState } from 'react';

function Canvas() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Mouse event listener
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a circle at mouse position
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, 30, 0, Math.PI * 2);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.closePath();

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return <canvas ref={canvasRef}></canvas>;
}

export default Canvas;
