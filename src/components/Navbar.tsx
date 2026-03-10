import React, { useState, useEffect} from'react';
import { Menu, X} from'lucide-react';
import { Link, useLocation} from'react-router-dom';
import { motion} from'motion/react';

export default function Navbar() {
 const [isScrolled, setIsScrolled] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const location = useLocation();

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
};
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
}, []);

 const navLinks = [
 { name:'Home', path:'/'},
 { name:'Projects', path:'/projects'},
 { name:'About', path:'/about'},
 { name:'School', path:'/school'},
 { name:'Quotes', path:'/quotes'},
 { name:'Contact', path:'/contact'},
];

 return (
 <>
 <nav className={`fixed w-full border-b-4 border-black px-6 py-4 flex items-center justify-between z-50 top-0 transition-colors duration-300 ${isScrolled ?'bg-white/95 /95 backdrop-blur-sm shadow-[0_4px_0_0_#111111]' :'bg-white'}`}>
 <Link to="/" className="flex items-center gap-4 hover-target group">
 <div className="relative w-12 h-12 [perspective:1000px]">
 <motion.div 
 className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
 >
 {/* Front: Logo Dots */}
 <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
 <div className="flex gap-1.5">
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff6b6b]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ffb703]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#00e5ff]"></div>
 </div>
 </div>
 {/* Back: Profile Pic */}
 <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center">
 <img 
 src="https://eldrex.landecs.org/squad/eldrex-hero.svg" 
 alt="Eldrex" 
 className="w-10 h-10 rounded-full border-2 border-black object-cover bg-white"
 referrerPolicy="no-referrer"
 />
 </div>
 </motion.div>
 </div>
 <span className="font-black text-2xl tracking-tighter text-black">EDB.</span>
 </Link>
 
 {/* Desktop Nav */}
 <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wide">
 {navLinks.map((link) => (
 <Link 
 key={link.name} 
 to={link.path} 
 className={`hover:text-[#ff0557] hover:underline decoration-4 underline-offset-8 transition-all hover-target ${location.pathname === link.path ?'text-[#ff0557] underline' :'text-black'}`}
 >
 {link.name}
 </Link>
 ))}
 </div>

 {/* Mobile Menu Toggle */}
 <button 
 className="md:hidden border-2 border-black p-1 hover:bg-[#ff0557] hover:text-white transition-colors hover-target text-black"
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 >
 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>
 </nav>

 {/* Mobile Menu Dropdown */}
 {mobileMenuOpen && (
 <div className="fixed inset-0 top-[76px] bg-white z-40 border-b-4 border-black flex flex-col items-center justify-center gap-8 font-black text-3xl uppercase md:hidden">
 {navLinks.map((link) => (
 <Link 
 key={link.name} 
 to={link.path} 
 onClick={() => setMobileMenuOpen(false)} 
 className={`hover:text-[#ff0557] hover:underline decoration-4 underline-offset-8 transition-all hover-target ${location.pathname === link.path ?'text-[#ff0557] underline' :'text-black'}`}
 >
 {link.name}
 </Link>
 ))}
 </div>
 )}
 </>
 );
}
