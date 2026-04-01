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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type:'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-6 md:p-12 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-paper border border-border p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 pointer-events-auto">
            <div className="flex-1">
              <h4 className="text-lg font-bold tracking-tight mb-2">Cookie Preferences</h4>
              <p className="text-sm text-muted leading-relaxed max-w-2xl">
                We use cookies and analytics to improve your experience and understand how our site is used. You can manage your preferences in the footer settings at any time.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-8 py-3 border border-border font-bold text-xs uppercase tracking-widest hover:bg-zinc-50 transition-colors text-muted hover:text-ink"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-8 py-3 bg-ink text-paper font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
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
