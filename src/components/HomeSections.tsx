import {
  ClipboardList,
  Video,
  Share2,
  MousePointerClick,
  Search,
  Sparkles,
  Globe,
  ShoppingCart,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "./LocaleLink";
import { motion } from "motion/react";
import React from "react";
import { useCustomImage } from "../hooks/useCustomImage";
import { IMAGES } from "../data/images";
import { useProjects, type Project } from "../data/projects";
import { useT } from "../i18n";

export const Hero = () => {
  const t = useT();
  const { src, setSrc } = useCustomImage(IMAGES.hero, "user-hero-image");

  const HeroImage = ({ className }: { className?: string }) => (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden glass-card gold-glow p-3 group">
        <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent z-10"></div>
        <img
          src={src}
          alt={t("BeamDots Media growth marketing strategist in Petaling Jaya", "BeamDots Media 增长营销策略师，八打灵再也")}
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
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6 text-center lg:text-left">
            {t("Full-Service Growth Marketing Agency · Petaling Jaya, Malaysia", "马来西亚一站式增长营销公司 · 八打灵再也")}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t("Your Business Doesn't Need More Traffic —", "你缺的不是流量，")}
            <span className="gold-gradient italic block mt-2 py-1">
              {t("It Needs More Sales.", "而是买单的客户。")}
            </span>
          </h1>

          <p className="text-base md:text-xl text-on-surface-variant max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed mb-10">
            {t("BeamDots Media is a full-service growth marketing agency based in Petaling Jaya, Selangor — helping Malaysian SMEs turn content, ads, and websites into consistent leads and sales, not just impressions.", "BeamDots Media 是一家位于雪兰莪八打灵再也的一站式增长营销公司。我们帮马来西亚中小企业把内容、广告和网站变成稳定的询问和生意，而不是只有曝光。")}
          </p>

          <HeroImage className="lg:hidden mb-12 relative max-w-sm mx-auto" />

          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-4 text-center lg:text-left">
            {t("GET YOUR FREE BUSINESS CONSULTATION", "免费咨询，聊聊你的生意")}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
            <a
              href="https://wa.me/60167731754"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white px-8 py-5 font-black rounded-none shadow-[0_10px_40px_rgba(37,211,102,0.2)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.4)] hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs border border-white/20 relative overflow-hidden group/whatsapp-hero"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/whatsapp-hero:translate-x-full transition-transform duration-700 skew-x-12"></div>
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t("Chat on WhatsApp", "WhatsApp 联系我们")}
              </span>
            </a>
            <Link
              to="/case-studies"
              className="border-2 border-outline-variant text-primary px-8 py-5 font-black rounded-none hover:bg-primary/5 transition-all uppercase tracking-widest text-xs flex items-center justify-center"
            >
              {t("View Case Studies", "查看客户案例")}
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center lg:justify-start items-center">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-primary bg-surface-container/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-[0.7rem] font-bold text-on-surface-variant tracking-wide">
                {t("Petaling Jaya, Selangor", "雪兰莪八打灵再也")}
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-primary bg-surface-container/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-[0.7rem] font-bold text-on-surface-variant tracking-wide">
                +6016-7731754
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center lg:justify-start opacity-80 group">
            <div className="w-1.5 h-1.5 rounded-full gold-bg-gradient animate-pulse"></div>
            <span className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-primary transition-colors">
              {t("GROWTH MARKETER @ BeamDots Media", "增长营销师 @ BeamDots Media")}
            </span>
          </div>
        </motion.div>

        <HeroImage className="lg:col-span-5 relative order-2 hidden lg:block" />
      </div>
    </section>
  );
};

