"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[80vh] flex flex-col justify-between bg-black text-white px-4 md:px-20 pt-32 pb-10 z-10"
    >
      <div className="flex-1 flex flex-col justify-center">
        <h2 
          ref={textRef}
          className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-none"
        >
          Vamos Trabalhar<br/>Juntos
        </h2>
        <div className="mt-8 w-fit">
          <Magnetic>
            <a 
              href="mailto:hello@example.com" 
              className="text-xl md:text-3xl text-neutral-400 hover:text-white transition-colors duration-300 block p-4 -m-4"
            >
              hello@example.com
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-between items-end md:items-center gap-8 border-t border-white/10 pt-8">
        <div className="flex gap-6 text-sm uppercase tracking-widest font-medium">
          <Magnetic><a href="#" className="hover:text-neutral-400 transition-colors block p-2 -m-2">Twitter</a></Magnetic>
          <Magnetic><a href="#" className="hover:text-neutral-400 transition-colors block p-2 -m-2">LinkedIn</a></Magnetic>
          <Magnetic><a href="#" className="hover:text-neutral-400 transition-colors block p-2 -m-2">Instagram</a></Magnetic>
        </div>
        
        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </section>
  );
}
