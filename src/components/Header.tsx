import { useState, useEffect } from 'react';
import Link from './LocaleLink';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useCustomImage } from '../hooks/useCustomImage';
import { IMAGES } from '../data/images';
import LanguageSwitch from './LanguageSwitch';
import { useT, type Translate } from '../i18n';

const getServiceGroups = (t: Translate) => [
  {
    heading: t("Content & Social", "内容与社交"),
    links: [
      { to: "/services/content-planning", label: t("Content Planning", "内容策划") },
      { to: "/services/video-production", label: t("Video Production & Shooting", "视频拍摄与制作") },
      { to: "/services/social-media-management", label: t("Social Media Management", "社交媒体管理") },
      { to: "/services/xhs-influencer-marketing", label: t("XHS Influencer Marketing", "小红书网红营销") },
    ],
  },
  {
    heading: t("Ads & Web", "广告与网站"),
    links: [
      { to: "/services/facebook-instagram-ads", label: t("Meta Ads Management", "Meta 广告投放") },
      { to: "/services/google-ads", label: t("Google Ads Management", "Google 广告投放") },
      { to: "/services/website-creation", label: t("Website Creation & Design", "网站设计与制作") },
      { to: "/services/funnel-optimization", label: t("Sales Funnel Optimization", "销售漏斗优化") },
    ],
  },
];

const getNavLinks = (t: Translate) => [
  { to: "/case-studies", label: t("Case Studies", "客户案例") },
  { to: "/about", label: t("About", "关于我们") },
  { to: "/service-areas", label: t("Service Areas", "服务范围") },
];

const Header = () => {
  const t = useT();
  const serviceGroups = getServiceGroups(t);
  const navLinks = getNavLinks(t);
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
          <img src={logoSrc} alt={t("BeamDots Media - Growth Marketing Agency Petaling Jaya", "BeamDots Media - 八打灵再也增长营销公司")} className="h-10 w-auto object-contain brightness-110 transition-transform hover:scale-105 active:scale-95" />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-sans uppercase tracking-[0.1em] font-bold text-xs text-on-surface-variant">
            <li className="relative group/services py-2">
              <button className="flex items-center gap-1.5 uppercase hover:text-primary transition-colors">
                {t("Services", "服务")} <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <ul className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[26rem] opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-200">
                <li className="grid grid-cols-2 gap-6 p-6 bg-surface-container-high border border-outline-variant/10 rounded-xl shadow-2xl">
                  {serviceGroups.map((group) => (
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
            {navLinks.map((link) => (
              <li key={link.to}><Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link></li>
            ))}
          </ul>
          <LanguageSwitch />
          <Link
            to="/#contact"
            className="bg-primary-container text-surface font-black text-[0.65rem] px-6 py-3 rounded-none hover:bg-primary hover:text-surface hover:scale-105 active:scale-95 transition-all uppercase tracking-widest border border-primary shadow-[0_0_20px_rgba(242,202,80,0.3)] hover:shadow-primary/50 relative overflow-hidden group/header-btn"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/header-btn:translate-x-full transition-transform duration-500 skew-x-12"></div>
            <span className="relative z-10">{t("Get Free Consultation", "免费咨询")}</span>
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-5 z-50 relative">
          <LanguageSwitch />
          <button
            className="text-on-surface"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t("Close menu", "关闭菜单") : t("Open menu", "打开菜单")}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-surface-container-high border-b border-outline-variant/10 shadow-2xl">
          <ul className="flex flex-col divide-y divide-outline-variant/10 font-sans uppercase tracking-[0.1em] font-bold text-xs text-on-surface-variant px-6 py-4">
            <li className="py-4">
              <span className="block mb-3 text-primary">{t("Services", "服务")}</span>
              <div className="flex flex-col gap-5 normal-case tracking-normal">
                {serviceGroups.map((group) => (
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
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={closeMobile} className="block py-4 hover:text-primary transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6">
            <Link
              to="/#contact"
              onClick={closeMobile}
              className="block text-center bg-primary-container text-surface font-black text-xs px-6 py-4 rounded-none hover:bg-primary hover:text-surface transition-all uppercase tracking-widest border border-primary"
            >
              {t("Get Free Consultation", "免费咨询")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
