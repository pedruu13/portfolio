"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    // Split text into characters
    const text = new SplitType(textRef.current, { types: "chars,words" });

    // Initial state
    gsap.set(text.chars, { opacity: 0.2 });

    // Animate
    gsap.to(text.chars, {
      opacity: 1,
      stagger: 0.05,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    return () => {
      text.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-black py-20 px-4 md:px-20 z-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 
          ref={textRef}
          className="text-4xl md:text-7xl font-bold text-white leading-tight"
          style={{ fontKerning: "none" }}
        >
          Sou um artista digital e desenvolvedor criativo criando experiências web imersivas que mesclam design e engenharia. Meu foco é em movimento, interação e narrativa visual 3D.
        </h2>
      </div>
    </section>
  );
}
