import Link from '../components/LocaleLink';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { useT, type Translate } from '../i18n';

const getIncluded = (t: Translate) => [
  t("Influencer and KOC (Key Opinion Consumer) sourcing matched to your product category and budget", "根据产品类别和预算，筛选合适的网红和 KOC（关键意见消费者）"),
  t("Campaign briefs and content guidelines that keep posts authentic, not obviously scripted ads", "提供内容方向和指引，让笔记自然真实，看起来不像广告"),
  t("Negotiation and coordination with creators, from product seeding to paid collaborations", "负责和创作者沟通洽谈，从寄产品试用到付费合作"),
  t("Performance tracking on views, saves, comments, and traceable leads or bookings", "追踪浏览、收藏、评论，以及实际带来的询问和预约"),
  t("Integration with your other social and ad campaigns so XHS isn't running in isolation", "与其他社交媒体和广告活动配合，不让小红书单打独斗"),
];

const XhsInfluencerPage = () => {
  const t = useT();
  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("XHS Influencer Marketing", "小红书网红营销") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Service · Petaling Jaya, Malaysia", "服务 · 马来西亚八打灵再也")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>XHS Influencer <span className="gold-gradient italic">Marketing</span></>, <>小红书网红<span className="gold-gradient italic">营销</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("Xiaohongshu (小红书, XHS), internationally branded as RedNote, has become one of the fastest-growing platforms for reaching Malaysia's Chinese-speaking, beauty, lifestyle, and F&B audiences — but most brands don't know how to work it. We plan and manage XHS influencer and KOC campaigns that turn genuine recommendations into real bookings and sales.", "小红书（RedNote）已成为接触马来西亚华人，以及美容、生活和餐饮消费者增长最快的平台之一，但很多品牌还不知道怎么做。我们帮你策划和管理网红与 KOC 合作，让真实推荐带来实际的预约和生意。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">{t("What's Included", "服务内容")}</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            {t("Every engagement is scoped to your business and goals — here's what a typical XHS influencer campaign covers:", "每个项目都会按你的生意和目标来安排，一般包括：")}
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
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">{t("Why XHS Matters for Malaysian Brands", "为什么马来西亚品牌要做小红书")}</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              {t(<>XHS users treat the platform like a search engine for recommendations before they buy — especially in beauty, aesthetics, F&amp;B, and lifestyle categories, where we already have deep experience through our{' '}
              <Link to="/case-studies" className="text-primary font-bold hover:underline">case studies</Link>. A genuine creator post often earns more trust than a paid ad ever will.</>, <>很多人买东西前，都会先上小红书搜一搜，尤其是美容、医美、餐饮和生活类产品。这些正是我们很有经验的领域，可以看看我们的<Link to="/case-studies" className="text-primary font-bold hover:underline">客户案例</Link>。一篇真实的分享笔记，往往比付费广告更能让人相信。</>)}
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
              {t(<>KOC content and briefs draw from the same{' '}
              <Link to="/services/content-planning" className="text-primary font-bold hover:underline">Content Plan</Link>{' '}
              we build for every other channel, and top-performing creator content can be repurposed into{' '}
              <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta Ads</Link>{' '}
              creative once it's proven to convert.</>, <>KOC 的内容方向，都来自我们为各渠道制定的同一份<Link to="/services/content-planning" className="text-primary font-bold hover:underline">内容计划</Link>；效果好的创作者内容，还可以拿来当 <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta 广告</Link>素材。</>)}
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
        heading={t("Ready to Tap Into XHS?", "想开始做小红书吗？")}
        description={t("Book a free consultation and let's see if an XHS influencer campaign fits your brand and budget.", "预约免费咨询，一起看看小红书网红合作适不适合你的品牌和预算。")}
      />
    </>
  );
};

export default XhsInfluencerPage;
