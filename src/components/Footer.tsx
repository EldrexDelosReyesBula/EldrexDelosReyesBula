import React from'react';
import { Link} from'react-router-dom';
import { useSettings} from'../contexts/SettingsContext';

export default function Footer() {
  const { analyticsEnabled, setAnalyticsEnabled} = useSettings();

  return (
    <footer className="border-t border-border bg-paper text-ink relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://eldrex.landecs.org/logo/eldrex_bula_final_logo.svg" 
                alt="Eldrex Bula Logo" 
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
              <span className="font-sans font-bold text-lg tracking-tight">ELDREX BULA</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              A modern, minimalist portfolio showcasing creative projects and technical expertise.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted">
              <li><Link to="/" className="hover:text-ink transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-ink transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-ink transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-ink transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-6">Resources</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted">
              <li><a href="https://eldrex-blog.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">Blog</a></li>
              <li><Link to="/quotes" className="hover:text-ink transition-colors">Quotes</Link></li>
              <li><Link to="/school" className="hover:text-ink transition-colors">School</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-6">Settings</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted uppercase tracking-widest">Analytics</span>
                <div className="flex bg-zinc-100 border border-border rounded-full p-0.5">
                  <button 
                    onClick={() => setAnalyticsEnabled(true)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${analyticsEnabled ?'bg-white text-ink shadow-sm' :'text-muted hover:text-ink'}`}
                  >
                    ON
                  </button>
                  <button 
                    onClick={() => setAnalyticsEnabled(false)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${!analyticsEnabled ?'bg-white text-ink shadow-sm' :'text-muted hover:text-ink'}`}
                  >
                    OFF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-muted">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© {new Date().getFullYear()} Eldrex Delos Reyes Bula. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-ink transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-ink transition-colors">Terms of Use</Link>
            <Link to="/copyright" className="hover:text-ink transition-colors">Copyright</Link>
            <Link to="/license" className="hover:text-ink transition-colors">License</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
