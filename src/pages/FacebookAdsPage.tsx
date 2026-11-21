import Link from '../components/LocaleLink';
import { motion } from 'motion/react';
import { ArrowRight, Check, X } from 'lucide-react';
import CaseStudyBlock from '../components/CaseStudyBlock';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { localePath, useLocale, useT, type Translate } from '../i18n';
import { useProject } from '../data/projects';

const SITE_URL = 'https://beamdotsmedia.com';

const getIncluded = (t: Translate) => [
  t("Audience research & lookalike targeting based on your actual buyers, not platform defaults", "根据真实买家研究受众、建立 Lookalike，不靠平台默认设置"),
  t("Campaign structure planned around your goal — sales, leads, or bookings", "按你的目标规划广告结构：销售、询问或预约"),
  t("Creative testing across image, video, and carousel formats to find what converts", "测试图片、视频和轮播广告，找出真正能带来生意的版本"),
  t("Retargeting sequences for cart abandoners and warm leads who haven't bought yet", "针对放弃购物车、有兴趣但还没买的人做 Retargeting"),
  t("Weekly performance reporting tied to ROAS and revenue, not reach or likes", "每周成效报告，看的是 ROAS 和营业额，不是 Reach 或 Like"),
  t("Landing page feedback so ad traffic doesn't leak before it converts", "提供 Landing Page 改善建议，避免广告流量还没成交就流失"),
];

const getProblems = (t: Translate) => [
  {
    title: t("Boosting posts instead of running campaigns", "只会 Boost Post，没有真正跑广告"),
    desc: t("The Boost button only offers a short list of simple goals, and many owners pick engagement — so they pay for likes and reach. Campaigns in Ads Manager let you choose the Sales objective and optimize for purchases.", "Boost 按钮只有几个简单的目标，很多老板选的是互动，结果买到的是 Like 和 Reach。在 Ads Manager 里开广告，才能选“销售”目标，针对购买来优化。"),
  },
  {
    title: t("The wrong audience — or one that's too broad", "受众不对，或者太广"),
    desc: t("Targeting “everyone in Malaysia aged 18–65” spreads budget thin. We build audiences from your real buyers, then let Meta find more people like them.", "把受众设成“全马 18 到 65 岁”，预算一下就被摊薄。我们从你的真实买家出发建立受众，再让 Meta 找更多相似的人。"),
  },
  {
    title: t("The same creative running until it dies", "同一个广告跑到没效果为止"),
    desc: t("Ads fatigue. When the same people see the same image for weeks, costs climb and results drop. Ongoing creative testing keeps fresh ads ready to take over.", "广告会疲劳。同一批人连续几个星期看到同一张图，成本就会上升、成效下跌。持续测试新创意，才有新广告可以接上。"),
  },
  {
    title: t("No retargeting for people who almost bought", "差一点就买的人，没有再跟进"),
    desc: t("Most people don't buy on the first visit. Without retargeting, everyone who added to cart or asked a question and went quiet is simply lost.", "大部分人第一次看到不会马上买。如果没有 Retargeting，那些加了购物车或问过价钱就没下文的人，就这样流失了。"),
  },
  {
    title: t("Tracking that doesn't match reality", "追踪数据跟实际对不上"),
    desc: t("If the Pixel isn't set up properly, Meta optimizes for the wrong thing and your ROAS numbers can't be trusted — so it's worth checking before you increase the budget.", "如果 Pixel 没设置好，Meta 就会优化错方向，ROAS 数字也不可信，所以加大预算之前值得先检查。"),
  },
];

const getIndustries = (t: Translate) => [
  { name: t("Beauty & aesthetics clinics", "美容和医美诊所"), note: t("Premium treatment bookings — e.g. Verthys Beauty, 12x ROAS", "高端疗程预约，例如 Verthys Beauty 做到 12 倍 ROAS") },
  { name: t("Fashion & lifestyle e-commerce", "时尚和生活品牌电商"), note: t("Online sales that hold up after launch — e.g. Chillins Pyjamas, 8x ROAS", "推出后依然稳定的网店销售，例如 Chillins Pyjamas 保持 8 倍 ROAS") },
  { name: t("F&B e-commerce", "食品电商"), note: t("e.g. Okiss Granola, RM488k revenue through conversion rate optimization", "例如 Okiss Granola，靠优化转化率带来 RM48.8 万营业额") },
  { name: t("Furniture & interior design", "家具和室内设计"), note: t("e.g. Tekni Furniture, 300% more walk-ins with Google & Meta Ads", "例如 Tekni Furniture，用 Google 和 Meta 广告让到店人数增加 300%") },
];

