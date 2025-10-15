import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface FAQProps {
  language: 'de' | 'pt';
}

const faqTranslations = {
  de: {
    title: "Häufig gestellte Fragen",
    subtitle: "Hier finden Sie Antworten auf die wichtigsten Fragen",
    faqs: [
      {
        question: "Gibt es Parkmöglichkeiten?",
        answer: "Ja, es stehen ausreichend Parkplätze direkt am Schloss zur Verfügung. Folgen Sie einfach der Beschilderung."
      },
      {
        question: "Kann ich Kinder mitbringen?",
        answer: "Wir lieben Kinder! Es wird einen separaten Bereich mit Kinderbetreuung und Unterhaltung geben."
      },
      {
        question: "Gibt es vegetarische/vegane Optionen?",
        answer: "Selbstverständlich! Bitte teilen Sie uns bei Ihrer Zusage mit, wenn Sie besondere Ernährungswünsche haben."
      },
      {
        question: "Wie kann ich meine Zusage/Absage mitteilen?",
        answer: "Bitte rufen Sie uns unter der angegebenen Telefonnummer an oder scannen Sie den QR-Code auf der Einladung für weitere Kontaktmöglichkeiten."
      },
      {
        question: "Gibt es ein Geschenkeregister?",
        answer: "Ihre Anwesenheit ist das größte Geschenk für uns. Falls Sie dennoch etwas schenken möchten, freuen wir uns über einen Beitrag zu unserer Hochzeitsreise."
      },
      {
        question: "Bis wann geht die Feier?",
        answer: "Die Feier im Schloss endet offiziell um 2:00 Uhr morgens, aber wir werden anschließend in einer nahegelegenen Location weiterfeiern."
      }
    ]
  },
  pt: {
    title: "Perguntas Frequentes",
    subtitle: "Aqui você encontrará respostas para as perguntas mais importantes",
    faqs: [
      {
        question: "Há estacionamento disponível?",
        answer: "Sim, há vagas de estacionamento suficientes diretamente no castelo. Basta seguir a sinalização."
      },
      {
        question: "Posso trazer crianças?",
        answer: "Amamos crianças! Haverá uma área separada com cuidados infantis e entretenimento."
      },
      {
        question: "Existem opções vegetarianas/veganas?",
        answer: "Claro! Por favor, informe-nos quando confirmar sua presença se você tiver necessidades alimentares especiais."
      },
      {
        question: "Como posso confirmar minha presença/ausência?",
        answer: "Por favor, ligue para o número de telefone fornecido ou escaneie o código QR no convite para mais opções de contato."
      },
      {
        question: "Existe uma lista de presentes?",
        answer: "Sua presença é o maior presente para nós. Mas se você ainda quiser nos presentear, ficaremos felizes com uma contribuição para nossa lua de mel."
      },
      {
        question: "Até que horas vai a festa?",
        answer: "A festa no castelo termina oficialmente às 2h da manhã, mas continuaremos celebrando em um local próximo depois."
      }
    ]
  }
};

export function FAQ({ language }: FAQProps) {
  const t = faqTranslations[language];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-[#f5f1ea] via-[#faf8f3] to-[#f0ebe3] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative element */}
          <div className="flex justify-center mb-6">
            <svg width="50" height="50" viewBox="0 0 50 50" className="text-[#9d8b7a]/30">
              <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
              <text x="25" y="32" textAnchor="middle" fill="currentColor" fontSize="20" fontFamily="'Cormorant Garamond', serif">?</text>
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

        <Accordion type="single" collapsible className="space-y-4">
          {t.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-gradient-to-br from-white/80 to-[#faf7f2]/80 backdrop-blur-sm border border-[#d4c5b0]/20 rounded-lg px-6 shadow-[0_4px_20px_rgba(139,115,85,0.06)] hover:shadow-[0_8px_30px_rgba(139,115,85,0.1)] transition-shadow"
              >
                <AccordionTrigger 
                  className="text-[#6b5d4f] hover:text-[#8b7355] text-left"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-[#8b7355]/80"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
