'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'ALLIANCEA',
    category: 'Software / Desktop App',
    color: 'bg-neutral-800',
  },
  {
    id: 2,
    title: 'NEXUS',
    category: 'E-Commerce / 3D',
    color: 'bg-neutral-700',
  },
  {
    id: 3,
    title: 'LUMINA',
    category: 'Portfólio / Animação',
    color: 'bg-neutral-600',
  },
  {
    id: 4,
    title: 'OASIS',
    category: 'App / Interação',
    color: 'bg-neutral-500',
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.work-panel');

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          // Ensure the scroll distance is long enough (400vw)
          end: () =>
            '+=' +
            (sliderRef.current?.offsetWidth ||
              window.innerWidth * projects.length),
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 h-screen w-full overflow-hidden bg-black"
    >
      <div ref={sliderRef} className="flex h-full w-[400vw]">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="work-panel group relative flex h-full w-screen flex-col items-center justify-center p-8 md:p-20"
          >
            {/* Background Placeholder */}
            <div
              className={`absolute inset-0 ${project.color} opacity-20 transition-opacity duration-500 group-hover:opacity-40`}
            />

            <div className="relative z-10 flex aspect-video w-full max-w-5xl cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-neutral-900 transition-transform duration-700 group-hover:scale-[1.02]">
              {/* Fake Image Placeholder */}
              <div className="text-9xl font-black text-white/20 mix-blend-overlay select-none">
                0{i + 1}
              </div>
            </div>

            <div className="relative z-10 mt-8 flex w-full max-w-5xl items-end justify-between">
              <h3 className="text-4xl font-bold tracking-tighter text-white uppercase md:text-6xl">
                {project.title}
              </h3>
              <p className="text-lg tracking-widest text-neutral-400 uppercase">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
