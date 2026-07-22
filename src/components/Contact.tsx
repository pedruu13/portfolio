'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '@/components/Magnetic';

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
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 flex min-h-[80vh] w-full flex-col justify-between bg-black px-4 pt-32 pb-10 text-white md:px-20"
    >
      <div className="flex flex-1 flex-col justify-center">
        <h2
          ref={textRef}
          className="text-6xl leading-none font-black tracking-tighter uppercase md:text-[10vw]"
        >
          Vamos Trabalhar
          <br />
          Juntos
        </h2>
        <div className="mt-8 w-fit">
          <Magnetic>
            <a
              href="mailto:hello@example.com"
              className="-m-4 block p-4 text-xl text-neutral-400 transition-colors duration-300 hover:text-white md:text-3xl"
            >
              hello@example.com
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-end justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center">
        <div className="flex gap-6 text-sm font-medium tracking-widest uppercase">
          <Magnetic>
            <a
              href="#"
              className="-m-2 block p-2 transition-colors hover:text-neutral-400"
            >
              Twitter
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#"
              className="-m-2 block p-2 transition-colors hover:text-neutral-400"
            >
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#"
              className="-m-2 block p-2 transition-colors hover:text-neutral-400"
            >
              Instagram
            </a>
          </Magnetic>
        </div>

        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </section>
  );
}
