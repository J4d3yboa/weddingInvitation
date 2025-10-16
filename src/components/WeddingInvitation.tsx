import { motion } from 'framer-motion';
import { QrCode, MapPin, Calendar, Clock, Phone } from 'lucide-react';

interface WeddingInvitationProps {
  language: 'de' | 'pt';
}

const translations = {
  de: {
    invitation: "Wir heiraten!",
    inviteText: "haben die Freude, Sie zu ihrer Hochzeit einzuladen",
    location: "Location",
    address: "Zehnthof: Badstraße 7, 76835 Gleisweiler",
    dateLabel: "Datum",
    date: "27. Juni 2026",
    timeLabel: "Uhrzeit",
    time: "15:00 Uhr",
    dresscode: "Dresscode",
    dresscodeText: "Elegante Garderobe",
    colorSuggestion: "Farbempfehlung: Türkis-Töne",
    rsvpLabel: "Zu-/Absage bis",
    rsvpDate: "15. April 2026",
    contact: "Kontakt",
    phone: "+49 123 456789",
    qrText: "Für weitere Informationen",
    qrScan: "QR-Code einscannen"
  },
  pt: {
    invitation: "Nós vamos casar!",
    inviteText: "têm o prazer de convidá-lo para o seu casamento",
    location: "Local",
    address: "Zehnthof: Badstraße 7, 76835 Gleisweiler",
    dateLabel: "Data",
    date: "15 de junho de 2026",
    timeLabel: "Horário",
    time: "15:00",
    dresscode: "Dress Code",
    dresscodeText: "Traje elegante",
    colorSuggestion: "Sugestão de cor: Tons de turquesa",
    rsvpLabel: "Confirmação até",
    rsvpDate: "15 de abril de 2026",
    contact: "Contato",
    phone: "+49 123 456789",
    qrText: "Para mais informações",
    qrScan: "Escaneie o código QR"
  }
};

