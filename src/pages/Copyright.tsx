import React from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function Copyright() {
 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen relative z-10">
 <motion.div
 className="mb-16"
 initial={{ opacity: 0, y: 20}}
 animate={{ opacity: 1, y: 0}}
 >
 <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-black">Copyright Notice</h1>
 <div className="h-2 w-32 bg-[#ff0557] border-y-2 border-black mb-12"></div>

 <div className="prose prose-lg font-body text-gray-800 space-y-6">
 {/* General Copyright Statement */}
 <p className="text-xl font-bold text-black">
 © {new Date().getFullYear()} Eldrex Delos Reyes Bula. All rights reserved. 
 This website and all content contained herein are protected under international copyright laws. Unauthorized use, reproduction, or distribution of any materials without explicit written permission is strictly prohibited.
 </p>

 {/* Content Ownership Section */}
 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">1. Content Ownership</h2>
 <p>
 All materials displayed on this website—including but not limited to text, images, graphics, logos, illustrations, audio files, video clips, downloadable content, data compilations, and software—are the exclusive property of Eldrex Delos Reyes Bula or its licensed content providers. 
 These materials are protected by both national and international copyright and intellectual property laws, ensuring that the original creators retain full ownership rights. Any unauthorized use may result in legal action.
 </p>

 {/* Design Inspiration Attribution */}
 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">2. Design Inspiration Attribution</h2>
 <p>
 Special acknowledgment and copyright attribution are given to <strong className="text-black">Mackenzie Child</strong> for providing free design template inspirations. 
 Their resources contributed to the overall visual identity, style, and layout of this portfolio, serving as creative guidance without transferring ownership.
 </p>

 {/* Permitted Use Section */}
 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">3. Permitted Use of Materials</h2>
 <p>
 Visitors to this website may use the content for limited, personal purposes only. Any reproduction, distribution, modification, derivative creation, public display, or commercial exploitation is strictly prohibited without prior written consent, except for the following specific cases:
 </p>
 <ul className="list-disc pl-6 space-y-2">
 <li>Temporary storage of website content in your computer's RAM while browsing, which is necessary for proper viewing and interaction with the site.</li>
 <li>Automatic caching by web browsers to enhance display performance. This is incidental and does not grant ownership rights.</li>
 <li>Printing or downloading a reasonable number of pages for personal, non-commercial use only. These copies cannot be shared, redistributed, or republished in any form.</li>
 </ul>

 <p>
 Any other use, including reproduction, distribution, or commercial exploitation, requires explicit written permission from the copyright holder. Compliance ensures respect for intellectual property and the continued availability of creative resources for all.
 </p>
 </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