export const ProblemSection = () => {
  const t = useT();
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
            {t(<>Have you ever felt like you’re just{" "}
            <span className="gold-gradient italic">donating money</span> to
            Facebook and Google?</>, <>是不是常常觉得，广告费都<span className="gold-gradient italic">白白送给</span>了 Facebook 和 Google？</>)}
          </h2>

          <div className="space-y-6 md:space-y-10 text-on-surface-variant text-base md:text-xl font-medium leading-relaxed">
            <p>
              {t("You’ve clicked the \"Boost\" button. You’ve tinkered with ads yourself. You might have even hired an agency that promised the world but delivered nothing but \"Likes\" and \"Reach.\"", "“Boost”按过了，广告也自己试过了，甚至可能还请过广告公司。对方说得天花乱坠，结果只换来一堆 Like 和 Reach。")}
            </p>

            <p className="text-on-surface">
              {t(<>The hard truth:{" "}
              <span className="text-primary font-bold">
                "Reach" doesn't pay the bills.
              </span>{" "}
              If your bank account isn't growing along with your ad spend, you
              aren't marketing — you're gambling.</>, <>说句实话：<span className="text-primary font-bold">Reach 再高，也付不了账单。</span>如果广告费越花越多，银行户头却没有跟着增加，那就不是在做营销，而是在赌博。</>)}
            </p>

            <motion.div
              className="my-16 rounded-2xl overflow-hidden glass-card p-2 border border-white/5 relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={IMAGES.burningMoney}
                alt={t("Wasted ad spend from ineffective Facebook and Google Ads campaigns", "无效的 Facebook 和 Google 广告白白烧掉预算")}
                loading="lazy"
                className="w-full aspect-video object-cover rounded-xl contrast-110 group-hover:scale-105 transition-all duration-1000"
              />
            </motion.div>

            <p className="text-lg md:text-3xl font-black text-on-surface italic mt-10 md:mt-16 bg-surface-container-highest/50 py-10 px-6 md:px-12 rounded-xl border border-white/5 leading-tight">
              {t("It’s time to stop the leak and start turning your ad spend into a measurable sales engine.", "是时候止血了，让每一笔广告费都看得到回报。")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const StatsBar = () => {
  const t = useT();
  const stats = [
    { label: t("Client Revenue Generated", "为客户带来的营业额"), value: t("RM 8M+", "RM 800万+") },
    { label: t("Ad Funnels Built", "已建立的广告漏斗"), value: "100+" },
    { label: t("Performance Focused", "只看成效"), value: t("High ROI", "高 ROI"), gold: true },
    { label: t("Malaysia & SEA Impact", "服务马来西亚及东南亚"), value: t("Regionally", "跨区域") },
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
          <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-primary block mb-6">
            {t("Proven Authority", "用成绩说话")}
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
            {t(<>Partner with{" "}
            <span className="gold-gradient italic">BeamDots Media</span>{" "}
            <br className="hidden md:block" /> to dominate your market</>, <>与 <span className="gold-gradient italic">BeamDots Media</span> 合作<br className="hidden md:block" />走在同行前面</>)}
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
              <div
                className={`text-4xl md:text-5xl font-black ${stat.gold ? "gold-gradient" : "text-on-surface"}`}
              >
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

export const Expertise = () => {
  const t = useT();
  const competencies = [
    {
      title: t("Content Planning", "内容策划"),
      desc: t("Monthly content calendars mapped to your campaigns, so every post, video, and ad has a job to do.", "每月规划好内容，配合你的促销和活动，每个贴文、视频和广告都发得有目的。"),
      icon: <ClipboardList className="w-8 h-8" />,
      href: "/services/content-planning",
    },
    {
      title: t("Video Production & Shooting", "视频拍摄与制作"),
      desc: t("Product shoots, testimonials, and ad creatives built for Reels, TikTok, and XHS video.", "产品拍摄、顾客见证和广告视频，专为 Reels、TikTok 和小红书而拍。"),
      icon: <Video className="w-8 h-8" />,
      href: "/services/video-production",
    },
    {
      title: t("Social Media Management", "社交媒体管理"),
      desc: t("Daily posting and community management so your social presence keeps working between campaigns.", "帮你日常发帖、回复留言和私信，没打广告的时候，账号也一样活跃。"),
      icon: <Share2 className="w-8 h-8" />,
      href: "/services/social-media-management",
    },
    {
      title: t("Meta Ads Management", "Meta 广告投放"),
      desc: t('Laser-targeted Facebook & Instagram campaigns that turn scrollers into ready-to-buy customers, not just "Likes."', "精准投放 Facebook 和 Instagram 广告，带来的是准备下单的客户，不只是一堆 Like。"),
      icon: <MousePointerClick className="w-8 h-8" />,
      href: "/services/facebook-instagram-ads",
    },
    {
      title: t("Google Ads / PPC", "Google 广告 / PPC"),
      desc: t("Capture high-intent search traffic and turn the click into a call, a lead, or a sale.", "在客户搜索的那一刻出现，把点击变成来电、询问和生意。"),
      icon: <Search className="w-8 h-8" />,
      href: "/services/google-ads",
    },
    {
      title: t("XHS Influencer Marketing", "小红书网红营销"),
      desc: t("KOC and influencer campaigns on Xiaohongshu that turn genuine recommendations into bookings.", "通过小红书 KOC 和网红的真实分享，为你带来预约和客人。"),
      icon: <Sparkles className="w-8 h-8" />,
      href: "/services/xhs-influencer-marketing",
    },
    {
      title: t("Website Creation & Design", "网站设计与制作"),
      desc: t("Fast, mobile-first sites and landing pages designed to convert the traffic you're already sending.", "打开快、手机上好用的网站和 Landing Page，不浪费你辛苦带来的流量。"),
      icon: <Globe className="w-8 h-8" />,
      href: "/services/website-creation",
    },
    {
      title: t("Sales Funnel Optimization", "销售漏斗优化"),
      desc: t("Auditing and repairing leaks in your digital journey. From ad to landing page — we turn traffic into buyers.", "从广告到 Landing Page，找出客户流失的地方并修好，让流量变成买家。"),
      icon: <ShoppingCart className="w-8 h-8" />,
      href: "/services/funnel-optimization",
    },
  ];

  return (
    <section className="section-padding px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">
            {t("Core Competencies", "核心服务")}
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-normal leading-[1.3] flex flex-wrap items-center gap-x-6 gap-y-4">
            {t("Full-Service", "一站式")}{" "}
            <span className="italic gold-gradient inline-block px-2 py-2">
              {t("Growth Marketing", "增长营销")}
            </span>
          </h2>
          <div className="h-1.5 w-40 gold-bg-gradient mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((c, i) => (
            <motion.div
              key={i}
              className="glass-card p-12 group hover:bg-surface-container-high transition-all duration-500 relative border-l-4 border-primary/20 hover:border-primary flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="mb-10 w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:gold-bg-gradient group-hover:text-surface transition-all duration-500 shadow-xl group-hover:scale-110">
                {c.icon}
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight text-on-surface">
                {c.title}
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed font-medium mb-8">
                {c.desc}
              </p>
              {c.href && (
                <Link
                  to={c.href}
                  className="mt-auto inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
                >
                  {t("Learn more", "了解更多")} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProjectCard: React.FC<{
  project: Project;
  index: number;
}> = ({ project, index }) => {
  const t = useT();
  const { src } = useCustomImage(project.img, `user-project-image-${index}`);

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 2) * 0.1 }}
    >
      <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden mb-8 bg-surface-container-highest shadow-2xl border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60 z-10"></div>
        <img
          src={src}
          alt={t(`${project.title} - ${project.tag} case study by BeamDots Media`, `${project.title} - BeamDots Media ${project.tag}案例`)}
          loading="lazy"
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
          <h3 className="text-2xl md:text-3xl font-heading font-black mb-3 md:mb-4 tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-medium max-w-sm">
            {project.desc}
          </p>
        </div>
        <div className="text-left sm:text-right whitespace-nowrap pt-2 sm:pt-0">
          <div className="text-2xl md:text-4xl font-black gold-gradient tracking-tighter">
            {project.metric}
          </div>
          <div className="text-[0.55rem] md:text-[0.6rem] font-black uppercase tracking-widest text-on-surface-variant mt-1 md:mt-2">
            {project.metricLabel}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  const t = useT();
  const featured = useProjects().slice(0, 4);

  return (
    <section className="section-padding bg-surface-container-low px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">
            {t("The Proof", "真实案例")}
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight italic gold-gradient">
            {t("Impactful Wins", "看得见的成绩")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
          {featured.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
          >
            {t("View All Case Studies", "查看所有客户案例")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const FounderTeaser = () => {
  const t = useT();
  const { src, setSrc } = useCustomImage(IMAGES.hero, 'user-hero-image');

  return (
    <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-2xl overflow-hidden glass-card p-2 gold-glow shrink-0"
        >
          <img
            src={src}
            alt={t("Founder of BeamDots Media, growth marketing agency in Petaling Jaya", "BeamDots Media 创办人，八打灵再也增长营销公司")}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== IMAGES.heroPlaceholder) {
                setSrc(IMAGES.heroPlaceholder);
              }
            }}
            className="w-full h-full object-cover rounded-xl filter brightness-110 contrast-110"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-4">
            {t("Who's Behind This", "谁在负责")}
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-black tracking-tight mb-4 leading-tight">
            {t(<>A Real Growth Marketer, <span className="gold-gradient italic">Not a Faceless Agency</span></>, <>你找的是真正做事的人，<span className="gold-gradient italic">不是躲在幕后的公司</span></>)}
          </h2>
          <p className="text-on-surface-variant leading-relaxed font-medium mb-6">
            {t("8+ years bridging the gap between ad spend and ROI, and RM 8M+ in managed spend returned to clients. I lead the team behind every campaign on this site — no account managers standing between you and the person doing the work.", "8 年以上实战经验，专注让广告费真正带来回报，累计为客户带来 RM 800万+ 的回报。这里的每个案例，都是我带着团队亲自做的。你直接和做事的人沟通，中间没有层层转达。")}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
          >
            {t("Read Our Story", "了解我们的故事")} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export const Contact = () => {
  const t = useT();
  return (
    <section
      className="section-padding px-6 md:px-8 relative overflow-hidden bg-surface scroll-mt-20"
      id="contact"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.contactBg}
          alt=""
          role="presentation"
          loading="lazy"
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
          <span className="text-[0.65rem] font-black uppercase tracking-[0.5em] text-primary block mb-8">
            {t("Start the Engine", "现在开始")}
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black tracking-tighter mb-10 leading-[0.95] text-on-surface">
            {t(<>Ready to Scale{" "}
            <span className="gold-gradient italic block md:inline px-2 md:px-4 py-1 md:py-2">
              Your Sales?
            </span></>, <>准备好<span className="gold-gradient italic block px-2 md:px-4 py-1 md:py-2">把生意做大了吗？</span></>)}
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-medium">
            {t("Most businesses are bleeding revenue through hidden leaks in their marketing funnels. Stop guessing and start scaling. Book a free audit where I personally identify your growth bottlenecks.", "很多生意的钱，都在营销流程的漏洞里悄悄流走了。别再靠猜，预约免费诊断，我亲自帮你找出卡住增长的地方。")}
          </p>

          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem]">
              {t("GET YOUR FREE BUSINESS CONSULTATION", "免费咨询，聊聊你的生意")}
            </div>
            <a
              href="https://wa.me/60167731754"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white font-black py-6 px-14 rounded-sm shadow-[0_20px_50px_rgba(37,211,102,0.25)] hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-4 text-xl w-full max-w-md group"
            >
              <svg
                className="w-8 h-8 fill-current group-hover:rotate-12 transition-transform"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t("Chat on WhatsApp", "WhatsApp 联系我们")}
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary bg-surface-container/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-on-surface-variant tracking-wide">
                {t("Petaling Jaya, Selangor, Malaysia", "马来西亚雪兰莪八打灵再也")}
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary bg-surface-container/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-on-surface-variant tracking-wide">
                +6016-7731754
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
