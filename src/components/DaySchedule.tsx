import { motion } from 'framer-motion';

interface DayScheduleProps {
  language: 'de' | 'pt';
}

const scheduleTranslations = {
  de: {
    title: "Ablauf des Tages",
    subtitle: "Feiern Sie mit uns diesen besonderen Tag",
    schedule: [
      { time: "15:00", event: "Ankunft der Gäste", description: "Sektempfang im Schlossgarten" },
      { time: "15:30", event: "Trauungszeremonie", description: "Im Festsaal" },
      { time: "16:30", event: "Gratulationen & Fotoshooting", description: "Schlossgarten" },
      { time: "17:30", event: "Empfang & Aperitif", description: "Terrasse" },
      { time: "19:00", event: "Abendessen", description: "Festsaal" },
      { time: "21:00", event: "Eröffnungstanz", description: "" },
      { time: "21:30", event: "Party & Tanz", description: "Bis in die frühen Morgenstunden" }
    ]
  },
  pt: {
    title: "Cronograma do Dia",
    subtitle: "Celebre conosco este dia especial",
    schedule: [
      { time: "15:00", event: "Chegada dos convidados", description: "Recepção com champanhe no jardim" },
      { time: "15:30", event: "Cerimônia de casamento", description: "No salão de festas" },
      { time: "16:30", event: "Congratulações & Sessão de fotos", description: "Jardim do castelo" },
      { time: "17:30", event: "Recepção & Aperitivo", description: "Terraço" },
      { time: "19:00", event: "Jantar", description: "Salão de festas" },
      { time: "21:00", event: "Primeira dança", description: "" },
      { time: "21:30", event: "Festa & Dança", description: "Até as primeiras horas da manhã" }
    ]
  }
};

export function DaySchedule({ language }: DayScheduleProps) {
  const t = scheduleTranslations[language];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-[#faf8f3] via-[#f5f1ea] to-[#faf8f3] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Floral ornament */}
          <div className="flex justify-center mb-6">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-[#9d8b7a]/30">
              <g fill="none" stroke="currentColor" strokeWidth="0.8">
                <circle cx="30" cy="30" r="6" />
                <path d="M30 24 Q28 21 30 18 Q32 21 30 24" />
                <path d="M36 30 Q39 28 42 30 Q39 32 36 30" />
                <path d="M30 36 Q32 39 30 42 Q28 39 30 36" />
                <path d="M24 30 Q21 32 18 30 Q21 28 24 30" />
              </g>
            </svg>
          </div>
          <h2 
            className="text-[#6b5d4f] text-4xl md:text-5xl mb-4 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            {t.title}
          </h2>
          <p className="text-[#8b7355]/70" style={{ fontFamily: "'Crimson Text', serif" }}>{t.subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#9d8b7a]/20 via-[#9d8b7a]/40 to-[#9d8b7a]/20 transform md:-translate-x-1/2"></div>

          {/* Schedule items */}
          <div className="space-y-12">
            {t.schedule.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Time - Desktop */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <motion.span 
                    className="inline-block bg-gradient-to-br from-white to-[#faf7f2] text-[#6b5d4f] px-6 py-3 rounded-full border border-[#d4c5b0]/30 shadow-[0_4px_20px_rgba(139,115,85,0.1)]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    whileHover={{ scale: 1.05, boxShadow: "0 6px 30px rgba(139,115,85,0.15)" }}
                  >
                    {item.time}
                  </motion.span>
                </div>

                {/* Circle marker */}
                <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-gradient-to-br from-[#9d8b7a] to-[#8b7355] rounded-full border-[3px] border-[#faf8f3] transform -translate-x-1/2 shadow-lg z-10">
                  <div className="absolute inset-0 rounded-full bg-white/20"></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 ml-20 md:ml-0">
                  <motion.div 
                    className="bg-gradient-to-br from-white/80 to-[#faf7f2]/80 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-[0_8px_30px_rgba(139,115,85,0.08)] border border-[#d4c5b0]/20"
                    whileHover={{ 
                      y: -4, 
                      boxShadow: "0 12px 40px rgba(139,115,85,0.12)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Time - Mobile */}
                    <div className="md:hidden mb-3">
                      <span 
                        className="inline-block bg-[#9d8b7a]/10 text-[#6b5d4f] px-4 py-1.5 rounded-full text-sm border border-[#9d8b7a]/20"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.time}
                      </span>
                    </div>
                    <h3 
                      className="text-[#6b5d4f] mb-2 text-xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.event}
                    </h3>
                    {item.description && (
                      <p className="text-[#8b7355]/70 text-sm" style={{ fontFamily: "'Crimson Text', serif" }}>
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
