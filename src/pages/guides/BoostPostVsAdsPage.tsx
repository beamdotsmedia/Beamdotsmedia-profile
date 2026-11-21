import PageCta from '../../components/PageCta';
import { GuideHeader, GuideSection, H3, InlineLink, GuideTable, GuideFaq, ServiceCallout, RelatedGuides } from '../../components/GuideBits';
import { useT, type Translate } from '../../i18n';

const PATH = '/guides/boost-post-vs-facebook-ads';
const UPDATED = '2026-11-21';

const getFaqs = (t: Translate) => [
  {
    q: t("Is boosting a Facebook post a waste of money?", "Boost Facebook 贴文是浪费钱吗？"),
    a: t("Not always. Boosting is fine for getting more people to see a post, like an announcement or a promotion you want seen fast. It becomes a waste when you expect it to bring sales, because boosting doesn't give you the Sales objective that optimises for purchases.", "不一定。如果你只是想让更多人看到一个贴文，例如公告或想快点被看到的促销，Boost 没问题。但如果你期望它带来生意，就容易浪费钱，因为 Boost 没有针对购买来优化的“销售”目标。"),
  },
  {
    q: t("Do boosted posts show up in Ads Manager?", "Boost 过的贴文会出现在 Ads Manager 吗？"),
    a: t("Yes. A boosted post is still an ad, so it appears in Meta Ads Manager alongside your other campaigns. You just have far fewer settings when you create it with the Boost button.", "会。Boost 的贴文其实也是广告，所以会和其他广告活动一起出现在 Meta Ads Manager。只是用 Boost 按钮开的话，可以设置的选项少很多。"),
  },
  {
    q: t("Should a small business start with boosting or Ads Manager?", "小生意应该先 Boost，还是直接用 Ads Manager？"),
    a: t("If your goal is sales, leads, or bookings, start in Ads Manager — even a simple campaign there lets you choose the right objective, retarget past visitors, and (with the Pixel set up) track purchases. Keep boosting for posts where reach and engagement are the goal.", "如果你的目标是销售、询问或预约，就从 Ads Manager 开始，就算是简单的广告活动，也能选对目标、对来过的人做 Retargeting，设置好 Pixel 后还能追踪购买。至于只求曝光和互动的贴文，就继续用 Boost。"),
  },
  {
    q: t("Why do my boosted posts get likes but no sales?", "为什么 Boost 的贴文有 Like，却没有生意？"),
    a: t("Usually because the boost's goal is engagement. Meta then shows it to people likely to like or comment, who aren't always people likely to buy. To get sales, you need a sales-focused objective, the right audience, and a way to measure purchases — which is what ROAS tracks.", "通常是因为 Boost 选的目标是互动。Meta 就会把它推给容易按 Like 或留言的人，但这些人不一定会买。要有生意，就需要以销售为目标、选对受众，并且能追踪购买，这就是 ROAS 在衡量的东西。"),
  },
];

