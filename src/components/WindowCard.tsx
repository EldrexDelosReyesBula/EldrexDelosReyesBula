import React from'react';
import { motion} from'motion/react';

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

export default function WindowCard({ title, date, image, description, linkText, linkUrl, className ='', hideContent = false}: WindowCardProps) {
 return (
 <motion.div 
 whileHover={{ y: -8, scale: 1.02}}
 transition={{ type:"spring", stiffness: 300, damping: 20}}
 className={`border-4 border-black bg-white shadow-[8px_8px_0px_0px_#ff0557] flex flex-col ${className} transition-transform hover:shadow-[12px_12px_0px_0px_#ff0557]`}
 >
 {/* Title bar */}
 <div className="border-b-4 border-black flex items-center px-3 py-2 bg-[#dcdcdc]">
 <div className="flex gap-1.5 mr-4">
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff6b6b]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ffb703]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#00e5ff]"></div>
 </div>
 <div className="text-xs font-bold font-mono truncate text-black">{date}-{title.toLowerCase().replace(/\s+/g,'-')}.exe</div>
 </div>
 {/* Content */}
 <div className={`p-0 ${!hideContent ?'border-b-4 border-black' :''} flex-grow flex flex-col`}>
 <img src={image} alt={title} className={`w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ${hideContent ?'h-full flex-grow' :'h-56'}`} referrerPolicy="no-referrer" />
 </div>
 {!hideContent && (
 <div className="p-6 flex flex-col flex-grow">
 <h3 className="text-2xl font-bold mb-3 line-clamp-2 text-black">{title}</h3>
 <p className="hidden md:block text-sm font-medium mb-6 flex-grow leading-relaxed font-body text-gray-700 line-clamp-4">{description}</p>
 <div>
 <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="inline-block border-4 border-black px-4 py-2 font-bold hover:bg-[#ff0557] hover:text-white transition-colors shadow-[4px_4px_0px_0px_black] hover:shadow-[2px_2px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover-target text-black">
 {linkText}
 </a>
 </div>
 </div>
 )}
 </motion.div>
 );
}
