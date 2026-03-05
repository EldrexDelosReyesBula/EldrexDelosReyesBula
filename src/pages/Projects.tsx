import React from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Scripta",
      date: "2024-04-10",
      image: "/assets/scripta.png",
      description: "Real-time word counting and text analytics. Transform writing into actionable insights with clarity and precision.",
      tags: ["Web App","Analytics"],
      link: "https://scripta.landecs.org/"
    },
    {
      title: "Eldrex Blog",
      date: "2024-03-15",
      image: "/assets/new_updates.png",
      description: "Eldrex writings, reflections, and story.",
      tags: ["Blog","Writing"],
      link: "https://eldrex-blog.vercel.app/"
    },
    {
      title: "LanQ",
      date: "2024-02-20",
      image: "/assets/lanq.png",
      description: "LanQ – Private, offline QR codes with unlimited designs, no tracking, no limits.",
      tags: ["Web App","Utility"],
      link: "https://lanq.landecs.org/"
    },
    {
      title: "TriLan C#",
      date: "2024-01-05",
      image: "/assets/trilan.png",
      description: "TriLan C# – Code anywhere, run instantly, no setup, no limits.",
      tags: ["IDE","C#"],
      link: "https://trilan-c.landecs.org/"
    },
    {
      title: "ClassPlay",
      date: "2023-11-12",
      image: "/assets/classplay.png",
      description: "Turn classes into interactive games for groups, recitation, and presentations.",
      tags: ["Education","Interactive"],
      link: "https://classplay.landecs.org/"
    },
    {
      title: "LanTask",
      date: "2023-10-08",
      image: "/assets/lantask.png",
      description: "A smart task management app designed to streamline workflow, track progress, and boost productivity.",
      tags: ["Productivity","Web App"],
      link: "https://lantask.landecs.org/"
    },
    {
      title: "Connect.me",
      date: "2023-09-01",
      image: "/assets/eldrex-connect.png",
      description: "Eldrex personal public communication emails for educational and professional use.",
      tags: ["Communication"],
      link: "https://connect.landecs.org/"
    },
    {
      title: "LogicFlow",
      date: "2023-08-15",
      image: "/assets/logicflow.png",
      description: "A modern logic tool built with React and Vite, supporting truth tables, symbolic input, and designed for learning and experimentation.",
      tags: ["Education","Logic"],
      link: "https://math-mmw.vercel.app/"
    }
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black">Projects</h1>
          <div className="h-2 flex-grow bg-[#ff0557] border-y-2 border-black hidden md:block"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} className="h-full" />
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
