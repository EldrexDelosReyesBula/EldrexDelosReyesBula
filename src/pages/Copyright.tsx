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
    </p>
    <p>
      This website and all content contained herein—including but not limited to text, images, graphics, logos, illustrations, audio files, video clips, downloadable content, data compilations, and software—are protected under international copyright, trademark, and other intellectual property laws. Unauthorized use, reproduction, or distribution of any materials without explicit written permission is strictly prohibited and may result in severe civil and criminal penalties.
    </p>

    {/* Content Ownership Section */}
    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">1. Ownership of Intellectual Property</h2>
    <p>
      The intellectual property rights in the Site and the materials on the Site (including without limitation the text, computer code, artwork, photographs, images, music, audio material, video material and audio-visual material on the Site) are owned by Eldrex Delos Reyes Bula and its licensors. 
    </p>
    <p>
      Eldrex Delos Reyes Bula does not grant you any other rights in relation to this website or the material on this website. In other words, all other rights are reserved. For the avoidance of doubt, you must not adapt, edit, change, transform, publish, republish, distribute, redistribute, broadcast, rebroadcast or show or play in public this website or the material on this website (in any form or media) without Eldrex Delos Reyes Bula's prior written permission.
    </p>

    {/* Design Inspiration Attribution */}
    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">2. Design Attribution & Creative Credits</h2>
    <p>
      Special acknowledgment and copyright attribution are given to <strong className="text-black">Mackenzie Child</strong> for providing free design template inspirations that served as a foundation for the visual identity of this portfolio. 
    </p>
    <p>
      While the implementation, specific code, and personalized content are original works of Eldrex Delos Reyes Bula, we recognize the creative influence and structural guidance provided by these open resources. This attribution is made in the spirit of transparency and respect for the design community.
    </p>

    {/* Data Mining Section */}
    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">3. Data Mining & Automated Access</h2>
    <p>
      The automated and/or systematic collection of data from this website is prohibited. You may not use any "robot," "spider," or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Site or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the Site or any Content.
    </p>

    {/* Permissions Section */}
    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">4. Permissions & Licensing Inquiries</h2>
    <p>
      You may request permission to use the copyright materials on this website by writing to us via the Contact page. Any granted permissions will be provided in writing and may be subject to specific conditions or licensing fees depending on the nature of the request.
    </p>

    {/* Enforcement Section */}
    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">5. Enforcement of Copyright</h2>
    <p>
      Eldrex Delos Reyes Bula takes the protection of its copyright very seriously. If Eldrex Delos Reyes Bula discovers that you have used its copyright materials in contravention of the license above, Eldrex Delos Reyes Bula may bring legal proceedings against you seeking monetary damages and an injunction to stop you using those materials. You could also be ordered to pay legal costs.
    </p>
  </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
