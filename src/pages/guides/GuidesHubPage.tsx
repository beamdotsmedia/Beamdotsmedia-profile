import Link from '../../components/LocaleLink';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageCta from '../../components/PageCta';
import { useT, type Translate } from '../../i18n';

// Grouped by cluster: each group's guides feed one money page.
export const getGuideGroups = (t: Translate) => [
  {
    topic: t("Facebook & Instagram Ads", "Facebook 与 Instagram 广告"),
    service: { to: "/services/facebook-instagram-ads", label: t("Facebook & Instagram Ads Agency in PJ", "八打灵再也 Facebook 与 Instagram 广告代投") },
    guides: [
      {
        to: "/guides/what-is-roas",
        title: t("What Is ROAS? Meaning, Formula & Calculator", "ROAS 是什么？意思、公式和计算器"),
        desc: t("What ROAS means, how to calculate it, and how to work out the break-even ROAS your ads need to make a profit. Includes a free calculator.", "ROAS 的意思、怎么算，以及广告要赚钱所需的保本 ROAS。附免费计算器。"),
      },
      {
        to: "/guides/boost-post-vs-facebook-ads",
        title: t("Boost Post vs Facebook Ads: Which One Brings Sales?", "Boost Post 还是 Facebook 广告：哪个带来生意？"),
        desc: t("What the Boost button actually does, how it compares to Ads Manager, and which one to use when you want sales instead of likes.", "Boost 按钮到底在做什么、和 Ads Manager 有什么不同，以及想要生意而不是 Like 时该用哪个。"),
      },
    ],
  },
];

const GuidesHubPage = () => {
  const t = useT();
  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Guides", "营销指南") }]} />
      <section className="pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">{t("Guides", "营销指南")}</div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Marketing Guides <span className="gold-gradient italic">for Malaysian SMEs</span></>, <>马来西亚中小企业<span className="gold-gradient italic">营销指南</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("Plain-language answers to common questions Malaysian business owners have about ads and marketing — with ringgit examples, not US averages.", "用简单的话，回答马来西亚老板常有的广告和营销问题，用的是令吉例子，不是美国的平均数。")}
          </p>
        </div>
      </section>

      {getGuideGroups(t).map((g) => (
        <section key={g.topic} className="section-padding px-6 md:px-8 border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-8 text-on-surface">{g.topic}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {g.guides.map((gd) => (
                <Link key={gd.to} to={gd.to} className="group p-6 border border-outline-variant/20 rounded-sm hover:border-primary transition-colors flex flex-col gap-3">
                  <h3 className="font-heading font-black text-lg text-on-surface group-hover:text-primary transition-colors">{gd.title}</h3>
                  <p className="text-on-surface-variant text-sm font-medium leading-relaxed flex-1">{gd.desc}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest">{t("Read guide", "阅读指南")} <ArrowRight className="w-4 h-4" /></span>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-on-surface-variant font-medium">
              {t("Want it done for you? ", "想直接交给专业团队？")}
              <Link to={g.service.to} className="text-primary font-bold hover:underline">{g.service.label}</Link>
            </p>
          </div>
        </section>
      ))}

      <PageCta
        heading={t("Have a Question We Haven't Covered?", "有问题这里还没讲到？")}
        description={t("Book a free consultation and ask me directly — I'll look at your business and tell you what I'd do.", "预约免费咨询，直接问我。我会看看你的生意，告诉你我会怎么做。")}
      />
    </>
  );
};

export default GuidesHubPage;
