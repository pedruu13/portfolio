"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Check if at the top
    if (latest <= 50) {
      setIsTop(true);
      setHidden(false);
    } else {
      setIsTop(false);
      // Hide if scrolling down, show if scrolling up
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isTop ? "bg-transparent py-8" : "bg-black/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter uppercase text-white">
          Pedro<span className="text-neutral-500">.</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Trabalhos</a>
          <a href="#" className="hover:text-white transition-colors">Sobre</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </nav>

        {/* Mobile Menu Button Placeholder */}
        <button className="md:hidden text-white uppercase text-sm tracking-widest font-medium">
          Menu
        </button>
      </div>
    </motion.header>
  );
}
