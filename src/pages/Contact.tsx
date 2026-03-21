import React, { useState} from'react';
import { Mail, Github, Facebook, Instagram, MessageCircle, Terminal, Copy, CheckCircle2} from'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThreads, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function Contact() {
 const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
 
 const handleCopy = (email: string) => {
 navigator.clipboard.writeText(email);
 setCopiedEmail(email);
 setTimeout(() => setCopiedEmail(null), 2000);
};

 const emails = [
 { type:"Educational", address:"ebula251056@navotaspolytechniccollege.edu.ph"},
 { type:"Personal", address:"eldrexdelosreyesbula@gmail.com"}
];

 const socials = [
 { name:"GitHub", icon: <Github className="w-6 h-6" />, link:"https://github.com/EldrexDelosReyesBula"},
 { name:"Facebook", icon: <Facebook className="w-6 h-6" />, link:"https://www.facebook.com/eldrex.landecs.org"},
 { name:"Instagram", icon: <Instagram className="w-6 h-6" />, link:"https://www.instagram.com/landecs_ld"},
 { name:"Threads", icon: <FontAwesomeIcon icon={faThreads} className="w-6 h-6" />, link:"https://www.threads.com/@landecs_ld"},
 { name:"Bluesky", icon: <FontAwesomeIcon icon={faBluesky} className="w-6 h-6" />, link:"#"},
 { name:"NGL", icon: <MessageCircle className="w-6 h-6" />, link:"https://ngl.link/eldrex.me"}
];

 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen relative z-10 flex flex-col items-center justify-center">
 <motion.div 
 className="w-full max-w-2xl border-4 border-black bg-[#111111] shadow-[16px_16px_0px_0px_#ff0557] flex flex-col relative overflow-hidden"
 initial={{ opacity: 0, y: 50, scale: 0.95}}
 animate={{ opacity: 1, y: 0, scale: 1}}
 transition={{ type:"spring", stiffness: 200, damping: 20}}
 >
 {/* Terminal Title Bar */}
 <div className="border-b-4 border-black flex items-center justify-between px-4 py-3 bg-[#dcdcdc]">
 <div className="flex items-center gap-3">
 <div className="flex gap-1.5">
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff6b6b]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ffb703]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#00e5ff]"></div>
 </div>
 <div className="flex items-center gap-2 text-sm font-bold font-mono text-black">
 <Terminal className="w-4 h-4" />
 <span>contact_me.exe</span>
 </div>
 </div>
 </div>

 {/* Terminal Content */}
 <div className="p-8 md:p-12 flex flex-col gap-12 bg-[#111111] text-[#00e5ff] font-mono relative">
 <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
 
 {/* Direct Comms */}
 <div className="relative z-10 flex flex-col gap-8">
 <div>
 <p className="text-xl mb-2">&gt; Initializing connection...</p>
 <p className="text-xl mb-8">&gt; Secure communication channels established.</p>
 
 <div className="flex flex-col gap-6 mb-12">
 {emails.map((email, index) => (
 <motion.div 
 key={index}
 whileHover={{ x: 4}}
 className="border-4 border-[#00e5ff] bg-[#1a1a1a] p-6 hover:border-[#ff0557] hover:shadow-[8px_8px_0px_0px_#ff0557] transition-all group"
 >
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-3 text-[#ff0557]">
 <Mail className="w-6 h-6" />
 <h3 className="text-lg font-bold font-sans uppercase tracking-wider">{email.type}</h3>
 </div>
 <button 
 onClick={() => handleCopy(email.address)}
 className="text-[#00e5ff] hover:text-[#ff0557] transition-colors p-2 border-2 border-transparent hover:border-[#ff0557] rounded-md hover-target"
 title="Copy to clipboard"
 >
 {copiedEmail === email.address ? (
 <CheckCircle2 className="w-5 h-5 text-green-400" />
 ) : (
 <Copy className="w-5 h-5" />
 )}
 </button>
 </div>
 <a href={`mailto:${email.address}`} className="text-white font-sans text-lg break-all hover:text-[#00e5ff] transition-colors hover:underline hover-target">
 {email.address}
 </a>
 </motion.div>
 ))}
 </div>

 <div className="border-t-2 border-dashed border-[#00e5ff]/30 pt-8">
 <p className="text-lg mb-6">&gt; Connect via social networks:</p>
 <div className="flex flex-wrap gap-4">
 {socials.map((social, index) => (
 <motion.a
 key={index}
 href={social.link}
 target="_blank"
 rel="noopener noreferrer"
 whileHover={{ y: -2}}
 className="flex items-center gap-2 border-2 border-[#00e5ff] px-4 py-2 hover:bg-[#ff0557] hover:border-[#ff0557] hover:text-white transition-colors text-white font-sans font-bold hover-target"
 >
 {social.icon}
 <span>{social.name}</span>
 </motion.a>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
