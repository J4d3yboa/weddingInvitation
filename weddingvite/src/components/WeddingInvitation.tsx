import { useState } from "react";
import { Menu, X, Heart, MapPin, Clock, Users, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function WeddingInvitation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rsvpData, setRsvpData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "yes",
    guests: "1",
    message: ""
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Vielen Dank für Ihre Rückmeldung, ${rsvpData.name}!`);
  };

  return (
    <div className="min-h-screen bg-amber-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-amber-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('hero')} className="tracking-widest text-amber-900">
              A & M
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-amber-800 hover:text-amber-900 transition-colors">Start</button>
              <button onClick={() => scrollToSection('about')} className="text-amber-800 hover:text-amber-900 transition-colors">Über Uns</button>
              <button onClick={() => scrollToSection('schedule')} className="text-amber-800 hover:text-amber-900 transition-colors">Ablauf</button>
              <button onClick={() => scrollToSection('location')} className="text-amber-800 hover:text-amber-900 transition-colors">Location</button>
              <button onClick={() => scrollToSection('dresscode')} className="text-amber-800 hover:text-amber-900 transition-colors">Dresscode</button>
              <button onClick={() => scrollToSection('gallery')} className="text-amber-800 hover:text-amber-900 transition-colors">Galerie</button>
              <button onClick={() => scrollToSection('rsvp')} className="text-amber-800 hover:text-amber-900 transition-colors">Zusagen</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-amber-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-100/50">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-amber-800 hover:text-amber-900 py-2">Start</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-amber-800 hover:text-amber-900 py-2">Über Uns</button>
              <button onClick={() => scrollToSection('schedule')} className="block w-full text-left text-amber-800 hover:text-amber-900 py-2">Ablauf</button>
              <button onClick={() => scrollToSection('location')} className="block w-full text-left text-amber-800 hover:text-amber-900 py-2">Location</button>
              <button onClick={() => scrollToSection('dresscode')} className="block w-full text-left text-amber-800 hover:text-amber-900 py-2">Dresscode</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-amber-800 hover:text-amber-900 py-2">Galerie</button>
              <button onClick={() => scrollToSection('rsvp')} className="block w-full text-left text-amber-800 hover:text-amber-900 py-2">Zusagen</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-xl border border-amber-100/50">
            <div className="border-8 border-double border-amber-700/20 m-6 sm:m-8">
              <div className="p-8 sm:p-12">
                {/* Decorative Top Ornament */}
                <div className="text-center mb-8">
                  <svg className="w-20 h-12 mx-auto text-amber-700/40" viewBox="0 0 100 60" fill="currentColor">
                    <path d="M50,30 Q40,10 30,30 Q20,50 10,30 Q5,20 0,30 L0,35 Q5,25 10,35 Q20,55 30,35 Q40,15 50,35 Q60,15 70,35 Q80,55 90,35 Q95,25 100,35 L100,30 Q95,20 90,30 Q80,50 70,30 Q60,10 50,30 Z" />
                  </svg>
                </div>

                <div className="text-center mb-10">
                  <p className="tracking-[0.3em] uppercase text-amber-800/70 mb-6">
                    Sie sind eingeladen
                  </p>
                  <p className="tracking-[0.2em] text-amber-800/60 mb-4">
                    zur Vermählung von
                  </p>
                </div>

                <div className="text-center mb-10">
                  <h1 className="text-5xl sm:text-6xl text-amber-900 mb-2 font-serif italic">
                    Anna
                  </h1>
                  <p className="text-3xl text-amber-800/60 my-4 font-serif">&</p>
                  <h1 className="text-5xl sm:text-6xl text-amber-900 font-serif italic">
                    Michael
                  </h1>
                </div>

                <div className="flex items-center justify-center my-10">
                  <div className="h-px w-16 bg-amber-700/30"></div>
                  <div className="mx-4 w-1.5 h-1.5 rounded-full bg-amber-700/40"></div>
                  <div className="h-px w-16 bg-amber-700/30"></div>
                </div>

                <div className="text-center mb-10 space-y-3">
                  <p className="text-amber-900">Samstag, der fünfzehnte Juni</p>
                  <p className="text-amber-900">Zweitausendfünfundzwanzig</p>
                  <p className="text-amber-800/70 mt-4">um vierzehn Uhr</p>
                </div>

                <div className="flex items-center justify-center my-10">
                  <div className="h-px w-16 bg-amber-700/30"></div>
                  <div className="mx-4 w-1.5 h-1.5 rounded-full bg-amber-700/40"></div>
                  <div className="h-px w-16 bg-amber-700/30"></div>
                </div>

                <div className="text-center mb-10">
                  <p className="text-amber-900 mb-3">Schloss Bellevue</p>
                  <p className="text-amber-800/70">Musterstraße 123</p>
                  <p className="text-amber-800/70">12345 Musterstadt</p>
                </div>

                <div className="text-center mt-12">
                  <svg className="w-20 h-12 mx-auto text-amber-700/40 rotate-180" viewBox="0 0 100 60" fill="currentColor">
                    <path d="M50,30 Q40,10 30,30 Q20,50 10,30 Q5,20 0,30 L0,35 Q5,25 10,35 Q20,55 30,35 Q40,15 50,35 Q60,15 70,35 Q80,55 90,35 Q95,25 100,35 L100,30 Q95,20 90,30 Q80,50 70,30 Q60,10 50,30 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-amber-900 mb-4 font-serif">Unsere Geschichte</h2>
            <div className="flex items-center justify-center my-6">
              <div className="h-px w-16 bg-amber-700/30"></div>
              <Heart className="w-5 h-5 mx-4 text-amber-700/40" />
              <div className="h-px w-16 bg-amber-700/30"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-amber-800/80 leading-relaxed">
                Wir haben uns im Sommer 2019 bei einem Musikfestival kennengelernt. Was als zufällige Begegnung begann, entwickelte sich schnell zu einer tiefen Freundschaft und dann zu der großen Liebe unseres Lebens.
              </p>
              <p className="text-amber-800/80 leading-relaxed">
                Nach sechs wundervollen Jahren voller gemeinsamer Abenteuer, Reisen und unvergesslicher Momente möchten wir nun den nächsten Schritt wagen und unsere Liebe vor Familie und Freunden besiegeln.
              </p>
              <p className="text-amber-800/80 leading-relaxed italic">
                Wir freuen uns darauf, diesen besonderen Tag mit Ihnen zu teilen und gemeinsam zu feiern!
              </p>
            </div>
            <div className="relative">
              <div className="border-8 border-double border-amber-700/20 p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZXxlbnwxfHx8fDE3NjA0NDk4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Das Brautpaar"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-amber-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-amber-900 mb-4 font-serif">Ablauf des Tages</h2>
            <div className="flex items-center justify-center my-6">
              <div className="h-px w-16 bg-amber-700/30"></div>
              <Clock className="w-5 h-5 mx-4 text-amber-700/40" />
              <div className="h-px w-16 bg-amber-700/30"></div>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { time: "14:00 Uhr", title: "Trauung", desc: "Zeremonie in der Schlosskapelle" },
              { time: "15:00 Uhr", title: "Sektempfang", desc: "Im Schlossgarten bei Sonnenschein" },
              { time: "16:30 Uhr", title: "Kaffee & Kuchen", desc: "Buffet im großen Saal" },
              { time: "18:00 Uhr", title: "Fotoshooting", desc: "Gruppenfotos und Portraitaufnahmen" },
              { time: "19:00 Uhr", title: "Abendessen", desc: "Festliches Menü" },
              { time: "21:00 Uhr", title: "Eröffnungstanz", desc: "Beginn der Tanzfeier" },
              { time: "22:00 Uhr", title: "Party", desc: "Feiern bis in die Morgenstunden" }
            ].map((item, index) => (
              <Card key={index} className="border-amber-200/50 bg-white">
                <CardContent className="p-6 flex gap-6 items-start">
                  <div className="min-w-24 text-amber-900 font-serif">{item.time}</div>
                  <div className="flex-1">
                    <h3 className="text-amber-900 mb-1">{item.title}</h3>
                    <p className="text-amber-800/60">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-amber-900 mb-4 font-serif">Die Location</h2>
            <div className="flex items-center justify-center my-6">
              <div className="h-px w-16 bg-amber-700/30"></div>
              <MapPin className="w-5 h-5 mx-4 text-amber-700/40" />
              <div className="h-px w-16 bg-amber-700/30"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="border-8 border-double border-amber-700/20 p-2 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519167758481-83f29da8c1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHZlbnVlJTIwYmFsbHJvb218ZW58MXx8fHwxNzYwNDQ5ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Schloss Bellevue"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl text-amber-900 mb-4 font-serif">Schloss Bellevue</h3>
              <div className="space-y-3 text-amber-800/80">
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-700/60" />
                    <span>+49 123 456789</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-700/60" />
                    <span>info@schloss-bellevue.de</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Tabs defaultValue="car" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-amber-100/50">
                  <TabsTrigger value="car" className="data-[state=active]:bg-white">Auto</TabsTrigger>
                  <TabsTrigger value="train" className="data-[state=active]:bg-white">Bahn</TabsTrigger>
                  <TabsTrigger value="parking" className="data-[state=active]:bg-white">Parken</TabsTrigger>
                </TabsList>
                <TabsContent value="car" className="mt-6 text-amber-800/80">
                  <p className="mb-3">Von der Autobahn A1:</p>
                  <p>Abfahrt Musterstadt-Nord, dann der Beschilderung Richtung Zentrum folgen. Nach ca. 5 km sehen Sie das Schloss auf der rechten Seite.</p>
                </TabsContent>
                <TabsContent value="train" className="mt-6 text-amber-800/80">
                  <p className="mb-3">Bahnhof Musterstadt Hauptbahnhof:</p>
                  <p>Vom Hauptbahnhof aus erreichen Sie das Schloss in 15 Minuten mit dem Taxi oder Bus Linie 42 (Haltestelle "Schloss Bellevue").</p>
                </TabsContent>
                <TabsContent value="parking" className="mt-6 text-amber-800/80">
                  <p className="mb-3">Parkplätze:</p>
                  <p>Kostenlose Parkplätze stehen auf dem Schlossgelände zur Verfügung. Bitte folgen Sie der Beschilderung "Gäste-Parkplatz".</p>
                </TabsContent>
              </Tabs>

              <Card className="bg-amber-50/30 border-amber-200/50 mt-6">
                <CardContent className="p-6">
                  <h4 className="text-amber-900 mb-3">Übernachtungsmöglichkeiten</h4>
                  <div className="space-y-3 text-amber-800/80">
                    <div>
                      <p className="text-amber-900">Hotel Rosengarten</p>
                      <p>Gartenstraße 45, 12345 Musterstadt</p>
                      <p>Tel: +49 123 456700</p>
                    </div>
                    <div>
                      <p className="text-amber-900">Pension Altstadtblick</p>
                      <p>Marktplatz 12, 12345 Musterstadt</p>
                      <p>Tel: +49 123 456800</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dresscode Section */}
      <section id="dresscode" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-amber-900 mb-4 font-serif">Dresscode</h2>
            <div className="flex items-center justify-center my-6">
              <div className="h-px w-16 bg-amber-700/30"></div>
              <div className="mx-4 w-1.5 h-1.5 rounded-full bg-amber-700/40"></div>
              <div className="h-px w-16 bg-amber-700/30"></div>
            </div>
          </div>

          <Card className="border-2 border-amber-200/50 bg-gradient-to-br from-white to-amber-50/30">
            <CardContent className="p-8 sm:p-12">
              <div className="max-w-2xl mx-auto space-y-8">
                <p className="text-amber-900 text-center text-xl">
                  Wir wünschen uns festliche Kleidung
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <div className="text-center p-6 bg-white/60 rounded-lg border border-amber-200/50">
                    <div className="mb-4">
                      <svg className="w-16 h-16 mx-auto text-amber-700/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M16 8H15.5L15 6.5C14.8 5.6 14 5 13.1 5H10.9C10 5 9.2 5.6 9 6.5L8.5 8H8C6.9 8 6 8.9 6 10V22H8V16H10V22H14V16H16V22H18V10C18 8.9 17.1 8 16 8Z"/>
                      </svg>
                    </div>
                    <p className="text-amber-900 mb-3">Damen</p>
                    <p className="text-amber-800/70">Cocktailkleider, elegante Abendgarderobe</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white/60 rounded-lg border border-amber-200/50">
                    <div className="mb-4">
                      <svg className="w-16 h-16 mx-auto text-amber-700/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 2L4 6V11H3V22H9V17H15V22H21V11H20V6L18 2H16L17 6H7L8 2H6M13 11V15H11V11H13Z"/>
                      </svg>
                    </div>
                    <p className="text-amber-900 mb-3">Herren</p>
                    <p className="text-amber-800/70">Anzug, Smoking oder festliche Garderobe</p>
                  </div>
                </div>

                <div className="mt-8 text-center p-6 bg-amber-50/50 rounded-lg border border-amber-200/30">
                  <p className="text-amber-800/80 italic">
                    Bitte keine weißen Outfits – dieser Farbton ist der Braut vorbehalten
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-amber-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-amber-900 mb-4 font-serif">Impressionen</h2>
            <div className="flex items-center justify-center my-6">
              <div className="h-px w-16 bg-amber-700/30"></div>
              <div className="mx-4 w-1.5 h-1.5 rounded-full bg-amber-700/40"></div>
              <div className="h-px w-16 bg-amber-700/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZXxlbnwxfHx8fDE3NjA0NDk4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1519167758481-83f29da8c1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHZlbnVlJTIwYmFsbHJvb218ZW58MXx8fHwxNzYwNDQ5ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc2MDQ0OTg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYwNDQ5OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1519167758481-83f29da8c1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHZlbnVlJTIwYmFsbHJvb218ZW58MXx8fHwxNzYwNDQ5ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZXxlbnwxfHx8fDE3NjA0NDk4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            ].map((src, index) => (
              <div key={index} className="group relative overflow-hidden border-4 border-white shadow-lg hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={src}
                  alt={`Galeriebild ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-amber-900 mb-4 font-serif">Zusage</h2>
            <div className="flex items-center justify-center my-6">
              <div className="h-px w-16 bg-amber-700/30"></div>
              <Users className="w-5 h-5 mx-4 text-amber-700/40" />
              <div className="h-px w-16 bg-amber-700/30"></div>
            </div>
            <p className="text-amber-800/70 mt-6">
              Bitte teilen Sie uns bis zum 1. Mai 2025 mit, ob Sie an unserer Hochzeit teilnehmen können.
            </p>
          </div>

          <Card className="border-amber-200/50">
            <CardContent className="p-8">
              <form onSubmit={handleRsvpSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-amber-900">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={rsvpData.name}
                    onChange={(e) => setRsvpData({...rsvpData, name: e.target.value})}
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-amber-900">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={rsvpData.email}
                      onChange={(e) => setRsvpData({...rsvpData, email: e.target.value})}
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-amber-900">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={rsvpData.phone}
                      onChange={(e) => setRsvpData({...rsvpData, phone: e.target.value})}
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-amber-900">Teilnahme *</Label>
                  <RadioGroup 
                    value={rsvpData.attendance}
                    onValueChange={(value) => setRsvpData({...rsvpData, attendance: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="text-amber-800/80">Ja, ich komme gerne</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="text-amber-800/80">Leider kann ich nicht teilnehmen</Label>
                    </div>
                  </RadioGroup>
                </div>

                {rsvpData.attendance === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-amber-900">Anzahl Personen (inkl. Ihnen)</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="5"
                      value={rsvpData.guests}
                      onChange={(e) => setRsvpData({...rsvpData, guests: e.target.value})}
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-amber-900">Nachricht an uns</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={rsvpData.message}
                    onChange={(e) => setRsvpData({...rsvpData, message: e.target.value})}
                    placeholder="Besondere Wünsche, Allergien oder einfach ein paar liebe Worte..."
                    className="border-amber-200 focus:border-amber-400 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white py-6"
                >
                  Zusage senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl text-amber-900 mb-8 text-center font-serif">Häufige Fragen</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-2" className="border border-amber-200/50 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-amber-900 hover:text-amber-800">
                  Kann ich meine Kinder mitbringen?
                </AccordionTrigger>
                <AccordionContent className="text-amber-800/70">
                  Wir möchten unseren besonderen Tag gerne in erwachsener Runde feiern. Wir bitten daher um Verständnis, dass wir keine Kinderbetreuung anbieten können.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-amber-200/50 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-amber-900 hover:text-amber-800">
                  Was wünscht ihr euch zur Hochzeit?
                </AccordionTrigger>
                <AccordionContent className="text-amber-800/70">
                  Das größte Geschenk ist eure Anwesenheit! Wenn ihr uns dennoch etwas schenken möchtet, freuen wir uns über einen Beitrag zu unserer Hochzeitsreise nach Italien.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-amber-200/50 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-amber-900 hover:text-amber-800">
                  Gibt es vegetarische/vegane Optionen?
                </AccordionTrigger>
                <AccordionContent className="text-amber-800/70">
                  Selbstverständlich! Bitte teilt uns eure Ernährungswünsche oder Allergien im RSVP-Formular mit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-amber-200/50 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-amber-900 hover:text-amber-800">
                  Wird es eine Übernachtungsmöglichkeit geben?
                </AccordionTrigger>
                <AccordionContent className="text-amber-800/70">
                  Wir haben Zimmerkontingente in nahegelegenen Hotels reserviert. Details findet ihr im Abschnitt "Location".
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-2xl font-serif mb-2">Anna & Michael</p>
            <p className="text-amber-200">15. Juni 2025</p>
          </div>
          <Separator className="my-8 bg-amber-700" />
          <p className="text-amber-200">
            Wir freuen uns auf einen unvergesslichen Tag mit Ihnen!
          </p>
          <div className="mt-8 text-amber-300">
            <p>Bei Fragen kontaktieren Sie uns gerne:</p>
            <p className="mt-2">anna.michael.hochzeit@email.de</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
