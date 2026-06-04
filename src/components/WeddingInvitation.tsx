import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Phone, Bed, Car, Cake } from 'lucide-react';
import  strandImage  from "../assets/Strand.png";
import qrCodeImage from "../assets/qr-code.png";
import suitImage from "../assets/suit.png";
import coupleImage1 from "../assets/CoupleBeachOne.jpeg";
import coupleImage2 from "../assets/CoupleBeachTwo.jpeg";
import coupleImage3 from "../assets/CoupleBeachThree.jpeg";
import cocktailDressImage from "../assets/cocktailDress.png";
import parkingImage from "../assets/parking.png";

interface WeddingInvitationProps {
  language: 'de' | 'pt';
}

interface CakeEntry {
  name: string;
  cake: string;
}

const translations = {
  de: {
    invitation: "Wir heiraten!",
    inviteText: "laden dich/euch ein mit uns zu feiern",
    inviteDescription: "Liebe Familie und Freunde,\n am Sandstrand, so war es gedacht,\n hätten wir gern die Zeremonie gemacht.\n Der Strand ist fern, der Weinberg nah -\n Deshalb feiern wir die Hochzeit da.",
    location: "Location",
    address: "Badstraße 7, 76835 Gleisweiler",
    dateLabel: "Datum",
    date: "27. Juni 2026",
    timeLabel: "Uhrzeit",
    time: "15:00 Uhr",
    dresscode: "Dresscode",
    dresscodeText: "Um dem Meer etwas nah zu sein, \n kleidet euch bitte türkisgrün ein. \n Natürlich nur wenn ihr wollt! \n Es wäre sehr schön und wir würden uns sehr freuen wenn ihr uns dabei unterstützt in die nähe unseres Traumes zu kommen.",
    colorSuggestion: "Farbempfehlung: Türkis-Töne",
    giftInformation: "Deko und Staubfänger brauchen wir nicht - \n eine Traumreise wäre ein Gedicht",
    scheduleTitle: "Tagesablauf",
    schedule: [
      { time: "15:00", event: "Sektempfang" },
      { time: "16:00", event: "Zeremonie" },
      { time: "18:00", event: "Vorspeise" },
      { time: "19:00", event: "Abendessen" },
      { time: "20:00", event: "Party" }
    ],
    accommodationTitle: "Übernachtung",
    accommodationText: "Für unsere Gäste von weit her haben wir ein paar Übernachtungsmöglichkeiten gesammelt. Klickt hier für weitere Informationen:",
    accommodationLinkText: "Zu den Unterkünften",
    parkingTitle: "Parkmöglichkeiten",
    parkingText: "Parkplätze stehen in der Nähe der Location zur Verfügung.",
    parkingLinkText: "In Google Maps öffnen",
    cakeTitle: "Kuchenbuffet",
    cakeText: "Für unser Kuchenbuffet freuen wir uns über eure süßen Kreationen! Damit wir wissen, worauf wir uns freuen dürfen und es nicht fünfmal den gleichen Kuchen gibt, schaut gerne in die Liste und tragt euch ein:",
    cakeListEmpty: "Noch keine Kuchen eingetragen. Sei der Erste!",
    cakeLinkText: "Kuchen eintragen",
    rsvpLabel: "Zu-/Absage bis",
    rsvpDate: "15. Mai 2026",
    contact: "Kontakt",
    phone: "+49 160 94830553",
    qrText: "Für weitere Informationen ab dem 15. April 2026",
    qrScan: "QR-Code einscannen"
  },
  pt: {
    invitation: "Vamos casar!",
    inviteText: "tem o prazer de convidar você para celebrar conosco",
    inviteDescription: "Queridos familiares e amigos, \n na areia da praia sonhamos sorrindo, \n com o vento e o mar nos unindo. \n Mas a praia é distante, o caminho é comprido, \n na vinícola, porém, o amor está contigo. \n Por isso celebramos, com amor e alegria, \n nossa união nas vinhas da Alemanha, neste dia.",
    location: "Local",
    address: "Rua Badstraße 7, 76835 Gleisweiler",
    dateLabel: "Data",
    date: "27 de maio de 2026",
    timeLabel: "Horário",
    time: "15:00 horas",
    dresscode: "Código de vestimenta",
    dresscodeText: "Era nosso sonho... \n Para estar um pouco perto do mar, \n por favor, vistam-se em tons de turquesa-verde. \n Claro, somente se quiserem! \n Seria muito bom e ficaríamos muito felizes se vocês nos ajudassem a chegar perto da cor do nosso sonho.",
    colorSuggestion: "Sugestão de cor: tons de turquesa",
    giftInformation: "Sobre presentes... \n qualquer brisa que nos leve a uma viagem dos sonhos seria perfeita.",
    scheduleTitle: "Programação",
    schedule: [
      { time: "15:00", event: "Recepção" },
      { time: "16:00", event: "Cerimônia" },
      { time: "18:00", event: "Aperitivo" },
      { time: "19:00", event: "Jantar" },
      { time: "20:00", event: "Festa" }
    ],
    accommodationTitle: "Acomodações",
    accommodationText: "Para os nossos convidados de longe, separamos algumas opções de hospedagem. Clique aqui para mais informações:",
    accommodationLinkText: "Ver Acomodações",
    parkingTitle: "Estacionamento",
    parkingText: "Existem vagas de estacionamento disponíveis perto do local.",
    parkingLinkText: "Abrir no Google Maps",
    cakeTitle: "Mesa de Bolos",
    cakeText: "Para a nossa mesa de bolos, adoraríamos provar as criações de vocês! Para sabermos o que esperar e evitarmos ter o mesmo bolo repetido, confiram a lista e adicionem o de vocês:",
    cakeListEmpty: "Nenhum bolo adicionado ainda. Seja o primeiro!",
    cakeLinkText: "Adicionar Bolo",
    rsvpLabel: "Confirmação até",
    rsvpDate: "15 de abril de 2026",
    contact: "Contato",
    phone: "+49 160 94830553",
    qrText: "Para mais informações a partir de 15 de abril de 2026",
    qrScan: "Escaneie o código QR"
  }
};

