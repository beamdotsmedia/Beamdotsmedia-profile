import { motion } from 'motion/react';
import type { Project } from '../data/projects';

const CaseStudyBlock = ({ project, narrative }: { project: Project; narrative: string }) => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-10 items-center glass-card p-6 md:p-10 rounded-2xl border border-white/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-surface-container-highest">
        <img
          src={project.img}
          alt={`${project.title} - ${project.tag} case study by BeamDots Media`}
          loading="lazy"
          className="w-full h-full object-cover opacity-80 grayscale-[30%]"
        />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-primary text-surface text-[0.6rem] font-black uppercase tracking-[0.15em] rounded-full shadow-lg">
            {project.tag}
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-heading font-black mb-2 tracking-tight">{project.title}</h3>
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-black gold-gradient tracking-tighter">{project.metric}</span>
          <span className="text-[0.65rem] font-black uppercase tracking-widest text-on-surface-variant">{project.metricLabel}</span>
        </div>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-medium">
          {narrative}
        </p>
      </div>
    </motion.div>
  );
};

export default CaseStudyBlock;
