'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, ArrowRight, Instagram, Twitter, Youtube, Menu, X } from 'lucide-react';

const events = [
  { type: 'Luxury Wedding', venue: 'The Grand Arena', location: 'Lagos, NG', date: 'Upcoming' },
  { type: 'Corporate Gala', venue: 'Eko Hotels', location: 'Lagos, NG', date: 'Upcoming' },
  { type: 'Private Birthday', venue: 'O2 Academy', location: 'London, UK', date: 'Booked' },
  { type: 'Year End Party', venue: 'Transcorp Hilton', location: 'Abuja, NG', date: 'Available' },
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-amber-500 selection:text-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-display font-bold tracking-tighter hover:text-white transition-colors cursor-pointer">
            FEMI<span className="text-amber-500">LEVITE</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#events" className="hover:text-amber-500 transition-colors">Events</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">Music</a>
            <a href="#book" className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-amber-500 hover:text-black transition-all font-semibold">
              Book the Band
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-950 pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-6 text-xl font-display">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a>
            <a href="#book" onClick={() => setMobileMenuOpen(false)} className="text-amber-500">Book Femilevite</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/28NT9PlAqA8?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=28NT9PlAqA8&start=171&end=216&playsinline=1"
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-85 transition-all duration-1000"
            style={{
              width: '100vw',
              height: '56.25vw', /* 16:9 */
              minHeight: '100vh',
              minWidth: '177.77vh',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-amber-500 font-medium tracking-[0.2em] mb-4 text-sm md:text-base uppercase">The Ultimate Live Experience</h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter mb-6">
              FEMI<span className="text-transparent border-text" style={{ WebkitTextStroke: '2px white' }}>LEVITE</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-light">
              I am Femilevite, and together with my world-class band, we don't just play music—we bring your events to life with an unforgettable atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#book" className="px-8 py-4 bg-amber-500 text-black rounded-full font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                <Calendar className="w-5 h-5" />
                Check Availability
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-neutral-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">27K+</div>
              <div className="text-sm text-neutral-400 tracking-wider">ONLINE COMMUNITY</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">300+</div>
              <div className="text-sm text-neutral-400 tracking-wider">EVENTS ROCKED</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-neutral-400 tracking-wider">CLIENT SATISFACTION</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">∞</div>
              <div className="text-sm text-neutral-400 tracking-wider">MEMORIES MADE</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2">
                <img src="/about.jpg" alt="Femilevite" className="w-full h-full object-cover hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-amber-500 rounded-full blur-[100px] opacity-30"></div>
            </div>

            <div className="w-full lg:w-1/2 md:pl-10">
              <h2 className="text-sm font-bold tracking-widest text-amber-500 mb-3">THE MAN & THE BAND</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">More than just music.<br />We control the room.</h3>
              <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                As the frontman and founder, I've built the Femilevite brand on one core principle: giving people an experience they will never forget. I lead a world-class collective of musicians, and together, we specialize in reading the room and delivering exactly what the moment needs.
              </p>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                From the romantic ambiance of your wedding reception to the high-energy climax of an end-of-year corporate bash, I curate soundscapes alongside my band that get everyone on their feet. We are not just a band for hire; we are performers, entertainers, and memory-makers.
              </p>

              <a href="#book" className="inline-flex items-center gap-2 border-b border-amber-500 pb-1 text-amber-500 font-medium hover:text-white hover:border-white transition-colors">
                Book Femilevite & the Band <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Schedule */}
      <section id="events" className="py-24 bg-neutral-900/10">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-amber-500 mb-3">WHERE WE PLAY</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold">Recent & Upcoming</h3>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {events.map((evt, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 glass-card"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full">
                  <div className="font-display text-lg md:text-xl font-bold min-w-[150px] text-amber-500">
                    {evt.type}
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-1 group-hover:text-white transition-colors">{evt.venue}</div>
                    <div className="text-sm text-neutral-400">{evt.location}</div>
                  </div>
                </div>

                <div className="mt-6 md:mt-0 w-full md:w-auto shrink-0">
                  <span className={`px-6 py-2 rounded-full text-sm font-bold border ${evt.date === 'Booked' ? 'border-neutral-700 text-neutral-500' : 'border-amber-500/50 text-amber-500'}`}>
                    {evt.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form CTA */}
      <section id="book" className="py-24 bg-neutral-900 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="glass-card p-8 md:p-12 text-center rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
              <Mail className="w-10 h-10 mx-auto mb-6 text-amber-500" />
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Let's Discuss Your Event</h3>
              <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                My calendar fills up quickly. Drop your email below, and my management team will reach out with pricing, packages, and availability for the band.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-6 py-4 rounded-full bg-black/50 border border-white/10 focus:outline-none focus:border-amber-500 text-white placeholder-neutral-500"
                />
                <button type="submit" className="px-8 py-4 bg-amber-500 text-black rounded-full font-bold hover:bg-yellow-400 transition-colors">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-neutral-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-display font-bold tracking-tighter hover:text-white transition-colors cursor-pointer">
            FEMI<span className="text-amber-500">LEVITE</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href="#" className="hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>

          <div className="text-sm text-neutral-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Femilevite. All Rights Reserved.<br />
            <span className="text-xs opacity-50 mt-1 block">Designed & Built by Adeleye Erioluwa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
