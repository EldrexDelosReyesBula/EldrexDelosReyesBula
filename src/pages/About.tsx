import React from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function About() {
  const skills = [
    "JavaScript", "React", "Node.js", "Next.js", 
    "Angular", "Firebase", "Tailwind CSS", "TypeScript"
  ];

  return (
    <PageTransition>
      <section className="section-padding max-w-7xl mx-auto min-h-screen">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">The Story</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">About Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
          {/* Left: Photo */}
          <motion.div
            className="relative aspect-square bg-zinc-100 border border-border overflow-hidden rounded-[4rem]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="https://eldrex.landecs.org/squad/eldrex.png" 
              alt="Eldrex Delos Reyes Bula" 
              className="w-full h-full object-cover transition-all duration-700" 
              referrerPolicy="no-referrer" 
            />
          </motion.div>

          {/* Right: Story */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">My Story</h3>
              <p className="text-lg text-muted leading-relaxed">
                I'm Eldrex Delos Reyes Bula, a student who loves discovering new ideas and exploring the little things that make life meaningful. I enjoy learning, reflecting, and finding inspiration in the world around me. Every day is a chance to grow, try something new, and embrace the journey, even when it’s quiet or uncertain.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">What Drives Me</h3>
              <p className="text-lg text-muted leading-relaxed">
                Curiosity and a desire to understand how things work guide me. I try to see the beauty in small details and the lessons in everyday experiences. Life may not always move fast, but even stillness holds the seeds of growth and change.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">My Philosophy</h3>
              <p className="text-lg text-muted leading-relaxed italic border-l-2 border-ink pl-6 py-2">
                "When nothing moves, everything begins."
              </p>
              <p className="text-lg text-muted leading-relaxed">
                I believe that true beginnings often come from patience, reflection, and small steps. Every moment matters, and even when nothing seems to happen, it is the start of everything.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Tech Stack</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                className="bg-paper p-10 flex flex-col items-center justify-center gap-4 transition-colors group"
              >
                <div className="w-2 h-2 bg-ink rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="font-bold text-lg text-center">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
