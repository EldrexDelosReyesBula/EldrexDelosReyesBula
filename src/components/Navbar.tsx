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
 <nav className={`fixed w-full border-b border-border px-6 py-4 flex items-center justify-between z-50 top-0 transition-all duration-300 ${isScrolled ?'bg-white/80 backdrop-blur-md' :'bg-transparent'}`}>
 <Link to="/" className="flex items-center gap-3 group">
 <img 
 src="https://eldrex.landecs.org/logo/eldrex_bula_final_logo.svg" 
 alt="Eldrex Bula Logo" 
 className="h-10 w-auto"
 referrerPolicy="no-referrer"
 />
 <span className="font-sans font-bold text-xl tracking-tight text-ink">ELDREX BULA</span>
 </Link>
 
 {/* Desktop Nav */}
 <div className="hidden md:flex gap-8 font-sans font-medium text-sm tracking-tight">
 {navLinks.map((link) => (
 <Link 
 key={link.name} 
 to={link.path} 
 className={`hover:text-ink transition-all relative group ${location.pathname === link.path ?'text-ink' :'text-muted'}`}
 >
 {link.name}
 <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-ink transition-all duration-300 group-hover:w-full ${location.pathname === link.path ?'w-full' :''}`}></span>
 </Link>
 ))}
 </div>

 {/* Mobile Menu Toggle */}
 <button 
 className="md:hidden p-2 hover:bg-zinc-100 rounded-full transition-colors text-ink"
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 >
 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>
 </nav>

 {/* Mobile Menu Dropdown */}
 {mobileMenuOpen && (
 <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 font-sans font-bold text-2xl md:hidden">
 {navLinks.map((link) => (
 <Link 
 key={link.name} 
 to={link.path} 
 onClick={() => setMobileMenuOpen(false)} 
 className={`hover:text-ink transition-all ${location.pathname === link.path ?'text-ink' :'text-muted'}`}
 >
 {link.name}
 </Link>
 ))}
 </div>
 )}
 </>
 );
}
