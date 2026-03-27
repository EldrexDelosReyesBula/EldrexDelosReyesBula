import React, { useState} from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';
import { Search} from'lucide-react';

const quotesData = [
 { id: 1, text:"When nothing moves, everything begins.", author:"Eldrex Delos Reyes Bula"},
 { id: 2, text:"Fly again, My blue", author:"Eldrex Delos Reyes Bula"},
 { id: 3, text:"Still Be the Blue", author:"Eldrex Delos Reyes Bula"},
 { id: 4, text:"Crazy? Maybe. But I'd rather learn passionately than memorize mindlessly.", author:"Eldrex Delos Reyes Bula"},
 { id: 5, text:"The more we think, the more risks we understand, but sometimes we're quick to regret instead of embracing them.", author:"Eldrex Delos Reyes Bula"},
 { id: 6, text:"An old book might look like trash, yet it has the power to change lives, even if people can't see its worth at first glance.", author:"Eldrex Delos Reyes Bula"},
 { id: 7, text:"Sometimes, it's people themselves who make things seem impossible.", author:"Eldrex Delos Reyes Bula"},
 { id: 8, text:"Sometimes, it's curiosity that takes you to the place where you were meant to be.", author:"Eldrex Delos Reyes Bula"},
 { id: 9, text:"I serve people not a company", author:"Eldrex Delos Reyes Bula"},
 { id: 10, text:"Numbers may define you, but it's your will to give them meaning.", author:"Eldrex Delos Reyes Bula"},
 { id: 11, text:"A man who can do what he wants, does what he wants.", author:"Eldrex Delos Reyes Bula"},
 { id: 12, text:"We lose not because we have little, but because we expect nothing more.", author:"Eldrex Delos Reyes Bula"},
 { id: 13, text:"Create what others can't see—because they won't know they needed it until it's here.", author:"Eldrex Delos Reyes Bula"},
 { id: 14, text:"Your limits aren't real if you're the one writing the rules.", author:"Eldrex Delos Reyes Bula"},
 { id: 15, text:"I never asked for attention. I just made things impossible to ignore.", author:"Eldrex Delos Reyes Bula"},
 { id: 16, text:"I didn't say it. I didn't do it. But that doesn't mean I didn't mean it with all of me.", author:"Eldrex Delos Reyes Bula"},
 { id: 17, text:"To own your information is not a feature—it is a right that should never be questioned.", author:"Eldrex Delos Reyes Bula"},
 { id: 18, text:"Change is our only goal, and that's why we're here to create a new story and become part of history.", author:"Eldrex Delos Reyes Bula"},
 { id: 19, text:"To exist is to question; to question is to live. And if all else is illusion, let my curiosity be real.", author:"Eldrex Delos Reyes Bula"},
 { id: 20, text:"If life is a labyrinth of illusions, then perhaps my purpose is not to escape, but to wander.", author:"Eldrex Delos Reyes Bula"},
 { id: 21, text:"I'm in love—not with you, but with the essence of who you are.", author:"Eldrex Delos Reyes Bula"},
 { id: 22, text:"The strongest people are not those who show strength in front of us, but those who fight battles we know nothing about.", author:"Eldrex Delos Reyes Bula"},
 { id: 23, text:"The cost of convenience should never be the loss of control.", author:"Eldrex Delos Reyes Bula"},
 { id: 24, text:"A mother's gift isn't measured by how it looks, but by the love that came with it.", author:"Eldrex Delos Reyes Bula"},
 { id: 25, text:"A seed doesn't ask for perfect soil, nor does it wait for the perfect rain. It simply grows where it's planted.", author:"Eldrex Delos Reyes Bula"},
 { id: 26, text:"If you can question everything, you can understand anything.", author:"Eldrex Delos Reyes Bula"},
 { id: 27, text:"A child's heart remembers the warmth of home, even when life keeps them far away.", author:"Eldrex Delos Reyes Bula"},
 { id: 28, text:"Hoping to be enough, just as I am", author:"Eldrex Delos Reyes Bula"},
 { id: 29, text:"Time moves so slow, yet I blink, and everything is gone.", author:"Eldrex Delos Reyes Bula"},
 { id: 30, text:"I thought I wanted freedom, but now I just want one more yesterday.", author:"Eldrex Delos Reyes Bula"},
 { id: 31, text:"A road without signs is only a problem if you believe you're going somewhere.", author:"Eldrex Delos Reyes Bula"},
 { id: 32, text:"A recipe followed perfectly still tastes different in someone else's hands.", author:"Eldrex Delos Reyes Bula"},
 { id: 33, text:"We've waited for this day, but now we're wishing for one more.", author:"Eldrex Delos Reyes Bula"},
 { id: 34, text:"Mistakes don't make you weak; refusing to correct them does.", author:"Eldrex Delos Reyes Bula"},
 { id: 35, text:"Identity isn't what you do; it's what you stand for.", author:"Eldrex Delos Reyes Bula"},
 { id: 36, text:"Money may buy what you want, but hard work teaches you who you are.", author:"Eldrex Delos Reyes Bula"},
 { id: 37, text:"If you have time to sit, you have time to work.", author:"Eldrex Delos Reyes Bula"},
 { id: 38, text:"Failure is not the end; it is the beginning of learning.", author:"Eldrex Delos Reyes Bula"},
 { id: 39, text:"Take the first step and complete the task before anyone else even starts.", author:"Eldrex Delos Reyes Bula"},
 { id: 40, text:"Think it through, then see it through.", author:"Eldrex Delos Reyes Bula"},
 { id: 41, text:"Plan like an architect, act like an artist", author:"Eldrex Delos Reyes Bula"},
 { id: 42, text:"Some doors open inward because not every answer waits outside.", author:"Eldrex Delos Reyes Bula"},
 { id: 43, text:"When the waves hit, I'll learn how to breathe underwater", author:"Eldrex Delos Reyes Bula"},
 { id: 44, text:"You can't fix what you fake — and I faked it until I failed.", author:"Eldrex Delos Reyes Bula"},
 { id: 45, text:"Our thoughts are no longer fully ours when machines begin to guide what we think about.", author:"Eldrex Delos Reyes Bula"},
 { id: 46, text:"If discipline is lost, even the brightest mind will stumble in darkness.", author:"Eldrex Delos Reyes Bula"},
 { id: 47, text:"I raise my hand until the cloud reaches me, wishing the wind could carry what words could never say", author:"Eldrex Delos Reyes Bula"},
 { id: 48, text:"I may lack what others have, but my ambition will make them look up to me.", author:"Eldrex Delos Reyes Bula"},
 { id: 49, text:"Everything begins with you — never forget that.", author:"Eldrex Delos Reyes Bula"},
 { id: 50, text:"Act before being asked, and let your efforts set the standard.", author:"Eldrex Delos Reyes Bula"},
 { id: 51, text:"Be willing to try, or stay stuck in the place where all you do is watch with open eyes.", author:"Eldrex Delos Reyes Bula"},
 { id: 52, text:"I don't care how beautiful you are. What matters is the strength and depth of your mindset.", author:"Eldrex Delos Reyes Bula"},
 { id: 53, text:"If you already have something to give, hold it. But if you have nothing, offer what you can to help others—sometimes even a small gesture matters.", author:"Eldrex Delos Reyes Bula"},
 { id: 54, text:"If I flip the world, what seems difficult becomes easy, and what seems easy becomes difficult. Perspective changes everything.", author:"Eldrex Delos Reyes Bula"},
 { id: 55, text:"Comfort is an illusion that makes you feel safe, like you're back in a fort, but it can keep you from growing. True progress comes when you step beyond what feels easy.", author:"Eldrex Delos Reyes Bula"},
 { id: 56, text:"Butterflies fly around you every morning, birds sing to greet you, and the air fills your lungs with gentle ease. Do not waste the comfort and beauty of the life you have today—cherish every simple blessing.", author:"Eldrex Delos Reyes Bula"},
 { id: 57, text:"You are not out of the game. You only feel that way because you stopped trying and used your silence as an excuse to stay comfortable. Take a breath, step forward, and remind yourself that the game is still yours to play.", author:"Eldrex Delos Reyes Bula"},
 { id: 58, text:"Work, work, work, and wake up early to start your day with purpose. Fill your mornings with effort, and let your dedication become your obsession. One day, all your hard work will pay off, and you'll thank yourself for not giving up.", author:"Eldrex Delos Reyes Bula"},
 { id: 59, text:"If today is the perfect day to begin, why wait? I already have everything required to start.", author:"Eldrex Delos Reyes Bula"},
 { id: 60, text:"We say,'We're poor,' and leave it at that. Until one day we realize someone else has already built the dreams we thought were impossible.", author:"Eldrex Delos Reyes Bula"},
 { id: 61, text:"I have ideas, but how will they come to life if I never try? So, I'll try to try.", author:"Eldrex Delos Reyes Bula"},
 { id: 62, text:"Sometimes the best breakthroughs come after the longest nights of thinking.", author:"Eldrex Delos Reyes Bula"},
 { id: 63, text:"The only thing that makes you feel not good enough is not knowing who you truly are.", author:"Eldrex Delos Reyes Bula"},
 { id: 64, text:"People keep their limitations private, not because they are weak, but because they are afraid others will use those limits against them.", author:"Eldrex Delos Reyes Bula"},
 { id: 65, text:"When the world gives you nothing, you have the most room to build everything.", author:"Eldrex Delos Reyes Bula"},
 { id: 66, text:"All of us do not know what to do unless we start doing it.", author:"Eldrex Delos Reyes Bula"},
 { id: 67, text:"A person who understands how great things happen will always give what is right for others to have.", author:"Eldrex Delos Reyes Bula"},
 { id: 68, text:"If you choose to believe what others believe, it may guide you for a long time, until you realize it isn’t all true.", author:"Eldrex Delos Reyes Bula"},
 { id: 69, text:"A man who has experienced the same situations as those around him is a great person to ask for advice.", author:"Eldrex Delos Reyes Bula"},
{ id: 70, text:"Be still to find your path, but don't just sit there once you know the way.", author:"Eldrex Delos Reyes Bula"}
];