const getSteps = (t: Translate) => [
  { title: t("Account check", "广告账户检查"), desc: t("You share your current ads, website, and social media, and we find where budget is leaking.", "你把现有的广告、网站和社交媒体发给我们，我们找出预算在哪里流失。") },
  { title: t("Goal & offer alignment", "对齐目标和优惠"), desc: t("A quick call to agree on the one number that matters — sales, leads, or bookings — and the offer we'll lead with.", "通个电话，先说好最重要的那个数字：销售、询问还是预约，以及主打什么优惠。") },
  { title: t("Campaign plan", "制定广告方案"), desc: t("You get a clear plan: audiences, creative to test, budget split, and how we'll retarget.", "你会拿到清楚的方案：受众、要测试的创意、预算怎么分配，以及怎么做 Retargeting。") },
  { title: t("Launch, test & scale", "上线、测试、放大"), desc: t("We launch, read the results weekly, cut what doesn't work, and scale what does.", "广告上线后每周看成效，没效果的就停，有效的就加码。") },
];

const getFaqs = (t: Translate) => [
  {
    q: t("How much does a Facebook ads agency cost in Malaysia?", "在马来西亚请 Facebook 广告代投公司要多少钱？"),
    a: t("There are two separate costs: your ad spend, which is paid to Meta, and the agency's management fee. Because every business has different goals, competition, and creative needs, we quote case by case after a free consultation and a look at your current account.", "费用分两部分：一是付给 Meta 的广告费，二是代投公司的管理费。每门生意的目标、竞争和创意需求都不同，所以我们会先做免费咨询、看过你现有的账户，再按情况报价。"),
  },
  {
    q: t("What's the difference between boosting a post and running Facebook ads?", "Boost Post 和正式跑 Facebook 广告有什么不同？"),
    a: t("Boosting is a shortcut with a short list of simple goals. Running campaigns in Meta Ads Manager gives you the full set of objectives (including Sales), audiences, placements, and creative testing — so you can optimize for purchases instead of likes.", "Boost 是一个捷径，只有几个简单的目标。在 Meta Ads Manager 正式开广告，你可以使用完整的目标（包括“销售”）、受众、版位和创意测试，针对购买来优化，而不是只拿到 Like。"),
  },
  {
    q: t("Do you manage both Facebook and Instagram ads?", "你们同时代投 Facebook 和 Instagram 广告吗？"),
    a: t("Yes. Facebook and Instagram ads run from the same Meta Ads Manager, so we plan, test, and report on both together.", "是的。Facebook 和 Instagram 广告都在同一个 Meta Ads Manager 里操作，所以我们会一起规划、测试和汇报。"),
  },
  {
    q: t("How do you measure whether the ads are working?", "怎样判断广告有没有效？"),
    a: t("We report weekly on ROAS (return on ad spend) and revenue — not reach or likes. For example, Verthys Beauty reached a sustained 12x ROAS and Chillins Pyjamas held a consistent 8x ROAS.", "我们每周汇报 ROAS（广告投资回报）和营业额，而不是 Reach 或 Like。例如 Verthys Beauty 稳定做到 12 倍 ROAS，Chillins Pyjamas 一直保持 8 倍 ROAS。"),
  },
  {
    q: t("Do you only work with businesses in Petaling Jaya?", "你们只服务八打灵再也的商家吗？"),
    a: t("No. We're based in Petaling Jaya and can meet in person around the Klang Valley when useful, but Meta ads are managed remotely, so we work with businesses across Malaysia.", "不是。我们位于八打灵再也，有需要时可以在巴生谷一带见面，但 Meta 广告都是远程管理的，所以全马的商家我们都有服务。"),
  },
];

