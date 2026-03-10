import React from'react';
import { motion} from'motion/react';
import PageTransition from'../components/PageTransition';

export default function License() {
 return (
 <PageTransition>
 <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen relative z-10">
 <motion.div
 className="mb-16"
 initial={{ opacity: 0, y: 20}}
 animate={{ opacity: 1, y: 0}}
 >
 <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-black">License</h1>
 <div className="h-2 w-32 bg-[#ff0557] border-y-2 border-black mb-12"></div>
 
  <div className="prose prose-lg font-body text-gray-800 space-y-6">
    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">Open Source Licensing</h2>
    <p>
      This project is committed to the principles of open-source software. The underlying source code for this portfolio is released under the <strong className="text-black">MIT License</strong>, allowing for broad use, modification, and distribution while ensuring that original authorship is recognized.
    </p>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">MIT License</h2>
    <div className="bg-gray-100 p-6 border-l-4 border-black font-mono text-sm overflow-x-auto">
      <p className="text-black mb-4">Copyright (c) {new Date().getFullYear()} Eldrex Delos Reyes Bula</p>
      
      <p className="mb-4">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
      
      <p className="mb-4">The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
      
      <p className="font-bold uppercase text-black">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
    </div>
    
    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">Design Attribution & Usage</h2>
    <p>
      While the software logic and implementation are covered by the MIT License, the visual design and layout of this portfolio are inspired by free design templates provided by <strong className="text-black">Mackenzie Child</strong>. 
    </p>
    <p>
      We encourage others to learn from and build upon this work, provided that appropriate credit is given to both the developer and the original design inspirations. For any commercial use of the design elements, please refer to the specific terms provided by the original designers.
    </p>

    <h2 className="text-2xl font-bold font-sans mt-8 mb-4 text-black">Third-Party Libraries</h2>
    <p>
      This Site utilizes various third-party open-source libraries and frameworks, including but not limited to React, Tailwind CSS, and Framer Motion. Each of these components is subject to its own respective license, which can be found in the project's dependency documentation.
    </p>
  </div>
 </motion.div>
 </section>
 </PageTransition>
 );
}
