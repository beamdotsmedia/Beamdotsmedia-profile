import Link from '../components/LocaleLink';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import CaseStudyBlock from '../components/CaseStudyBlock';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { useT, type Translate } from '../i18n';
import { useProject } from '../data/projects';

const getIncluded = (t: Translate) => [
  t("Keyword research focused on commercial and local search intent", "研究关键词，专攻有购买意向和本地搜索的客户"),
  t("Ad copy and extensions built around what actually gets a click to convert", "撰写广告文案和附加信息，让点击真正变成客户"),
  t("Conversion tracking so spend maps to real leads and sales, not just clicks", "设置转化追踪，清楚知道广告费带来多少询问和生意，不只是点击"),
  t("Bid and budget management to keep cost-per-lead sustainable as spend scales", "管理出价和预算，加大投放时，每个询问的成本依然合理"),
  t("Combined Google + Meta campaign coordination when both channels are in play", "同时跑 Google 和 Meta 时，两边统一规划"),
];

const GoogleAdsPage = () => {
  const t = useT();
  const tekni = useProject("tekni-furniture");

  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Google Ads Management", "Google 广告代投") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Service · Petaling Jaya, Malaysia", "服务 · 马来西亚八打灵再也")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Google Ads <span className="gold-gradient italic">/ PPC Management</span></>, <>Google 广告代投<span className="gold-gradient italic"> / PPC</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("Search ads reach people already looking for what you sell — which means a poorly managed Google Ads account is one of the most expensive mistakes an SME can make. We build and manage PPC campaigns focused on capturing that high-intent traffic and converting it into calls, leads, and in-store visits, not just clicks.", "会点搜索广告的，都是已经在找你产品的人。所以 Google 广告没管好，是中小企业最贵的错误之一。我们帮你代投和管理 Google 广告（PPC），抓住这些有需求的客户，把他们变成来电、询问和到店客人，而不只是点击。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">{t("What's Included", "服务内容")}</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            {t("Every engagement is scoped to your business and goals — here's what a typical Google Ads engagement covers:", "每个项目都会按你的生意和目标来安排，一般包括：")}
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
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight italic gold-gradient">{t("PPC Results", "PPC 成果")}</h2>
          </div>
          <CaseStudyBlock
            project={tekni}
            narrative={t("Tekni Furniture wanted more people walking into their showroom, not just more website traffic. We ran coordinated Google and Meta campaigns targeting people actively searching for furniture nearby alongside broader brand awareness, with local-intent keywords and location extensions doing the heavy lifting on the Google side. Store walk-ins increased 300% as a direct result.", "Tekni Furniture 要的是更多人走进展厅，而不只是更多网站流量。我们同时跑 Google 和 Meta 广告，一边锁定正在搜索附近家具店的人，一边提高品牌知名度，Google 这边主要靠本地关键词和地点信息带动。最后到店人数增加了 300%。")}
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
        heading={t("Ready to Capture High-Intent Search Traffic?", "想抓住正在搜索你产品的客户吗？")}
        description={t("Book a free consultation and I'll personally look at what your Google Ads account is — and isn't — converting.", "预约免费咨询，我亲自帮你看看 Google 广告账号带来了什么生意，又错过了什么。")}
      />
    </>
  );
};

export default GoogleAdsPage;
