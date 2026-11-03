import Link from './LocaleLink';
import { ChevronUp } from 'lucide-react';
import { useT, type Translate } from '../i18n';

const getFooterLinks = (t: Translate) => [
  { to: "/services/content-planning", label: t("Content Planning", "内容策划") },
  { to: "/services/video-production", label: t("Video Production & Shooting", "视频拍摄与制作") },
  { to: "/services/social-media-management", label: t("Social Media Management", "社交媒体管理") },
  { to: "/services/facebook-instagram-ads", label: t("Meta Ads Management", "Meta 广告投放") },
  { to: "/services/google-ads", label: t("Google Ads Management", "Google 广告投放") },
  { to: "/services/xhs-influencer-marketing", label: t("XHS Influencer Marketing", "小红书网红营销") },
  { to: "/services/website-creation", label: t("Website Creation & Design", "网站设计与制作") },
  { to: "/services/funnel-optimization", label: t("Sales Funnel Optimization", "销售漏斗优化") },
  { to: "/case-studies", label: t("Case Studies", "客户案例") },
  { to: "/about", label: t("About", "关于我们") },
  { to: "/service-areas", label: t("Service Areas", "服务范围") },
];

const Footer = () => {
  const t = useT();
  return (
    <footer className="bg-surface-container-lowest w-full py-20 px-6 md:px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-5 md:shrink-0">
            <span className="text-2xl font-black tracking-tighter gold-gradient uppercase">BeamDots Media</span>
            <div className="text-[0.65rem] font-sans font-bold leading-relaxed tracking-widest text-on-surface-variant opacity-60">
              {t("© 2026 BEAMDOTS MEDIA. ALL RIGHTS RESERVED.", "© 2026 BeamDots Media 版权所有")}
            </div>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-sans uppercase tracking-[0.1em] font-bold text-xs text-on-surface-variant">
              {getFooterLinks(t).map((link) => (
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
