import React from'react';
import { HashRouter as Router, Routes, Route, useLocation} from'react-router-dom';
import { AnimatePresence, motion} from'motion/react';
import { Analytics} from"@vercel/analytics/react";
import Navbar from'./components/Navbar';
import Footer from'./components/Footer';
import Home from'./pages/Home';
import Projects from'./pages/Projects';
import About from'./pages/About';
import Contact from'./pages/Contact';
import Quotes from'./pages/Quotes';
import School from'./pages/School';
import PrivacyPolicy from'./pages/PrivacyPolicy';
import TermsOfUse from'./pages/TermsOfUse';
import Copyright from'./pages/Copyright';
import License from'./pages/License';
import SocraticSquad from'./pages/SocraticSquad';
import NotFound from'./pages/NotFound';
import { SettingsProvider, useSettings} from'./contexts/SettingsContext';
import CookieBanner from'./components/CookieBanner';

function AnimatedRoutes() {
 const location = useLocation();

 return (
 <AnimatePresence mode="wait">
 <motion.div key={location.pathname} className="flex-grow flex flex-col">
 <Routes location={location}>
 <Route path="/" element={<Home />} />
 <Route path="/projects" element={<Projects />} />
 <Route path="/about" element={<About />} />
 <Route path="/school" element={<School />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/quotes" element={<Quotes />} />
 <Route path="/privacy-policy" element={<PrivacyPolicy />} />
 <Route path="/terms-of-use" element={<TermsOfUse />} />
 <Route path="/copyright" element={<Copyright />} />
 <Route path="/license" element={<License />} />
 <Route path="/socratic-squad" element={<SocraticSquad />} />
 <Route path="*" element={<NotFound />} />
 </Routes>
 </motion.div>
 </AnimatePresence>
 );
}

function AppContent() {
 const { analyticsEnabled} = useSettings();
 
 return (
 <Router>
 <div className="min-h-screen bg-paper text-ink font-body selection:bg-ink selection:text-paper relative overflow-hidden transition-colors duration-300">
 <Navbar />
 <main className="relative z-10 min-h-screen flex flex-col pt-20">
 <AnimatedRoutes />
 </main>
 <Footer />
 <CookieBanner />
 {analyticsEnabled && <Analytics />}
 </div>
 </Router>
 );
}

export default function App() {
 return (
 <SettingsProvider>
 <AppContent />
 </SettingsProvider>
 );
}
