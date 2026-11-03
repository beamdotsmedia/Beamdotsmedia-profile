import Link from '../components/LocaleLink';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import CaseStudyBlock from '../components/CaseStudyBlock';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { useT, type Translate } from '../i18n';
import { useProject } from '../data/projects';

const getIncluded = (t: Translate) => [
  t("Full funnel audit from ad click to checkout or booking confirmation", "诊断整个流程，从点击广告到结账或确认预约"),
  t("Landing page conversion rate optimization — copy, layout, and load speed", "优化 Landing Page，包括文案、版面和打开速度"),
  t("Checkout and booking flow simplification to reduce drop-off", "简化结账和预约流程，减少中途离开的人"),
  t("Offer and pricing-page testing to find what actually converts", "测试不同优惠和价格页面，找出客户最买单的方案"),
  t("Ongoing CRO iteration based on real user behavior, not guesswork", "根据客户的真实行为持续优化，不靠猜"),
];

const FunnelOptimizationPage = () => {
  const t = useT();
  const okiss = useProject("okiss-granola");

  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Sales Funnel Optimization", "销售漏斗优化") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Service · Petaling Jaya, Malaysia", "服务 · 马来西亚八打灵再也")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Sales Funnel Optimization <span className="gold-gradient italic whitespace-nowrap">in Malaysia</span></>, <>马来西亚<span className="gold-gradient italic">销售漏斗优化</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("Most businesses lose more revenue to a broken funnel than to bad ads. If your traffic looks healthy but sales don't match, the leak is usually somewhere between the ad click and the checkout — a slow landing page, a confusing offer, or a checkout flow that loses people at the last step. We audit that entire journey and fix what's actually costing you sales.", "很多生意流失的营业额，其实不是因为广告差，而是销售流程出了问题。如果流量看起来不错，生意却跟不上，漏洞通常就在点击广告和结账之间：Landing Page 太慢、优惠看不懂，或者付款流程太麻烦，客人走到最后一步就跑了。我们会检查整个流程，修好真正让你亏钱的地方。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">{t("What's Included in Our Sales Funnel Optimization", "销售漏斗优化包括什么")}</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            {t("Every engagement is scoped to your business and goals — here's what a typical funnel optimization audit covers:", "每个项目都会按你的生意和目标来安排，一般包括：")}
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
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight italic gold-gradient">{t("Funnel Fix Results", "漏斗优化成果")}</h2>
          </div>
          <CaseStudyBlock
            project={okiss}
            narrative={t("Okiss Granola was driving decent traffic to their online store but converting far fewer of those visitors into paying customers than the traffic volume suggested they should. We audited the full path from ad click to checkout, identifying friction points in the product and checkout pages, then rebuilt the flow around conversion rate optimization rather than adding more ad spend on top of a leaky funnel. That fix alone generated RM 488k in direct-to-consumer revenue.", "Okiss Granola 的网店流量不错，但真正下单的人比预期少很多。我们检查了从点击广告到结账的整个流程，找出产品页和结账页卡住客人的地方，再重新优化，而不是继续往有漏洞的流程里砸广告费。单是这项修复，就为品牌带来了 RM 48.8万 的直销营业额。")}
          />
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
        heading={t("Ready to Stop the Leak?", "准备好堵住漏洞了吗？")}
        description={t("Book a free audit and I'll personally identify where your funnel is losing you sales.", "预约免费诊断，我亲自帮你找出生意在哪个环节流失了。")}
      />
    </>
  );
};

export default FunnelOptimizationPage;