export default function Quotes() {
 const [searchTerm, setSearchTerm] = useState('');

 const filteredQuotes = quotesData.filter(quote => 
 quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
 quote.author.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen relative z-10">
 <motion.div 
 className="flex items-center gap-4 mb-12"
 initial={{ opacity: 0, x: -20}}
 animate={{ opacity: 1, x: 0}}
 >
 <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black">Quotes</h1>
 <div className="h-2 flex-grow bg-[#ff0557] border-y-2 border-black hidden md:block"></div>
 </motion.div>

 <div className="mb-12 relative max-w-md">
 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
 <Search className="w-6 h-6 text-gray-500" />
 </div>
 <input
 type="text"
 placeholder="Search quotes..."
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 className="w-full border-4 border-black bg-white py-4 pl-12 pr-4 font-bold text-lg shadow-[6px_6px_0px_0px_#111111] focus:outline-none focus:border-[#ff0557] focus:shadow-[6px_6px_0px_0px_#ff0557] :shadow-[6px_6px_0px_0px_#ff0557] transition-all hover-target text-black placeholder-gray-500"
 />
 </div>

 {filteredQuotes.length === 0 ? (
 <div className="text-center py-12 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#111111]">
 <p className="text-2xl font-bold text-black">No quotes found matching"{searchTerm}"</p>
 </div>
 ) : (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredQuotes.map((quote, index) => (
 <motion.div
 key={quote.id}
 initial={{ opacity: 0, y: 20}}
 whileInView={{ opacity: 1, y: 0}}
 viewport={{ once: true}}
 transition={{ delay: (index % 10) * 0.05}}
 className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#111111] flex flex-col justify-between hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#ff0557] :shadow-[12px_12px_0px_0px_#ff0557] hover:border-[#ff0557] transition-all group"
 >
 <p className="font-sans text-xl font-bold mb-6 leading-relaxed group-hover:text-[#ff0557] transition-colors text-black">"{quote.text}"</p>
 <p className="font-mono text-sm font-bold text-gray-600 border-t-4 border-black pt-4 group-hover:border-[#ff0557] transition-colors">— {quote.author}</p>
 </motion.div>
 ))}
 </div>
 )}
 </section>
 </PageTransition>
 );
}
