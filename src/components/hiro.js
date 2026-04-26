"use client";

import { useEffect, useRef } from "react";
import { animate, splitText, stagger } from "animejs";

const HiroSaction = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = splitText(textRef.current, {
      words: { wrap: "clip" },
    });

    const { words } = split;

    animate(words, {
      y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 750, ease: "in(3)" }],
      duration: 850,
      ease: "in",
      delay: stagger(200),
      loop: true,
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1
              ref={textRef}
              className="lg:text-5xl text-3xl font-bold overflow-hidden"
            >
              Hello World
            </h1>

            <p className="py-6">
              Hello, let me introduce myself. I'm Dimas Yoga Kurniawan, a
              student at a university in Lampung. I enjoy programming, and
              welcome to my personal website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiroSaction;
