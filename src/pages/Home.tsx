import React, { useState, useEffect} from'react';
import { Code, Layout, Smartphone, Smile, Terminal} from'lucide-react';
import { Link} from'react-router-dom';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';
import WindowCard from'../components/WindowCard';
import { BLOG_POSTS} from'../data';
import { useSettings} from'../contexts/SettingsContext';

export default function Home() {
 const [randomPosts, setRandomPosts] = useState<typeof BLOG_POSTS>([]);
 const { t} = useSettings();

 // Shuffle and select 3 random blog posts on every refresh
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
 {/* Hero Section */}
 <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[90vh] relative z-10">
 <motion.div
 initial={{ opacity: 0, x: -50}}
 animate={{ opacity: 1, x: 0}}
 transition={{ duration: 0.6, delay: 0.2}}
 >
 <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6 tracking-tight text-black">
 {t('home.hello')}<br />{t('home.iam')}
 </h1>
 <p className="text-xl font-medium mb-8 max-w-md leading-relaxed font-body text-gray-700">
 {t('home.subtitle')}
 </p>
 <div className="flex flex-wrap gap-4">
 <Link to="/projects" className="border-4 border-black px-8 py-3 font-bold shadow-[6px_6px_0px_0px_#111111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#111111] :shadow-[4px_4px_0px_0px_#ffffff] transition-all bg-[#ff0557] text-white text-lg hover-target">
 {t('home.viewProjects')}
 </Link>
 <Link to="/contact" className="border-4 border-black px-8 py-3 font-bold shadow-[6px_6px_0px_0px_#ff0557] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#ff0557] transition-all bg-white text-black text-lg hover-target">
 {t('home.contactMe')}
 </Link>
 </div>
 </motion.div>
 <motion.div 
 className="relative w-full aspect-square flex items-center justify-center"
 initial={{ opacity: 0, scale: 0.8}}
 animate={{ opacity: 1, scale: 1}}
 transition={{ duration: 0.6, delay: 0.4}}
 >
 {/* Main Computer Illustration */}
 <div className="w-full max-w-md relative z-10 flex flex-col items-center justify-center transition-transform hover:-translate-y-2 duration-300">
 <img src="https://eldrex.landecs.org/squad/eldrex-hero.svg" alt="Eldrex Hero" className="w-full h-auto drop-shadow-[16px_16px_0px_#ff0557]" referrerPolicy="no-referrer" />
 </div>
 
 {/* Floating Elements */}
 <motion.div 
 className="absolute -left-4 top-1/4 z-20"
 animate={{ y: [0, -20, 0]}}
 transition={{ repeat: Infinity, duration: 3, ease:"easeInOut"}}
 >
 <div className="w-20 h-20 bg-[#00e5ff] border-4 border-black shadow-[8px_8px_0px_0px_black] rounded-full flex items-center justify-center -rotate-12">
 <Code className="w-10 h-10 text-black" strokeWidth={2.5} />
 </div>
 </motion.div>

 {/* Decorative dots */}
 <div className="absolute top-12 right-12 w-4 h-4 bg-black rounded-full"></div>
 <div className="absolute top-24 right-4 w-3 h-3 bg-[#ffb703] rounded-full border-2 border-black"></div>
 <div className="absolute bottom-24 left-12 w-5 h-5 bg-[#ff0557] rounded-full border-2 border-black"></div>
 </motion.div>
 </section>

 {/* Services Section */}
 <section className="py-24 px-6 bg-dots border-y-4 border-black relative z-10">
 <div className="absolute inset-0 bg-white/80 /80 pointer-events-none"></div>
 <div className="max-w-6xl mx-auto relative z-10">
 <motion.div 
 className="flex items-center gap-4 mb-16"
 initial={{ opacity: 0, y: 20}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 >
 <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black">{t('home.services')}</h2>
 <div className="h-2 flex-grow bg-[#ff0557] border-y-2 border-black"></div>
 </motion.div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 { title: t('home.service1.title'), icon: <Layout className="w-10 h-10 mb-4 text-[#ff0557]" />},
 { title: t('home.service2.title'), icon: <Code className="w-10 h-10 mb-4 text-[#00e5ff]" />},
 { title: t('home.service3.title'), icon: <Smartphone className="w-10 h-10 mb-4 text-[#ffb703]" />}
].map((service, i) => (
 <motion.div 
 key={i} 
 className="border-4 border-black bg-white p-8 hover:bg-[#ff0557] :bg-[#ff0557] hover:text-white transition-colors hover:-translate-y-2 shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] :shadow-[12px_12px_0px_0px_#ffffff] group hover-target"
 initial={{ opacity: 0, y: 30}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 transition={{ delay: i * 0.1}}
 >
 <div className="group-hover:text-white transition-colors">{service.icon}</div>
 <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-white">{service.title}</h3>
 <p className="font-body text-gray-600 group-hover:text-white/90">{t('home.service.desc')}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Blog Section */}
 <section className="py-32 px-6 max-w-6xl mx-auto relative z-10">
 <motion.div 
 className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"
 initial={{ opacity: 0, y: 20}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 >
 <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black">{t('home.fromBlog')}</h2>
 <a href="https://eldrex-blog.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-lg underline decoration-4 decoration-[#ff0557] hover:bg-[#ff0557] hover:text-white transition-colors pb-1 hover-target text-black">{t('home.viewAllBlog')}</a>
 </motion.div>
 
 <div className="relative h-[1000px] md:h-[800px] max-w-4xl mx-auto">
 {randomPosts[0] && (
 <motion.div 
 className="absolute top-0 left-0 w-full md:w-3/4 z-10 hover:z-40 transition-transform duration-300 hover:-translate-y-4"
 initial={{ opacity: 0, y: 50}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 >
 <WindowCard 
 title={randomPosts[0].title}
 date={randomPosts[0].date}
 image={randomPosts[0].image}
 description={randomPosts[0].excerpt}
 linkText={t('home.readPost')}
 linkUrl={`https://eldrex-blog.vercel.app/?post=${randomPosts[0].id}`}
 className="h-[400px]"
 />
 </motion.div>
 )}
 {randomPosts[1] && (
 <motion.div 
 className="absolute top-[250px] md:top-[150px] right-0 w-full md:w-3/4 z-20 hover:z-40 transition-transform duration-300 hover:-translate-y-4"
 initial={{ opacity: 0, y: 50}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 transition={{ delay: 0.2}}
 >
 <WindowCard 
 title={randomPosts[1].title}
 date={randomPosts[1].date}
 image={randomPosts[1].image}
 description={randomPosts[1].excerpt}
 linkText={t('home.readPost')}
 linkUrl={`https://eldrex-blog.vercel.app/?post=${randomPosts[1].id}`}
 className="h-[400px]"
 />
 </motion.div>
 )}
 {randomPosts[2] && (
 <motion.div 
 className="absolute top-[500px] md:top-[350px] left-0 md:left-[10%] w-full md:w-3/4 z-30 hover:z-40 transition-transform duration-300 hover:-translate-y-4"
 initial={{ opacity: 0, y: 50}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 transition={{ delay: 0.4}}
 >
 <WindowCard 
 title={randomPosts[2].title}
 date={randomPosts[2].date}
 image={randomPosts[2].image}
 description={randomPosts[2].excerpt}
 linkText={t('home.readPost')}
 linkUrl={`https://eldrex-blog.vercel.app/?post=${randomPosts[2].id}`}
 className="h-[400px]"
 />
 </motion.div>
 )}
 </div>
 </section>

 {/* FAQ / Contact Redirect Section */}
 <section className="py-24 px-6 bg-[#ffb703] border-y-4 border-black relative z-10">
 <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none"></div>
 <div className="max-w-4xl mx-auto text-center relative z-10">
 <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-black">{t('home.trouble')}</h2>
 <p className="text-xl font-bold mb-10 font-body leading-relaxed text-black/80">
 {t('home.troubleDesc')}
 </p>
 <Link to="/contact" className="inline-block border-4 border-black bg-white px-8 py-4 font-black text-xl shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] hover:-translate-y-1 transition-all hover:bg-[#ff0557] hover:text-white hover-target text-black">
 {t('home.goContact')}
 </Link>
 </div>
 </section>
 </PageTransition>
 );
}
