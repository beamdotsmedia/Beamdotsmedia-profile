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
import { Link } from "react-router";
import { motion } from "motion/react";
import React from "react";
import { useCustomImage } from "../hooks/useCustomImage";
import { IMAGES } from "../data/images";
import { projects } from "../data/projects";

export const Hero = () => {
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
          alt="BeamDots Media growth marketing strategist in Petaling Jaya"
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
            Full-Service Growth Marketing Agency · Petaling Jaya, Malaysia
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Your Business Doesn't Need More Traffic —
            <span className="gold-gradient italic block mt-2 py-1">
              It Needs More Sales.
            </span>
          </h1>

          <p className="text-base md:text-xl text-on-surface-variant max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed mb-10">
            BeamDots Media is a full-service growth marketing agency based in
            Petaling Jaya, Selangor — helping Malaysian SMEs turn content, ads,
            and websites into consistent leads and sales, not just
            impressions.
          </p>

          <HeroImage className="lg:hidden mb-12 relative max-w-sm mx-auto" />

          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-4 text-center lg:text-left">
            GET YOUR FREE BUSINESS CONSULTATION
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
                Chat on WhatsApp
              </span>
            </a>
            <Link
              to="/case-studies"
              className="border-2 border-outline-variant text-primary px-8 py-5 font-black rounded-none hover:bg-primary/5 transition-all uppercase tracking-widest text-xs flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center lg:justify-start items-center">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-primary bg-surface-container/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-[0.7rem] font-bold text-on-surface-variant tracking-wide">
                Petaling Jaya, Selangor
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
              GROWTH MARKETER @ BeamDots Media
            </span>
          </div>
        </motion.div>

        <HeroImage className="lg:col-span-5 relative order-2 hidden lg:block" />
      </div>
    </section>
  );
};

export const ProblemSection = () => {
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
            Have you ever felt like you’re just{" "}
            <span className="gold-gradient italic">donating money</span> to
            Facebook and Google?
          </h2>

          <div className="space-y-6 md:space-y-10 text-on-surface-variant text-base md:text-xl font-medium leading-relaxed">
            <p>
              You’ve clicked the "Boost" button. You’ve tinkered with ads
              yourself. You might have even hired an agency that promised the
              world but delivered nothing but "Likes" and "Reach."
            </p>

            <p className="text-on-surface">
              The hard truth:{" "}
              <span className="text-primary font-bold">
                "Reach" doesn't pay the bills.
              </span>{" "}
              If your bank account isn't growing along with your ad spend, you
              aren't marketing — you're gambling.
            </p>

            <motion.div
              className="my-16 rounded-2xl overflow-hidden glass-card p-2 border border-white/5 relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={IMAGES.burningMoney}
                alt="Wasted ad spend from ineffective Facebook and Google Ads campaigns"
                loading="lazy"
                className="w-full aspect-video object-cover rounded-xl contrast-110 group-hover:scale-105 transition-all duration-1000"
              />
            </motion.div>

            <p className="text-lg md:text-3xl font-black text-on-surface italic mt-10 md:mt-16 bg-surface-container-highest/50 py-10 px-6 md:px-12 rounded-xl border border-white/5 leading-tight">
              It’s time to stop the leak and start turning your ad spend into a
              measurable sales engine.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const StatsBar = () => {
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
          <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-primary block mb-6">
            Proven Authority
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
            Partner with{" "}
            <span className="gold-gradient italic">BeamDots Media</span>{" "}
            <br className="hidden md:block" /> to dominate your market
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
  const competencies = [
    {
      title: "Content Planning",
      desc: "Monthly content calendars mapped to your campaigns, so every post, video, and ad has a job to do.",
      icon: <ClipboardList className="w-8 h-8" />,
      href: "/services/content-planning",
    },
    {
      title: "Video Production & Shooting",
      desc: "Product shoots, testimonials, and ad creatives built for Reels, TikTok, and XHS video.",
      icon: <Video className="w-8 h-8" />,
      href: "/services/video-production",
    },
    {
      title: "Social Media Management",
      desc: "Daily posting and community management so your social presence keeps working between campaigns.",
      icon: <Share2 className="w-8 h-8" />,
      href: "/services/social-media-management",
    },
    {
      title: "Meta Ads Management",
      desc: 'Laser-targeted Facebook & Instagram campaigns that turn scrollers into ready-to-buy customers, not just "Likes."',
      icon: <MousePointerClick className="w-8 h-8" />,
      href: "/services/facebook-instagram-ads",
    },
    {
      title: "Google Ads / PPC",
      desc: "Capture high-intent search traffic and turn the click into a call, a lead, or a sale.",
      icon: <Search className="w-8 h-8" />,
      href: "/services/google-ads",
    },
    {
      title: "XHS Influencer Marketing",
      desc: "KOC and influencer campaigns on Xiaohongshu that turn genuine recommendations into bookings.",
      icon: <Sparkles className="w-8 h-8" />,
      href: "/services/xhs-influencer-marketing",
    },
    {
      title: "Website Creation & Design",
      desc: "Fast, mobile-first sites and landing pages designed to convert the traffic you're already sending.",
      icon: <Globe className="w-8 h-8" />,
      href: "/services/website-creation",
    },
    {
      title: "Sales Funnel Optimization",
      desc: "Auditing and repairing leaks in your digital journey. From ad to landing page — we turn traffic into buyers.",
      icon: <ShoppingCart className="w-8 h-8" />,
      href: "/services/funnel-optimization",
    },
  ];

  return (
    <section className="section-padding px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-normal leading-[1.3] flex flex-wrap items-center gap-x-6 gap-y-4">
            Full-Service{" "}
            <span className="italic gold-gradient inline-block px-2 py-2">
              Growth Marketing
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
                  Learn more <ArrowRight className="w-4 h-4" />
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
  project: (typeof projects)[number];
  index: number;
}> = ({ project, index }) => {
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
          alt={`${project.title} - ${project.tag} case study by BeamDots Media`}
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
  const featured = projects.slice(0, 4);

  return (
    <section className="section-padding bg-surface-container-low px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">
            The Proof
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight italic gold-gradient">
            Impactful Wins
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
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const FounderTeaser = () => {
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
            alt="Founder of BeamDots Media, growth marketing agency in Petaling Jaya"
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
            Who's Behind This
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-black tracking-tight mb-4 leading-tight">
            A Real Growth Marketer, <span className="gold-gradient italic">Not a Faceless Agency</span>
          </h2>
          <p className="text-on-surface-variant leading-relaxed font-medium mb-6">
            8+ years bridging the gap between ad spend and ROI, and RM 8M+ in managed spend returned to clients. I lead the team behind every campaign on this site — no account managers standing between you and the person doing the work.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
          >
            Read Our Story <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export const Contact = () => {
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
            Start the Engine
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black tracking-tighter mb-10 leading-[0.95] text-on-surface">
            Ready to Scale{" "}
            <span className="gold-gradient italic block md:inline px-2 md:px-4 py-1 md:py-2">
              Your Sales?
            </span>
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-medium">
            Most businesses are bleeding revenue through hidden leaks in their
            marketing funnels. Stop guessing and start scaling. Book a free
            audit where I personally identify your growth bottlenecks.
          </p>

          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem]">
              GET YOUR FREE BUSINESS CONSULTATION
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
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary bg-surface-container/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-on-surface-variant tracking-wide">
                Petaling Jaya, Selangor, Malaysia
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
