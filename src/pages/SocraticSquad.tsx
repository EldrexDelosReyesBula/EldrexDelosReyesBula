import React from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function SocraticSquad() {
 const members = [
 {
 name:"Eldrex Bula",
 role:"Tiger",
 year:"2023",
 image:"https://eldrex.landecs.org/squad/predators/tiger.png",
 color:"#ff0557"
},
 {
 name:"Ara Bella Rivera",
 role:"Fox",
 year:"2023",
 image:"https://eldrex.landecs.org/squad/predators/fox.png",
 color:"#ffb703"
},
 {
 name:"Jasmin Tegio",
 role:"Owl",
 year:"2023",
 image:"https://eldrex.landecs.org/squad/predators/owl.png",
 color:"#00e5ff"
},
 {
 name:"Gabryl Olegario",
 role:"Capybara",
 year:"2023",
 image:"https://eldrex.landecs.org/squad/predators/capybara.png",
 color:"#ff6b6b"
},
 {
 name:"Yrik Timosan",
 role:"Wolf",
 year:"2024",
 image:"https://eldrex.landecs.org/squad/predators/wolf.png",
 color:"#a2d2ff"
},
 {
 name:"Shereen Robredillo",
 role:"Eagle",
 year:"2024",
 image:"https://eldrex.landecs.org/squad/predators/eagle.png",
 color:"#cdb4db"
}
];

 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen relative z-10">
 <motion.div
 className="flex flex-col items-center text-center mb-16"
 initial={{ opacity: 0, y: -20}}
 animate={{ opacity: 1, y: 0}}
 >
 <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-black">Socratic Squad</h1>
 <div className="h-2 w-32 bg-[#ff0557] border-y-2 border-black mb-8"></div>
 <p className="text-2xl font-bold font-mono text-gray-600">One for all, all for one</p>
 </motion.div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
 <motion.div 
 className="prose prose-lg font-body text-gray-800 space-y-6"
 initial={{ opacity: 0, x: -20}}
 animate={{ opacity: 1, x: 0}}
 transition={{ delay: 0.2}}
 >
 <p>
 Socratic Squad is a group of students who may seem ordinary, yet each carries a spark that makes them truly remarkable. Behind their humor and quiet moments are talents and stories that make their bond something rare. Their connection goes beyond friendship, built on trust, shared laughter, and the comfort of being understood.
 </p>
 <p>
 Each member has their own way of shining, proving that growth happens even within familiar spaces. They live by the idea that"limit knows no bounds," finding meaning in learning from one another and in the memories they create together.
 </p>
 <p>
 Through thoughtful questions, honest talks, and small moments of reflection, they continue to inspire and uplift each other. Whether they are tired, hungry, or laughing over simple things, they remain united. The Socratic Squad isn't just a group of friends—it's a family that grows wiser and stronger with every shared experience.
 </p>
 </motion.div>

 <motion.div 
 className="prose prose-lg font-body text-gray-800 space-y-6"
 initial={{ opacity: 0, x: 20}}
 animate={{ opacity: 1, x: 0}}
 transition={{ delay: 0.3}}
 >
 <h2 className="text-3xl font-black font-sans mb-4 inline-block border-b-4 border-[#ff0557] pb-1 text-black">Our Characters</h2>
 <p>
 Each of our predator characters reflects the soul and silent strength we carry within Socratic Squad. The <strong className="text-black">Tiger</strong> stands firm, embodying leadership, silent passion, and courage even in stillness. The <strong className="text-black">Owl</strong> watches with quiet wisdom, guiding without needing attention, present in the dark when clarity is needed most.
 </p>
 <p>
 The <strong className="text-black">Capybara</strong>, often underestimated, holds the gift of patience, calmness, and adaptability, reminding us that gentleness doesn't mean weakness. The <strong className="text-black">Fox</strong> is clever, quick-witted, and full of heart, often the spark of laughter and brilliance when the group needs light.
 </p>
 <p>
 The <strong className="text-black">Eagle</strong> soars, not just to escape but to see beyond, always seeking truth, justice, and the bigger picture that many miss. The <strong className="text-black">Wolf</strong>, loyal and fierce, may walk alone at times but never forgets its pack, always ready to protect, to create, to fight for what matters.
 </p>
 <p className="font-bold italic text-black">
 Together, these characters aren't just roles or symbols. They're reflections of who we are, why we matter to each other, and how our individual strengths form something unbreakable when united.
 </p>
 </motion.div>
 </div>

 {/* Stacking Cards Section */}
 <div className="relative w-full max-w-4xl mx-auto h-[800px] md:h-[600px] flex flex-col items-center justify-center">
 {members.map((member, index) => (
 <motion.div
 key={index}
 className="absolute w-64 md:w-80 border-4 border-black bg-white p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group hover:z-50 transition-all cursor-pointer"
 style={{
 top: `${index * 10}%`,
 left: `${index % 2 === 0 ?'20%' :'50%'}`,
 transform: `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
 zIndex: index
}}
 whileHover={{ 
 scale: 1.1, 
 rotate: 0, 
 zIndex: 50,
 boxShadow: `16px 16px 0px 0px ${member.color}`
}}
 initial={{ opacity: 0, y: 100}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 transition={{ delay: index * 0.1, type:"spring", stiffness: 100}}
 >
 <div className="w-full aspect-square border-4 border-black mb-4 overflow-hidden bg-[#f5f5f5]">
 <img 
 src={member.image} 
 alt={member.name} 
 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
 referrerPolicy="no-referrer"
 />
 </div>
 <div className="text-center">
 <h3 className="text-xl font-black font-sans uppercase text-black">{member.name}</h3>
 <p className="font-mono font-bold mt-1" style={{ color: member.color}}>
 {member.role} • {member.year}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </section>
 </PageTransition>
 );
}
