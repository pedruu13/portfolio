"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    title: "Competências",
    items: ["Desenvolvimento Frontend", "Programação Criativa", "Engenharia de UI/UX", "WebGL & 3D", "Otimização de Performance"],
  },
  {
    title: "Certificações",
    items: ["AWS Certified Developer", "Google Cloud Professional", "Meta Front-End Developer"],
  },
  {
    title: "Cursos",
    items: ["Three.js Journey por Bruno Simon", "Práticas Criativas Awwwards", "Padrões Avançados de React"],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray(".exp-section");

    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-black text-white py-32 px-4 md:px-20 z-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-20 text-neutral-200">
          Credenciais
        </h2>

        <div className="flex flex-col gap-16 md:gap-24">
          {experienceData.map((section, idx) => (
            <div key={idx} className="exp-section border-t border-white/10 pt-8 flex flex-col md:flex-row gap-8 md:gap-20">
              <h3 className="text-2xl md:text-3xl font-medium uppercase tracking-widest text-neutral-500 w-full md:w-1/3">
                {section.title}
              </h3>
              
              <ul className="flex flex-col gap-6 w-full md:w-2/3">
                {section.items.map((item, i) => (
                  <li 
                    key={i} 
                    className="text-3xl md:text-5xl font-bold tracking-tight hover:text-neutral-400 transition-colors duration-300 cursor-default"
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
