import type { Locale } from '../i18n';

export type RouteMeta = { title: string; description: string };

export const ROUTE_META: Record<Locale, Record<string, RouteMeta>> = {
  en: {
    '/': {
      title: 'Digital Marketing Agency in Malaysia (PJ) | BeamDots Media',
      description: "Digital marketing agency in Petaling Jaya helping Malaysian SMEs turn content, social media, Meta & Google Ads, XHS and websites into enquiries and sales.",
    },
    '/services/content-planning': {
      title: 'Social Media Content Planning Services Malaysia | BeamDots',
      description: "Social media content planning for Malaysian SMEs: monthly calendars across Instagram, TikTok and XHS, mapped to your campaigns so every post has a job to do.",
    },
    '/services/video-production': {
      title: 'Video Production Company in Malaysia | BeamDots Media',
      description: "Video production company in Malaysia for SMEs: product shoots, testimonials and ad-ready creative for Reels, TikTok, XHS, and Meta & Google Ads campaigns.",
    },
    '/services/social-media-management': {
      title: 'Social Media Management Services Malaysia | BeamDots',
      description: "Social media management services for Malaysian SMEs: daily posting, comment and DM replies, and profile optimization across Instagram, Facebook and XHS.",
    },
    '/services/facebook-instagram-ads': {
      title: 'Facebook & Instagram Ads Agency in PJ, Malaysia | BeamDots',
      description: "Facebook & Instagram ads agency in Petaling Jaya for Malaysian SMEs. We plan, test and scale Meta campaigns around ROAS and sales, not likes. Up to 12x ROAS.",
    },
    '/services/google-ads': {
      title: 'Google Ads (PPC) Agency in Malaysia | BeamDots Media',
      description: "Google Ads (PPC) agency in Malaysia for SMEs: keyword research, conversion tracking and budget management that turn high-intent searches into enquiries.",
    },
    '/services/xhs-influencer-marketing': {
      title: 'XHS Influencer Marketing | BeamDots Media',
      description: "Xiaohongshu (XHS/RedNote) influencer and KOC marketing for Malaysian brands — creator sourcing, briefs, and performance tracking for beauty and F&B brands.",
    },
    '/services/website-creation': {
      title: 'Website Design Company in Malaysia | BeamDots Media',
      description: "Website design company in Malaysia for SMEs: fast, mobile-first websites and landing pages built to convert the traffic your ads and social already send you.",
    },
    '/services/funnel-optimization': {
      title: 'Sales Funnel & Conversion Optimization Malaysia | BeamDots',
      description: "Sales funnel and conversion optimization for Malaysian SMEs: full funnel audits, landing page CRO and checkout fixes that turn existing traffic into revenue.",
    },
    '/guides': {
      title: 'Marketing Guides for Malaysian SMEs | BeamDots Media',
      description: "Plain-language marketing guides for Malaysian SMEs on Facebook and Instagram ads, ROAS and more, with ringgit examples from a digital marketing agency in PJ.",
    },
    '/guides/what-is-roas': {
      title: 'What Is ROAS? Meaning, Formula & Calculator | BeamDots',
      description: "What does ROAS mean? Learn the ROAS formula, how to work out your break-even ROAS, and use our free calculator, with ringgit examples for Malaysian SMEs.",
    },
    '/guides/boost-post-vs-facebook-ads': {
      title: 'Boost Post vs Facebook Ads: Which Brings Sales? | BeamDots',
      description: "Boost post vs Facebook ads in Ads Manager: what each does, a side-by-side comparison, and which one Malaysian businesses should use when they want sales.",
    },
    '/case-studies': {
      title: 'Case Studies | BeamDots Media',
      description: "Real client results from BeamDots Media across beauty, F&B e-commerce, furniture, and interior design — Meta Ads, Google Ads, and funnel case studies.",
    },
    '/about': {
      title: 'About Us & Our Process | BeamDots Media',
      description: "Meet the team behind BeamDots Media and the 4-step process we use to take a Malaysian SME from scattered marketing to a predictable, measurable sales engine.",
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
    '/guides': {
      title: '马来西亚中小企业营销指南 | BeamDots Media',
      description: '给马来西亚中小企业的营销指南，用简单的话讲 Facebook 和 Instagram 广告、ROAS 等常见问题，配上令吉例子。',
    },
    '/guides/what-is-roas': {
      title: 'ROAS 是什么？意思、公式和计算器 | BeamDots Media',
      description: 'ROAS 是什么意思？了解 ROAS 公式、怎样算出保本 ROAS，并用免费计算器试算，全部用令吉例子讲给马来西亚商家。',
    },
    '/guides/boost-post-vs-facebook-ads': {
      title: 'Boost Post 还是 Facebook 广告？哪个带来生意 | BeamDots',
      description: 'Boost 贴文和在 Ads Manager 跑 Facebook 广告有什么不同？并排比较两者，告诉你想要生意时该用哪个。',
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
