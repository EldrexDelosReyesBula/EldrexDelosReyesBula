import React from'react';
import { ArrowUpRight, BarChart2} from'lucide-react';
import { Link} from'react-router-dom';
import { useSettings} from'../contexts/SettingsContext';

export default function Footer() {
 const { analyticsEnabled, setAnalyticsEnabled} = useSettings();

 return (
 <footer className="border-t-4 border-black bg-[#111111] text-white relative z-10">
 <div className="h-2 w-full bg-[#ff0557] border-b-4 border-black"></div>
 <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
 <h2 className="text-3xl font-black mb-6 tracking-tight">Quick links</h2>
 <div className="grid grid-cols-1 md:grid-cols-4 border-4 border-white bg-[#1e1e1e] shadow-[8px_8px_0px_0px_#ff0557]">
 {['Blog','Projects','About','Contact'].map((link, i) => (
 link ==='Blog' ? (
 <a key={link} href="https://eldrex-blog.vercel.app/" target="_blank" rel="noopener noreferrer" className={`flex justify-between items-center p-5 font-bold hover:bg-[#ff0557] hover:text-white transition-colors hover-target ${i !== 3 ?'border-b-4 md:border-b-0 md:border-r-4 border-white' :''}`}>
 <span className="text-lg">{link}</span>
 <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
 </a>
 ) : (
 <Link key={link} to={`/${link.toLowerCase()}`} className={`flex justify-between items-center p-5 font-bold hover:bg-[#ff0557] hover:text-white transition-colors hover-target ${i !== 3 ?'border-b-4 md:border-b-0 md:border-r-4 border-white' :''}`}>
 <span className="text-lg">{link}</span>
 <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
 </Link>
 )
 ))}
 </div>

 {/* Settings Section */}
 <div className="mt-16 pt-8 border-t-2 border-dashed border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
 
 {/* Analytics Toggle */}
 <div className="flex flex-col gap-2">
 <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Analytics</span>
 <div className="flex bg-[#1e1e1e] border-2 border-gray-700 rounded-full p-1">
 <button 
 onClick={() => setAnalyticsEnabled(true)}
 className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors hover-target ${analyticsEnabled ?'bg-[#ffb703] text-black' :'text-gray-400 hover:text-white'}`}
 >
 <BarChart2 className="w-4 h-4" /> On
 </button>
 <button 
 onClick={() => setAnalyticsEnabled(false)}
 className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors hover-target ${!analyticsEnabled ?'bg-gray-600 text-white' :'text-gray-400 hover:text-white'}`}
 >
 Off
 </button>
 </div>
 </div>

 </div>

 <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-body text-gray-400">
 <div className="flex flex-col items-center md:items-start gap-1">
 <p>© {new Date().getFullYear()} Eldrex Delos Reyes Bula. All rights reserved.</p>
 <p className="text-xs">Copyright to Mackenzie Child for its free design template inspirations.</p>
 </div>
 <div className="flex flex-wrap justify-center gap-4">
 <Link to="/privacy-policy" className="hover:text-[#ff0557] transition-colors hover-target">Privacy Policy</Link>
 <Link to="/terms-of-use" className="hover:text-[#ff0557] transition-colors hover-target">Terms of Use</Link>
 <Link to="/copyright" className="hover:text-[#ff0557] transition-colors hover-target">Copyright</Link>
 <Link to="/license" className="hover:text-[#ff0557] transition-colors hover-target">License</Link>
 </div>
 </div>
 </div>
 </footer>
 );
}
