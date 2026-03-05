import React from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function TermsOfUse() {
 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen relative z-10">
 <motion.div
 className="mb-16"
 initial={{ opacity: 0, y: 20}}
 animate={{ opacity: 1, y: 0}}
 >
 <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-black">Terms of Use</h1>
 <div className="h-2 w-32 bg-[#ff0557] border-y-2 border-black mb-12"></div>

 <div className="prose prose-lg font-body text-gray-800 space-y-6">
 <p>Last updated: {new Date().toLocaleDateString()}</p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">1. Acceptance of Terms</h2>
 <p>
 By accessing this website, you agree to comply with these Terms of Use. If you do not accept these terms, please refrain from using the website.
 </p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">2. Use License</h2>
 <p>
 You may view and interact with website content for personal, non-commercial purposes only. Any other use—including copying, distribution, or modification—requires written permission.
 </p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">3. Disclaimer</h2>
 <p>
 The website and its materials are provided"as is." We make no warranties regarding the accuracy, reliability, or completeness of content. Use of this website is at your own risk.
 </p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">4. Limitations of Liability</h2>
 <p>
 The website owner and suppliers are not liable for any damages arising from the use or inability to use this website, including but not limited to data loss, business interruptions, or other consequential damages.
 </p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">5. Revisions and Updates</h2>
 <p>
 Website content may be updated, revised, or corrected at any time without notice. While we strive for accuracy, we do not guarantee all materials are error-free or current.
 </p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">6. Governing Law</h2>
 <p>
 These Terms are governed by applicable laws in the Philippines. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of Philippine courts.
 </p>
 </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
