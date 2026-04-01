import React from'react';
import { motion} from'motion/react';
import { Link} from'react-router-dom';
import { Home, ArrowLeft } from'lucide-react';
import PageTransition from'../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="section-padding min-h-screen flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img 
            src="https://eldrex.landecs.org/logo/page_not_found.svg" 
            alt="Page Not Found" 
            className="w-64 h-64 mb-12 grayscale"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">404</h1>
          <p className="text-xl md:text-2xl text-muted mb-12 max-w-md leading-relaxed">
            The page you are looking for might have been moved, deleted, or never existed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink text-paper font-bold text-lg hover:bg-zinc-800 transition-all"
            >
              <Home className="w-5 h-5" /> Return Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-ink text-ink font-bold text-lg hover:bg-ink hover:text-paper transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> Go Back
            </button>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
