'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (title.current) {
        const titleSplit = new SplitType(title.current, { types: 'chars' });
        gsap.from(titleSplit.chars, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: 'power4.out',
          delay: 0.2,
        });
      }

      gsap.from(subtitle.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2,
      });

      gsap.from('.hero-btn', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        delay: 1.5,
      });

      // Scroll parallax
      gsap.to(container.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={container}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="z-10 flex flex-col items-center px-4 text-center">
        <h1
          ref={title}
          className="mb-6 text-4xl leading-none font-black tracking-tighter uppercase md:text-6xl lg:text-8xl"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          Pedro Henrique
        </h1>
        <div
          ref={subtitle}
          className="mb-12 flex max-w-2xl flex-col items-center gap-4 text-center"
        >
          <p className="text-xl font-medium tracking-wide text-white md:text-2xl">
            Building modern digital experiences through code, motion and
            thoughtful design.
          </p>
          <p className="text-sm font-light text-neutral-400 md:text-base">
            Desenvolvedor Full Stack especializado em criar aplicações e
            experiências web modernas, combinando desenvolvimento, design e
            animações para entregar produtos rápidos, elegantes e funcionais.
          </p>
        </div>
        <button className="hero-btn border-accent/50 group hover:border-accent relative overflow-hidden rounded-full border bg-transparent px-8 py-4 text-white transition-colors duration-300">
          <span className="relative z-10 flex items-center gap-2 text-sm tracking-wider uppercase">
            Ver Meus Trabalhos
          </span>
          <div className="bg-accent/10 absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
        </button>
      </div>
    </section>
  );
}
