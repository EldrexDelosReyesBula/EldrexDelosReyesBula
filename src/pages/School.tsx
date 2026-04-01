import React from'react';
import { motion} from'motion/react';
import { Link} from'react-router-dom';
import { ArrowUpRight, Users, GraduationCap } from'lucide-react';
import PageTransition from'../components/PageTransition';

export default function School() {
  return (
    <PageTransition>
      <section className="section-padding max-w-7xl mx-auto min-h-screen">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Academic Journey</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Education</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* NPC Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group border border-border p-12 hover:bg-zinc-50 transition-colors relative rounded-[3rem]"
          >
            <a href="https://navotaspolytechniccollege.edu.ph/" target="_blank" rel="noopener noreferrer" className="absolute top-8 right-8 text-muted hover:text-ink transition-colors">
              <ArrowUpRight className="w-6 h-6" />
            </a>
            <div className="w-24 h-24 mb-10 border border-border rounded-full overflow-hidden bg-white p-4 group-hover:scale-105 transition-transform">
              <img 
                src="https://navotaspolytechniccollege.edu.ph/wp-content/themes/yootheme/cache/66/Favicon-66de9ae4.webp" 
                alt="Navotas Polytechnic College Logo" 
                className="w-full h-full object-contain transition-all" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Navotas Polytechnic College</h2>
            <p className="text-muted text-lg leading-relaxed">My academic home where I pursue my degree and build the foundation of my technical knowledge.</p>
          </motion.div>

          {/* ICS Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group border border-border p-12 hover:bg-zinc-50 transition-colors rounded-[3rem]"
          >
            <div className="w-24 h-24 mb-10 border border-border rounded-full overflow-hidden bg-white p-4 group-hover:scale-105 transition-transform">
              <img 
                src="https://navotaspolytechniccollege.edu.ph/wp-content/themes/yootheme/cache/d3/s5-d3060735.webp" 
                alt="ICS Logo" 
                className="w-full h-full object-contain transition-all" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold tracking-tight">Integrated Computer Society</h2>
            </div>
            <span className="inline-block px-3 py-1 bg-ink text-paper text-[10px] font-bold uppercase tracking-widest mb-6">
              Vice President
            </span>
            <p className="text-muted text-lg leading-relaxed">The official student organization for computer studies. A community of passionate tech enthusiasts and future innovators.</p>
          </motion.div>
        </div>

        {/* Community Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Connections</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Community</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border p-12 md:p-20 bg-zinc-50 group rounded-[4rem]"
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 border border-border bg-white rounded-full flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold tracking-tight">Socratic Squad</h3>
              </div>
              <p className="text-xl text-muted leading-relaxed mb-10">
                A group of students who may seem ordinary, yet each carries a spark that makes them truly remarkable. Our connection goes beyond friendship.
              </p>
              <Link 
                to="/socratic-squad" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-paper font-bold text-lg hover:bg-zinc-800 transition-all rounded-full"
              >
                Meet the Squad <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <GraduationCap className="w-48 h-48 text-zinc-200" strokeWidth={0.5} />
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
