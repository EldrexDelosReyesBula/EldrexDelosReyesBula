import React from'react';
import { Smile} from'lucide-react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function About() {
 const skills = [
 { name:"JavaScript", color:"#f7df1e"},
 { name:"React", color:"#61dafb"},
 { name:"Node.js", color:"#339933"},
 { name:"Next.js", color:"#000000"},
 { name:"Angular", color:"#dd0031"},
 { name:"Firebase", color:"#ffca28"},
 { name:"Tailwind CSS", color:"#38bdf8"},
 { name:"TypeScript", color:"#3178c6"}
];

 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen relative z-10">
 <motion.div
 className="flex items-center gap-4 mb-16"
 initial={{ opacity: 0, x: -20}}
 animate={{ opacity: 1, x: 0}}
 >
 <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black">About Me</h1>
 <div className="h-2 flex-grow bg-[#ff0557] border-y-2 border-black hidden md:block"></div>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
 {/* Left: Photo/Illustration Window */}
 <motion.div
 className="border-4 border-black bg-[#f5f5f5] shadow-[12px_12px_0px_0px_#ff0557] flex flex-col transform -rotate-1 hover:rotate-0 transition-transform duration-300"
 initial={{ opacity: 0, scale: 0.9}}
 animate={{ opacity: 1, scale: 1}}
 transition={{ type:"spring", stiffness: 200, damping: 20}}
 >
 <div className="border-b-4 border-black flex items-center px-4 py-3 bg-[#dcdcdc]">
 <div className="flex gap-2 mr-4">
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff6b6b]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ffb703]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#00e5ff]"></div>
 </div>
 <div className="text-sm font-bold font-mono text-black">eldrex-profile.jpg</div>
 </div>
 <div className="p-8 flex justify-center items-center bg-dots aspect-square relative">
 <div className="w-64 h-64 rounded-full border-4 border-black bg-white flex items-center justify-center shadow-[8px_8px_0px_0px_#111111] overflow-hidden relative z-10">
 <img src="https://eldrex.landecs.org/squad/eldrex.png" alt="Eldrex Delos Reyes Bula" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
 </div>
 <div className="absolute bottom-12 right-12 bg-[#ffb703] border-4 border-black p-3 shadow-[4px_4px_0px_0px_black] rotate-12 z-20">
 <Smile className="w-8 h-8 text-black" strokeWidth={2.5} />
 </div>
 </div>
 </motion.div>

 {/* Right: Story */}
 <motion.div
 className="font-body text-lg space-y-10"
 initial={{ opacity: 0, x: 20}}
 animate={{ opacity: 1, x: 0}}
 transition={{ delay: 0.2}}
 >
 <div>
 <h3 className="text-3xl font-black font-sans mb-4 inline-block border-b-4 border-[#ff0557] pb-1 text-black">My Story</h3>
 <p className="leading-relaxed text-gray-800">
 I'm Eldrex Delos Reyes Bula, a student who loves discovering new ideas and exploring the little things that make life meaningful. I enjoy learning, reflecting, and finding inspiration in the world around me. Every day is a chance to grow, try something new, and embrace the journey, even when it’s quiet or uncertain.
 </p>
 </div>

 <div>
 <h3 className="text-3xl font-black font-sans mb-4 inline-block border-b-4 border-[#ff0557] pb-1 text-black">What Drives Me</h3>
 <p className="leading-relaxed text-gray-800">
 Curiosity and a desire to understand how things work guide me. I try to see the beauty in small details and the lessons in everyday experiences. Life may not always move fast, but even stillness holds the seeds of growth and change.
 </p>
 </div>

 <div>
 <h3 className="text-3xl font-black font-sans mb-4 inline-block border-b-4 border-[#ff0557] pb-1 text-black">My Philosophy</h3>
 <p className="leading-relaxed text-gray-800">
 I believe that true beginnings often come from patience, reflection, and small steps. Every moment matters, and even when nothing seems to happen, it is the start of everything. <strong className="text-black">“When nothing moves, everything begins.”</strong>
 </p>
 </div>
 </motion.div>
 </div>

 {/* Skills Section */}
 <motion.div
 initial={{ opacity: 0, y: 30}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 >
 <div className="flex items-center gap-4 mb-12">
 <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">Tech Stack</h2>
 <div className="h-2 flex-grow bg-black border-y-2 border-black hidden md:block"></div>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 {skills.map((skill, index) => (
 <motion.div
 key={index}
 whileHover={{ y: -5, scale: 1.05}}
 className="border-4 border-black bg-white p-6 flex flex-col items-center justify-center gap-4 shadow-[6px_6px_0px_0px_#111111] hover:shadow-[10px_10px_0px_0px_var(--hover-color)] :shadow-[10px_10px_0px_0px_var(--hover-color)] transition-all group cursor-none hover-target"
 style={{'--hover-color': skill.color} as React.CSSProperties}
 >
 <div
 className="w-12 h-12 rounded-full border-4 border-black group-hover:bg-[var(--hover-color)] transition-colors duration-300"
 style={{ backgroundColor: `${skill.color}20`}}
 ></div>
 <span className="font-bold text-lg text-center text-black">{skill.name}</span>
 </motion.div>
 ))}
 </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
