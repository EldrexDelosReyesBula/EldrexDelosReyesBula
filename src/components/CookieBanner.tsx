import React, { useState, useEffect} from'react';
import { motion, AnimatePresence} from'motion/react';
import { useSettings} from'../contexts/SettingsContext';

export default function CookieBanner() {
 const { setAnalyticsEnabled} = useSettings();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
 const hasConsented = localStorage.getItem('cookieConsent');
 if (!hasConsented) {
 setIsVisible(true);
}
}, []);

 const handleAccept = () => {
 setAnalyticsEnabled(true);
 localStorage.setItem('cookieConsent','true');
 setIsVisible(false);
};

 const handleDecline = () => {
 setAnalyticsEnabled(false);
 localStorage.setItem('cookieConsent','false');
 setIsVisible(false);
};

 return (
 <AnimatePresence>
 {isVisible && (
 <motion.div
 initial={{ y: 100, opacity: 0}}
 animate={{ y: 0, opacity: 1}}
 exit={{ y: 100, opacity: 0}}
 transition={{ type:'spring', stiffness: 300, damping: 30}}
 className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
 >
 <div className="max-w-4xl mx-auto bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#ff0557] flex flex-col md:flex-row items-center justify-between gap-6">
 <p className="text-sm md:text-base font-bold font-body text-gray-800 flex-1">
 We use cookies and analytics to improve your experience and understand how our site is used. You can manage your preferences in the footer settings.
 </p>
 <div className="flex flex-wrap gap-4 shrink-0">
 <button
 onClick={handleDecline}
 className="px-6 py-2 border-2 border-black font-bold text-sm uppercase tracking-wider hover:bg-gray-100 :bg-gray-800 transition-colors hover-target text-black"
 >
 Decline Analytics
 </button>
 <button
 onClick={handleAccept}
 className="px-6 py-2 border-4 border-black bg-[#00e5ff] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#ff0557] hover:text-white transition-colors hover-target shadow-[4px_4px_0px_0px_black] hover:shadow-[2px_2px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px]"
 >
 Accept All
 </button>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 );
}