export function WeddingInvitation({ language }: WeddingInvitationProps) {
  const t = translations[language];
  const [cakes, setCakes] = useState<CakeEntry[]>([]);

  // CSV Fetch Logic
  useEffect(() => {
    // ⚠️ HIER DEINEN KOPIERTEN CSV-LINK AUS GOOGLE SHEETS EINTRAGEN ⚠️
    const sheetCSVUrl = "HIER_DEIN_GOOGLE_SHEET_CSV_LINK_EINTRAGEN";
    
    // Verhindere Fetch, wenn noch kein Link eingetragen ist
    if (!sheetCSVUrl.startsWith("http")) return;

    fetch(sheetCSVUrl)
      .then(res => res.text())
      .then(csv => {
        // Splitte in Zeilen und entferne die erste Zeile (Header: Zeitstempel, Name, Kuchen)
        const rows = csv.split(/\r?\n/).filter(line => line.trim() !== "");
        const dataRows = rows.slice(1);
        
        const cakeEntries = dataRows.map(row => {
          // Regex-Split um Kommas, ignoriert Kommas innerhalb von Anführungszeichen
          const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
          // Wir gehen davon aus: Spalte A (0) = Zeit, Spalte B (1) = Name, Spalte C (2) = Kuchen
          if (cols.length >= 3) {
            const name = cols[1].replace(/(^"|"$)/g, '').trim();
            const cake = cols[2].replace(/(^"|"$)/g, '').trim();
            if (name && cake) return { name, cake };
          }
          return null;
        }).filter(Boolean) as CakeEntry[];
        
        setCakes(cakeEntries);
      })
      .catch(err => console.error("Fehler beim Laden der Kuchenliste:", err));
  }, []);

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

<div className="relative my-8" style={{ height: "45vh", maxHeight: "450px", minHeight: "300px" }}>
  {/* Name-Overlay auf den Bildern */}
  <div className="absolute top-1/2 left-0 w-full flex justify-center z-20 pointer-events-none" style={{ transform: "translateY(-60%)" }}>
    <motion.h1
      className="text-[#6b5d4f] text-6xl sm:text-7xl md:text-8xl lg:text-7xl tracking-wide drop-shadow-lg"
      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.12 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Grazielle & Helge
    </motion.h1>
  </div>

  {/* Grid Layout */}
  <div className="grid grid-cols-3 gap-2 h-full w-full">
    {/* Erstes Bild */}
    <div className="relative flex items-end justify-center overflow-hidden rounded-lg shadow-lg h-full w-full">
      <img
        src={coupleImage1}
        alt="Hintergrund 1"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
        style={{ pointerEvents: "none" }}
      />
      <p className="relative z-10 mb-4 text-[#6b5d4f] text-8xl md:text-9xl font-light drop-shadow-lg">27</p>
    </div>

    {/* Zweites Bild */}
    <div className="relative flex items-end justify-center overflow-hidden rounded-lg shadow-lg h-full w-full">
      <img
        src={coupleImage2}
        alt="Hintergrund 2"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
        style={{ pointerEvents: "none" }}
      />
      <p className="relative z-10 mb-4 text-[#6b5d4f] text-8xl md:text-9xl font-light drop-shadow-lg">06</p>
    </div>

    {/* Drittes Bild */}
    <div className="relative flex items-end justify-center overflow-hidden rounded-lg shadow-lg h-full w-full">
      <img
        src={coupleImage3}
        alt="Hintergrund 3"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
        style={{ pointerEvents: "none" }}
      />
      <p className="relative z-10 mb-4 text-[#6b5d4f] text-8xl md:text-9xl font-light drop-shadow-lg">26</p>
    </div>
  </div>
</div>

              <p className="text-[#8b7355]/80 max-w-md mx-auto text-sm leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                {t.inviteText}
              </p>

            </motion.div>
<motion.div>
  <p
    className="text-[#8b7355]/80 italic max-w-md mx-auto text-base leading-relaxed mt-4 text-center"
    style={{ fontFamily: "'Crimson Text', serif", whiteSpace: "pre-line" }}
  >
    {t.inviteDescription}
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

           {/* Content with two columns: event/details on left, giftInformation & contact on right */}
              <div className="relative p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Left column: Location, Date, Time */}
                <div className="space-y-6">
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
                      <p className="text-[#6b5d4f] mb-1">Zehnthof</p>
                      <p className="text-[#8b7355]/70 text-sm">{t.address}</p>
                    </div>
                  </div>
                </div>

                {/* Right column: giftInformation replacing RSVP and Contact */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9d8b7a]/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-[#8b7355]" />
                    </div>
                    <div>
                      <p className="text-[#8b7355]/60 text-xs uppercase tracking-widest mb-1">{t.rsvpLabel}</p>
                      <p className="text-[#6b5d4f]" style={{ whiteSpace: "pre-line" }}>{t.rsvpDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9d8b7a]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#8b7355]" />
                    </div>
                    <div>
                      <p className="text-[#8b7355]/60 text-xs uppercase tracking-widest mb-1">{t.contact}</p>
                      <p className="text-[#6b5d4f]">{t.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

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
<motion.div 
  className="mb-10"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 0.8 }}
>
  <div className="relative flex justify-center items-center mb-6 h-28 sm:h-32 md:h-40 lg:h-44 w-full max-w-lg mx-auto rounded-lg overflow-hidden">
    
    {/* Hintergrundbild – leicht nach unten verschoben */}
    <img
      src={strandImage}
      alt="Dresscode Hintergrund"
      className="absolute inset-0 w-full h-full object-cover opacity-50"
      style={{ pointerEvents: "none", objectPosition: "center 65%" }}
    />

    {/* Schriftzug auf dem Bild */}
    <span className="relative z-10 text-[#6b5d4f] text-xl sm:text-2xl md:text-3xl font-serif tracking-wide text-center w-full px-6">
      {t.dresscode}
    </span>
  </div>

  {/* Beschreibung */}
  <p 
    className="text-[#8b7355]/80 italic max-w-md mx-auto text-base leading-relaxed mt-4 text-center"
    style={{ fontFamily: "'Crimson Text', serif", whiteSpace: "pre-line" }}
  >
    {t.dresscodeText}
  </p>

              
              {/* Elegant dress and suit icons */}
              <div className="flex items-center justify-center gap-12 mb-8">
               {/* Dress Icon – Elegant Alternative */}
{/* Dress Icon – Elegant Cocktailkleid Style */}
<motion.div
  className="text-center"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <img
    src={cocktailDressImage} // sollte ein separater Bildausschnitt NUR vom Kleid sein!
    alt="Cocktailkleid"
    className="mx-auto w-16 h-auto"
    style={{ objectFit: 'contain' }}
  />
</motion.div>

<motion.div
  className="text-center"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <img
    src={suitImage} // sollte ein separater Bildausschnitt NUR vom Anzug sein!
    alt="Anzug"
    className="mx-auto w-16 h-auto"
    style={{ objectFit: 'contain' }}
  />
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
  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#238d90] to-[#30a6ad] shadow-lg border-2 border-white/60"
></motion.div>
<motion.div 
  whileHover={{ scale: 1.1, y: -2 }}
  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#155e63] to-[#227676] shadow-lg border-2 border-white/60"
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
            <motion.div>
  <p
    className="text-[#8b7355]/80 italic max-w-md mx-auto text-base leading-relaxed mt-4 text-center"
    style={{ fontFamily: "'Crimson Text', serif", whiteSpace: "pre-line" }}
  >
    {t.giftInformation}
  </p>
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

            {/* Schedule / Tagesablauf */}
            <motion.div 
              className="my-12 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <h3 className="text-[#6b5d4f] text-2xl font-serif text-center mb-8">{t.scheduleTitle}</h3>
              <div className="space-y-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[#c0c0c0] to-transparent -translate-x-1/2"></div>
                
                {t.schedule.map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between w-full group">
                    <div className="w-1/2 pr-6 text-right">
                      <span className="text-[#8b7355] font-bold text-lg font-serif">{item.time}</span>
                    </div>
                    {/* Center Dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[#ffffff] to-[#c0c0c0] shadow-[0_1px_3px_rgba(0,0,0,0.3)] z-10 group-hover:scale-125 transition-transform"></div>
                    <div className="w-1/2 pl-6 text-left">
                      <span className="text-[#6b5d4f]">{item.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ornamental divider with silver */}
            <div className="flex items-center justify-center gap-3 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent"></div>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <defs>
                  <radialGradient id="silverDot5">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#c0c0c0" />
                    <stop offset="100%" stopColor="#a8a8a8" />
                  </radialGradient>
                </defs>
                <circle cx="6" cy="6" r="1.5" fill="url(#silverDot5)" opacity="0.7" />
                <circle cx="6" cy="6" r="5" stroke="#c0c0c0" strokeWidth="0.5" fill="none" opacity="0.5" />
                <circle cx="6" cy="6" r="5" stroke="#9d8b7a" strokeWidth="0.3" fill="none" opacity="0.3" />
              </svg>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#c0c0c0]/40 to-transparent"></div>
            </div>

            {/* Accommodation / Übernachtungsmöglichkeiten */}
            <motion.div 
              className="text-center my-12 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.8 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#9d8b7a]/10 flex items-center justify-center">
                  <Bed className="w-6 h-6 text-[#8b7355]" />
                </div>
              </div>
              <h3 className="text-[#6b5d4f] text-2xl font-serif mb-4">{t.accommodationTitle}</h3>
              <p className="text-[#8b7355]/80 max-w-md mx-auto text-base leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                {t.accommodationText}
              </p>
              <a 
                href="https://www.gleisweiler.de/besuchen/gastgeber/#uebernachten" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2 border border-[#c0c0c0] rounded-sm text-[#8b7355] text-sm uppercase tracking-widest hover:bg-[#9d8b7a]/10 transition-colors shadow-sm"
              >
                {t.accommodationLinkText}
              </a>
            </motion.div>

            {/* Ornamental divider with silver */}
            <div className="flex items-center justify-center gap-3 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent"></div>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <defs>
                  <radialGradient id="silverDot6">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#c0c0c0" />
                    <stop offset="100%" stopColor="#a8a8a8" />
                  </radialGradient>
                </defs>
                <circle cx="6" cy="6" r="1.5" fill="url(#silverDot6)" opacity="0.7" />
                <circle cx="6" cy="6" r="5" stroke="#c0c0c0" strokeWidth="0.5" fill="none" opacity="0.5" />
                <circle cx="6" cy="6" r="5" stroke="#9d8b7a" strokeWidth="0.3" fill="none" opacity="0.3" />
              </svg>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#c0c0c0]/40 to-transparent"></div>
            </div>

            {/* Parking / Parkmöglichkeiten */}
            <motion.div 
              className="text-center my-12 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#9d8b7a]/10 flex items-center justify-center">
                  <Car className="w-6 h-6 text-[#8b7355]" />
                </div>
              </div>
              <h3 className="text-[#6b5d4f] text-2xl font-serif mb-4">{t.parkingTitle}</h3>
              <p className="text-[#8b7355]/80 max-w-md mx-auto text-base leading-relaxed mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
                {t.parkingText}
              </p>
              
              <div className="flex flex-col items-center">
                <div className="p-2 bg-white/60 border border-[#e8e8e8] rounded-sm shadow-sm max-w-sm w-full mb-4">
                  <img 
                    src={parkingImage} 
                    alt="Parkmöglichkeiten" 
                    className="w-full h-auto object-cover rounded-sm opacity-90"
                  />
                </div>
                
                {/* NEUER GOOGLE MAPS BUTTON */}
                <a 
                  href="https://maps.app.goo.gl/NfwBh7Mgexgr7SSw6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 border border-[#c0c0c0] rounded-sm text-[#8b7355] text-sm uppercase tracking-widest hover:bg-[#9d8b7a]/10 transition-colors shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  {t.parkingLinkText}
                </a>
              </div>
            </motion.div>

            {/* Ornamental divider with silver */}
            <div className="flex items-center justify-center gap-3 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent"></div>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <defs>
                  <radialGradient id="silverDot7">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#c0c0c0" />
                    <stop offset="100%" stopColor="#a8a8a8" />
                  </radialGradient>
                </defs>
                <circle cx="6" cy="6" r="1.5" fill="url(#silverDot7)" opacity="0.7" />
                <circle cx="6" cy="6" r="5" stroke="#c0c0c0" strokeWidth="0.5" fill="none" opacity="0.5" />
                <circle cx="6" cy="6" r="5" stroke="#9d8b7a" strokeWidth="0.3" fill="none" opacity="0.3" />
              </svg>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-[#c0c0c0]/40 to-transparent"></div>
            </div>

            {/* Cake / Kuchenbuffet - THE NEW SECTION */}
            <motion.div 
              className="text-center my-12 px-4 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.02, duration: 0.8 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#9d8b7a]/10 flex items-center justify-center">
                  <Cake className="w-6 h-6 text-[#8b7355]" />
                </div>
              </div>
              <h3 className="text-[#6b5d4f] text-2xl font-serif mb-4">{t.cakeTitle}</h3>
              <p className="text-[#8b7355]/80 text-base leading-relaxed mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
                {t.cakeText}
              </p>
              
              {/* Die gerenderte Liste aus Google Sheets */}
              <div className="bg-white/40 border border-[#e8e8e8] rounded-sm p-4 mb-6 shadow-sm text-left">
                {cakes.length > 0 ? (
                  <ul className="space-y-3 divide-y divide-[#c0c0c0]/30">
                    {cakes.map((cake, index) => (
                      <li key={index} className="pt-3 first:pt-0 flex items-start gap-3">
                        <Cake className="w-4 h-4 text-[#8b7355]/50 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[#6b5d4f] font-medium block">{cake.name}</span>
                          <span className="text-[#8b7355]/80 text-sm italic">{cake.cake}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center text-[#8b7355]/60 text-sm italic py-4">
                    {t.cakeListEmpty}
                  </p>
                )}
              </div>
              
              <a 
                href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRz-rPI4iSVyRG9inq9_EGrKwfloSB6UiLg1__2ysvIMQXtmlPBPyQ4nTSWdvaEXHmnlW1GErWIpnx_/pub?gid=2121085940&single=true&output=csv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-2 px-8 py-3 bg-[#9d8b7a]/10 border border-[#9d8b7a]/30 rounded-sm text-[#8b7355] text-sm uppercase tracking-widest hover:bg-[#9d8b7a]/20 transition-colors shadow-sm w-full sm:w-auto"
              >
                <Cake className="w-4 h-4" />
                {t.cakeLinkText}
              </a>
            </motion.div>

            {/* Ornamental divider with silver */}
            <div className="flex items-center justify-center gap-3 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent"></div>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <defs>
                  <radialGradient id="silverDot8">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#c0c0c0" />
                    <stop offset="100%" stopColor="#a8a8a8" />
                  </radialGradient>
                </defs>
                <circle cx="6" cy="6" r="1.5" fill="url(#silverDot8)" opacity="0.7" />
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
              transition={{ delay: 1.05, duration: 0.8 }}
            >
              
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
                  <img 
                    src={qrCodeImage}
                    alt="QR-Code" 
                    className="w-20 h-20 object-contain relative z-10" 
                   />
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
