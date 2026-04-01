import React from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function TermsOfUse() {
  return (
    <PageTransition>
      <section className="section-padding max-w-4xl mx-auto min-h-screen">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Legal</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Terms of Use</h1>

          <div className="space-y-12 text-lg leading-relaxed text-muted">
            <p className="text-sm text-muted italic">Last updated: {new Date().toLocaleDateString()}</p>

            <p>
              Welcome to the official portfolio of Eldrex Delos Reyes Bula. These Terms of Use ("Terms") govern your access to and use of this website (the "Site"). By accessing or using the Site, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any part of these Terms, you are prohibited from using or accessing this Site.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">1. Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, all content on this Site—including text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software—is the property of Eldrex Delos Reyes Bula or its content suppliers and is protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">2. Use License & Restrictions</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on the Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on the Site;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Eldrex Delos Reyes Bula at any time.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">3. User Conduct</h2>
              <p>
                You agree to use the Site only for lawful purposes. You are prohibited from posting or transmitting through the Site any material which violates or infringes in any way upon the rights of others, which is unlawful, threatening, abusive, defamatory, invasive of privacy or publicity rights, vulgar, obscene, profane, or otherwise objectionable.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">4. Disclaimer of Warranties</h2>
              <p>
                The materials on the Site are provided on an 'as is' basis. Eldrex Delos Reyes Bula makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">5. Limitations of Liability</h2>
              <p>
                In no event shall Eldrex Delos Reyes Bula or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Site, even if Eldrex Delos Reyes Bula or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">6. Links to Third-Party Sites</h2>
              <p>
                Eldrex Delos Reyes Bula has not reviewed all of the sites linked to its Site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Eldrex Delos Reyes Bula of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">7. Modifications to Terms</h2>
              <p>
                Eldrex Delos Reyes Bula may revise these Terms for its Site at any time without notice. By using this Site, you are agreeing to be bound by the then-current version of these Terms of Use.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the Philippines and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
