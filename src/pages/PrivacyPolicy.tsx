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
    <p className="text-sm text-gray-500 italic">Last updated: {new Date().toLocaleDateString()}</p>

    <p>
      Your privacy is critically important to us. This Privacy Policy explains how Eldrex Delos Reyes Bula ("we", "us", or "our") collects, uses, and protects your personal information when you visit our portfolio website (the "Site").
    </p>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">1. Information We Collect</h2>
    <p>
      We may collect several types of information from and about users of our Site, including:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-black">Personal Information:</strong> Information by which you may be personally identified, such as name, email address, or any other information you provide voluntarily through our contact forms.</li>
      <li><strong className="text-black">Usage Data:</strong> Information about your internet connection, the equipment you use to access our Site, and usage details. This includes IP addresses, browser types, operating systems, and page interaction data.</li>
    </ul>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">2. How We Collect Information</h2>
    <p>
      We collect information:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Directly from you when you provide it to us (e.g., filling out a contact form).</li>
      <li>Automatically as you navigate through the Site. Information collected automatically may include usage details, IP addresses, and information collected through cookies and other tracking technologies.</li>
    </ul>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">3. Cookies and Tracking Technologies</h2>
    <p>
      We use <strong className="text-black">Vercel Analytics</strong> and potentially other tracking technologies to collect information about your browsing activities over time and across different websites. These tools help us understand how visitors interact with the Site, allowing us to improve performance and user experience. You can set your browser to refuse all or some browser cookies, but some parts of the Site may then be inaccessible or not function properly.
    </p>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">4. How We Use Your Information</h2>
    <p>
      We use information that we collect about you or that you provide to us:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>To present our Site and its contents to you.</li>
      <li>To provide you with information or services that you request from us.</li>
      <li>To fulfill any other purpose for which you provide it.</li>
      <li>To notify you about changes to our Site or any products or services we offer.</li>
      <li>To improve our Site and deliver a better and more personalized service.</li>
    </ul>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">5. Disclosure of Your Information</h2>
    <p>
      We do not sell, trade, or otherwise transfer your personal information to outside parties for marketing purposes. We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy to contractors, service providers, and other third parties we use to support our business (such as hosting and analytics providers).
    </p>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">6. Data Security</h2>
    <p>
      We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the safety and security of your information also depends on you. The transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Site.
    </p>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">7. Your Rights and Choices</h2>
    <p>
      Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us through the information provided on our Contact page.
    </p>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">8. Changes to Our Privacy Policy</h2>
    <p>
      It is our policy to post any changes we make to our privacy policy on this page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Site and this privacy policy to check for any changes.
    </p>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">9. Contact Information</h2>
    <p>
      To ask questions or comment about this privacy policy and our privacy practices, contact us via the Contact page.
    </p>
  </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
