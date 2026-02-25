import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Search, 
  Calendar, 
  User, 
  MapPin, 
  Star, 
  Download, 
  Calculator, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  TrendingUp,
  Award
} from 'lucide-react';
import { PROPERTIES, TESTIMONIALS, NEIGHBORHOODS, PARTNER_LOGOS, Property } from './constants';
import { cn, formatCurrency } from './utils';

import { url } from 'inspector';
import { title } from 'process';
import { image, video } from 'motion/react-client';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Listings', href: '#listings' },
    { name: 'About', href: '#about' },
    //{ name: 'Neighborhoods', href: '#neighborhoods' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-lg">
            <span className="text-white font-serif font-bold text-xl">ET</span>
          </div>
          <div className={cn("flex flex-col leading-tight", isScrolled ? "text-navy" : "text-white")}>
            <span className="font-bold tracking-tight uppercase text-sm">Eric Therwood</span>
            <span className="text-[10px] uppercase tracking-widest opacity-70">Dallas Real Estate</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-gold transition-colors",
                isScrolled ? "text-navy" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-gold text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold/90 transition-all shadow-lg shadow-gold/20">
          <a href='https://calendly.com/erictherwood12/30min?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnh3Hz-SzMkCUc4sDRK6BoK62Z5LxH0pNrvWqSegGMwFGAdoJHeQtR2pCuk2s_aem_pPf_JrYri63Ui8s7CXw_rw&month=2026-02'  >Phone Talk</a>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-navy" : "text-white"} /> : <Menu className={isScrolled ? "text-navy" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-navy hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-navy text-white py-3 rounded-xl font-bold">
              Talk To Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const slides = [
    {
      image: "src/assets/images/hero03.jpg",
      title: <>Helping You Find the <span className="italic text-gold">Perfect Home</span> in Dallas–Fort Worth</>,
      subtitle: "Trusted guidance for buyers, sellers, and first-time homeowners. Experience the Dallas market with a local expert who puts your goals first.",
      tag: "Expert Dallas Real Estate"
    },
    {
      image: "src/assets/images/hero02.jpg",
      title: <>Luxury Living in <span className="italic text-gold">Highland Park</span> & Beyond</>,
      subtitle: "Discover exclusive estates and prestigious properties in Dallas's most sought-after neighborhoods. Your luxury lifestyle starts here.",
      tag: "Luxury Property Specialist"
    },
    {
      image: "src/assets/images/hero01.jpg",
      title: <>Modern Urban <span className="italic text-gold">Condos & Lofts</span> in Uptown</>,
      subtitle: "Experience the vibrant energy of Dallas's urban core. From high-rise views to walkable districts, find your place in the city.",
      tag: "Urban Living Expert"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Dallas Real Estate" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-gold font-mono text-xs tracking-[0.3em] uppercase mb-4">
              {slides[currentSlide].tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#listings" 
                className="bg-gold text-white px-10 py-4 rounded-full font-bold text-center hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-2xl shadow-gold/40"
              >
                View Listings <ChevronRight size={18} />
              </a>
              <a 
                href="#scheduler" 
                className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-center hover:bg-white hover:text-navy transition-all"
              >
                Talk To Me
              </a>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
              <div className="flex flex-col">
                <span className="text-white font-serif text-2xl font-bold">12+</span>
                <span className="text-white/50 text-[10px] uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif text-2xl font-bold">450+</span>
                <span className="text-white/50 text-[10px] uppercase tracking-widest">Homes Sold</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif text-2xl font-bold">99%</span>
                <span className="text-white/50 text-[10px] uppercase tracking-widest">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-12 h-1 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-gold w-16" : "bg-white/30 hover:bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.info} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          {property.type}
        </div>
        <div className="absolute bottom-4 right-4 bg-white text-navy font-bold px-4 py-2 rounded-lg shadow-lg">
          {formatCurrency(property.price)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-serif text-xl font-bold text-navy">{property.info}</h3>
        </div>
        <div className="flex items-center gap-1 text-navy/50 text-sm mb-4">
          <MapPin size={14} /> {property.neighborhood}
        </div>
        <div className="grid grid-cols-3 gap-4 border-t border-navy/5 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-navy/40">Beds</span>
            <span className="font-bold text-navy">{property.beds}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-navy/40">Baths</span>
            <span className="font-bold text-navy">{property.baths}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-navy/40">Sq Ft</span>
            <span className="font-bold text-navy">{property.sqft.toLocaleString()}</span>
          </div>
        </div>
        {/* <button className="w-full mt-6 py-3 border border-navy/10 rounded-xl font-bold text-navy hover:bg-navy hover:text-white transition-all">
          View Details
        </button> */}
      </div>
    </motion.div>
  );
};

const FeaturedListings = () => {
  return (
    <section id="listings" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-gold font-mono text-xs tracking-widest uppercase mb-2 block">Curated Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">Featured Listings</h2>
          </div>
          <a href="https://www.instagram.com/erictherwood/" className="text-navy font-bold flex items-center gap-2 hover:text-gold transition-colors">
            View All Properties <ChevronRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="src/assets/images/eric.png" 
              alt="Eric Therwood" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy">Top Producer</h4>
                <p className="text-xs text-navy/50">Dallas Real Estate Board</p>
              </div>
            </div>
            <p className="text-sm text-navy/70 italic">
              "My mission is to provide the most professional, informative, loyal and dedicated service in the industry."
            </p>
          </div>
        </div>

        <div>
          <span className="text-gold font-mono text-xs tracking-widest uppercase mb-2 block">The Expert Behind the Move</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Meet Eric Therwood</h2>
          <div className="space-y-4 text-navy/80 leading-relaxed mb-8">
            <p>
              With over a decade of experience in the Dallas-Fort Worth market, Eric Therwood has built a reputation for his strategic approach to real estate and his unwavering commitment to his clients.
            </p>
            <p>
              Whether you're a first-time homebuyer navigating the complexities of the DFW market or a seasoned investor looking for your next luxury acquisition, Eric provides the data-driven insights and local expertise you need to make confident decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-gold shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-navy text-sm">Local Insight</h4>
                <p className="text-xs text-navy/50">Deep knowledge of Dallas neighborhoods.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-gold shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-navy text-sm">Data Driven</h4>
                <p className="text-xs text-navy/50">Advanced market analysis for every deal.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-gold shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-navy text-sm">Client First</h4>
                <p className="text-xs text-navy/50">Personalized strategy for your goals.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-gold shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-navy text-sm">Negotiation Pro</h4>
                <p className="text-xs text-navy/50">Getting you the best possible terms.</p>
              </div>
            </div>
          </div>

          <button className="bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-navy/90 transition-all shadow-xl shadow-navy/20">
            <a href='#scheduler'> Work With Me </a>
          </button>

          {/* Partner Logo Carousel */}
          {/*<div className="mt-16 pt-8 border-t border-navy/5">
            <p className="text-[10px] uppercase tracking-widest font-bold text-navy/40 mb-6">Featured In & Partnered With</p>
            <div className="flex flex-wrap gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
              {PARTNER_LOGOS.map((partner) => (
                <img key={partner.name} src={partner.logo} alt={partner.name} className="h-8 w-auto" />
              ))}
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

const LeadMagnets = () => {
  return (
    <section id="resources" className="section-padding bg-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 skew-x-12 transform translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* First Time Buyer Guide */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-40 h-56 bg-gold rounded-lg shadow-2xl flex-shrink-0 flex items-center justify-center p-6 text-center">
              <div className="border-2 border-white/30 w-full h-full flex flex-col items-center justify-center">
                <span className="text-[10px] uppercase tracking-widest mb-2">Dallas</span>
                <span className="font-serif font-bold text-lg leading-tight">First-Time Buyer Guide</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Buying Your First Home in Dallas?</h3>
              <p className="text-white/60 text-sm mb-6">
                Download our free 2024 checklist covering everything from mortgage pre-approval to closing day in DFW.
              </p>
              <button className="bg-gold text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gold/90 transition-all">
                <Download size={18} /> Download Free Checklist
              </button>
            </div>
          </div>

          {/* Home Valuation */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-gold flex-shrink-0">
              <TrendingUp size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">What's Your Home Worth?</h3>
              <p className="text-white/60 text-sm mb-6">
                Get a professional market analysis of your property's value in today's Dallas market. No strings attached.
              </p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter Address..." 
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm flex-grow focus:outline-none focus:border-gold"
                />
                <button className="bg-white text-navy px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all">
                  Get Value
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/*const NeighborhoodGuide = () => {
  return (
    <section id="neighborhoods" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-mono text-xs tracking-widest uppercase mb-2 block">Local Knowledge</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">Dallas Neighborhood Guide</h2>
          <p className="text-navy/50 max-w-2xl mx-auto">
            Explore the unique character, lifestyle, and real estate landscape of Dallas's most sought-after communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEIGHBORHOODS.map((n) => (
            <div key={n.id} className="group cursor-pointer">
              <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
                <img 
                  src={n.imageUrl} 
                  alt={n.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif font-bold">{n.name}</h3>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-navy/70 text-sm leading-relaxed">{n.description}</p>
                <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold border-t border-navy/5 pt-3">
                  <span className="text-navy/40">Price Range</span>
                  <span className="text-gold">{n.priceRange}</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                  <span className="text-navy/40">Lifestyle</span>
                  <span className="text-navy">{n.lifestyle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};*/

const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-navy mb-4">What My Clients Say</h2>
          <div className="flex justify-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm border border-navy/5 relative">
              <div className="text-gold mb-6">
                <Star size={24} fill="currentColor" />
              </div>
              <p className="text-navy/80 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-navy/5 pt-6">
                <div className="w-10 h-10 bg-slate-200 rounded-full" />
                <div>
                  <h4 className="font-bold text-navy text-sm">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-navy/40">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppointmentScheduler = () => {
  const today = new Date().toISOString().split('T')[0];
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="scheduler" className="section-padding bg-navy text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-mono text-xs tracking-widest uppercase mb-2 block">Direct Access</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Book Your Consultation</h2>
          <p className="text-white/60">Select a date and time that works for you to discuss your Dallas real estate goals.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[40px]">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-serif mb-4">Appointment Requested!</h3>
              <p className="text-white/60 mb-8">Eric will review your request and confirm via email shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-gold font-bold hover:underline"
              >
                Book another time
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Full Name</label>
                  <input required type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 focus:outline-none focus:border-gold text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Email Address</label>
                  <input required type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 focus:outline-none focus:border-gold text-white" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Select Date</label>
                  <input 
                    required 
                    type="date" 
                    min={today}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 focus:outline-none focus:border-gold text-white [color-scheme:dark]" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Preferred Time</label>
                  <select required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 focus:outline-none focus:border-gold text-white appearance-none">
                    <option className="bg-navy">Morning (9AM - 12PM)</option>
                    <option className="bg-navy">Afternoon (12PM - 4PM)</option>
                    <option className="bg-navy">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Topic of Discussion</label>
                <textarea rows={3} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 focus:outline-none focus:border-gold text-white" placeholder="Tell Eric a bit about what you're looking for..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gold text-white py-5 rounded-2xl font-bold text-lg hover:bg-gold/90 transition-all shadow-xl shadow-gold/20">
                Confirm Appointment Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-gold font-mono text-xs tracking-widest uppercase mb-2 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Ready to Find Your Home?</h2>
          <p className="text-navy/60 mb-10 leading-relaxed">
            Whether you're ready to start your search today or just have a few questions about the Dallas market, I'm here to help. Reach out via the form or book a direct consultation below.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-navy">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-navy/40 uppercase tracking-widest font-bold">Call / Text</p>
                <p className="font-bold text-navy">On request</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-navy">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-navy/40 uppercase tracking-widest font-bold">Email</p>
                <p className="font-bold text-navy">eric@therwoodrealestate.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-navy">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-navy/40 uppercase tracking-widest font-bold">Office</p>
                <p className="font-bold text-navy">On request</p>
              </div>
            </div>
          </div>

          <div className="bg-navy p-8 rounded-3xl text-white">
            <h4 className="font-serif text-xl mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-gold" /> Book a Consultation
            </h4>
            <p className="text-white/60 text-sm mb-6">
              Schedule a 15-minute introductory call to discuss your real estate goals.
            </p>
            <a href="#scheduler" className="block w-full bg-gold py-4 rounded-xl font-bold hover:bg-gold/90 transition-all text-center">
              View Available Times
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-navy/5 h-64 grayscale hover:grayscale-0 transition-all">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.213456789012!2d-96.80123456789012!3d32.78123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e991234567890%3A0x1234567890abcdef!2s2100%20Ross%20Ave%2C%20Dallas%2C%20TX%2075201!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>

        <div className="bg-slate-50 p-10 md:p-12 rounded-[40px] border border-navy/5">
          <div className="mb-8">
            <h3 className="text-2xl font-serif text-navy mb-2">Send a Message</h3>
            <p className="text-sm text-navy/50">Inquire about a property or service.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">First Name</label>
                <input type="text" className="w-full bg-white border border-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">Last Name</label>
                <input type="text" className="w-full bg-white border border-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">Email Address</label>
              <input type="email" className="w-full bg-white border border-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">I am looking to...</label>
              <select className="w-full bg-white border border-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold appearance-none">
                <option>Buy a Home</option>
                <option>Sell a Home</option>
                <option>Invest in Real Estate</option>
                
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">Message</label>
              <textarea rows={4} className="w-full bg-white border border-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold" />
            </div>
            <button className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy/90 transition-all shadow-xl shadow-navy/10">
              Send Message
            </button>
          </form>

          {/* Testimonial Submission Form */}
          <div className="mt-16 pt-12 border-t border-navy/10">
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-navy mb-2">Submit a Testimonial</h3>
              <p className="text-sm text-navy/50">Share your experience working with Eric.</p>
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">Your Name</label>
                <input type="text" className="w-full bg-white border border-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">Rating</label>
                <div className="flex gap-2 text-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={24} className="cursor-pointer hover:fill-current" />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">Your Experience</label>
                <textarea rows={3} className="w-full bg-white border border-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold" />
              </div>
              <button className="w-full border border-navy text-navy py-4 rounded-xl font-bold hover:bg-navy hover:text-white transition-all">
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-lg">
                <span className="text-white font-serif font-bold text-xl">ET</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold tracking-tight uppercase text-sm">Eric Therwood</span>
                <span className="text-[10px] uppercase tracking-widest opacity-50">Dallas Real Estate</span>
              </div>
            </div>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed mb-8">
              Providing expert real estate services across the Dallas-Fort Worth metroplex. Dedicated to integrity, local expertise, and exceptional client results.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/erictherwood/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                <span className="text-[10px] font-bold">IG</span>
              </a>
              <a href="https://web.facebook.com/people/Eric-Therwood/100095331332820/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                <span className="text-[10px] font-bold">FB</span>
              </a>
              {/*<a href="https://www.linkedin.com/in/erictherwood" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                <span className="text-[10px] font-bold">LI</span>
              </a>*/}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#listings" className="hover:text-gold transition-colors">Search Listings</a></li>
              {/*<li><a href="#neighborhoods" className="hover:text-gold transition-colors">Neighborhood Guide</a></li>*/}
              <li><a href="#resources" className="hover:text-gold transition-colors">Buyer Resources</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Eric</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Fair Housing</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">TREC Information</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>© 2026 Eric Therwood Real Estate. All Rights Reserved.</p>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedListings />
      <AboutSection />
      <LeadMagnets />
      {/*<NeighborhoodGuide />*/}
      <Testimonials />
      <AppointmentScheduler />
      <ContactSection />
      <Footer />
    </div>
  );
}
