"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (title.current) {
        const titleSplit = new SplitType(title.current, { types: "chars" });
        gsap.from(titleSplit.chars, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: "power4.out",
          delay: 0.2,
        });
      }

      gsap.from(subtitle.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.2,
      });
      
      gsap.from(".hero-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        delay: 1.5,
      });

      // Scroll parallax
      gsap.to(container.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={container} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="z-10 flex flex-col items-center text-center px-4">
        <h1 ref={title} className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-6 leading-none" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          Pedro Henrique
        </h1>
        <p ref={subtitle} className="text-lg md:text-2xl text-accent font-light tracking-widest uppercase mb-12">
          Desenvolvedor Full Stack • Desenvolvedor Criativo • Engenheiro de UI
        </p>
        <button className="hero-btn relative px-8 py-4 bg-transparent border border-accent/50 text-white rounded-full overflow-hidden group hover:border-accent transition-colors duration-300">
          <span className="relative z-10 flex items-center gap-2 tracking-wider uppercase text-sm">
            Ver Meus Trabalhos
          </span>
          <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
      </div>
    </section>
  );
}
