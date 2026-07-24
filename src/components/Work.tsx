'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'ALLIANCEA',
    category: 'Software / Desktop App',
    color: 'bg-neutral-800',
    tags: ['HTML', 'JS', 'Node.js'],
    image: '/alliancea_print.png',
    description: 'Um sistema de gestão completo para joalherias. Permite o controle de estoque, vendas, impressão de recibos, emissão de NF-e e gerenciamento de clientes, tudo com uma interface otimizada para Desktop.',
  },
  {
    id: 2,
    title: 'Luíza & Luan',
    category: 'Casamento / Landing Page',
    color: 'bg-rose-900',
    tags: ['React', 'Next.js', 'Tailwind'],
    image: '/luelu_print.png',
    description: 'Site de casamento elegante com confirmação de presença (RSVP) e lista de presentes virtuais. Design clean e romântico, focado na experiência dos convidados.',
  },
  {
    id: 3,
    title: 'NEXUS',
    category: 'E-Commerce / 3D',
    color: 'bg-neutral-700',
    tags: ['React', 'Three.js'],
    image: '',
    description: 'Plataforma de e-commerce interativa com visualização 3D de produtos.',
  },
  {
    id: 4,
    title: 'LUMINA',
    category: 'Portfólio / Animação',
    color: 'bg-neutral-600',
    tags: ['Next.js', 'GSAP'],
    image: '',
    description: 'Portfólio interativo focado em animações fluidas e micro-interações.',
  },
  {
    id: 5,
    title: 'OASIS',
    category: 'App / Interação',
    color: 'bg-neutral-500',
    tags: ['React Native'],
    image: '',
    description: 'Aplicativo mobile com interface limpa e intuitiva para usuários.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Work() {
  return (
    <section className="relative z-10 w-full min-h-screen bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1.5px] w-6 bg-white/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Portfólio
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Projetos
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition-all duration-400 hover:-translate-y-1.5 hover:border-neutral-700 hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Thumbnail */}
              <div className="relative flex h-56 w-full items-center justify-center overflow-hidden bg-neutral-950">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                ) : (
                  <div className="text-4xl font-black text-white/10 select-none">
                    0{project.id}
                  </div>
                )}
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold tracking-tight text-white uppercase">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                    {project.category.split('/')[0].trim()}
                  </span>
                </div>
                
                <p className="mb-6 text-sm leading-relaxed text-neutral-400 flex-1">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="rounded-full bg-neutral-950 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-neutral-400 border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
