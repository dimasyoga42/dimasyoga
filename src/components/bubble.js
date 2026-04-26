"use client";

import { useEffect, useRef } from "react";

const CursorBubble = () => {
  const bubbleRef = useRef(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const speed = 0.08;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      bubble.style.transform = `translate(${currentX}px, ${currentY}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={bubbleRef}
        className="
          pointer-events-none
          fixed top-0 left-0
          w-80 h-80
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-yellow-300/30
          blur-3xl
          z-0
        "
      />
    </>
  );
};

export default CursorBubble;
