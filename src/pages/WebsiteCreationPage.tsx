import Link from '../components/LocaleLink';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { useT, type Translate } from '../i18n';

const getIncluded = (t: Translate) => [
  t("Custom website and landing page design built around your offer and target customer, not templates", "根据你的产品和目标客户量身设计网站和 Landing Page，不套模板"),
  t("Mobile-first builds — most Malaysian traffic is on a phone, and your site should perform like it", "手机优先：马来西亚大部分流量都来自手机，网站当然要在手机上好用"),
  t("Fast load times and clean structure that support Google Ads Quality Score and SEO", "打开快、结构清楚，对 Google 广告质量得分和 SEO 都有帮助"),
  t("Booking, checkout, or lead-form integration so the site actually captures the sale", "接上预约、付款或询问表格，客户想买时马上能下单"),
  t("Ongoing updates and maintenance so the site doesn't rot after launch", "持续更新和维护，不会上线后就没人管"),
];

const WebsiteCreationPage = () => {
  const t = useT();
  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Website Creation & Design", "网站设计与制作") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Service · Petaling Jaya, Malaysia", "服务 · 马来西亚八打灵再也")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Website Creation <span className="gold-gradient italic">& Design</span></>, <>网站设计<span className="gold-gradient italic">与制作</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("A slow, outdated, or confusing website is where a lot of ad spend quietly dies. We build fast, mobile-first websites and landing pages designed to convert the traffic your ads, content, and social channels already send you — not just look good in a portfolio.", "很多广告费，就浪费在又慢、又旧、又看不懂的网站上。我们制作打开快、手机好用的网站和 Landing Page，目的是把广告、内容和社交平台带来的流量变成客户，不只是好看。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">{t("What's Included", "服务内容")}</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            {t("Every engagement is scoped to your business and goals — here's what a typical website build covers:", "每个项目都会按你的生意和目标来安排，一般包括：")}
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
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">{t("Why the Website Isn't a Separate Project", "为什么网站不能单独来做")}</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              {t("Ads and content can drive perfect traffic, but if the site is slow or the offer is unclear, that traffic leaves without buying. Building the site alongside your campaigns means it's designed for the traffic it will actually receive.", "广告和内容带来再精准的流量，如果网站太慢或卖点不清楚，客人还是会直接离开。网站和营销活动一起规划，才能真正接住这些客人。")}
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
              {t(<>A new or rebuilt site pairs directly with our{' '}
              <Link to="/services/funnel-optimization" className="text-primary font-bold hover:underline">Sales Funnel Optimization</Link>{' '}
              work, and gives our{' '}
              <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta</Link> and{' '}
              <Link to="/services/google-ads" className="text-primary font-bold hover:underline">Google Ads</Link>{' '}
              campaigns a landing experience actually built to convert the click.</>, <>新建或重建的网站，能直接配合我们的<Link to="/services/funnel-optimization" className="text-primary font-bold hover:underline">销售漏斗优化</Link>服务，也让 <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta</Link> 和 <Link to="/services/google-ads" className="text-primary font-bold hover:underline">Google 广告</Link>带来的点击，有一个真正能成交的落脚点。</>)}
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
        heading={t("Ready for a Website That Sells?", "想要一个真正能带来生意的网站吗？")}
        description={t("Book a free consultation and I'll personally look at what your current site is costing you in lost conversions.", "预约免费咨询，我亲自帮你看看目前的网站让你流失了多少客户。")}
      />
    </>
  );
};

export default WebsiteCreationPage;
