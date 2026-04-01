import React from 'react';
import { motion } from 'motion/react';

interface WindowCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
  linkText: string;
  linkUrl: string;
  className?: string;
  hideContent?: boolean;
}

export default function WindowCard({ title, date, image, description, linkText, linkUrl, className = '', hideContent = false }: WindowCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group bg-white border border-black/10 hover:border-black transition-all duration-300 flex flex-col ${className}`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${!hideContent ? 'aspect-[16/9]' : 'flex-grow'}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black text-white text-[10px] uppercase tracking-widest px-2 py-1 font-medium">
            {date}
          </span>
        </div>
      </div>

      {!hideContent && (
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-4 tracking-tight text-black group-hover:text-black/70 transition-colors">
            {title}
          </h3>
          <p className="text-sm font-medium mb-8 flex-grow leading-relaxed font-body text-gray-500 line-clamp-3">
            {description}
          </p>
          <div>
            <a 
              href={linkUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group/link hover-target text-black"
            >
              {linkText}
              <span className="w-8 h-[1px] bg-black group-hover/link:w-12 transition-all duration-300"></span>
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
}
