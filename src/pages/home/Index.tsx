import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Cake, Briefcase, Gem, Users, Baby, 
  Star, CheckCircle2, MapPin, Phone, Mail, 
  Send, Maximize, ParkingCircle, Accessibility, Droplets, Home as HomeIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/Layout';
import { IMAGES } from '@/assets/images';
import { 
  VENUE_INFO, EVENT_TYPES, REVIEWS, FEATURES, scrollToSection 
} from '@/lib';
import { 
  springPresets, fadeInUp, staggerContainer, staggerItem, hoverLift 
} from '@/lib/motion';

const IconMap: Record<string, any> = {
  Heart, Cake, Briefcase, Gem, Users, Baby,
  Maximize, ParkingCircle, Accessibility, Droplets, Home: HomeIcon
};

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Booking submitted:', formData);
    alert('Thank you! Your booking request has been sent. We will contact you soon.');
    setFormData({ name: '', phone: '', eventType: '', guests: '', date: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_BG_HALL_1} 
            alt="Luxury Event Hall" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
          >
            <Badge className="mb-6 px-4 py-1.5 text-sm uppercase tracking-[0.2em] bg-primary/80 border-none">
              Accra's Premier Venue
            </Badge>
            <h1 className="font-heading text-5xl md:text-8xl font-bold mb-6 tracking-tight">
              Red Carpet <br />
              <span className="text-primary">Events Centre</span>
            </h1>
            <p className="font-accent text-xl md:text-3xl mb-12 max-w-2xl mx-auto italic opacity-90">
              “Where Every Event Becomes a Grand Celebration”
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-primary hover:bg-primary/90" asChild>
                <a href="#booking" onClick={(e) => scrollToSection(e, '#booking')}>Book Venue</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg border-white text-white hover:bg-white/10" asChild>
                <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')}>View Gallery</a>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-white/50 hover:text-white transition-colors">
            <Send className="rotate-90" size={32} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Red Carpet Events Centre is a stylish and versatile event venue located on Boundary Road, Accra, Ghana. The venue is perfect for hosting weddings, birthday celebrations, corporate events, and private parties.
                </p>
                <p>
                  With a welcoming atmosphere and spacious event area, Red Carpet Events Centre provides the perfect setting to create memorable celebrations and unforgettable moments. Our dedicated team is here to ensure every detail of your event is handled with the utmost care and professionalism.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8 border-t pt-10">
                <div>
                  <h4 className="font-heading text-3xl font-bold text-primary">350+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Guest Capacity</p>
                </div>
                <div>
                  <h4 className="font-heading text-3xl font-bold text-primary">270+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Happy Clients</p>
                </div>
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] relative z-10"
              >
                <img src={IMAGES.RED_CARPET_ENTRANCE_1} alt="Venue Entrance" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Unforgettable Experiences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We provide the perfect backdrop for all of life's most important milestones.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EVENT_TYPES.map((type, idx) => {
            const Icon = IconMap[type.icon] || Heart;
            return (
              <motion.div key={idx} variants={staggerItem}>
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden bg-card">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon size={32} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-4">{type.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Visual Tour</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our elegantly decorated spaces and past celebrations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="grid gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
              <img src={IMAGES.WEDDING_SETUP_1} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
              <img src={IMAGES.VENUE_GALLERY_1} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
              <img src={IMAGES.BIRTHDAY_PARTY_8} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
              <img src={IMAGES.HERO_BG_HALL_4} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
              <img src={IMAGES.WEDDING_SETUP_8} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
              <img src={IMAGES.CORPORATE_EVENT_7} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
              <img src={IMAGES.RED_CARPET_ENTRANCE_2} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
              <img src={IMAGES.VENUE_GALLERY_3} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-1 mb-4 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill={i < 4 ? "currentColor" : "none"} />
              ))}
              <span className="ml-2 font-bold text-xl">{VENUE_INFO.rating}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-muted-foreground">Based on {VENUE_INFO.reviewsCount} Google reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div key={idx} variants={hoverLift} initial="rest" whileHover="hover">
                <Card className="h-full bg-card border-none shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4 text-primary">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg italic mb-6 text-foreground/80">"{review.comment}"</p>
                    <div className="flex items-center justify-between border-t pt-4">
                      <span className="font-bold">{review.name}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
            {FEATURES.map((feature, idx) => {
              const Icon = IconMap[feature.icon] || CheckCircle2;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="mb-4 p-4 rounded-2xl bg-muted group-hover:bg-primary/10 transition-colors">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <span className="font-medium text-sm md:text-base leading-tight">
                    {feature.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Visit Us</h2>
                <p className="text-muted-foreground text-lg max-w-md">
                  We're conveniently located in the heart of East Legon. Stop by for a tour of our facilities.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Location</h4>
                    <p className="text-muted-foreground">{VENUE_INFO.address}</p>
                    <p className="text-sm text-primary mt-1 font-medium">{VENUE_INFO.googleMapsCode}</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground">{VENUE_INFO.phone}</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">info@redcarpetevents.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="default" className="rounded-full px-8" asChild>
                  <a href={`tel:${VENUE_INFO.phone}`}>Call Now</a>
                </Button>
                <Button variant="outline" className="rounded-full px-8" asChild>
                  <a href={`https://wa.me/${VENUE_INFO.whatsapp}`}>WhatsApp</a>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px] bg-muted relative">
              {/* Google Maps Embed Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.660144577905!2d-0.1585822!3d5.6163333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf994041b695b5%3A0x22f6eff7274aa2a2!2sRed%20Carpet%20Events%20Centre!5e0!3m2!1sen!2sgh!4v1710000000000!5m2!1sen!2sgh" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none shadow-2xl overflow-hidden rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-primary p-12 text-primary-foreground flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="font-heading text-3xl font-bold mb-6 text-white">Reserve Your Date</h2>
                  <p className="opacity-80 text-lg">
                    Tell us about your event and our planners will get in touch with you within 24 hours.
                  </p>
                </div>
                <div className="relative z-10 pt-12">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 size={20} className="text-white" />
                    <span>Personalized Planning</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 size={20} className="text-white" />
                    <span>Premium Decorations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-white" />
                    <span>Professional Staff</span>
                  </div>
                </div>
                {/* Decorative circle */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>

              <div className="md:col-span-3 p-12 bg-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input 
                        placeholder="John Doe" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input 
                        placeholder="024 448 5219" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Event Type</label>
                      <Input 
                        placeholder="Wedding, Gala, etc." 
                        required 
                        value={formData.eventType}
                        onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">No. of Guests</label>
                      <Input 
                        type="number" 
                        placeholder="e.g. 200" 
                        required 
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Preferred Date</label>
                    <Input 
                      type="date" 
                      required 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message (Optional)</label>
                    <Textarea 
                      placeholder="Special requirements or questions..." 
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg rounded-xl">
                    Reserve Now
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}