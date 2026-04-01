import React from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function License() {
  return (
    <PageTransition>
      <section className="section-padding max-w-4xl mx-auto min-h-screen">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted mb-4 block">Legal</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">License</h1>
          
          <div className="space-y-12 text-lg leading-relaxed text-muted">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">Open Source Licensing</h2>
              <p>
                This project is committed to the principles of open-source software. The underlying source code for this portfolio is released under the <strong className="text-ink">MIT License</strong>, allowing for broad use, modification, and distribution while ensuring that original authorship is recognized.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-ink">MIT License</h2>
              <div className="bg-zinc-50 p-8 border border-border font-mono text-sm overflow-x-auto leading-relaxed">
                <p className="text-ink font-bold mb-6">Copyright (c) {new Date().getFullYear()} Eldrex Delos Reyes Bula</p>
                
                <p className="mb-6">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
                
                <p className="mb-6">The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
                
                <p className="font-bold uppercase text-ink">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">Third-Party Libraries</h2>
              <p>
                This Site utilizes various third-party open-source libraries and frameworks, including but not limited to React, Tailwind CSS, and Framer Motion. Each of these components is subject to its own respective license, which can be found in the project's dependency documentation.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
