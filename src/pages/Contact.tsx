import React, { useState} from'react';
import { Mail, Github, Facebook, Instagram, MessageCircle, AtSign, Globe, Terminal, Copy, CheckCircle2, Send} from'lucide-react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function Contact() {
 const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
 
 const [formData, setFormData] = useState({
 name:'',
 email:'',
 message:''
});

 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState<'idle' |'success' |'error' |'invalid_email'>('idle');

 const handleCopy = (email: string) => {
 navigator.clipboard.writeText(email);
 setCopiedEmail(email);
 setTimeout(() => setCopiedEmail(null), 2000);
};

 const validateEmail = (email: string) => {
 const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return re.test(email);
};

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 
 if (!validateEmail(formData.email)) {
 setSubmitStatus('invalid_email');
 return;
}

 setIsSubmitting(true);
 setSubmitStatus('idle');

 try {
 const response = await fetch('/api/contact', {
 method:'POST',
 headers: {
'Content-Type':'application/json',
},
 body: JSON.stringify(formData),
});

 if (response.ok) {
 setSubmitStatus('success');
 setFormData({ name:'', email:'', message:''});
} else {
 setSubmitStatus('error');
}
} catch (error) {
 console.error('Error submitting form:', error);
 setSubmitStatus('error');
} finally {
 setIsSubmitting(false);
}
};

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 setFormData({ ...formData, [e.target.name]: e.target.value});
 if (submitStatus ==='invalid_email' && e.target.name ==='email') {
 setSubmitStatus('idle');
}
};

 const emails = [
 { type:"Educational", address:"ebula251056@navotaspolytechniccollege.edu.ph"},
 { type:"Personal", address:"eldrexdelosreyesbula@gmail.com"}
];

 const socials = [
 { name:"GitHub", icon: <Github className="w-6 h-6" />, link:"https://github.com/EldrexDelosReyesBula"},
 { name:"Facebook", icon: <Facebook className="w-6 h-6" />, link:"#"},
 { name:"Instagram", icon: <Instagram className="w-6 h-6" />, link:"#"},
 { name:"Threads", icon: <AtSign className="w-6 h-6" />, link:"#"},
 { name:"Bluesky", icon: <Globe className="w-6 h-6" />, link:"#"},
 { name:"NGL", icon: <MessageCircle className="w-6 h-6" />, link:"#"}
];

 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen relative z-10 flex flex-col items-center justify-center">
 <motion.div 
 className="w-full max-w-4xl border-4 border-black bg-[#111111] shadow-[16px_16px_0px_0px_#ff0557] flex flex-col relative overflow-hidden"
 initial={{ opacity: 0, y: 50, scale: 0.95}}
 animate={{ opacity: 1, y: 0, scale: 1}}
 transition={{ type:"spring", stiffness: 200, damping: 20}}
 >
 {/* Terminal Title Bar */}
 <div className="border-b-4 border-black flex items-center justify-between px-4 py-3 bg-[#dcdcdc]">
 <div className="flex items-center gap-3">
 <div className="flex gap-1.5">
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff6b6b]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ffb703]"></div>
 <div className="w-3 h-3 rounded-full border-2 border-black bg-[#00e5ff]"></div>
 </div>
 <div className="flex items-center gap-2 text-sm font-bold font-mono text-black">
 <Terminal className="w-4 h-4" />
 <span>contact_me.exe</span>
 </div>
 </div>
 </div>

 {/* Terminal Content */}
 <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12 bg-[#111111] text-[#00e5ff] font-mono relative">
 <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
 
 {/* Left Column: Direct Comms */}
 <div className="relative z-10 flex-1 flex flex-col gap-8">
 <div>
 <p className="text-xl mb-2">&gt; Initializing connection...</p>
 <p className="text-xl mb-8">&gt; Secure communication channels established.</p>
 
 <div className="flex flex-col gap-6 mb-12">
 {emails.map((email, index) => (
 <motion.div 
 key={index}
 whileHover={{ x: 4}}
 className="border-4 border-[#00e5ff] bg-[#1a1a1a] p-6 hover:border-[#ff0557] hover:shadow-[8px_8px_0px_0px_#ff0557] transition-all group"
 >
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-3 text-[#ff0557]">
 <Mail className="w-6 h-6" />
 <h3 className="text-lg font-bold font-sans uppercase tracking-wider">{email.type}</h3>
 </div>
 <button 
 onClick={() => handleCopy(email.address)}
 className="text-[#00e5ff] hover:text-[#ff0557] transition-colors p-2 border-2 border-transparent hover:border-[#ff0557] rounded-md hover-target"
 title="Copy to clipboard"
 >
 {copiedEmail === email.address ? (
 <CheckCircle2 className="w-5 h-5 text-green-400" />
 ) : (
 <Copy className="w-5 h-5" />
 )}
 </button>
 </div>
 <a href={`mailto:${email.address}`} className="text-white font-sans text-lg break-all hover:text-[#00e5ff] transition-colors hover:underline hover-target">
 {email.address}
 </a>
 </motion.div>
 ))}
 </div>

 <div className="border-t-2 border-dashed border-[#00e5ff]/30 pt-8">
 <p className="text-lg mb-6">&gt; Connect via social networks:</p>
 <div className="flex flex-wrap gap-4">
 {socials.map((social, index) => (
 <motion.a
 key={index}
 href={social.link}
 target="_blank"
 rel="noopener noreferrer"
 whileHover={{ y: -2}}
 className="flex items-center gap-2 border-2 border-[#00e5ff] px-4 py-2 hover:bg-[#ff0557] hover:border-[#ff0557] hover:text-white transition-colors text-white font-sans font-bold hover-target"
 >
 {social.icon}
 <span>{social.name}</span>
 </motion.a>
 ))}
 </div>
 </div>
 </div>
 </div>

 {/* Right Column: Contact Form */}
 <div className="relative z-10 flex-1 border-t-4 lg:border-t-0 lg:border-l-4 border-dashed border-[#00e5ff]/30 pt-12 lg:pt-0 lg:pl-12">
 <div className="flex items-center gap-2 text-sm font-bold font-mono text-[#ff0557] mb-8">
 <Terminal className="w-4 h-4" />
 <span>send_message.exe</span>
 </div>
 
 <form onSubmit={handleSubmit} className="flex flex-col gap-6">
 <div className="flex flex-col gap-2">
 <label htmlFor="name" className="text-lg font-bold flex items-center gap-2">
 <span className="text-[#ff0557]">&gt;</span> Name:
 </label>
 <input 
 type="text" 
 id="name" 
 name="name"
 value={formData.name}
 onChange={handleChange}
 required
 className="bg-transparent border-b-2 border-[#00e5ff] focus:border-[#ff0557] outline-none py-2 text-white font-sans text-lg transition-colors hover-target"
 placeholder="Enter your name..."
 />
 </div>

 <div className="flex flex-col gap-2">
 <label htmlFor="email" className="text-lg font-bold flex items-center gap-2">
 <span className="text-[#ff0557]">&gt;</span> Email:
 </label>
 <input 
 type="email" 
 id="email" 
 name="email"
 value={formData.email}
 onChange={handleChange}
 required
 className={`bg-transparent border-b-2 ${submitStatus ==='invalid_email' ?'border-red-500' :'border-[#00e5ff]'} focus:border-[#ff0557] outline-none py-2 text-white font-sans text-lg transition-colors hover-target`}
 placeholder="Enter your email..."
 />
 {submitStatus ==='invalid_email' && (
 <p className="text-red-500 text-sm mt-1">&gt; Error: Invalid email format.</p>
 )}
 </div>

 <div className="flex flex-col gap-2">
 <label htmlFor="message" className="text-lg font-bold flex items-center gap-2">
 <span className="text-[#ff0557]">&gt;</span> Message:
 </label>
 <textarea 
 id="message" 
 name="message"
 value={formData.message}
 onChange={handleChange}
 required
 rows={4}
 className="bg-transparent border-2 border-[#00e5ff] focus:border-[#ff0557] outline-none p-4 text-white font-sans text-lg resize-none transition-colors mt-2 hover-target"
 placeholder="Type your message here..."
 ></textarea>
 </div>

 <div className="mt-4 flex flex-col items-end gap-4">
 <motion.button 
 type="submit"
 disabled={isSubmitting}
 whileHover={{ scale: 1.05}}
 whileTap={{ scale: 0.95}}
 className={`border-4 border-[#00e5ff] bg-[#00e5ff] text-black px-8 py-3 font-bold font-sans text-lg flex items-center gap-3 transition-colors shadow-[6px_6px_0px_0px_rgba(0,229,255,0.3)] hover-target ${isSubmitting ?'opacity-50 cursor-not-allowed' :'hover:bg-[#ff0557] hover:border-[#ff0557] hover:text-white hover:shadow-[6px_6px_0px_0px_rgba(255,5,87,0.3)]'}`}
 >
 {isSubmitting ?'Sending...' :'Transmit'} <Send className="w-5 h-5" />
 </motion.button>
 {submitStatus ==='success' && (
 <p className="text-[#00e5ff] font-bold">&gt; Message transmitted successfully.</p>
 )}
 {submitStatus ==='error' && (
 <p className="text-[#ff0557] font-bold">&gt; Error: Transmission failed.</p>
 )}
 </div>
 </form>
 </div>
 </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
