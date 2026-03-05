import React from'react';
import { ArrowUpRight} from'lucide-react';
import { motion} from'motion/react';

interface ProjectCardProps {
 title: string;
 date: string;
 image: string;
 description: string;
 tags?: string[];
 link: string;
 className?: string;
}

export default function ProjectCard({ title, date, image, description, tags, link, className =''}: ProjectCardProps) {
 return (
 <motion.div 
 whileHover={{ y: -8, scale: 1.02}}
 transition={{ type:"spring", stiffness: 300, damping: 20}}
 className={`border-4 border-black bg-white shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#ff0557] :shadow-[12px_12px_0px_0px_#ff0557] hover:border-[#ff0557] flex flex-col transition-colors duration-300 group ${className}`}
 >
 {/* Title bar */}
 <div className="border-b-4 border-black group-hover:border-[#ff0557] flex items-center px-3 py-2 bg-[#dcdcdc] transition-colors duration-300">
 <div className="flex gap-1.5 mr-4">
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff6b6b]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ffb703]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#00e5ff]"></div>
 </div>
 <div className="text-xs font-bold font-mono truncate text-black">{date}-{title.toLowerCase().replace(/\s+/g,'-')}.exe</div>
 </div>
 {/* Content */}
 <div className={`p-0 border-b-4 border-black group-hover:border-[#ff0557] flex-grow flex flex-col transition-colors duration-300 relative overflow-hidden`}>
 <img src={image} alt={title} className={`w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105`} referrerPolicy="no-referrer" />
 {tags && (
 <div className="absolute top-4 left-4 flex flex-wrap gap-2">
 {tags.map(tag => (
 <span key={tag} className="bg-white border-2 border-black px-2 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_black] text-black">
 {tag}
 </span>
 ))}
 </div>
 )}
 </div>
 <div className="p-6 flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
 <p className="text-sm font-medium mb-6 flex-grow leading-relaxed font-body text-gray-700">{description}</p>
 <div>
 <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-4 border-black px-4 py-2 font-bold hover:bg-[#ff0557] :bg-[#ff0557] hover:text-white transition-colors shadow-[4px_4px_0px_0px_black] hover:shadow-[2px_2px_0px_0px_black] :shadow-[2px_2px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] text-black">
 View Project <ArrowUpRight className="w-5 h-5" />
 </a>
 </div>
 </div>
 </motion.div>
 );
}
