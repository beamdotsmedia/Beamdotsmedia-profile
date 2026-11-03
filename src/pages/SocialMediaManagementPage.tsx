import Link from '../components/LocaleLink';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { useT, type Translate } from '../i18n';

const getIncluded = (t: Translate) => [
  t("Daily/weekly posting across Instagram, Facebook, TikTok, and XHS, built from your content plan", "根据内容计划，每日或每周在 Instagram、Facebook、TikTok 和小红书发布内容"),
  t("Community management — replying to comments and DMs so leads don't go cold", "帮你回复留言和私信，不让上门的询问冷掉"),
  t("Profile and bio optimization so visitors know what you sell and how to buy", "优化账号主页和简介，让访客一看就知道你卖什么、怎么买"),
  t("Hashtag, caption, and trend research tailored to Malaysian audiences", "针对马来西亚受众研究标签、文案和热门话题"),
  t("Monthly growth and engagement reporting tied to actual business goals, not just follower count", "每月提供增长和互动报告，看的是生意目标，不只是粉丝数"),
];

const SocialMediaManagementPage = () => {
  const t = useT();
  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Social Media Management", "社交媒体管理") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Service · Petaling Jaya, Malaysia", "服务 · 马来西亚八打灵再也")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Social Media <span className="gold-gradient italic">Management</span></>, <>社交媒体<span className="gold-gradient italic">管理</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("Posting consistently isn't the same as growing. We manage day-to-day content posting, community engagement, and platform growth so your social presence actively supports sales instead of sitting idle between ad campaigns.", "天天发帖不等于生意会增长。我们负责日常发布、互动和账号增长，让你的社交媒体真正帮到生意，而不是没打广告就冷下来。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">{t("What's Included", "服务内容")}</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            {t("Every engagement is scoped to your business and goals — here's what typical social media management covers:", "每个项目都会按你的生意和目标来安排，一般包括：")}
          </p>
          <ul className="space-y-5">
            {getIncluded(t).map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-on-surface-variant font-medium leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">{t("Why Organic Social Still Matters", "为什么不打广告也要经营账号")}</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              {t("A page that goes cold between ad campaigns costs you trust — people check your profile before they buy. Organic engagement also builds the warm audiences your retargeting ads convert best.", "客户买之前都会先看你的账号，广告一停专页就冷清，很容易失去信任。平时的互动也能累积对品牌有好感的人，他们正是 Retargeting 广告里最容易成交的一群。")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">{t("Where It Feeds Into", "可以搭配哪些服务")}</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              {t(<>Posting runs off the same{' '}
              <Link to="/services/content-planning" className="text-primary font-bold hover:underline">Content Plan</Link>{' '}
              and{' '}
              <Link to="/services/video-production" className="text-primary font-bold hover:underline">video shoots</Link>{' '}
              we produce for your paid campaigns, so organic and paid content reinforce each other instead of competing for budget.</>, <>日常贴文和付费广告用的是同一份<Link to="/services/content-planning" className="text-primary font-bold hover:underline">内容计划</Link>和<Link to="/services/video-production" className="text-primary font-bold hover:underline">拍摄素材</Link>，两边互相加分，不用抢预算。</>)}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/about#plan" className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all">
            {t("See our 4-step process", "看看我们的四个步骤")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <PageCta
        heading={t("Ready for Social Media That Works While You Don't?", "想让社交媒体在你休息时也帮你做生意吗？")}
        description={t("Book a free consultation and I'll show you what your current social presence is — and isn't — doing for your sales.", "预约免费咨询，我告诉你目前的社交媒体对生意帮到多少，还差在哪里。")}
      />
    </>
  );
};

export default SocialMediaManagementPage;