const FacebookAdsPage = () => {
  const t = useT();
  const locale = useLocale();
  const verthys = useProject("verthys-beauty");
  const chillins = useProject("chillins-pyjamas");
  const faqs = getFaqs(t);
  const pageUrl = `${SITE_URL}${localePath('/services/facebook-instagram-ads', locale)}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": t("Facebook & Instagram Ads Management", "Facebook 与 Instagram 广告代投"),
      "serviceType": "Facebook and Instagram advertising",
      "url": pageUrl,
      "areaServed": { "@type": "Country", "name": "Malaysia" },
      "provider": {
        "@type": "ProfessionalService",
        "name": "BeamDots Media",
        "url": SITE_URL,
        "address": { "@type": "PostalAddress", "addressLocality": "Petaling Jaya", "addressRegion": "Selangor", "addressCountry": "MY" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Meta Ads Management", "Meta 广告代投") }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Service · Facebook & Instagram Ads · Petaling Jaya, Malaysia", "服务 · 马来西亚八打灵再也")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Facebook &amp; Instagram Ads Agency <span className="gold-gradient italic whitespace-nowrap">in PJ, Malaysia</span></>, <>马来西亚 Facebook 与 Instagram <span className="gold-gradient italic inline-block">广告代投</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("If your Facebook and Instagram Ads are burning budget on likes and reach instead of sales, the problem usually isn't the platform — it's the targeting, the creative, or the funnel behind the click. As a Facebook ads agency in Petaling Jaya, we manage Meta Ads for Malaysian SMEs and e-commerce brands end-to-end, tied to actual revenue, not vanity metrics.", "如果你的 Facebook 和 Instagram 广告只换来 Like 和 Reach，却没有生意，问题通常不在平台，而在受众、广告创意，或点击之后的流程。作为八打灵再也的 Facebook 广告代投公司，我们为马来西亚中小企业和电商品牌代投和管理 Meta 广告，看的是实际营业额，不是好看的数字。")}
          </p>
          <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed mt-4 font-medium">
            {t("Based in Petaling Jaya, working with businesses across the Klang Valley and Malaysia.", "我们位于八打灵再也，服务巴生谷和全马各地的商家。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">{t("What's Included in Our Facebook & Instagram Ads Management", "Facebook 与 Instagram 广告代投包括什么")}</h2>
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">{t("Why Facebook Ads Stop Bringing in Sales", "为什么 Facebook 广告带不来生意")}</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            {t("Five of the most common reasons — and each one is fixable.", "以下是五个最常见的原因，而且每一个都能解决。")}
          </p>
          <div className="space-y-6">
            {getProblems(t).map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <X className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-black text-lg mb-1 text-on-surface">{p.title}</h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-on-surface-variant font-medium leading-relaxed mt-8 text-center">
            {t("Sometimes the ads are fine and the leak is after the click. That's where our ", "有时广告本身没问题，漏洞在点击之后。这时我们的")}
            <Link to="/services/funnel-optimization" className="text-primary font-bold hover:underline">{t("sales funnel optimization", "销售漏斗优化")}</Link>
            {t(" work comes in.", "服务就能派上用场。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-10 text-center">{t("Industries We Work With", "我们服务的行业")}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {getIndustries(t).map((ind, i) => (
              <div key={i} className="p-6 border border-outline-variant/20 rounded-sm">
                <h3 className="font-heading font-black text-lg mb-2 text-on-surface">{ind.name}</h3>
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed">{ind.note}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all">
              {t("See all case studies", "查看所有客户案例")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-10 text-center">{t("How We Work: 4 Steps", "合作流程：四个步骤")}</h2>
          <ol className="grid sm:grid-cols-2 gap-6">
            {getSteps(t).map((s, i) => (
              <li key={i} className="p-6 border border-outline-variant/20 rounded-sm">
                <span className="text-primary font-mono text-sm">0{i + 1}</span>
                <h3 className="font-heading font-black text-lg mt-2 mb-2 text-on-surface">{s.title}</h3>
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="text-center mt-8">
            <Link to="/about#plan" className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all">
              {t("See our full 4-step process", "看看完整的四个步骤")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-10 text-center">{t("Facebook Ads Agency FAQ", "Facebook 广告代投常见问题")}</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-outline-variant/20 rounded-sm p-5 open:bg-surface-container/20">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="font-heading font-black text-base md:text-lg text-on-surface">{f.q}</h3>
                  <span className="text-primary font-black text-xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="text-on-surface-variant font-medium leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-heading font-black mb-6 text-center">{t("Facebook Ads Guides", "Facebook 广告指南")}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: "/guides/what-is-roas", title: t("What Is ROAS? Meaning, Formula & Calculator", "ROAS 是什么？意思、公式和计算器"), desc: t("Work out your break-even ROAS before you judge any campaign.", "评估广告之前，先算出你的保本 ROAS。") },
              { to: "/guides/boost-post-vs-facebook-ads", title: t("Boost Post vs Facebook Ads", "Boost Post 还是 Facebook 广告"), desc: t("Why boosted posts get likes but rarely sales.", "为什么 Boost 的贴文有 Like，却很少带来生意。") },
            ].map((g) => (
              <Link key={g.to} to={g.to} className="group p-5 border border-outline-variant/20 rounded-sm hover:border-primary transition-colors">
                <h3 className="font-heading font-black text-base text-on-surface group-hover:text-primary transition-colors mb-1">{g.title}</h3>
                <p className="text-on-surface-variant text-sm font-medium">{g.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-heading font-black mb-6">{t("Related Services", "相关服务")}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { to: "/services/google-ads", label: t("Google Ads management", "Google 广告代投") },
              { to: "/services/funnel-optimization", label: t("Sales funnel optimization", "销售漏斗优化") },
              { to: "/services/website-creation", label: t("Website & landing page design", "网站与 Landing Page 设计") },
              { to: "/services/content-planning", label: t("Content planning", "内容策划") },
            ].map((s) => (
              <Link key={s.to} to={s.to} className="px-4 py-2 border border-outline-variant/30 rounded-sm text-sm font-bold text-on-surface-variant hover:text-primary hover:border-primary transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
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
