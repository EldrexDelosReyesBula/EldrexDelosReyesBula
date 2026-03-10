import React from'react';
import { motion} from'motion/react';
import { Link} from'react-router-dom';
import { ArrowUpRight, Users} from'lucide-react';
import PageTransition from'../components/PageTransition';

export default function School() {
 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen relative z-10">
 <motion.div
 className="flex items-center gap-4 mb-16"
 initial={{ opacity: 0, x: -20}}
 animate={{ opacity: 1, x: 0}}
 >
 <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black">Education</h1>
 <div className="h-2 flex-grow bg-[#ff0557] border-y-2 border-black hidden md:block"></div>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
 {/* NPC Card */}
 <motion.div
 initial={{ opacity: 0, y: 50}}
 animate={{ opacity: 1, y: 0}}
 className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#ff0557] :shadow-[12px_12px_0px_0px_#ff0557] hover:-translate-y-2 transition-all p-8 flex flex-col items-center text-center group relative"
 >
 <a href="https://navotaspolytechniccollege.edu.ph/" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 p-2 border-2 border-black rounded-full hover:bg-[#ff0557] :bg-[#ff0557] hover:text-white transition-colors hover-target text-black">
 <ArrowUpRight className="w-5 h-5" />
 </a>
 <div className="w-32 h-32 mb-6 border-4 border-black rounded-full overflow-hidden bg-[#f5f5f5] p-2 group-hover:border-[#ff0557] transition-colors">
 <img 
 src="https://navotaspolytechniccollege.edu.ph/wp-content/themes/yootheme/cache/66/Favicon-66de9ae4.webp" 
 alt="Navotas Polytechnic College Logo" 
 className="w-full h-full object-contain" 
 referrerPolicy="no-referrer" 
 />
 </div>
 <h2 className="text-3xl font-black mb-4 text-black">Navotas Polytechnic College</h2>
 <p className="font-body text-lg text-gray-700">My academic home where I pursue my degree and build the foundation of my technical knowledge.</p>
 </motion.div>

 {/* ICS Card */}
 <motion.div
 initial={{ opacity: 0, y: 50}}
 animate={{ opacity: 1, y: 0}}
 transition={{ delay: 0.1}}
 className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#00e5ff] :shadow-[12px_12px_0px_0px_#00e5ff] hover:-translate-y-2 transition-all p-8 flex flex-col items-center text-center group"
 >
 <div className="w-32 h-32 mb-6 border-4 border-black rounded-full overflow-hidden bg-[#f5f5f5] p-2 group-hover:border-[#00e5ff] transition-colors">
 <img 
 src="https://navotaspolytechniccollege.edu.ph/wp-content/themes/yootheme/cache/d3/s5-d3060735.webp" 
 alt="ICS Logo" 
 className="w-full h-full object-contain" 
 referrerPolicy="no-referrer" 
 />
 </div>
 <h2 className="text-3xl font-black mb-2 text-black">Integrated Computer Society</h2>
 <div className="inline-block border-2 border-black bg-[#00e5ff] px-3 py-1 font-bold font-mono text-sm mb-4 transform -rotate-2 text-black">
 Vice President
 </div>
 <p className="font-body text-lg text-gray-700">The official student organization for computer studies. A community of passionate tech enthusiasts and future innovators.</p>
 </motion.div>
 </div>

 {/* Community Section */}
 <motion.div
 className="flex items-center gap-4 mb-12"
 initial={{ opacity: 0, x: -20}}
 whileInView={{ opacity: 1, x: 0}}
 viewport={{ once: true}}
 >
 <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black">Community</h2>
 <div className="h-2 flex-grow bg-[#ffb703] border-y-2 border-black hidden md:block"></div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 50}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 className="border-4 border-black bg-[#ffb703] shadow-[12px_12px_0px_0px_#111111] p-8 md:p-12 relative overflow-hidden group"
 >
 <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="flex-1">
 <div className="flex items-center gap-4 mb-4">
 <div className="w-16 h-16 border-4 border-black bg-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_black]">
 <Users className="w-8 h-8 text-[#ff0557]" strokeWidth={2.5} />
 </div>
 <h3 className="text-4xl font-black font-sans text-black">Socratic Squad</h3>
 </div>
 <p className="text-xl font-bold font-body text-black/80 mb-6 max-w-2xl">
 A group of students who may seem ordinary, yet each carries a spark that makes them truly remarkable. Our connection goes beyond friendship.
 </p>
 <Link 
 to="/socratic-squad" 
 className="inline-flex items-center gap-2 border-4 border-black bg-white px-6 py-3 font-black text-lg shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] :shadow-[6px_6px_0px_0px_white] hover:-translate-y-1 transition-all hover:bg-[#ff0557] :bg-[#ff0557] hover:text-white :text-white hover-target text-black"
 >
 Meet the Squad <ArrowUpRight className="w-5 h-5" strokeWidth={3} />
 </Link>
 </div>
 </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
