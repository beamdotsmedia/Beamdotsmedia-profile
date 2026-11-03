import Link from '../components/LocaleLink';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import CaseStudyBlock from '../components/CaseStudyBlock';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { useT, type Translate } from '../i18n';
import { useProject } from '../data/projects';

const getIncluded = (t: Translate) => [
  t("Audience research & lookalike targeting based on your actual buyers, not platform defaults", "根据真实买家研究受众、建立 Lookalike，不靠平台默认设置"),
  t("Creative testing across image, video, and carousel formats to find what converts", "测试图片、视频和轮播广告，找出真正能带来生意的版本"),
  t("Retargeting sequences for cart abandoners and warm leads who haven't bought yet", "针对放弃购物车、有兴趣但还没买的人做 Retargeting"),
  t("Weekly performance reporting tied to ROAS and revenue, not reach or likes", "每周成效报告，看的是 ROAS 和营业额，不是 Reach 或 Like"),
  t("Landing page feedback so ad traffic doesn't leak before it converts", "提供 Landing Page 改善建议，避免广告流量还没成交就流失"),
];

const FacebookAdsPage = () => {
  const t = useT();
  const verthys = useProject("verthys-beauty");
  const chillins = useProject("chillins-pyjamas");

  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Meta Ads Management", "Meta 广告投放") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Service · Facebook & Instagram Ads · Petaling Jaya, Malaysia", "服务 · Facebook 与 Instagram 广告 · 马来西亚八打灵再也")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Meta Ads Management <span className="gold-gradient italic">(Sales Focused)</span></>, <>Meta 广告投放<span className="gold-gradient italic">（只看销售成绩）</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("If your Facebook and Instagram Ads are burning budget on likes and reach instead of sales, the problem usually isn't the platform — it's the targeting, the creative, or the funnel behind the click. We manage Meta Ads for Malaysian SMEs and e-commerce brands end-to-end, tied to actual revenue, not vanity metrics.", "如果你的 Facebook 和 Instagram 广告只换来 Like 和 Reach，却没有生意，问题通常不在平台，而在受众、广告创意，或点击之后的流程。我们为马来西亚中小企业和电商品牌全程管理 Meta 广告，看的是实际营业额，不是好看的数字。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">{t("What's Included", "服务内容")}</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            {t("Every engagement is scoped to your business and goals — here's what a typical Meta Ads engagement covers:", "每个项目都会按你的生意和目标来安排，一般包括：")}
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
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">{t("The Proof", "真实案例")}</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight italic gold-gradient">{t("Meta Ads Results", "Meta 广告成果")}</h2>
          </div>
          <div className="space-y-10">
            <CaseStudyBlock
              project={verthys}
              narrative={t("Verthys Beauty came to us running Meta Ads with inconsistent bookings and no clear read on what was actually working. We rebuilt the campaign structure around audience testing and creative refreshes tailored to premium beauty and aesthetics buyers, then layered in retargeting for people who'd shown interest but hadn't booked. The result was a sustained 12x return on ad spend, with Meta Ads becoming the clinic's most reliable channel for premium service bookings.", "Verthys Beauty 找到我们时，已经在跑 Meta 广告，但预约时多时少，也看不出哪些广告真正有效。我们针对高端美容和医美客户，重新规划广告结构，不断测试受众、更新广告创意，再用 Retargeting 跟进有兴趣但还没预约的人。最后广告回报稳定保持在 12 倍，Meta 广告也成了诊所高端疗程最可靠的客源。")}
            />
            <CaseStudyBlock
              project={chillins}
              narrative={t("Chillins Pyjamas needed Instagram Ads that could keep performing past the initial launch spike lifestyle brands often see. We focused on creative testing and audience refinement to keep cost-per-acquisition stable as spend scaled, maintaining a consistent 8x ROAS instead of the steep drop-off that typically follows a strong launch.", "生活品牌常常刚推出时成绩很好，之后就往下掉。Chillins Pyjamas 需要的，是能长期见效的 Instagram 广告。我们不断测试广告创意、优化受众，即使加大预算，获客成本依然稳定，一直保持 8 倍 ROAS，没有出现常见的大幅回落。")}
            />
          </div>
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
        heading={t("Ready to Turn Scrollers Into Customers?", "准备好把滑手机的路人变成客户了吗？")}
        description={t("Book a free consultation and I'll personally look at what your Meta Ads are — and aren't — doing for your revenue.", "预约免费咨询，我亲自帮你看看 Meta 广告为营业额带来了什么，还差在哪里。")}
      />
    </>
  );
};

export default FacebookAdsPage;