export function WeddingInvitation({ language }: WeddingInvitationProps) {
  const t = translations[language];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f1ea] via-[#faf8f3] to-[#f0ebe3]">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-3xl"
      >
        {/* Silver outer frame with metallic effect */}
        <div className="relative p-1 rounded-sm bg-gradient-to-br from-[#e8e8e8] via-[#c0c0c0] to-[#a8a8a8] shadow-[0_0_40px_rgba(192,192,192,0.4),inset_0_1px_2px_rgba(255,255,255,0.8)]">
          {/* Inner silver border with engraved effect */}
          <div className="relative p-[6px] rounded-sm bg-gradient-to-br from-[#d4d4d4] via-[#b8b8b8] to-[#c8c8c8] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_1px_2px_rgba(255,255,255,0.5)]">
            {/* Decorative silver corner accents */}
            <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-[#e8e8e8] rounded-tl-sm"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-[#e8e8e8] rounded-tr-sm"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-[#e8e8e8] rounded-bl-sm"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-[#e8e8e8] rounded-br-sm"></div>
            
            {/* Silver ornamental dots */}
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#ffffff] to-[#c0c0c0] shadow-[0_1px_3px_rgba(0,0,0,0.3)]"></div>
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#ffffff] to-[#c0c0c0] shadow-[0_1px_3px_rgba(0,0,0,0.3)]"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#ffffff] to-[#c0c0c0] shadow-[0_1px_3px_rgba(0,0,0,0.3)]"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#ffffff] to-[#c0c0c0] shadow-[0_1px_3px_rgba(0,0,0,0.3)]"></div>

            {/* Main invitation card */}
            <div className="relative bg-gradient-to-br from-[#fdfcfa] to-[#faf7f2] rounded-sm shadow-[0_20px_60px_rgba(139,115,85,0.15)] border border-[#d4c5b0]/30 overflow-hidden">
              {/* Paper texture overlay */}
              <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                   }}>
              </div>

              <div className="relative p-8 md:p-16">
            {/* Decorative corner ornaments with silver accents */}
            <svg className="absolute top-6 left-6 w-16 h-16" viewBox="0 0 64 64" fill="none">
              <defs>
                <linearGradient id="silverGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e8e8e8" />
                  <stop offset="50%" stopColor="#c0c0c0" />
                  <stop offset="100%" stopColor="#a8a8a8" />
                </linearGradient>
              </defs>
              <path d="M0 0 L0 20 Q0 0 20 0 Z M0 0 L20 0 L0 20 Z" stroke="url(#silverGrad1)" strokeWidth="1" fill="url(#silverGrad1)" opacity="0.6" />
              <circle cx="8" cy="8" r="1.5" fill="url(#silverGrad1)" />
              <path d="M0 0 L0 20 Q0 0 20 0 Z" stroke="#9d8b7a" strokeWidth="0.5" fill="none" opacity="0.3" />
            </svg>
            <svg className="absolute top-6 right-6 w-16 h-16" viewBox="0 0 64 64" fill="none">
              <defs>
                <linearGradient id="silverGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e8e8e8" />
                  <stop offset="50%" stopColor="#c0c0c0" />
                  <stop offset="100%" stopColor="#a8a8a8" />
                </linearGradient>
              </defs>
              <path d="M64 0 L64 20 Q64 0 44 0 Z M64 0 L44 0 L64 20 Z" stroke="url(#silverGrad2)" strokeWidth="1" fill="url(#silverGrad2)" opacity="0.6" />
              <circle cx="56" cy="8" r="1.5" fill="url(#silverGrad2)" />
              <path d="M64 0 L64 20 Q64 0 44 0 Z" stroke="#9d8b7a" strokeWidth="0.5" fill="none" opacity="0.3" />
            </svg>
            <svg className="absolute bottom-6 left-6 w-16 h-16" viewBox="0 0 64 64" fill="none">
              <defs>
                <linearGradient id="silverGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e8e8e8" />
                  <stop offset="50%" stopColor="#c0c0c0" />
                  <stop offset="100%" stopColor="#a8a8a8" />
                </linearGradient>
              </defs>
              <path d="M0 64 L0 44 Q0 64 20 64 Z M0 64 L20 64 L0 44 Z" stroke="url(#silverGrad3)" strokeWidth="1" fill="url(#silverGrad3)" opacity="0.6" />
              <circle cx="8" cy="56" r="1.5" fill="url(#silverGrad3)" />
              <path d="M0 64 L0 44 Q0 64 20 64 Z" stroke="#9d8b7a" strokeWidth="0.5" fill="none" opacity="0.3" />
            </svg>
            <svg className="absolute bottom-6 right-6 w-16 h-16" viewBox="0 0 64 64" fill="none">
              <defs>
                <linearGradient id="silverGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e8e8e8" />
                  <stop offset="50%" stopColor="#c0c0c0" />
                  <stop offset="100%" stopColor="#a8a8a8" />
                </linearGradient>
              </defs>
              <path d="M64 64 L64 44 Q64 64 44 64 Z M64 64 L44 64 L64 44 Z" stroke="url(#silverGrad4)" strokeWidth="1" fill="url(#silverGrad4)" opacity="0.6" />
              <circle cx="56" cy="56" r="1.5" fill="url(#silverGrad4)" />
              <path d="M64 64 L64 44 Q64 64 44 64 Z" stroke="#9d8b7a" strokeWidth="0.5" fill="none" opacity="0.3" />
            </svg>

            {/* Header with floral ornament */}
            <motion.div 
              className="text-center mb-12 space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                opacity: 1,
                borderColor: "silver",
                borderWidth: "medium",
                paddingLeft: "30px",
                paddingRight: "30px"
               }}
            >
              {/* Floral ornament with silver accents */}
              <div className="flex justify-center mb-6">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <defs>
                    <linearGradient id="silverFloral" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e8e8e8" />
                      <stop offset="50%" stopColor="#c0c0c0" />
                      <stop offset="100%" stopColor="#b0b0b0" />
                    </linearGradient>
                  </defs>
                  <g fill="none" strokeWidth="1.2">
                    <circle cx="40" cy="40" r="8" stroke="url(#silverFloral)" opacity="0.5" />
                    <path d="M40 32 Q38 28 40 24 Q42 28 40 32" stroke="url(#silverFloral)" opacity="0.5" />
                    <path d="M48 40 Q52 38 56 40 Q52 42 48 40" stroke="url(#silverFloral)" opacity="0.5" />
                    <path d="M40 48 Q42 52 40 56 Q38 52 40 48" stroke="url(#silverFloral)" opacity="0.5" />
                    <path d="M32 40 Q28 42 24 40 Q28 38 32 40" stroke="url(#silverFloral)" opacity="0.5" />
                    <path d="M46 34 Q49 30 53 27 Q50 31 46 34" stroke="url(#silverFloral)" opacity="0.4" />
                    <path d="M46 46 Q50 49 53 53 Q49 50 46 46" stroke="url(#silverFloral)" opacity="0.4" />
                    <path d="M34 46 Q30 50 27 53 Q31 49 34 46" stroke="url(#silverFloral)" opacity="0.4" />
                    <path d="M34 34 Q31 31 27 27 Q30 30 34 34" stroke="url(#silverFloral)" opacity="0.4" />
                  </g>
                  <g fill="none" stroke="#9d8b7a" strokeWidth="0.8" opacity="0.25">
                    <circle cx="40" cy="40" r="8" />
                    <path d="M40 32 Q38 28 40 24 Q42 28 40 32" />
                    <path d="M48 40 Q52 38 56 40 Q52 42 48 40" />
                    <path d="M40 48 Q42 52 40 56 Q38 52 40 48" />
                    <path d="M32 40 Q28 42 24 40 Q28 38 32 40" />
                  </g>
                </svg>
              </div>

              <div className="space-y-2">
                <p className="text-[#8b7355] tracking-[0.3em] uppercase text-xs opacity-60 font-serif">
                  {t.invitation}
                </p>
              </div>
