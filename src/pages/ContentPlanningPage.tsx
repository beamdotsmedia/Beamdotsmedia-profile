import Link from '../components/LocaleLink';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { useT, type Translate } from '../i18n';

const getIncluded = (t: Translate) => [
  t("Monthly content calendars mapped to campaign goals, launches, and seasonal demand", "每月内容规划，配合你的营销目标、新品推出和节日旺季"),
  t("Platform-specific planning for Instagram, Facebook, TikTok, and XHS — not one-size-fits-all content", "针对 Instagram、Facebook、TikTok 和小红书分别规划，不是一套内容发到底"),
  t("Messaging and hooks built around what your ideal customer actually searches for and scrolls past", "研究目标客户在搜什么、什么内容能让他们停下来看，再决定怎么说、怎么开场"),
  t("Content briefs handed to your shooting and design team (ours or yours) so execution matches strategy", "把内容大纲交给拍摄和设计团队（我们的或你的），做出来的东西才不会跑题"),
  t("Monthly performance review to double down on what's working and cut what isn't", "每月看成效，有用的继续加码，没用的就停掉"),
];

const ContentPlanningPage = () => {
  const t = useT();
  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Content Planning", "内容策划") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Service · Petaling Jaya, Malaysia", "服务 · 马来西亚八打灵再也")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Content Planning <span className="gold-gradient italic">& Strategy</span></>, <>内容策划<span className="gold-gradient italic">与策略</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("Random posting doesn't build a brand — it burns time and budget. We plan content calendars built around what your audience actually engages with and what your sales funnel actually needs, so every post, video, and ad has a job to do.", "想到什么发什么，建立不了品牌，只会浪费时间和钱。我们会根据受众真正感兴趣的内容，以及你的销售流程需要什么来规划，让每个贴文、视频和广告都发得有目的。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">{t("What's Included", "服务内容")}</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            {t("Every engagement is scoped to your business and goals — here's what a typical content planning engagement covers:", "每个项目都会按你的生意和目标来安排，一般包括：")}
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
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">{t("Why Content Planning Comes First", "为什么要先做内容策划")}</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              {t("Ads and social media only perform as well as the content behind them. Without a plan, budget gets spent testing random ideas instead of a deliberate content system — one where every piece feeds the next.", "广告和社交媒体做得好不好，关键在内容。没有计划，预算就只能花在东试西试上；有了计划，每个内容都能接着下一个发挥作用。")}
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
              {t(<>A solid content plan is the foundation for our{' '}
              <Link to="/services/video-production" className="text-primary font-bold hover:underline">Video Production</Link>,{' '}
              <Link to="/services/social-media-management" className="text-primary font-bold hover:underline">Social Media Management</Link>, and{' '}
              <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta Ads Management</Link>{' '}
              work — so creative direction stays consistent across every channel instead of getting rebuilt from scratch each time.</>, <>扎实的内容计划，是我们<Link to="/services/video-production" className="text-primary font-bold hover:underline">视频制作</Link>、<Link to="/services/social-media-management" className="text-primary font-bold hover:underline">社交媒体管理</Link>和 <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta 广告投放</Link>的基础，让各渠道的创意方向保持一致，不必每次从头再来。</>)}
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
        heading={t("Ready for Content That Actually Has a Plan?", "想让内容发得更有方向吗？")}
        description={t("Book a free consultation and I'll personally review your current content and show you where a real content strategy would move the needle.", "预约免费咨询，我亲自看看你目前的内容，告诉你哪里调整一下就能看到效果。")}
      />
    </>
  );
};

export default ContentPlanningPage;
