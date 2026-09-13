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
      id="contato"
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
              href="mailto:pedromoreiraa1305@gmail.com"
              className="-m-4 block p-4 text-xl text-neutral-400 transition-colors duration-300 hover:text-white md:text-3xl"
            >
              pedromoreiraa1305@gmail.com
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-end justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center">
        <div className="flex gap-6 text-sm font-medium tracking-widest uppercase">
          <Magnetic>
            <a
              href="https://github.com/pedruu13"
              target="_blank"
              rel="noopener noreferrer"
              className="-m-2 block p-2 transition-colors hover:text-neutral-400"
            >
              GitHub
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/pedro-henrique-macedo-moreira-ba02741a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="-m-2 block p-2 transition-colors hover:text-neutral-400"
            >
              LinkedIn
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