<div className="relative flex items-center justify-center my-8" style={{height: "400px"}}>
  {/* Hintergrundbild */}
  <img 
    src="Strand.png" 
    alt="Hintergrund" 
    className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
    style={{pointerEvents: "none"}}
  />
  {/* Text über dem Bild */}
  <div className="relative z-10 space-y-3">
    <motion.h1 
      className="text-[#6b5d4f] text-5xl md:text-6xl tracking-wide"
      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      Grazielle & Helge
    </motion.h1>
  </div>
</div>


              <p className="text-[#8b7355]/80 max-w-md mx-auto text-sm leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                {t.inviteText}
              </p>
            </motion.div>

            {/* Ornamental divider with silver */}
            <div className="flex items-center justify-center gap-3 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent"></div>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <defs>
                  <radialGradient id="silverDot1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#c0c0c0" />
                    <stop offset="100%" stopColor="#a8a8a8" />
                  </radialGradient>
                </defs>
                <circle cx="6" cy="6" r="1.5" fill="url(#silverDot1)" opacity="0.7" />
                <circle cx="6" cy="6" r="5" stroke="#c0c0c0" strokeWidth="0.5" fill="none" opacity="0.5" />
                <circle cx="6" cy="6" r="5" stroke="#9d8b7a" strokeWidth="0.3" fill="none" opacity="0.3" />
              </svg>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#c0c0c0]/40 to-transparent"></div>
            </div>

            {/* Event details */}
            <motion.div 
              className="space-y-6 mb-10 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-[#9d8b7a]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9d8b7a]/20 transition-colors">
                  <Calendar className="w-4 h-4 text-[#8b7355]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#8b7355]/60 text-xs uppercase tracking-widest mb-1">{t.dateLabel}</p>
                  <p className="text-[#6b5d4f]">{t.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-[#9d8b7a]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9d8b7a]/20 transition-colors">
                  <Clock className="w-4 h-4 text-[#8b7355]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#8b7355]/60 text-xs uppercase tracking-widest mb-1">{t.timeLabel}</p>
                  <p className="text-[#6b5d4f]">{t.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-[#9d8b7a]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9d8b7a]/20 transition-colors">
                  <MapPin className="w-4 h-4 text-[#8b7355]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#8b7355]/60 text-xs uppercase tracking-widest mb-1">{t.location}</p>
                  <p className="text-[#6b5d4f] mb-1">Schloss Bellevue</p>
                  <p className="text-[#8b7355]/70 text-sm">{t.address}</p>
                </div>
              </div>
            </motion.div>

            {/* Ornamental divider with silver */}
            <div className="flex items-center justify-center gap-3 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent"></div>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <defs>
                  <radialGradient id="silverDot2">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#c0c0c0" />
                    <stop offset="100%" stopColor="#a8a8a8" />
                  </radialGradient>
                </defs>
                <circle cx="6" cy="6" r="1.5" fill="url(#silverDot2)" opacity="0.7" />
                <circle cx="6" cy="6" r="5" stroke="#c0c0c0" strokeWidth="0.5" fill="none" opacity="0.5" />
                <circle cx="6" cy="6" r="5" stroke="#9d8b7a" strokeWidth="0.3" fill="none" opacity="0.3" />
              </svg>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#c0c0c0]/40 to-transparent"></div>
            </div>

            {/* Dresscode */}
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center mb-6">
                <p className="text-[#8b7355]/60 text-xs uppercase tracking-widest mb-4">{t.dresscode}</p>
                <p className="text-[#6b5d4f] mb-6">{t.dresscodeText}</p>
              </div>
              
              {/* Elegant dress and suit icons */}
              <div className="flex items-center justify-center gap-12 mb-8">
                {/* Dress Icon */}
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto text-[#8b7355]/70">
                    <path d="M30 10L23 17V22L18 55H42L37 22V17L30 10Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 22H37" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    <path d="M30 10C30 10 27.5 15 25 17.5C22.5 20 23 22 23 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    <path d="M30 10C30 10 32.5 15 35 17.5C37.5 20 37 22 37 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    <line x1="20" y1="35" x2="40" y2="35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3"/>
                    <line x1="19" y1="45" x2="41" y2="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3"/>
                  </svg>
                </motion.div>

                {/* Suit Icon */}
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto text-[#8b7355]/70">
                    <path d="M30 15L22 20V55H38V20L30 15Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 20L19 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    <path d="M38 20L41 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    <path d="M25 25L30 40L35 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="30" cy="33" r="1.5" fill="currentColor"/>
                    <circle cx="30" cy="39" r="1.5" fill="currentColor"/>
                    <path d="M27 20L30 15L33 20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>

              {/* Color Palette */}
              <div className="text-center">
                <p className="text-[#8b7355]/60 text-xs mb-4">{t.colorSuggestion}</p>
                <div className="flex justify-center gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7dd3c0] to-[#5fb8a6] shadow-lg border-2 border-white/60"
                  ></motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ecdc4] to-[#44a39c] shadow-lg border-2 border-white/60"
                  ></motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#45b7d1] to-[#3498a8] shadow-lg border-2 border-white/60"
                  ></motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5fa8d3] to-[#4682a9] shadow-lg border-2 border-white/60"
                  ></motion.div>
                </div>
              </div>
            </motion.div>

            {/* Ornamental divider with silver */}
            <div className="flex items-center justify-center gap-3 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent"></div>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <defs>
                  <radialGradient id="silverDot3">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#c0c0c0" />
                    <stop offset="100%" stopColor="#a8a8a8" />
                  </radialGradient>
                </defs>
                <circle cx="6" cy="6" r="1.5" fill="url(#silverDot3)" opacity="0.7" />
                <circle cx="6" cy="6" r="5" stroke="#c0c0c0" strokeWidth="0.5" fill="none" opacity="0.5" />
                <circle cx="6" cy="6" r="5" stroke="#9d8b7a" strokeWidth="0.3" fill="none" opacity="0.3" />
              </svg>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#c0c0c0]/40 to-transparent"></div>
            </div>

            {/* RSVP and Contact */}
            <motion.div 
              className="space-y-6 mb-10 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-[#9d8b7a]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9d8b7a]/20 transition-colors">
                  <Calendar className="w-4 h-4 text-[#8b7355]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#8b7355]/60 text-xs uppercase tracking-widest mb-1">{t.rsvpLabel}</p>
                  <p className="text-[#6b5d4f]">{t.rsvpDate}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-[#9d8b7a]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9d8b7a]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#8b7355]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#8b7355]/60 text-xs uppercase tracking-widest mb-1">{t.contact}</p>
                  <p className="text-[#6b5d4f]">{t.phone}</p>
                </div>
              </div>
            </motion.div>

            {/* Ornamental divider with silver */}
            <div className="flex items-center justify-center gap-3 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent"></div>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <defs>
                  <radialGradient id="silverDot4">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#c0c0c0" />
                    <stop offset="100%" stopColor="#a8a8a8" />
                  </radialGradient>
                </defs>
                <circle cx="6" cy="6" r="1.5" fill="url(#silverDot4)" opacity="0.7" />
                <circle cx="6" cy="6" r="5" stroke="#c0c0c0" strokeWidth="0.5" fill="none" opacity="0.5" />
                <circle cx="6" cy="6" r="5" stroke="#9d8b7a" strokeWidth="0.3" fill="none" opacity="0.3" />
              </svg>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#c0c0c0]/40 to-transparent"></div>
            </div>

            {/* QR Code */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-[#8b7355]/70 text-sm mb-6">{t.qrText}</p>
              <motion.div 
                className="inline-block p-8 bg-white/50 backdrop-blur-sm rounded-lg shadow-[0_8px_30px_rgba(139,115,85,0.12)] border-2 border-transparent bg-clip-padding relative"
                style={{
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #e8e8e8, #c0c0c0, #a8a8a8)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-40 h-40 flex items-center justify-center bg-gradient-to-br from-[#fdfcfa] to-[#f5f1ea] border-2 border-dashed border-[#c0c0c0]/40 rounded-md relative">
                  <div className="absolute inset-0 border border-dashed border-[#9d8b7a]/20 rounded-md"></div>
                  <QrCode className="w-20 h-20 text-[#9d8b7a]/30 relative z-10" />
                </div>
              </motion.div>
              <p className="text-[#8b7355]/60 text-xs mt-4 tracking-wide">{t.qrScan}</p>
            </motion.div>
          </div>
            </div>
          </div>

          {/* Shadow effect */}
          <div className="absolute inset-0 rounded-sm shadow-[0_30px_90px_rgba(139,115,85,0.08)] pointer-events-none"></div>
        </div>
      </motion.div>
    </div>
  );
}
