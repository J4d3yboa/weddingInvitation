import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WeddingInvitation } from './components/WeddingInvitation';
import { DaySchedule } from './components/DaySchedule';
import { FAQ } from './components/FAQ';
import { Button } from './components/ui/button';
import { Languages } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'de' | 'pt'>('de');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'pt' : 'de');
  };

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      <div className="min-h-screen bg-gradient-to-br from-[#f5f1ea] via-[#faf8f3] to-[#f0ebe3]">
        {/* Language Toggle Button - Fixed Position */}
        <motion.div 
          className="fixed top-6 right-6 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={toggleLanguage}
            className="bg-gradient-to-br from-white to-[#faf7f2] hover:from-[#faf7f2] hover:to-white text-[#6b5d4f] shadow-[0_8px_30px_rgba(139,115,85,0.15)] hover:shadow-[0_12px_40px_rgba(139,115,85,0.2)] border border-[#d4c5b0]/30 gap-2 transition-all duration-300"
            size="lg"
          >
            <Languages className="w-5 h-5" />
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {language === 'de' ? 'Português' : 'Deutsch'}
              </motion.span>
            </AnimatePresence>
          </Button>
        </motion.div>

        {/* Wedding Invitation */}
        <section id="invitation">
          <WeddingInvitation language={language} />
        </section>

        {/* Day Schedule */}
        <section id="schedule">
          <DaySchedule language={language} />
        </section>

        {/* FAQ */}
        <section id="faq">
          <FAQ language={language} />
        </section>

        {/* Footer */}
        <footer className="py-16 text-center bg-gradient-to-br from-[#f0ebe3] via-[#faf8f3] to-[#f5f1ea] border-t border-[#d4c5b0]/20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Floral ornament */}
            <div className="flex justify-center mb-6">
              <svg width="50" height="50" viewBox="0 0 50 50" className="text-[#9d8b7a]/30">
                <g fill="none" stroke="currentColor" strokeWidth="0.8">
                  <circle cx="25" cy="25" r="5" />
                  <path d="M25 20 Q23.5 17.5 25 15 Q26.5 17.5 25 20" />
                  <path d="M30 25 Q32.5 23.5 35 25 Q32.5 26.5 30 25" />
                  <path d="M25 30 Q26.5 32.5 25 35 Q23.5 32.5 25 30" />
                  <path d="M20 25 Q17.5 26.5 15 25 Q17.5 23.5 20 25" />
                </g>
              </svg>
            </div>
            <p 
              className="text-[#6b5d4f] text-2xl mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Grazielle & Helge
            </p>
            <p className="text-[#8b7355]/50 text-sm" style={{ fontFamily: "'Crimson Text', serif" }}>
              27. Juni 2026
            </p>
          </motion.div>
        </footer>
      </div>
    </>
  );
}
