import React from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function Copyright() {
  return (
    <PageTransition>
      <section className="section-padding max-w-4xl mx-auto min-h-screen">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Legal</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Copyright Notice</h1>

          <div className="space-y-12 text-lg leading-relaxed text-muted">
            {/* General Copyright Statement */}
            <div className="space-y-4">
              <p className="text-2xl font-bold text-ink">
                © {new Date().getFullYear()} Eldrex Delos Reyes Bula. All rights reserved. 
              </p>
              <p>
                This website and all content contained herein—including but not limited to text, images, graphics, logos, illustrations, audio files, video clips, downloadable content, data compilations, and software—are protected under international copyright, trademark, and other intellectual property laws. Unauthorized use, reproduction, or distribution of any materials without explicit written permission is strictly prohibited and may result in severe civil and criminal penalties.
              </p>
            </div>

            {/* Content Ownership Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">1. Ownership of Intellectual Property</h2>
              <p>
                The intellectual property rights in the Site and the materials on the Site (including without limitation the text, computer code, artwork, photographs, images, music, audio material, video material and audio-visual material on the Site) are owned by Eldrex Delos Reyes Bula and its licensors. 
              </p>
              <p>
                Eldrex Delos Reyes Bula does not grant you any other rights in relation to this website or the material on this website. In other words, all other rights are reserved. For the avoidance of doubt, you must not adapt, edit, change, transform, publish, republish, distribute, redistribute, broadcast, rebroadcast or show or play in public this website or the material on this website (in any form or media) without Eldrex Delos Reyes Bula's prior written permission.
              </p>
            </div>

            {/* Data Mining Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">2. Data Mining & Automated Access</h2>
              <p>
                The automated and/or systematic collection of data from this website is prohibited. You may not use any "robot," "spider," or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Site or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the Site or any Content.
              </p>
            </div>

            {/* Permissions Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">3. Permissions & Licensing Inquiries</h2>
              <p>
                You may request permission to use the copyright materials on this website by writing to us via the Contact page. Any granted permissions will be provided in writing and may be subject to specific conditions or licensing fees depending on the nature of the request.
              </p>
            </div>

            {/* Enforcement Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">4. Enforcement of Copyright</h2>
              <p>
                Eldrex Delos Reyes Bula takes the protection of its copyright very seriously. If Eldrex Delos Reyes Bula discovers that you have used its copyright materials in contravention of the license above, Eldrex Delos Reyes Bula may bring legal proceedings against you seeking monetary damages and an injunction to stop you using those materials. You could also be ordered to pay legal costs.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
