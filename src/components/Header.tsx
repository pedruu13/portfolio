'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useMotionValueEvent(scrollY, 'change', (latest) => {
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
        hidden: { y: '-100%', opacity: 0 },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        isTop
          ? 'bg-transparent py-8'
          : 'border-b border-white/5 bg-black/80 py-4 shadow-lg backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="#"
          className="text-xl font-bold tracking-tighter text-white uppercase"
        >
          Pedro<span className="text-neutral-500">.</span>
        </a>

        <nav className="hidden gap-8 text-sm font-medium tracking-widest text-neutral-400 uppercase md:flex">
          <a href="#trabalhos" className="transition-colors hover:text-white">
            Trabalhos
          </a>
          <a href="#sobre" className="transition-colors hover:text-white">
            Sobre
          </a>
          <a href="#contato" className="transition-colors hover:text-white">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button Placeholder */}
        <button className="text-sm font-medium tracking-widest text-white uppercase md:hidden">
          Menu
        </button>
      </div>
    </motion.header>
  );
}
