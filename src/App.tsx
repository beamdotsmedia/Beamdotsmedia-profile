/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowRight, 
  TrendingUp, 
  MousePointerClick, 
  ShoppingCart, 
  MapPin, 
  Phone, 
  ChevronUp, 
  Menu
} from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import moneyImg from './assets/images/money_throwing_sea_1777360203132.png';

// Custom hook to handle persistent user image (internal state only now)
const useCustomImage = (defaultSrc: string, storageKey: string) => {
  const [src, setSrc] = useState(defaultSrc);
  
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setSrc(saved);
  }, [storageKey]);

  return { src, setSrc };
};

const IMAGES = {
  logo: "https://lh3.googleusercontent.com/aida/ADBb0uhtbCTmFnBIK-wjsaYH3cdlyD5l_5_CWIqiXg0DvFu5cKI85m9s0s2fS6NzqWM_3wBTT5vHVHRqRxYlmEHYO9bSL_NaCMbE2qS1iptZNUNU7ZJnGYW51FYgWYlwHvpCsDmypFqDrQ0jxg05HosbxHQysX-rzu0inJ2j-Eic6d0Zoj_ujZUXxZo5MPYiF5seQ5CbSU148DdSYRrZ_JLNJMzNmFQBytn4TNRwpKb__c1xYB0AZCUUWc5_tURNm9vGgBjEapwI26W1jg",
  heroPlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  hero: "https://i.ibb.co/dYnP96q/photo-2026-04-27-14-14-07.jpg",
  tekni: "https://lh3.googleusercontent.com/aida/ADBb0uipPOHBlEEB45N8E-9exS6YFYgXN6EgFux_8cmuc4RkMSLCBEXDcI9z0lvG_3A1OnEm9rPun5uk3cVfocOnfMl8nn3PWYtrJBo3rU52T3Q07tIzaqw0pTnMNEhyXVYt3QRLRSg6jx5ldfsSn38YQkWT1gqcGfrXtcxI2kpuwfqWm0WXrJTubluc_iigBoS8DfjyFO4pxjOMCKIn1XdyvxuFB_58yRVMnLvPozEvKgO28TDseVV8Wf6Ktb2qJtxS32CK0Jfs1fn2mg",
  okiss: "https://lh3.googleusercontent.com/aida/ADBb0uhLar02wEbW2g1BTjzzhHKIYVcXCqlBBrL0TqALQDuolCoT5nor0HlS_KVX_TLpYP6upydbjNCM4QwikP5PuTsNyJLL-HoPPciunf31ATFcPBwMva1457yUDdsum0L3xKHvD5lsKjiqj0-h_ghrG2cMkj_Sk78Qej1PQkc3cXK9-fYNU6-oWMTHgEVFWURZbDrIL36F2pBoxVmtQ6apiFWwlqFpqNemeYXuCTr8FudAFcfp4ZeuqDFy5NcT8XJwir_4cegmqybzFA",
  verthys: "https://lh3.googleusercontent.com/aida/ADBb0ugQeQMUt2uNH1geuAZYIIEU_GEaMKBim9I4BZRxPI76jdtEzia4-6nLOEXbtFoY2wvTATZWpCR9lF7MvG4AfeJzk9H95KXnzLpcunDZZTAlkqyiePJMXVG4sVu_azXrRYFHM3oyq58_2iO7ynJWYCECkcd1Cw4YVW-RxVJcU-PIUvHGMrL9gGboCVEMZD2FQEzmqeU-iObS3DoRPgnVsFIAY8kxiMDHZCkeGsoDdh58dPbzcFtIurvbwDunV-af6L1UvfHigCi9",
  meso: "https://lh3.googleusercontent.com/aida/ADBb0uiorQDNFIj00LDGCXRvOGdj2eceZmeSW6JsV3UBSn-5RHoVeHV7OEi35xsYjoPItag6Ig2F6iO2AlURnLIHVQtl2O0HypgW7wCGgbC1S0sS3Bl-mDwNr5P8pn-ToVNp5XyD7qF_ckTJ8FGeDKAyeemNuECeCwLjwSDoqN6zs3PeRmMkBI3Pb3lXN76DRMBXRQVFKS_0eFqvqXLa2SE0vq2n8CAPcO0qWf776zRVLguFLfcLZpF1ui8CSDgAZ4voddmZEnwWV9nX",
  chillins: "https://lh3.googleusercontent.com/aida/ADBb0ujpmX40N5lZUVDyqIjiHOZ7KxfWrk1dhfis4kvG4ZTWQUd6b-Syum3KOWH4yGFc9-9FIZ3HzCluye5xsE4PMVPGtDJ4-sq9OsIHUyl7LLCCHzwCvKWJu0yN2t8La5c705dDhz0ON4lwhicfOQM3kCZJ2_OMrAGRTyTvESLc9bh_f2t1GLtkIwn9L4Z368aI80TJZdVkBAjSJcl0vcvT1fd-CLBrInFmMBZ2TfMnf4bnmYArr2LmAyOJIKbmkmiBSzGHFnFFkz0Sog",
  quarter: "https://lh3.googleusercontent.com/aida/ADBb0uj_vZbwMOuovFMdHQpifF7zFTRdmhYeTFLg3_6GT7qdxyax62s_khSJpm_6PCCoImINco6nmoTgw1Be3L0ckHMrNora_0lsC53n0pOMdKmrMxPo5EX-RyvaOlBPxc_IPCYsx0rXXtSQ_yAxpgdoZTnIaLnvQ6vcFChv4CsyNZunICfdCf2fM6jU6WQTVc_WwGdgCFXA8arBUr9-h3zh_Ym0KFRLLFVHoglsYf2elxyMzdigtKqa_bvlunEtcj1Ga23LWDj-6cOkug",
  contactBg: "https://lh3.googleusercontent.com/aida/ADBb0uj00HYyDj0bcguvC07v_kvxjxKPRuELWP9PnXFtgWTTjjKvcVQDS035TZ8UqSwvcmkn55QTJk_5SKbnmNNQV9Rw-Do7jFt5xPDogjhCyjNr2bBVABs5UFPW4wAhCQDxtdmCsStKmg7838ja6XCRB76zRADbOPQMOOPmD0IezRuKvuqXTpXbtDMEB5pwq_3Ck8x06Pnx83cfb_oJdv0ul77XXn0QbtOAbb4Yo8o4qlpPGhhr-Z_U-IBbKT0WlQOWuZ8jxgdd4J47cw",
  step1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  step2: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=2070&auto=format&fit=crop",
  step3: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  step4: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  burningMoney: moneyImg
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { src: logoSrc } = useCustomImage(IMAGES.logo, 'user-logo-image');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
        <div 
          className="flex-shrink-0 group relative cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logoSrc} alt="BeamDots Logo" className="h-10 w-auto object-contain brightness-110 transition-transform hover:scale-105 active:scale-95" />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 font-sans uppercase tracking-[0.1em] font-bold text-xs text-on-surface-variant">
            <li><a href="#results" className="hover:text-primary transition-colors">Results</a></li>
            <li><a href="#strategy" className="hover:text-primary transition-colors">Strategy</a></li>
            <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
          </ul>
          <a 
            href="#contact"
            className="bg-primary-container text-on-surface font-black text-[0.65rem] px-6 py-3 rounded-none hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all uppercase tracking-widest border border-primary shadow-[0_0_20px_rgba(242,202,80,0.3)] hover:shadow-primary/50 relative overflow-hidden group/header-btn"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/header-btn:translate-x-full transition-transform duration-500 skew-x-12"></div>
            <span className="relative z-10">Get Free Consultation</span>
          </a>
        </div>
        <button className="md:hidden text-on-surface">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { src, setSrc } = useCustomImage(IMAGES.hero, 'user-hero-image');

  const HeroImage = ({ className }: { className?: string }) => (
    <motion.div 
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div 
        className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden glass-card gold-glow p-3 group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent z-10"></div>
        <img 
          src={src} 
          alt="Strategist Portrait" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== IMAGES.heroPlaceholder) {
              setSrc(IMAGES.heroPlaceholder);
            }
          }}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-1000" 
        />
      </div>

      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[140px]"></div>
    </motion.div>
  );

  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-8 max-w-7xl mx-auto overflow-visible relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        <motion.div 
          className="lg:col-span-7 z-10 order-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Your Business Doesn't Need More Traffic — 
            <span className="gold-gradient italic block mt-2 py-1">It Needs More Sales.</span>
          </h1>
          
          <p className="text-base md:text-xl text-on-surface-variant max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed mb-10">
            Helping SMEs generate consistent leads and sales with data-driven performance marketing. Focused on results, not impressions.
          </p>

          <HeroImage className="lg:hidden mb-12 relative max-w-sm mx-auto" />
          
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-4 text-center lg:text-left">GET YOUR FREE BUSINESS CONSULTATION</div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
            <a 
              href="https://wa.me/60167731754" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#25D366] text-white px-8 py-5 font-black rounded-none shadow-[0_10px_40px_rgba(37,211,102,0.2)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.4)] hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs border border-white/20 relative overflow-hidden group/whatsapp-hero"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/whatsapp-hero:translate-x-full transition-transform duration-700 skew-x-12"></div>
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </span>
            </a>
            <a 
              href="#results"
              className="border-2 border-outline-variant text-primary px-8 py-5 font-black rounded-none hover:bg-primary/5 transition-all uppercase tracking-widest text-xs flex items-center justify-center"
            >
              View Case Studies
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center lg:justify-start items-center">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-primary bg-surface-container/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-[0.7rem] font-bold text-on-surface-variant tracking-wide">Petaling Jaya, Selangor</div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-primary bg-surface-container/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-[0.7rem] font-bold text-on-surface-variant tracking-wide">+6016-7731754</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center lg:justify-start opacity-80 group">
            <div className="w-1.5 h-1.5 rounded-full gold-bg-gradient animate-pulse"></div>
            <span className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-primary transition-colors">
              GROWTH MARKETER @ BeamDots Media
            </span>
          </div>
        </motion.div>

        <HeroImage className="lg:col-span-5 relative order-2 hidden lg:block" />
      </div>
    </section>
  );
};

