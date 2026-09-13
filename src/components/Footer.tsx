import { Link } from 'react-router';
import { ChevronUp } from 'lucide-react';

const FOOTER_LINKS = [
  { to: "/services/content-planning", label: "Content Planning" },
  { to: "/services/video-production", label: "Video Production & Shooting" },
  { to: "/services/social-media-management", label: "Social Media Management" },
  { to: "/services/facebook-instagram-ads", label: "Meta Ads Management" },
  { to: "/services/google-ads", label: "Google Ads Management" },
  { to: "/services/xhs-influencer-marketing", label: "XHS Influencer Marketing" },
  { to: "/services/website-creation", label: "Website Creation & Design" },
  { to: "/services/funnel-optimization", label: "Sales Funnel Optimization" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/service-areas", label: "Service Areas" },
];

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full py-20 px-6 md:px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-5">
            <span className="text-2xl font-black tracking-tighter gold-gradient uppercase">BeamDots Media</span>
            <div className="text-[0.65rem] font-sans font-bold leading-relaxed tracking-widest text-on-surface-variant opacity-60">
              © 2026 BEAMDOTS MEDIA. ALL RIGHTS RESERVED.
            </div>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-sans uppercase tracking-[0.1em] font-bold text-xs text-on-surface-variant">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
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
      </div>
    </footer>
  );
};

export default Footer;
