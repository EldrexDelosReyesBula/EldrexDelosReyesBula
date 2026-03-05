import React from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function PrivacyPolicy() {
 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen relative z-10">
 <motion.div
 className="mb-16"
 initial={{ opacity: 0, y: 20}}
 animate={{ opacity: 1, y: 0}}
 >
 <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-black">Privacy Policy</h1>
 <div className="h-2 w-32 bg-[#ff0557] border-y-2 border-black mb-12"></div>

 <div className="prose prose-lg font-body text-gray-800 space-y-6">
 <p>Last updated: {new Date().toLocaleDateString()}</p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">1. Information We Collect</h2>
 <p>
 We collect information you provide voluntarily through the contact form, including your name, email address, and message content. 
 Additionally, we collect anonymous usage data via <strong className="text-black">Vercel Analytics</strong> for website performance and user behavior insights. This may include IP addresses, browser type, page visits, and interaction metrics.
 </p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">2. How We Use Your Information</h2>
 <p>
 Personal information is used solely to respond to your inquiries. Analytics data is used to improve website performance, optimize user experience, and track general usage trends. We do not sell or share personal data with third parties for marketing purposes.
 </p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">3. Data Security</h2>
 <p>
 We implement reasonable administrative, technical, and physical safeguards to protect your data. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
 </p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">4. Third-Party Services</h2>
 <p>
 We use Vercel Analytics and may use other third-party services for email or hosting purposes. These services have their own privacy policies and are responsible for managing the data they collect in compliance with applicable laws.
 </p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">5. Your Rights</h2>
 <p>
 You may contact us to access, update, or delete your personal information. You can also opt out of certain communications or analytics tracking where applicable.
 </p>

 <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">6. Contact Us</h2>
 <p>
 For questions or concerns about this Privacy Policy or your data, please reach out via the Contact page.
 </p>
 </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
