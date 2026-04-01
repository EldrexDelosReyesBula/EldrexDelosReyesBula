import React, { useState} from'react';
import { Mail, Github, Facebook, Instagram, MessageCircle, Copy, CheckCircle2, ArrowRight, Coffee, BookOpen } from'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThreads, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  
  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const emails = [
    { type: "Educational", address: "ebula251056@navotaspolytechniccollege.edu.ph" },
    { type: "Personal", address: "eldrexdelosreyesbula@gmail.com" }
  ];

  const socials = [
    { name: "GitHub", icon: <Github className="w-5 h-5" />, link: "https://github.com/EldrexDelosReyesBula" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, link: "https://www.facebook.com/eldrex.landecs.org" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/landecs_ld" },
    { name: "Threads", icon: <FontAwesomeIcon icon={faThreads} className="w-5 h-5" />, link: "https://www.threads.com/@landecs_ld" },
    { name: "Bluesky", icon: <FontAwesomeIcon icon={faBluesky} className="w-5 h-5" />, link: "https://bsky.app/profile/eldrex.bsky.social" },
    { name: "NGL", icon: <MessageCircle className="w-5 h-5" />, link: "https://ngl.link/eldrex.me" },
    { name: "Support Me", icon: <Coffee className="w-5 h-5" />, link: "https://ko-fi.com/landecsorg" },
    { name: "Medium", icon: <BookOpen className="w-5 h-5" />, link: "https://medium.com/@eldrexdelosreyesbula" }
  ];

  return (
    <PageTransition>
      <section className="section-padding max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Get in touch</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">Contact</h1>
            <p className="text-xl text-muted leading-relaxed max-w-md mb-12">
              Have a project in mind or just want to say hello? Feel free to reach out through any of these channels.
            </p>
            
            <div className="space-y-8">
              {emails.map((email, index) => (
                <div key={index} className="group border-b border-border pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">{email.type}</span>
                    <button 
                      onClick={() => handleCopy(email.address)}
                      className="text-muted hover:text-ink transition-colors"
                    >
                      {copiedEmail === email.address ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <a 
                    href={`mailto:${email.address}`} 
                    className="text-2xl font-bold tracking-tight hover:underline decoration-1 underline-offset-4 break-all"
                  >
                    {email.address}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-zinc-50 p-12 border border-border"
          >
            <h3 className="text-xl font-bold mb-8 tracking-tight">Social Networks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border overflow-hidden">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-paper p-6 flex items-center justify-between group hover:bg-zinc-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-muted group-hover:text-ink transition-colors">{social.icon}</span>
                    <span className="font-bold text-sm tracking-tight">{social.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            <div className="mt-12 p-8 border border-dashed border-border">
              <p className="text-sm text-muted leading-relaxed">
                Sometimes social media platforms filter messages. For urgent inquiries or project proposals, please use my direct email addresses for the fastest response.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
