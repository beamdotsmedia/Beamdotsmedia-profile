import { useState } from 'react';
import PageCta from '../../components/PageCta';
import { GuideHeader, GuideSection, H3, InlineLink, GuideTable, GuideFaq, ServiceCallout, RelatedGuides } from '../../components/GuideBits';
import { useT, type Translate } from '../../i18n';

const PATH = '/guides/what-is-roas';
const UPDATED = '2026-11-21';

// Fixed formatting (no toLocaleString) so server and client render identical text.
const rm = (n: number) => `${n < 0 ? '-' : ''}RM${Math.round(Math.abs(n)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
const x = (n: number) => `${n.toFixed(2)}x`;

const getFaqs = (t: Translate) => [
  {
    q: t("What does ROAS stand for?", "ROAS 是什么的缩写？"),
    a: t("ROAS stands for Return on Ad Spend. It's the revenue your ads bring in divided by what you spent on those ads. A ROAS of 4x means every RM1 of ad spend brought back RM4 in sales.", "ROAS 是 Return on Ad Spend 的缩写，意思是广告投资回报，就是广告带来的营业额除以广告费。ROAS 4 倍，代表每花 RM1 广告费，带回 RM4 的销售额。"),
  },
  {
    q: t("Is ROAS the same as ROI?", "ROAS 和 ROI 一样吗？"),
    a: t("No. ROAS compares revenue to ad spend only. ROI compares profit to all costs, including product cost, delivery, fees, and agency fees. You can have a 3x ROAS and still lose money if your margin is thin.", "不一样。ROAS 只拿营业额跟广告费比较；ROI 是拿利润跟所有成本比较，包括货品成本、运费、平台费和代投费。如果利润很薄，ROAS 有 3 倍也可能还是亏钱。"),
  },
  {
    q: t("Is a ROAS of 1 profitable?", "ROAS 1 倍算赚钱吗？"),
    a: t("Almost never. A ROAS of 1x means you got back exactly what you spent on ads in revenue, before paying for the product, delivery, and everything else. You need a ROAS above your break-even ROAS to make a profit.", "几乎不算。ROAS 1 倍只代表营业额刚好等于广告费，还没扣货品、运费和其他成本。ROAS 要高过你的保本 ROAS，才开始有利润。"),
  },
  {
    q: t("How do I calculate break-even ROAS?", "保本 ROAS 怎么算？"),
    a: t("Break-even ROAS = 1 ÷ gross margin. If your gross margin is 40%, your break-even ROAS is 1 ÷ 0.40 = 2.5x. Anything above 2.5x is profit; anything below loses money on each sale.", "保本 ROAS = 1 ÷ 毛利率。如果毛利率是 40%，保本 ROAS 就是 1 ÷ 0.40 = 2.5 倍。高过 2.5 倍就赚，低过就是每卖一单都在亏。"),
  },
  {
    q: t("What is a good ROAS for Facebook ads in Malaysia?", "在马来西亚，Facebook 广告的 ROAS 多少才算好？"),
    a: t("There's no single number, because it depends on your margin. Start by working out your break-even ROAS, then aim comfortably above it. A business with 60% margins can grow at 2.5x, while one with 25% margins needs 4x just to break even.", "没有一个标准数字，因为要看你的利润。先算出保本 ROAS，再把目标定在它之上。毛利 60% 的生意，2.5 倍就能增长；毛利只有 25% 的生意，要 4 倍才刚好保本。"),
  },
];

const RoasCalculator = () => {
  const t = useT();
  const [spend, setSpend] = useState(2000);
  const [revenue, setRevenue] = useState(8000);
  const [margin, setMargin] = useState(40);

  const roas = spend > 0 ? revenue / spend : 0;
  const breakEven = margin > 0 ? 100 / margin : 0;
  const profit = revenue * (margin / 100) - spend;
  const ok = roas >= breakEven && margin > 0;

  const field = (label: string, value: number, set: (n: number) => void, suffix: string, max?: number) => (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant">{label}</span>
      <span className="flex items-center border border-outline-variant/30 rounded-sm bg-surface focus-within:border-primary">
        {suffix === 'RM' && <span className="pl-3 text-on-surface-variant font-bold text-sm">RM</span>}
        <input
          type="number"
          inputMode="decimal"
          min={0}
          max={max}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => set(Math.max(0, Math.min(max ?? Infinity, Number(e.target.value) || 0)))}
          className="w-full bg-transparent px-3 py-3 text-on-surface font-bold outline-none"
        />
        {suffix === '%' && <span className="pr-3 text-on-surface-variant font-bold text-sm">%</span>}
      </span>
    </label>
  );

  return (
    <div className="my-8 p-6 md:p-8 border border-outline-variant/30 rounded-sm bg-surface-container/30 not-prose">
      <h3 className="font-heading font-black text-lg text-on-surface mb-6">{t("ROAS Calculator (with Break-Even ROAS)", "ROAS 计算器（含保本 ROAS）")}</h3>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {field(t("Ad spend", "广告费"), spend, setSpend, 'RM')}
        {field(t("Revenue from ads", "广告带来的营业额"), revenue, setRevenue, 'RM')}
        {field(t("Gross margin", "毛利率"), margin, setMargin, '%', 100)}
      </div>
      <div className="grid sm:grid-cols-3 gap-4" aria-live="polite">
        <div className="p-4 border border-outline-variant/20 rounded-sm">
          <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">{t("Your ROAS", "你的 ROAS")}</div>
          <div className="text-3xl font-heading font-black text-on-surface">{x(roas)}</div>
          <div className="text-xs text-on-surface-variant mt-1">{Math.round(roas * 100)}%</div>
        </div>
        <div className="p-4 border border-outline-variant/20 rounded-sm">
          <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">{t("Break-even ROAS", "保本 ROAS")}</div>
          <div className="text-3xl font-heading font-black text-on-surface">{x(breakEven)}</div>
          <div className="text-xs text-on-surface-variant mt-1">{t("= 1 ÷ gross margin", "= 1 ÷ 毛利率")}</div>
        </div>
        <div className={`p-4 border rounded-sm ${ok ? 'border-primary/50' : 'border-red-400/50'}`}>
          <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">{t("Gross profit after ads", "扣广告费后的毛利")}</div>
          <div className={`text-3xl font-heading font-black ${ok ? 'text-primary' : 'text-red-400'}`}>{rm(profit)}</div>
          <div className="text-xs text-on-surface-variant mt-1">{ok ? t("Above break-even", "高过保本线") : t("Below break-even", "低过保本线")}</div>
        </div>
      </div>
    </div>
  );
};

const WhatIsRoasPage = () => {
  const t = useT();
  const faqs = getFaqs(t);
  const title = t("What Is ROAS? Meaning, Formula & Calculator", "ROAS 是什么？意思、公式和计算器");

  return (
    <>
      <GuideHeader
        path={PATH}
        title={title}
        eyebrow={t("Guide · Facebook & Instagram Ads", "指南 · Facebook 与 Instagram 广告")}
        updated={UPDATED}
        faqs={faqs}
        description={t("ROAS meaning, the formula, break-even ROAS and a free calculator, with ringgit examples for Malaysian businesses.", "ROAS 的意思、公式、保本 ROAS 和免费计算器，用令吉例子讲给马来西亚商家听。")}
        intro={
          <>
            <p className="mb-4">
              {t("ROAS (Return on Ad Spend) is the revenue your ads bring in divided by what you spent on them. Spend RM2,000 on Facebook ads, make RM8,000 in sales from them, and your ROAS is 4x.", "ROAS（Return on Ad Spend，广告投资回报）就是广告带来的营业额除以广告费。花 RM2,000 跑 Facebook 广告、带来 RM8,000 销售额，ROAS 就是 4 倍。")}
            </p>
            <p>
              {t("This guide explains what ROAS means, how to calculate it, and the number most guides skip: your break-even ROAS. It's the same metric we report on every week for clients of our ", "这篇指南会讲清楚 ROAS 的意思、怎么算，还有大部分文章没讲的那个数字：保本 ROAS。这也是我们")}
              <InlineLink to="/services/facebook-instagram-ads">{t("Facebook & Instagram ads agency in PJ", "八打灵再也 Facebook 与 Instagram 广告代投")}</InlineLink>
              {t(".", "服务每周为客户汇报的指标。")}
            </p>
          </>
        }
      />

      <GuideSection title={t("What Does ROAS Mean?", "ROAS 是什么意思？")} tinted>
        <p>{t("ROAS answers one question: for every ringgit I put into ads, how many ringgit in sales came back? It's written as a multiple (4x), a ratio (4:1) or a percentage (400%). They all mean the same thing.", "ROAS 回答一个问题：我每投 RM1 广告费，带回多少令吉的销售？它可以写成倍数（4 倍）、比例（4:1）或百分比（400%），意思都一样。")}</p>
        <p>{t("It's the main number to judge Facebook, Instagram, and Google ads by when your goal is sales. Likes, reach, and clicks tell you people saw the ad. ROAS tells you whether it paid.", "如果你的目标是卖货，ROAS 就是判断 Facebook、Instagram 和 Google 广告的主要数字。Like、Reach 和点击只说明有人看到广告，ROAS 才说明广告有没有带来钱。")}</p>
      </GuideSection>

      <GuideSection title={t("ROAS Formula: How to Calculate ROAS", "ROAS 公式：怎么算 ROAS")}>
        <p className="text-on-surface font-heading font-black text-xl text-center py-4 border-y border-outline-variant/20">
          {t("ROAS = Revenue from ads ÷ Ad spend", "ROAS = 广告带来的营业额 ÷ 广告费")}
        </p>
        <H3>{t("Example: an online shop in Malaysia", "例子：一家马来西亚网店")}</H3>
        <p>{t("You spend RM3,000 on Instagram ads in a month. Meta Ads Manager reports RM10,500 in purchases from those ads. RM10,500 ÷ RM3,000 = 3.5x ROAS (350%).", "你一个月花 RM3,000 跑 Instagram 广告，Meta Ads Manager 显示这些广告带来 RM10,500 的购买。RM10,500 ÷ RM3,000 = ROAS 3.5 倍（350%）。")}</p>
        <p>{t("Two rules keep the number honest: use the same date range for spend and revenue, and only count revenue that actually came from the ads.", "要让这个数字可靠，记住两点：广告费和营业额要用同一个时间段，而且只算真正由广告带来的营业额。")}</p>
        <RoasCalculator />
      </GuideSection>

      <GuideSection title={t("What Is a Good ROAS? Start With Break-Even ROAS", "ROAS 多少才算好？先算保本 ROAS")} tinted>
        <p>{t("A “good” ROAS depends on your margin. Revenue isn't profit — you still pay for the product, packaging, delivery, and platform fees. What's left after those is your gross margin. So the useful question is: what ROAS do I need just to break even?", "ROAS 好不好，要看你的利润。营业额不等于利润，你还要付货品、包装、运费和平台费，扣掉这些之后剩下的就是毛利。所以真正要问的是：ROAS 要多少，我才刚好保本？")}</p>
        <p className="text-on-surface font-heading font-black text-xl text-center py-4 border-y border-outline-variant/20">
          {t("Break-even ROAS = 1 ÷ Gross margin", "保本 ROAS = 1 ÷ 毛利率")}
        </p>
        <GuideTable
          head={[t("Gross margin", "毛利率"), t("Break-even ROAS", "保本 ROAS"), t("What it means", "代表什么")]}
          rows={[
            ["20%", "5.00x", t("Thin margins: ads must work very hard", "利润很薄，广告要非常有效")],
            ["30%", "3.33x", t("Typical for many retail products", "很多零售产品的情况")],
            ["40%", "2.50x", t("Every RM1 of ads must bring RM2.50 in sales", "每 RM1 广告费要带回 RM2.50 销售")],
            ["50%", "2.00x", t("Room to scale once above 2x", "超过 2 倍就有空间放大")],
            ["60%", "1.67x", t("Common for services and own-brand products", "服务和自家品牌产品常见")],
            ["70%", "1.43x", t("High-margin offers can grow on lower ROAS", "高利润产品，ROAS 低一点也能增长")],
          ]}
        />
        <p>{t("Aim for a ROAS comfortably above your break-even line, because ad spend isn't your only cost. For reference, our Meta ads clients ", "目标要定在保本线之上，而且要留余地，因为广告费不是你唯一的成本。作为参考，我们的 Meta 广告客户 ")}
          <InlineLink to="/case-studies">{t("Verthys Beauty (12x) and Chillins Pyjamas (8x)", "Verthys Beauty（12 倍）和 Chillins Pyjamas（8 倍）")}</InlineLink>
          {t(" reached 12x and 8x ROAS. The higher your ROAS sits above break-even, the more room you have to increase the budget.", "分别做到 12 倍和 8 倍 ROAS。ROAS 比保本线高得越多，就越有空间加大预算。")}</p>
      </GuideSection>

      <GuideSection title={t("ROAS vs ROI: What's the Difference?", "ROAS 和 ROI 有什么不同？")}>
        <GuideTable
          head={["", "ROAS", "ROI"]}
          rows={[
            [t("Measures", "衡量什么"), t("Revenue per RM1 of ad spend", "每 RM1 广告费带来的营业额"), t("Profit per RM1 of total cost", "每 RM1 总成本带来的利润")],
            [t("Formula", "公式"), t("Revenue ÷ Ad spend", "营业额 ÷ 广告费"), t("(Revenue − All costs) ÷ All costs", "（营业额 − 所有成本）÷ 所有成本")],
            [t("Best for", "适合用来"), t("Comparing campaigns and ads", "比较不同广告活动和广告"), t("Judging the business as a whole", "判断整门生意赚不赚")],
            [t("Watch out", "要注意"), t("High ROAS can still lose money on thin margins", "利润薄的话，ROAS 高也可能亏钱"), t("Slower to calculate, needs all your costs", "算起来比较慢，需要知道所有成本")],
          ]}
        />
        <p>{t("Use ROAS to make day-to-day ad decisions, and check ROI monthly to make sure the business is actually making money.", "日常调整广告看 ROAS，每个月再看一次 ROI，确保生意真的有赚。")}</p>
      </GuideSection>

      <GuideSection title={t("Why Your ROAS in Ads Manager Doesn't Match Your Bank Account", "为什么 Ads Manager 的 ROAS 跟你的进账对不上")} tinted>
        <p>{t("The ROAS Meta shows you is based on what its tracking can see. In Malaysia, three things commonly throw it off:", "Meta 显示的 ROAS，是根据它追踪得到的数据算的。在马来西亚，常见有三种情况会让数字不准：")}</p>
        <H3>{t("Sales that close on WhatsApp", "在 WhatsApp 成交的生意")}</H3>
        <p>{t("Many customers click an ad, then message you on WhatsApp and pay by bank transfer. Unless that sale is reported back to Meta, Ads Manager never sees it, so your real ROAS can be higher than reported.", "很多客户点了广告之后，在 WhatsApp 问你，再用银行转账付款。除非把这笔成交回传给 Meta，否则 Ads Manager 看不到，所以真实的 ROAS 可能比报告的更高。")}</p>
        <H3>{t("Marketplace and offline sales", "Shopee、Lazada 和门市的生意")}</H3>
        <p>{t("If people see your ad and then buy on Shopee, Lazada, or in your shop, the ad usually gets no credit in Ads Manager. Compare total sales before and after a campaign, not just the Ads Manager number.", "如果顾客看到广告后去 Shopee、Lazada 或门市买，Ads Manager 通常算不到广告的功劳。所以要比较广告前后的总销售，不要只看 Ads Manager 的数字。")}</p>
        <H3>{t("Broken or double-counted tracking", "追踪设置坏了，或重复计算")}</H3>
        <p>{t("A Pixel that fires twice inflates ROAS; one that doesn't fire hides it. Check tracking before trusting any number — or before scaling a campaign.", "Pixel 重复触发，ROAS 就会虚高；没触发，就会被低估。在相信任何数字、或加大预算之前，先检查追踪。")}</p>
      </GuideSection>

      <GuideSection title={t("How to Improve ROAS on Facebook & Instagram Ads", "怎样提高 Facebook 与 Instagram 广告的 ROAS")}>
        <p>{t("ROAS improves when you either sell more per ringgit of ads or waste less of it. Five levers to work on:", "要提高 ROAS，不是让每令吉广告费卖得更多，就是少浪费一点。可以从这五个地方着手：")}</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>{t("Audience: build from your real buyers and lookalikes, not broad interests.", "受众：从真实买家和 Lookalike 出发，而不是很广的兴趣受众。")}</li>
          <li>{t("Creative: test new images and videos before the current ones fatigue.", "创意：在现有广告疲劳之前，测试新的图片和视频。")}</li>
          <li>{t("Offer: a clearer, more compelling offer can lift ROAS without changing anything else.", "优惠：一个更清楚、更吸引人的优惠，不用改其他东西也可能提高 ROAS。")}</li>
          <li>{t("Retargeting: follow up with people who viewed or added to cart but didn't buy.", "Retargeting：跟进看过产品、加了购物车却没买的人。")}</li>
          <li>{t("Landing page: a slow or confusing page wastes clicks you already paid for.", "Landing Page：网页慢或看不懂，等于浪费已经付了钱的点击。")}</li>
        </ol>
        <p>{t("And if you're still pressing the Boost button, start there — see ", "如果你还在按 Boost 按钮，先从这里开始，看看")}
          <InlineLink to="/guides/boost-post-vs-facebook-ads">{t("Boost Post vs Facebook Ads", "Boost Post 还是 Facebook 广告")}</InlineLink>.</p>
        <ServiceCallout
          to="/services/facebook-instagram-ads"
          heading={t("Want a higher ROAS without guessing?", "想提高 ROAS，又不想靠猜？")}
          text={t("We manage Facebook & Instagram ads for Malaysian SMEs and report on ROAS and revenue every week — not likes.", "我们为马来西亚中小企业代投 Facebook 与 Instagram 广告，每周汇报 ROAS 和营业额，而不是 Like。")}
          cta={t("See our Meta ads service", "了解 Meta 广告代投服务")}
        />
      </GuideSection>

      <GuideFaq title={t("ROAS FAQ", "ROAS 常见问题")} faqs={faqs} />

      <RelatedGuides
        title={t("Related", "相关内容")}
        items={[
          { to: "/guides/boost-post-vs-facebook-ads", label: t("Boost Post vs Facebook Ads: Which One Brings Sales?", "Boost Post 还是 Facebook 广告：哪个带来生意？") },
          { to: "/services/facebook-instagram-ads", label: t("Facebook & Instagram Ads Agency in PJ, Malaysia", "马来西亚 Facebook 与 Instagram 广告代投") },
          { to: "/services/funnel-optimization", label: t("Sales funnel optimization", "销售漏斗优化") },
        ]}
      />

      <PageCta
        heading={t("Not Sure What Your Real ROAS Is?", "不确定你真实的 ROAS 是多少？")}
        description={t("Book a free consultation and I'll personally look at your Meta Ads with you and what they're really doing for your revenue.", "预约免费咨询，我亲自和你一起看看 Meta 广告，以及它们真正为营业额带来了什么。")}
      />
    </>
  );
};

export default WhatIsRoasPage;
