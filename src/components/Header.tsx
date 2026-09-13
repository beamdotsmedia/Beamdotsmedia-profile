import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useCustomImage } from '../hooks/useCustomImage';
import { IMAGES } from '../data/images';

const SERVICE_GROUPS = [
  {
    heading: "Content & Social",
    links: [
      { to: "/services/content-planning", label: "Content Planning" },
      { to: "/services/video-production", label: "Video Production & Shooting" },
      { to: "/services/social-media-management", label: "Social Media Management" },
      { to: "/services/xhs-influencer-marketing", label: "XHS Influencer Marketing" },
    ],
  },
  {
    heading: "Ads & Web",
    links: [
      { to: "/services/facebook-instagram-ads", label: "Meta Ads Management" },
      { to: "/services/google-ads", label: "Google Ads Management" },
      { to: "/services/website-creation", label: "Website Creation & Design" },
      { to: "/services/funnel-optimization", label: "Sales Funnel Optimization" },
    ],
  },
];

const NAV_LINKS = [
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/service-areas", label: "Service Areas" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { src: logoSrc } = useCustomImage(IMAGES.logo, 'user-logo-image');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex-shrink-0 group relative"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logoSrc} alt="BeamDots Media - Growth Marketing Agency Petaling Jaya" className="h-10 w-auto object-contain brightness-110 transition-transform hover:scale-105 active:scale-95" />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-sans uppercase tracking-[0.1em] font-bold text-xs text-on-surface-variant">
            <li className="relative group/services py-2">
              <button className="flex items-center gap-1.5 uppercase hover:text-primary transition-colors">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <ul className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[26rem] opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-200">
                <li className="grid grid-cols-2 gap-6 p-6 bg-surface-container-high border border-outline-variant/10 rounded-xl shadow-2xl">
                  {SERVICE_GROUPS.map((group) => (
                    <div key={group.heading}>
                      <span className="block text-primary text-[0.65rem] tracking-[0.1em] mb-3">{group.heading}</span>
                      <ul className="flex flex-col gap-1">
                        {group.links.map((link) => (
                          <li key={link.to}>
                            <Link
                              to={link.to}
                              className="block py-2 rounded-lg normal-case tracking-normal font-bold text-sm text-on-surface hover:text-primary transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </li>
              </ul>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.to}><Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link></li>
            ))}
          </ul>
          <Link
            to="/#contact"
            className="bg-primary-container text-on-surface font-black text-[0.65rem] px-6 py-3 rounded-none hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all uppercase tracking-widest border border-primary shadow-[0_0_20px_rgba(242,202,80,0.3)] hover:shadow-primary/50 relative overflow-hidden group/header-btn"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/header-btn:translate-x-full transition-transform duration-500 skew-x-12"></div>
            <span className="relative z-10">Get Free Consultation</span>
          </Link>
        </div>
        <button
          className="md:hidden text-on-surface z-50 relative"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-surface-container-high border-b border-outline-variant/10 shadow-2xl">
          <ul className="flex flex-col divide-y divide-outline-variant/10 font-sans uppercase tracking-[0.1em] font-bold text-xs text-on-surface-variant px-6 py-4">
            <li className="py-4">
              <span className="block mb-3 text-primary">Services</span>
              <div className="flex flex-col gap-5 normal-case tracking-normal">
                {SERVICE_GROUPS.map((group) => (
                  <div key={group.heading}>
                    <span className="block mb-2 text-[0.6rem] uppercase tracking-[0.1em] text-on-surface-variant/70">{group.heading}</span>
                    <ul className="flex flex-col gap-1">
                      {group.links.map((link) => (
                        <li key={link.to}>
                          <Link
                            to={link.to}
                            onClick={closeMobile}
                            className="block py-2 font-bold text-on-surface hover:text-primary transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={closeMobile} className="block py-4 hover:text-primary transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6">
            <Link
              to="/#contact"
              onClick={closeMobile}
              className="block text-center bg-primary-container text-on-surface font-black text-xs px-6 py-4 rounded-none hover:bg-primary hover:text-white transition-all uppercase tracking-widest border border-primary"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
