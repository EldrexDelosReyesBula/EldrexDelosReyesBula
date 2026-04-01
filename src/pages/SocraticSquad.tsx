import React, { useState, useEffect } from'react';
import { motion, AnimatePresence } from'motion/react';
import PageTransition from'../components/PageTransition';
import { Users, ChevronLeft, ChevronRight } from'lucide-react';

const SQUAD_IMAGES = [
  "https://eldrex.landecs.org/squad/socratic/squad01.jpg",
  "https://eldrex.landecs.org/squad/socratic/squad02.jpg",
  "https://eldrex.landecs.org/squad/socratic/squad03.jpg",
  "https://eldrex.landecs.org/squad/socratic/squad04.jpg",
  "https://eldrex.landecs.org/squad/socratic/squad05.jpg",
  "https://eldrex.landecs.org/squad/socratic/squad06.jpg",
  "https://eldrex.landecs.org/squad/socratic/squad07.jpg",
  "https://eldrex.landecs.org/squad/predators/tiger.png",
  "https://eldrex.landecs.org/squad/predators/fox.png",
  "https://eldrex.landecs.org/squad/predators/owl.png",
  "https://eldrex.landecs.org/squad/predators/capybara.png",
  "https://eldrex.landecs.org/squad/predators/wolf.png",
  "https://eldrex.landecs.org/squad/predators/eagle.png"
];

const Skeleton = () => (
  <div className="w-full h-full bg-zinc-100 animate-pulse flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-zinc-200 border-t-zinc-400 rounded-full animate-spin"></div>
  </div>
);

const CarouselImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-zinc-50">
      {!isLoaded && !error && <Skeleton />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 text-muted text-xs">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default function SocraticSquad() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SQUAD_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % SQUAD_IMAGES.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + SQUAD_IMAGES.length) % SQUAD_IMAGES.length);
  };

  const members = [
    {
      name:"Eldrex Bula",
      role:"Tiger",
      year:"2023",
      image:"https://eldrex.landecs.org/squad/predators/tiger.png",
      color:"#000000"
    },
    {
      name:"Ara Bella Rivera",
      role:"Fox",
      year:"2023",
      image:"https://eldrex.landecs.org/squad/predators/fox.png",
      color:"#000000"
    },
    {
      name:"Jasmin Tegio",
      role:"Owl",
      year:"2023",
      image:"https://eldrex.landecs.org/squad/predators/owl.png",
      color:"#000000"
    },
    {
      name:"Gabryl Olegario",
      role:"Capybara",
      year:"2023",
      image:"https://eldrex.landecs.org/squad/predators/capybara.png",
      color:"#000000"
    },
    {
      name:"Yrik Timosan",
      role:"Wolf",
      year:"2024",
      image:"https://eldrex.landecs.org/squad/predators/wolf.png",
      color:"#000000"
    },
    {
      name:"Shereen Robredillo",
      role:"Eagle",
      year:"2024",
      image:"https://eldrex.landecs.org/squad/predators/eagle.png",
      color:"#000000"
    }
  ];

  return (
    <PageTransition>
      <section className="section-padding max-w-7xl mx-auto min-h-screen">
        <motion.div
          className="flex flex-col items-center text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Collective</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">Socratic Squad</h1>
          <p className="text-xl md:text-2xl text-muted font-medium italic">"One for all, all for one"</p>
        </motion.div>

        {/* Carousel Section */}
        <div className="mb-32 relative group">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-border bg-zinc-50 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute inset-0"
              >
                <CarouselImage src={SQUAD_IMAGES[currentIndex]} alt={`Squad Image ${currentIndex + 1}`} />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={handlePrev}
                className="p-3 bg-paper/80 backdrop-blur-sm border border-border hover:bg-ink hover:text-paper transition-all rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext}
                className="p-3 bg-paper/80 backdrop-blur-sm border border-border hover:bg-ink hover:text-paper transition-all rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {SQUAD_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(i);
                  }}
                  className={`h-2 transition-all rounded-full ${i === currentIndex ? 'w-8 bg-ink' : 'w-2 bg-zinc-300 hover:bg-zinc-400'}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <motion.div 
            className="space-y-8 text-lg leading-relaxed text-muted"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Socratic Squad is a group of students who may seem ordinary, yet each carries a spark that makes them truly remarkable. Behind their humor and quiet moments are talents and stories that make their bond something rare. Their connection goes beyond friendship, built on trust, shared laughter, and the comfort of being understood.
            </p>
            <p>
              Each member has their own way of shining, proving that growth happens even within familiar spaces. They live by the idea that "limit knows no bounds," finding meaning in learning from one another and in the memories they create together.
            </p>
            <p>
              Through thoughtful questions, honest talks, and small moments of reflection, they continue to inspire and uplift each other. Whether they are tired, hungry, or laughing over simple things, they remain united. The Socratic Squad isn't just a group of friends—it's a family that grows wiser and stronger with every shared experience.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8 text-lg leading-relaxed text-muted"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-6">Our Characters</h2>
            <p>
              Each of our predator characters reflects the soul and silent strength we carry within Socratic Squad. The <strong className="text-ink">Tiger</strong> stands firm, embodying leadership, silent passion, and courage even in stillness. The <strong className="text-ink">Owl</strong> watches with quiet wisdom, guiding without needing attention, present in the dark when clarity is needed most.
            </p>
            <p>
              The <strong className="text-ink">Capybara</strong>, often underestimated, holds the gift of patience, calmness, and adaptability, reminding us that gentleness doesn't mean weakness. The <strong className="text-ink">Fox</strong> is clever, quick-witted, and full of heart, often the spark of laughter and brilliance when the group needs light.
            </p>
            <p>
              The <strong className="text-ink">Eagle</strong> soars, not just to escape but to see beyond, always seeking truth, justice, and the bigger picture that many miss. The <strong className="text-ink">Wolf</strong>, loyal and fierce, may walk alone at times but never forgets its pack, always ready to protect, to create, to fight for what matters.
            </p>
            <p className="font-bold italic text-ink border-l-2 border-ink pl-6 py-2">
              Together, these characters aren't just roles or symbols. They're reflections of who we are, why we matter to each other, and how our individual strengths form something unbreakable when united.
            </p>
          </motion.div>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-border p-8 hover:bg-zinc-50 transition-all text-center"
            >
              <div className="w-full aspect-square border border-border mb-8 overflow-hidden bg-white relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">{member.name}</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">{member.role}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted">{member.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
