import React from'react';
import { motion} from'motion/react';
import { Link} from'react-router-dom';
import { Terminal, Home} from'lucide-react';
import PageTransition from'../components/PageTransition';

export default function NotFound() {
 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-[80vh] flex flex-col items-center justify-center relative z-10">
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
 <span>error_404.exe</span>
 </div>
 </div>
 </div>

 {/* Terminal Content */}
 <div className="p-8 md:p-12 flex flex-col gap-6 bg-[#111111] text-[#00e5ff] font-mono relative">
 <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
 
 <div className="relative z-10">
 <h1 className="text-6xl md:text-8xl font-black text-[#ff0557] mb-4">404</h1>
 <p className="text-xl mb-2">&gt; ERROR: Directory not found.</p>
 <p className="text-lg mb-8 text-white/80">&gt; The requested path could not be resolved on this server. The file might have been moved, deleted, or never existed.</p>
 
 <div className="flex flex-col sm:flex-row gap-4">
 <Link 
 to="/" 
 className="inline-flex items-center justify-center gap-2 border-4 border-[#00e5ff] bg-[#00e5ff] text-black px-6 py-3 font-bold font-sans text-lg transition-colors shadow-[6px_6px_0px_0px_rgba(0,229,255,0.3)] hover:bg-[#ff0557] hover:border-[#ff0557] hover:text-white hover:shadow-[6px_6px_0px_0px_rgba(255,5,87,0.3)] hover-target"
 >
 <Home className="w-5 h-5" /> Return to Root
 </Link>
 <button 
 onClick={() => window.history.back()}
 className="inline-flex items-center justify-center gap-2 border-4 border-[#00e5ff] bg-transparent text-[#00e5ff] px-6 py-3 font-bold font-sans text-lg transition-colors hover:bg-[#00e5ff]/10 hover-target"
 >
 Go Back
 </button>
 </div>
 </div>
 </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
