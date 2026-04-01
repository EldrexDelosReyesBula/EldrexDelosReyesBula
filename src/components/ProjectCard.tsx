import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
  tags?: string[];
  link: string;
  className?: string;
}

export default function ProjectCard({ title, date, image, description, tags, link, className = '' }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group bg-white border border-black/10 hover:border-black transition-all duration-300 flex flex-col rounded-2xl overflow-hidden ${className}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
        <motion.img 
          src={image} 
          alt={title} 
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          referrerPolicy="no-referrer" 
        />
        {tags && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="bg-black text-white text-[10px] uppercase tracking-widest px-2 py-1 font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold tracking-tight text-black group-hover:text-black/70 transition-colors">
            {title}
          </h3>
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-2">
            {date}
          </span>
        </div>
        <p className="text-sm font-medium mb-8 flex-grow leading-relaxed font-body text-gray-500">
          {description}
        </p>
        <div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group/link hover-target text-black"
          >
            View Project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
