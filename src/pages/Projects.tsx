import React from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Scripta",
      date: "2024-04-10",
      image: "assets/scripta.png",
      description: "Real-time word counting and text analytics. Transform writing into actionable insights with clarity and precision.",
      tags: ["Web App", "Analytics"],
      link: "https://scripta.landecs.org/"
    },
    {
      title: "Eldrex Blog",
      date: "2024-03-15",
      image: "https://eldrex.landecs.org/squad/new_updates.png",
      description: "Eldrex writings, reflections, and story.",
      tags: ["Blog", "Writing"],
      link: "https://eldrex-blog.vercel.app/"
    },
    {
      title: "LanQ",
      date: "2024-02-20",
      image: "assets/lanq.png",
      description: "LanQ – Private, offline QR codes with unlimited designs, no tracking, no limits.",
      tags: ["Web App", "Utility"],
      link: "https://lanq.landecs.org/"
    },
    {
      title: "TriLan C#",
      date: "2024-01-05",
      image: "assets/trilan.png",
      description: "TriLan C# – Code anywhere, run instantly, no setup, no limits.",
      tags: ["IDE", "C#"],
      link: "https://trilan-c.landecs.org/"
    },
    {
      title: "ClassPlay",
      date: "2023-11-12",
      image: "assets/classplay.png",
      description: "Turn classes into interactive games for groups, recitation, and presentations.",
      tags: ["Education", "Interactive"],
      link: "https://classplay.landecs.org/"
    },
    {
      title: "LanTask",
      date: "2023-10-08",
      image: "assets/lantask.png",
      description: "A smart task management app designed to streamline workflow, track progress, and boost productivity.",
      tags: ["Productivity", "Web App"],
      link: "https://lantask.landecs.org/"
    },
    {
      title: "Connect.me",
      date: "2023-09-01",
      image: "assets/eldrex-connect.png",
      description: "Eldrex personal public communication emails for educational and professional use.",
      tags: ["Communication"],
      link: "https://connect.landecs.org/"
    },
    {
      title: "LogicFlow",
      date: "2023-08-15",
      image: "assets/logicflow.png",
      description: "A modern logic tool built with React and Vite, supporting truth tables, symbolic input, and designed for learning and experimentation.",
      tags: ["Education", "Logic"],
      link: "https://math-mmw.vercel.app/"
    }
  ];

  return (
    <PageTransition>
      <section className="section-padding max-w-7xl mx-auto min-h-screen">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Projects</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="group"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-video overflow-hidden mb-8 bg-zinc-100 border border-border">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-border text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight group-hover:underline decoration-1 underline-offset-4">{project.title}</h2>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted group-hover:text-ink transition-colors" />
                </div>
                <p className="text-muted leading-relaxed max-w-lg">{project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
