'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    title: 'Competências',
    items: [
      'Desenvolvimento Full-Stack',
      'JavaScript & TypeScript',
      'Python & Automação',
      'Java & OOP',
      'Banco de Dados (SQLite)',
    ],
  },
  {
    title: 'Certificações & Bootcamps',
    items: [
      'Bootcamp IA - DIO',
      'Formação Java Developer - DIO',
      'Projetos Open Source no GitHub',
    ],
  },
  {
    title: 'Formação',
    items: [
      'Tecnologia em Análise e Desenvolvimento de Sistemas',
      'UNINOVE (Jan 2023 - Jul 2025)',
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray('.exp-section') as HTMLElement[];

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 min-h-screen w-full bg-black px-4 py-32 text-white md:px-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-20 text-5xl font-bold tracking-tighter text-neutral-200 uppercase md:text-7xl">
          Credenciais
        </h2>

        <div className="flex flex-col gap-16 md:gap-24">
          {experienceData.map((section, idx) => (
            <div
              key={idx}
              className="exp-section flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:gap-20"
            >
              <h3 className="w-full text-2xl font-medium tracking-widest text-neutral-500 uppercase md:w-1/3 md:text-3xl">
                {section.title}
              </h3>

              <ul className="flex w-full flex-col gap-6 md:w-2/3">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-default text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-neutral-400 md:text-5xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