const ProblemSection = () => {
  return (
    <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 md:mb-12 leading-[1.2]">
            Have you ever felt like you’re just <span className="gold-gradient italic">donating money</span> to Facebook and Google?
          </h2>
          
          <div className="space-y-6 md:space-y-10 text-on-surface-variant text-base md:text-xl font-medium leading-relaxed">
            <p>
              You’ve clicked the "Boost" button. You’ve tinkered with ads yourself. You might have even hired an agency that promised the world but delivered nothing but "Likes" and "Reach."
            </p>
            
            <p className="text-on-surface">
              The hard truth: <span className="text-primary font-bold">"Reach" doesn't pay the bills.</span> If your bank account isn't growing along with your ad spend, you aren't marketing — you're gambling.
            </p>

            <motion.div 
               className="my-16 rounded-2xl overflow-hidden glass-card p-2 border border-white/5 relative group"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <img 
                src={IMAGES.burningMoney} 
                alt="Wasting marketing budget" 
                className="w-full aspect-video object-cover rounded-xl contrast-110 group-hover:scale-105 transition-all duration-1000"
              />
            </motion.div>
            
            <p className="text-lg md:text-3xl font-black text-on-surface italic mt-10 md:mt-16 bg-surface-container-highest/50 py-10 px-6 md:px-12 rounded-xl border border-white/5 leading-tight">
              It’s time to stop the leak and start turning your ad spend into a measurable sales engine.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { label: "Client Revenue Generated", value: "RM 8M+" },
    { label: "Ad Funnels Built", value: "100+" },
    { label: "Performance Focused", value: "High ROI", gold: true },
    { label: "Malaysia & SEA Impact", value: "Regionally" },
  ];

  return (
    <section className="bg-surface-container-lowest border-y border-outline-variant/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20 text-center"
        >
          <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-primary block mb-6">Proven Authority</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
            Partner with <span className="gold-gradient italic">BeamDots Media</span> <br className="hidden md:block" /> to dominate your market
          </h2>
          <div className="h-1 w-20 gold-bg-gradient mx-auto mt-10"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center md:text-left">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`text-4xl md:text-5xl font-black ${stat.gold ? 'gold-gradient' : 'text-on-surface'}`}>
                {stat.value}
              </div>
              <div className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-on-surface-variant leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const competencies = [
    {
      title: "High-ROI Ads",
      desc: "Stop burning cash on generic traffic. We engineer laser-targeted Facebook, Instagram, and Google campaigns that find ready-to-buy customers.",
      icon: <MousePointerClick className="w-8 h-8" />
    },
    {
      title: "Sales Funnel Fix",
      desc: "Auditing and repairing leaks in your digital journey. From ads to landing page — we turn your traffic into buyers.",
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      title: "Rapid Growth Plan",
      desc: "A Strategy Plan will be designed to scale your revenue. Data-driven projections matched with high-tempo execution for maximum impact.",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <section className="section-padding px-6 md:px-8" id="strategy">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">Core Competencies</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-normal leading-[1.3] flex flex-wrap items-center gap-x-6 gap-y-4">
            Providing <span className="italic gold-gradient inline-block px-2 py-2">Growth Strategy</span>
          </h2>
          <div className="h-1.5 w-40 gold-bg-gradient mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map((c, i) => (
            <motion.div 
              key={i}
              className="glass-card p-12 group hover:bg-surface-container-high transition-all duration-500 relative border-l-4 border-primary/20 hover:border-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="mb-10 w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:gold-bg-gradient group-hover:text-surface transition-all duration-500 shadow-xl group-hover:scale-110">
                {c.icon}
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight text-on-surface">{c.title}</h3>
              <p className="text-on-surface-variant text-base leading-relaxed font-medium">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const { src } = useCustomImage(project.img, `user-project-image-${index}`);

  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 2) * 0.1 }}
    >
      <div 
        className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden mb-8 bg-surface-container-highest shadow-2xl border border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60 z-10"></div>
        <img 
          src={src} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-70 group-hover:opacity-100 grayscale-[40%] group-hover:grayscale-0" 
        />
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
          <span className="px-3 py-1 md:px-4 md:py-1.5 bg-primary text-surface text-[0.55rem] md:text-[0.65rem] font-black uppercase tracking-[0.15em] rounded-full shadow-lg">
            {project.tag}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 md:gap-6">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-heading font-black mb-3 md:mb-4 tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-medium max-w-sm">
            {project.desc}
          </p>
        </div>
        <div className="text-left sm:text-right whitespace-nowrap pt-2 sm:pt-0">
          <div className="text-2xl md:text-4xl font-black gold-gradient tracking-tighter">{project.metric}</div>
          <div className="text-[0.55rem] md:text-[0.6rem] font-black uppercase tracking-widest text-on-surface-variant mt-1 md:mt-2">
            {project.metricLabel}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Tekni Furniture",
      desc: "Scaling luxury brand digital presence through multi-channel funnel optimization. 300% Walk-in Sales Return.",
      tag: "Premium Furniture",
      metric: "300%",
      metricLabel: "Walk-in Return",
      img: IMAGES.tekni
    },
    {
      title: "Okiss Granola",
      desc: "Driving direct-to-consumer revenue via conversion rate optimization. RM 488k Revenue.",
      tag: "F&B E-commerce",
      metric: "RM 488k",
      metricLabel: "Revenue",
      img: IMAGES.okiss
    },
    {
      title: "Verthys Beauty",
      desc: "Scaled Meta Ads performance to achieve a record-breaking 12x ROAS, significantly driving premium service bookings.",
      tag: "Beauty & Aesthetics",
      metric: "12x ROAS",
      metricLabel: "Meta Ads Performance",
      img: IMAGES.verthys
    },
    {
      title: "Meso Beauty",
      desc: "Delivered a 100% increase in revenue within just 30 days through a strategic omni-channel approach.",
      tag: "Beauty & Aesthetics",
      metric: "+100%",
      metricLabel: "Revenue (30 Days)",
      img: IMAGES.meso
    },
    {
      title: "Chillins Pyjamas",
      desc: "Optimized Instagram Ads targeting and creative to maintain a consistent 8x ROAS for this lifestyle brand.",
      tag: "Lifestyle E-commerce",
      metric: "8x ROAS",
      metricLabel: "Consistent Growth",
      img: IMAGES.chillins
    },
    {
      title: "Quarter Interior",
      desc: "Accelerated growth to hit 100% of previous annual sales within the first 6 months through precision leads.",
      tag: "Interior Design",
      metric: "100%",
      metricLabel: "Annual Sales in 6mo",
      img: IMAGES.quarter
    }
  ];

  return (
    <section className="section-padding bg-surface-container-low px-6 md:px-8 overflow-hidden scroll-mt-20" id="results">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">The Proof</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight italic gold-gradient">Impactful Wins</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutFounder = () => {
  const { src, setSrc } = useCustomImage(IMAGES.hero, 'user-hero-image');
  
  return (
    <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 relative" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 text-center lg:text-left"
          >
            <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">The Mind Behind The Machine</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-8 leading-tight">
              Crafting Growth at <br className="hidden md:block" />
              <span className="gold-gradient italic">BeamDots Media</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant text-base md:text-lg font-medium leading-relaxed">
              <p>
                As a <span className="text-on-surface font-bold">Growth Marketer</span>, I've spent years obsessing over the mathematical bridge between ad budgets and ROI. I don't believe in "fancy" marketing that doesn't yield results.
              </p>
              <p>
                At BeamDots Media, we don't just "run ads"—we architect ecosystems. I lead a team that is dedicated to one thing: <span className="text-primary italic">predictable performance.</span> Whether you're a local SME or an e-commerce brand, our mission is to ensure your every dollar spent is working for you, not against you.
              </p>
              <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-10">
                <div>
                  <div className="text-xl md:text-2xl font-black text-on-surface">8+ Years</div>
                  <div className="text-[0.6rem] font-bold uppercase tracking-widest text-primary mt-1">Direct Industry Experience</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-black text-on-surface">RM 8M+</div>
                  <div className="text-[0.6rem] font-bold uppercase tracking-widest text-primary mt-1">Managed Ad Spend Return</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 relative"
          >
            <div 
              className="max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-card p-4 gold-glow group relative"
            >
              <img 
                src={src} 
                alt="Growth Strategist" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== IMAGES.heroPlaceholder) {
                    setSrc(IMAGES.heroPlaceholder);
                  }
                }}
                className="w-full h-full object-cover rounded-xl filter brightness-110 contrast-110" 
              />
            </div>
            {/* Design Accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-bg-gradient opacity-20 blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SuccessPlan = () => {
  const steps = [
    {
      number: "01",
      title: "The \"Under the Hood\" Check",
      desc: "First, I need to see where you are. You’ll share your current social media, website, or past ads with me.",
      goal: "I’ll find the \"leaks\" where you might be losing money and identify your biggest opportunities for growth.",
      icon: <div className="text-primary font-mono text-sm">[DIAGNOSTICS]</div>,
      img: IMAGES.step1
    },
    {
      number: "02",
      title: "The Coffee Chat",
      desc: "We jump on a quick call (or message) to talk about your goals and where you want to be in 6 months.",
      goal: "Whether you want more leads, more sales, or a better brand image, we get on the same page instantly.",
      icon: <div className="text-primary font-mono text-sm">[ALIGNMENT]</div>,
      img: IMAGES.step2
    },
    {
      number: "03",
      title: "The Game Plan",
      desc: "I’ll build a custom Strategy Blueprint for you. A step-by-step guide on how we will reach your customers.",
      goal: "You’ll see exactly what ads we run, what your website should look like, and how we turn strangers into buyers.",
      icon: <div className="text-primary font-mono text-sm">[BLUEPRINT]</div>,
      img: IMAGES.step3
    },
    {
      number: "04",
      title: "Pressing \"Go\"",
      desc: "Once you approve, I handle the heavy lifting. I set up ads, monitor results, and constantly tweak the engine.",
      goal: "You focus on running your business; I focus on bringing the customers to your door through precision execution.",
      icon: <div className="text-primary font-mono text-sm">[IGNITION]</div>,
      img: IMAGES.step4
    }
  ];

  return (
    <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10" id="plan">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-10 mb-16 md:mb-24 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">The Methodology</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-8 leading-[1.2]">
              Our Simple <span className="gold-gradient italic inline-block px-1 md:px-2 py-1 md:py-2">4-Step Success Plan</span>
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-medium leading-relaxed">
              I believe marketing should be effective, not complicated. Here is how we work together to grow your business:
            </p>
          </div>
          <div className="hidden lg:block pt-12">
            <div className="flex items-center gap-4 text-primary opacity-20 group">
              <span className="font-mono text-xs tracking-widest uppercase">System Operational</span>
              <div className="w-12 h-[1px] bg-primary"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              className="relative group flex flex-col glass-card overflow-hidden hover:bg-surface-container-high/40 transition-all duration-500 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative aspect-video lg:aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 opacity-40 group-hover:opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex justify-between items-center w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]">
                  <span className="text-3xl md:text-4xl font-black text-white/10 group-hover:text-primary/40 transition-colors duration-500">{s.number}</span>
                  {s.icon}
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-1">
                <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-medium">
                  {s.desc}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="text-[0.6rem] font-black uppercase tracking-widest text-primary mb-2">The Objective</div>
                  <p className="text-xs text-on-surface font-bold leading-relaxed">
                    {s.goal}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="section-padding px-6 md:px-8 relative overflow-hidden bg-surface scroll-mt-20" id="contact">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.contactBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-10 grayscale brightness-50 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-[0.65rem] font-black uppercase tracking-[0.5em] text-primary block mb-8">Start the Engine</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black tracking-tighter mb-10 leading-[0.95] text-on-surface">
            Ready to Scale <span className="gold-gradient italic block md:inline px-2 md:px-4 py-1 md:py-2">Your Sales?</span>
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-medium">
            Most businesses are bleeding revenue through hidden leaks in their marketing funnels. Stop guessing and start scaling. Book a free audit where I personally identify your growth bottlenecks.
          </p>

          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem]">GET YOUR FREE BUSINESS CONSULTATION</div>
            <a 
              href="https://wa.me/60167731754" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#25D366] text-white font-black py-6 px-14 rounded-sm shadow-[0_20px_50px_rgba(37,211,102,0.25)] hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-4 text-xl w-full max-w-md group"
            >
              <svg className="w-8 h-8 fill-current group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary bg-surface-container/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-on-surface-variant tracking-wide">Petaling Jaya, Selangor, Malaysia</div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary bg-surface-container/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-on-surface-variant tracking-wide">+6016-7731754</div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full py-20 px-6 md:px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-5">
          <span className="text-2xl font-black tracking-tighter gold-gradient uppercase">BeamDots Media</span>
          <div className="text-[0.65rem] font-sans font-bold leading-relaxed tracking-widest text-on-surface-variant opacity-60">
            © 2026 BEAMDOTS MEDIA. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="flex gap-6">
          <a 
            href="#" 
            className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary hover:scale-110 transition-all cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <ChevronUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="font-sans selection:bg-primary/20">
      <Header />
      <Hero />
      <ProblemSection />
      <StatsBar />
      <Expertise />
      <Portfolio />
      <AboutFounder />
      <SuccessPlan />
      <Contact />
      <Footer />
    </main>
  );
}