const BoostPostVsAdsPage = () => {
  const t = useT();
  const faqs = getFaqs(t);
  const title = t("Boost Post vs Facebook Ads: Which One Brings Sales?", "Boost Post 还是 Facebook 广告：哪个带来生意？");

  return (
    <>
      <GuideHeader
        path={PATH}
        title={title}
        eyebrow={t("Guide · Facebook & Instagram Ads", "指南 · Facebook 与 Instagram 广告")}
        updated={UPDATED}
        faqs={faqs}
        description={t("Boosting a post vs running Facebook ads in Ads Manager: what each does, a side-by-side comparison, and which to use when you want sales.", "Boost 贴文和在 Ads Manager 跑 Facebook 广告的分别：各自做什么、并排比较，以及想要生意时该用哪个。")}
        intro={
          <>
            <p className="mb-4">
              {t("Short answer: boosting a post gets more people to see it. Running ads in Meta Ads Manager gets more people to buy. If your posts get likes but your sales don't move, relying on the Boost button is a common reason.", "简单来说：Boost 贴文是让更多人看到，在 Meta Ads Manager 跑广告才是让更多人买。如果你的贴文有 Like，生意却没起色，一个常见原因就是只靠 Boost 按钮。")}
            </p>
            <p>
              {t("Here's what each one actually does, when each makes sense, and when it's worth handing your ads to a ", "下面会讲清楚两者各自做什么、什么时候用哪个，以及什么时候值得把广告交给")}
              <InlineLink to="/services/facebook-instagram-ads">{t("Facebook ads agency in PJ", "八打灵再也 Facebook 广告代投")}</InlineLink>
              {t(".", "。")}
            </p>
          </>
        }
      />

      <GuideSection title={t("What Is a Boosted Post?", "什么是 Boost Post？")} tinted>
        <p>{t("A boosted post is an existing Facebook or Instagram post that you pay to show to more people, using the Boost button on your page. You choose from a short list of goals (such as engagement, messages, or website visits), a simple audience, a budget, and how many days it runs.", "Boost Post 就是把已经发布的 Facebook 或 Instagram 贴文，用专页上的 Boost 按钮付钱推给更多人看。你只需要从几个目标中选一个（例如互动、讯息或网站访问），再选简单的受众、预算和天数。")}</p>
        <p>{t("It's quick and easy — which is exactly why so many business owners use it. The catch is that most of the controls that decide whether an ad sells are hidden.", "它又快又简单，这也是为什么那么多老板都在用。问题是，那些决定广告能不能卖货的设置，大部分都被藏起来了。")}</p>
      </GuideSection>

      <GuideSection title={t("What Are Facebook Ads in Ads Manager?", "什么是在 Ads Manager 跑的 Facebook 广告？")}>
        <p>{t("Meta Ads Manager is the full tool for running Facebook and Instagram ads. Instead of promoting one post, you build a campaign: pick an objective such as sales or leads, define audiences, choose placements, and test several ads against each other.", "Meta Ads Manager 是跑 Facebook 和 Instagram 广告的完整工具。你不是只推一个贴文，而是建立一个广告活动：选目标（例如销售或询问）、设定受众、选择版位，并让几个广告互相比较测试。")}</p>
        <p>{t("Because Ads Manager connects to your Meta Pixel, it can optimise for purchases and report the revenue your ads bring in — which is how you get a real ", "因为 Ads Manager 可以连接 Meta Pixel，它能针对购买来优化，也能汇报广告带来的营业额，这样你才算得出真实的 ")}
          <InlineLink to="/guides/what-is-roas">{t("ROAS (return on ad spend)", "ROAS（广告投资回报）")}</InlineLink>.</p>
      </GuideSection>

      <GuideSection title={t("Boost Post vs Facebook Ads: Side by Side", "Boost Post 和 Facebook 广告并排比较")} tinted>
        <GuideTable
          head={["", t("Boost post", "Boost Post"), t("Ads Manager", "Ads Manager")]}
          rows={[
            [t("Set-up time", "设置时间"), t("A few minutes", "几分钟"), t("Longer, more decisions", "比较久，要做的决定比较多")],
            [t("Goals", "目标"), t("A short list of simple goals, e.g. engagement, messages, website visits", "几个简单目标，例如互动、讯息、网站访问"), t("Full list, including the Sales objective", "完整选项，包括“销售”目标")],
            [t("Audience", "受众"), t("Simpler audience options", "受众选项比较简单"), t("Full options: custom audiences, lookalikes, exclusions", "完整选项：自定义受众、Lookalike、排除受众")],
            [t("Placements", "版位"), t("Limited control", "能控制的不多"), t("Choose exactly where ads appear", "可以精准选择广告出现在哪里")],
            [t("Creative", "广告内容"), t("The post as it is", "贴文原本的样子"), t("Multiple ads, formats and copy tested together", "多个广告、格式和文案一起测试")],
            [t("Retargeting", "Retargeting"), t("Limited", "有限"), t("Follow up visitors and cart abandoners", "跟进看过网站和放弃购物车的人")],
            [t("Measuring sales", "追踪成交"), t("Results for the boost's goal (likes, messages, clicks)", "只看 Boost 目标的成果（Like、讯息、点击）"), t("Purchases, revenue and ROAS (with the Pixel set up)", "购买、营业额和 ROAS（需设置好 Pixel）")],
            [t("Best for", "最适合"), t("Getting a post seen", "让贴文被更多人看到"), t("Getting sales, leads and bookings", "带来销售、询问和预约")],
          ]}
        />
      </GuideSection>

      <GuideSection title={t("When Boosting a Post Makes Sense", "什么时候适合 Boost")}>
        <p>{t("Boosting isn't useless. It's the right tool when visibility is the goal:", "Boost 不是没用。当你的目标是曝光时，它就是对的工具：")}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("Announcements: a new branch, new hours, an event date.", "公告：开新分行、改营业时间、活动日期。")}</li>
          <li>{t("A post that's already doing well organically and deserves more reach.", "一个本来就反应不错、值得让更多人看到的贴文。")}</li>
          <li>{t("Building some engagement on a new page before you start running campaigns.", "新专页在正式跑广告之前，先累积一些互动。")}</li>
        </ul>
      </GuideSection>

      <GuideSection title={t("When You Should Use Ads Manager Instead", "什么时候应该改用 Ads Manager")} tinted>
        <p>{t("Switch to Ads Manager whenever the result you care about is money:", "只要你在乎的结果是钱，就该改用 Ads Manager：")}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("You sell online and want purchases, not likes.", "你在网上卖东西，要的是购买，不是 Like。")}</li>
          <li>{t("You want enquiries or bookings — clinics, salons, interior designers, services.", "你要的是询问或预约，例如诊所、美容院、室内设计和各种服务。")}</li>
          <li>{t("You want to bring back people who visited your website but didn't buy.", "你想把来过网站却没买的人拉回来。")}</li>
          <li>{t("You want to know which ad, image, or audience is actually working.", "你想知道到底哪个广告、哪张图、哪个受众真正有效。")}</li>
        </ul>
        <H3>{t("The mistake to avoid: judging ads by likes", "要避免的错误：用 Like 来判断广告")}</H3>
        <p>{t("Picture two ads: a boosted post with 2,000 likes and no sales, and a campaign with 40 likes and RM12,000 in purchases. The first feels like it's working; the second is the one actually working. Judge every ad by the result you need — usually sales, measured as ROAS.", "想象两个广告：一个是有 2,000 个 Like、却没生意的 Boost 贴文；另一个是只有 40 个 Like、却带来 RM12,000 购买的广告活动。前者看起来有效，后者才是真正有效。每个广告都要用你真正需要的结果来判断，通常就是销售，也就是 ROAS。")}</p>
        <ServiceCallout
          to="/services/facebook-instagram-ads"
          heading={t("Ready to stop boosting and start selling?", "准备好不再只是 Boost，开始真正卖货？")}
          text={t("We set up and manage Facebook & Instagram campaigns for Malaysian SMEs in Ads Manager, built around sales and ROAS.", "我们在 Ads Manager 为马来西亚中小企业设置和管理 Facebook 与 Instagram 广告，一切以销售和 ROAS 为目标。")}
          cta={t("See our Meta ads service", "了解 Meta 广告代投服务")}
        />
      </GuideSection>

      <GuideFaq title={t("Boost Post vs Facebook Ads FAQ", "Boost Post 与 Facebook 广告常见问题")} faqs={faqs} />

      <RelatedGuides
        title={t("Related", "相关内容")}
        items={[
          { to: "/guides/what-is-roas", label: t("What Is ROAS? Meaning, Formula & Calculator", "ROAS 是什么？意思、公式和计算器") },
          { to: "/services/facebook-instagram-ads", label: t("Facebook & Instagram Ads Agency in PJ, Malaysia", "马来西亚 Facebook 与 Instagram 广告代投") },
        ]}
      />

      <PageCta
        heading={t("Boosting But Not Selling?", "有 Boost 却没有生意？")}
        description={t("Book a free consultation and I'll look at what your ads are doing now, and what a proper campaign could do instead.", "预约免费咨询，我帮你看看现在的广告在做什么，以及正式的广告活动能为你做到什么。")}
      />
    </>
  );
};

export default BoostPostVsAdsPage;
