import type { Locale } from '../i18n';

export type RouteMeta = { title: string; description: string };

export const ROUTE_META: Record<Locale, Record<string, RouteMeta>> = {
  en: {
    '/': {
      title: 'BeamDots Media | Full-Service Growth Marketing Agency',
      description: "Full-service growth marketing agency helping Malaysian SMEs turn content, social media, Meta & Google Ads, XHS marketing, and websites into sales.",
    },
    '/services/content-planning': {
      title: 'Content Planning & Strategy | BeamDots Media',
      description: "Content planning for Malaysian SMEs — monthly calendars mapped to your campaigns across Instagram, TikTok, and XHS, so every post has a job to do.",
    },
    '/services/video-production': {
      title: 'Video Production & Shooting | BeamDots Media',
      description: "Video production and shooting for Malaysian SMEs — product shoots and ad-ready creative for Reels, TikTok, XHS, and Meta & Google Ads campaigns.",
    },
    '/services/social-media-management': {
      title: 'Social Media Management | BeamDots Media',
      description: "Social media management for Malaysian SMEs — daily posting, community management, and profile optimization across Instagram, Facebook, and XHS.",
    },
    '/services/facebook-instagram-ads': {
      title: 'Meta Ads Management (Sales Focused) | BeamDots Media',
      description: "Meta Ads management for Malaysian SMEs — audience targeting, creative testing, and retargeting tied to ROAS, not reach. Up to 12x return on ad spend.",
    },
    '/services/google-ads': {
      title: 'Google Ads / PPC Management | BeamDots Media',
      description: "Google Ads / PPC management for Malaysian SMEs — keyword research, conversion tracking, and budget management built to turn traffic into sales.",
    },
    '/services/xhs-influencer-marketing': {
      title: 'XHS Influencer Marketing | BeamDots Media',
      description: "Xiaohongshu (XHS/RedNote) influencer and KOC marketing for Malaysian brands — creator sourcing, briefs, and performance tracking for beauty and F&B brands.",
    },
    '/services/website-creation': {
      title: 'Website Creation & Design | BeamDots Media',
      description: "Website creation and design for Malaysian SMEs — fast, mobile-first websites and landing pages built to convert the traffic you're already sending.",
    },
    '/services/funnel-optimization': {
      title: 'Sales Funnel Optimization | BeamDots Media',
      description: "Sales funnel optimization for Malaysian SMEs — full funnel audits, landing page CRO, and checkout fixes that turn existing traffic into more revenue.",
    },
    '/case-studies': {
      title: 'Case Studies | BeamDots Media',
      description: "Real client results from BeamDots Media across beauty, F&B e-commerce, furniture, and interior design — Meta Ads, Google Ads, and funnel case studies.",
    },
    '/about': {
      title: 'About Us & Our Process | BeamDots Media',
      description: "Meet the team behind BeamDots Media and the 4-step process we use to take a Malaysian SME from scattered marketing to a predictable sales engine.",
    },
    '/service-areas': {
      title: 'Service Areas | BeamDots Media',
      description: "BeamDots Media is based in Petaling Jaya, focused on Malaysian SMEs nationwide — and since our work is remote-deliverable, we take on clients worldwide too.",
    },
  },
  zh: {
    '/': {
      title: '马来西亚数码营销公司 | 一站式增长营销 | BeamDots Media',
      description: '马来西亚一站式数码营销公司，帮中小企业把内容、社交媒体、Facebook 和 Google 广告、小红书营销及网站，变成真正的询问和生意。',
    },
    '/services/content-planning': {
      title: '马来西亚内容策划服务 | BeamDots Media',
      description: '为马来西亚中小企业提供内容策划，每月规划好 Instagram、TikTok 和小红书内容，配合你的促销和活动，每个贴文都发得有目的。',
    },
    '/services/video-production': {
      title: '马来西亚视频拍摄与短视频制作 | BeamDots Media',
      description: '马来西亚视频拍摄与短视频制作：产品拍摄和广告视频，适用于 Reels、TikTok、小红书，以及 Facebook 和 Google 广告。',
    },
    '/services/social-media-management': {
      title: '马来西亚社交媒体管理与代运营 | BeamDots Media',
      description: '为马来西亚中小企业代管社交媒体：日常发帖、回复留言和私信、优化账号，涵盖 Instagram、Facebook 和小红书。',
    },
    '/services/facebook-instagram-ads': {
      title: '马来西亚 Facebook 与 Instagram 广告代投 | BeamDots Media',
      description: '为马来西亚中小企业代投 Facebook 和 Instagram 广告，看的是 ROAS 和生意，不是 Reach。广告回报最高达 12 倍。',
    },
    '/services/google-ads': {
      title: '马来西亚 Google 广告代投（PPC）| BeamDots Media',
      description: '为马来西亚中小企业代投 Google 广告：研究关键词、设置转化追踪、管理预算，把搜索流量变成询问和生意。',
    },
    '/services/xhs-influencer-marketing': {
      title: '马来西亚小红书营销与 KOC 合作 | BeamDots Media',
      description: '帮马来西亚品牌做小红书营销：寻找网红和 KOC、提供内容方向、追踪成效，特别适合美容和餐饮品牌。',
    },
    '/services/website-creation': {
      title: '马来西亚网站设计与网页制作 | BeamDots Media',
      description: '为马来西亚中小企业提供网站设计和网页制作：打开快、手机好用的网站和 Landing Page，把现有流量变成客户。',
    },
    '/services/funnel-optimization': {
      title: '马来西亚销售漏斗优化 | BeamDots Media',
      description: '帮马来西亚中小企业优化销售漏斗：检查整个流程、改善 Landing Page 和结账流程，让现有流量带来更多生意。',
    },
    '/case-studies': {
      title: '马来西亚数码营销客户案例 | BeamDots Media',
      description: 'BeamDots Media 的真实客户成绩，涵盖美容、食品电商、家具和室内设计，包括 Facebook 广告、Google 广告和销售漏斗案例。',
    },
    '/about': {
      title: '关于我们：马来西亚数码营销团队 | BeamDots Media',
      description: '认识 BeamDots Media 团队，看看我们如何用四个步骤，帮马来西亚中小企业建立能稳定带来生意的营销系统。',
    },
    '/service-areas': {
      title: '服务范围：全马数码营销服务 | BeamDots Media',
      description: 'BeamDots Media 位于八打灵再也，为全马中小企业提供数码营销服务。工作都能远程完成，也欢迎海外客户。',
    },
  },
};

// Keyed by path; used to localize the ProfessionalService JSON-LD on /zh pages.
export const ZH_SERVICE_NAMES: Record<string, string> = {
  '/services/content-planning': '内容策划',
  '/services/video-production': '视频拍摄与制作',
  '/services/social-media-management': '社交媒体管理',
  '/services/facebook-instagram-ads': 'Meta 广告代投',
  '/services/google-ads': 'Google 广告代投',
  '/services/xhs-influencer-marketing': '小红书网红营销',
  '/services/website-creation': '网站设计与制作',
  '/services/funnel-optimization': '销售漏斗优化',
};
