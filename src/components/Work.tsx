"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "AURA", category: "WebGL / Criativo", color: "bg-neutral-800" },
  { id: 2, title: "NEXUS", category: "E-Commerce / 3D", color: "bg-neutral-700" },
  { id: 3, title: "LUMINA", category: "Portfólio / Animação", color: "bg-neutral-600" },
  { id: 4, title: "OASIS", category: "App / Interação", color: "bg-neutral-500" },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".work-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          // Ensure the scroll distance is long enough (400vw)
          end: () => "+=" + (sliderRef.current?.offsetWidth || window.innerWidth * projects.length),
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black z-10">
      <div 
        ref={sliderRef}
        className="flex w-[400vw] h-full"
      >
        {projects.map((project, i) => (
          <div 
            key={project.id} 
            className="work-panel w-screen h-full flex flex-col justify-center items-center p-8 md:p-20 relative group"
          >
            {/* Background Placeholder */}
            <div className={`absolute inset-0 ${project.color} opacity-20 transition-opacity duration-500 group-hover:opacity-40`} />
            
            <div className="relative z-10 w-full max-w-5xl aspect-video bg-neutral-900 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-700 group-hover:scale-[1.02]">
              {/* Fake Image Placeholder */}
              <div className="text-white/20 text-9xl font-black mix-blend-overlay select-none">
                0{i + 1}
              </div>
            </div>
            
            <div className="relative z-10 w-full max-w-5xl mt-8 flex justify-between items-end">
              <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-lg uppercase tracking-widest">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
