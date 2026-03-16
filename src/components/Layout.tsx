import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, Instagram, Facebook, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VENUE_INFO, ROUTE_PATHS, scrollToSection } from '@/lib';
import { springPresets } from '@/lib/motion';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];



export function Header({ activeSection }: { activeSection: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <NavLink to={ROUTE_PATHS.HOME} className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-tighter text-primary">
            Red Carpet
          </span>
          <span className="font-heading text-lg font-light text-foreground hidden sm:inline">
            Events Centre
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative text-sm font-medium transition-colors uppercase tracking-widest cursor-pointer outline-none group focus-visible:text-primary hover:text-primary text-foreground/80"
            >
              <span className="relative z-10">{link.name}</span>
              {/* Hover/Focus Decorative Underline (CSS) */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
            </a>
          ))}
          <Button asChild className="rounded-full px-6">
            <a href="#booking" onClick={(e) => scrollToSection(e, '#booking')}>Book Now</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6 text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    scrollToSection(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative py-2 text-lg font-medium transition-colors cursor-pointer group text-foreground/80 hover:text-primary"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute left-1/2 -bottom-0 w-0 h-0.5 bg-primary -translate-x-1/2 transition-all duration-300 group-hover:w-1/2" />
                </a>
              ))}
              <Button asChild className="rounded-full py-6">
                <a href="#booking" onClick={(e) => {
                  scrollToSection(e, '#booking');
                  setIsMobileMenuOpen(false);
                }}>
                  Book Event
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer({ activeSection }: { activeSection: string }) {
  return (
    <footer className="bg-card text-card-foreground border-t pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-6">
          <h2 className="font-heading text-2xl font-bold text-primary">
            Red Carpet Events Centre
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            Accra's premier venue for weddings, corporate galas, and private celebrations. Where every event becomes a grand memory.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
              <Facebook size={20} />
            </a>
            <a href={`https://wa.me/${VENUE_INFO.whatsapp}`} className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-heading text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative transition-colors cursor-pointer group outline-none focus-visible:text-primary text-muted-foreground hover:text-primary"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="font-heading text-xl font-semibold">Contact Info</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="text-primary shrink-0" size={20} />
              <span>{VENUE_INFO.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-primary shrink-0" size={20} />
              <span>{VENUE_INFO.phone}</span>
            </li>
            <li className="flex gap-3">
              <MessageSquare className="text-primary shrink-0" size={20} />
              <span>{VENUE_INFO.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {VENUE_INFO.name} – Accra. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${VENUE_INFO.whatsapp}?text=Hello, I would like to inquire about booking your venue.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg flex items-center gap-2 group hover:pr-6 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springPresets.gentle}
    >
      <MessageSquare size={24} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-medium whitespace-nowrap">
        Book Venue
      </span>
    </motion.a>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      // Home detection for top of page
      if (window.scrollY < 100) {
        setActiveSection('#');
      }
    };
    
    // Scroll Spy using IntersectionObserver
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Target all sections with an ID
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer activeSection={activeSection} />
      <WhatsAppButton />
    </div>
  );
}
