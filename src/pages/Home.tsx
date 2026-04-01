import React, { useState, useEffect} from'react';
import { Code, Layout, Smartphone, ArrowRight } from'lucide-react';
import { Link} from'react-router-dom';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';
import ParticleBackground from'../components/ParticleBackground';
import { BLOG_POSTS} from'../data';

export default function Home() {
  const [randomPosts, setRandomPosts] = useState<typeof BLOG_POSTS>([]);

  useEffect(() => {
    const shuffled = [...BLOG_POSTS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setRandomPosts(shuffled.slice(0, 3));
  }, []);

  return (
    <PageTransition>
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto relative overflow-hidden">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1 
            }}
            className="max-w-5xl"
          >
            <motion.h1 
              className="text-7xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.8] mb-12 tracking-tighter text-ink text-balance uppercase cursor-default"
              whileHover={{ 
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              MAKE SOMETHING BETTER.
            </motion.h1>
            <div className="flex flex-wrap gap-8">
              <Link 
                to="/projects" 
                className="group relative px-10 py-5 bg-ink text-paper font-bold text-xl rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <motion.span 
                  className="relative z-10 block"
                  whileHover={{ 
                    y: [0, -2, 2, -2, 0],
                    rotate: [0, -1, 1, -1, 0],
                    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  View Projects
                </motion.span>
                <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link 
                to="/contact" 
                className="group px-10 py-5 border-2 border-ink text-ink font-bold text-xl rounded-full hover:bg-ink hover:text-paper transition-all hover:scale-105 active:scale-95"
              >
                <motion.span
                  className="block"
                  whileHover={{ 
                    y: [0, -2, 2, -2, 0],
                    rotate: [0, 1, -1, 1, 0],
                    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  Contact Me
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative background elements to match screenshot */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-zinc-100 rounded-full -z-10 blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-zinc-100 rounded-full -z-10 blur-3xl opacity-40"></div>
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-zinc-50 rounded-full -z-10 blur-2xl opacity-30"></div>
      </section>

      {/* Services Section */}
      <section className="section-padding border-t border-border bg-zinc-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Expertise</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Services</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'UI/UX Design', icon: <Layout className="w-8 h-8" />, desc: 'Crafting intuitive and visually striking interfaces that prioritize user experience and fluid motion.' },
              { title: 'Web Development', icon: <Code className="w-8 h-8" />, desc: 'Building fast, responsive, and accessible websites using modern technologies and interactive elements.' },
              { title: 'App Design', icon: <Smartphone className="w-8 h-8" />, desc: 'Designing seamless mobile experiences that connect people and technology through thoughtful design.' }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                className="bg-paper p-12 border border-border hover:border-ink transition-all group hover:shadow-2xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              >
                <motion.div 
                  className="mb-10 p-4 w-fit bg-zinc-50 border border-border group-hover:bg-ink group-hover:text-paper transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">{service.title}</h3>
                <p className="text-muted text-lg leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Insights</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">From the blog</h2>
          </div>
          <a 
            href="https://eldrex-blog.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 font-bold text-xl hover:text-muted transition-colors"
          >
            View all posts <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {randomPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group"
            >
              <a href={`https://eldrex-blog.vercel.app/?post=${post.id}`} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-[16/10] overflow-hidden mb-8 bg-zinc-100 border border-border rounded-xl">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted mb-3 block">{post.date}</span>
                <h3 className="text-2xl font-bold mb-4 group-hover:underline decoration-2 underline-offset-8 tracking-tight">{post.title}</h3>
                <p className="text-muted text-lg line-clamp-2 leading-relaxed">{post.excerpt}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ink text-paper">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter uppercase">Having trouble reaching me?</h2>
            <p className="text-xl md:text-2xl mb-16 text-paper/70 leading-relaxed max-w-3xl mx-auto text-balance">
              Sometimes social media platforms filter messages. If you have an urgent inquiry or project proposal, use my direct contact form to ensure your message lands straight in my inbox.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-12 py-6 bg-paper text-ink font-bold text-2xl rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
            >
              Go to Contact Options
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
