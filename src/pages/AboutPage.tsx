import { motion } from 'motion/react';
import { useCustomImage } from '../hooks/useCustomImage';
import { IMAGES } from '../data/images';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { useT, type Translate } from '../i18n';

const getSteps = (t: Translate) => [
  {
    number: "01",
    title: t("The \"Under the Hood\" Check", "先做全面“体检”"),
    desc: t("First, I need to see where you are. You'll share your current social media, website, or past ads with me.", "我要先了解你目前的情况。你只需要把社交媒体、网站或之前的广告发给我。"),
    goal: t("I'll find the \"leaks\" where you might be losing money and identify your biggest opportunities for growth.", "我会找出让你亏钱的“漏洞”，以及最大的增长机会。"),
    icon: <div className="text-primary font-mono text-sm">{t("[DIAGNOSTICS]", "[诊断]")}</div>,
    img: IMAGES.step1
  },
  {
    number: "02",
    title: t("The Coffee Chat", "喝杯咖啡聊一聊"),
    desc: t("We jump on a quick call (or message) to talk about your goals and where you want to be in 6 months.", "我们通个电话（或发讯息），聊聊你的目标，还有 6 个月后想做到什么程度。"),
    goal: t("Whether you want more leads, more sales, or a better brand image, we get on the same page instantly.", "无论你要的是更多询问、更多生意，还是更好的品牌形象，我们先把方向对好。"),
    icon: <div className="text-primary font-mono text-sm">{t("[ALIGNMENT]", "[沟通]")}</div>,
    img: IMAGES.step2
  },
  {
    number: "03",
    title: t("The Game Plan", "制定行动方案"),
    desc: t("I'll build a custom Strategy Blueprint for you. A step-by-step guide on how we will reach your customers.", "我会为你量身制定策略，一步步说明怎么接触到你的客户。"),
    goal: t("You'll see exactly what ads we run, what your website should look like, and how we turn strangers into buyers.", "你会清楚知道要跑什么广告、网站该怎么做，以及怎样把陌生人变成买家。"),
    icon: <div className="text-primary font-mono text-sm">{t("[BLUEPRINT]", "[蓝图]")}</div>,
    img: IMAGES.step3
  },
  {
    number: "04",
    title: t("Pressing \"Go\"", "正式启动"),
    desc: t("Once you approve, I handle the heavy lifting. I set up campaigns, monitor results, and constantly tweak the engine.", "你点头后，辛苦的工作就交给我。我负责设置广告、盯成效，并不断调整。"),
    goal: t("You focus on running your business; I focus on bringing the customers to your door through precision execution.", "你专心做生意，我负责把客户带到你面前。"),
    icon: <div className="text-primary font-mono text-sm">{t("[IGNITION]", "[启动]")}</div>,
    img: IMAGES.step4
  }
];

const AboutPage = () => {
  const t = useT();
  const { src, setSrc } = useCustomImage(IMAGES.hero, 'user-hero-image');

  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("About", "关于我们") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("About · Petaling Jaya, Malaysia", "关于我们 · 马来西亚八打灵再也")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>The Team &amp; Process Behind <span className="gold-gradient italic">BeamDots Media</span></>, <><span className="gold-gradient italic">BeamDots Media</span> 的团队与流程</>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("Who we are, how we think about growth, and the exact process we use to take a Malaysian SME from scattered marketing to a predictable sales engine.", "我们是谁、怎么看待增长，以及如何一步步帮马来西亚中小企业，从东做一点西做一点，变成能稳定带来生意的营销系统。")}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-28 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 text-center lg:text-left"
            >
              <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">{t("The Mind Behind The Machine", "关于创办人")}</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-8 leading-tight">
                {t(<>Crafting Growth at <br className="hidden md:block" />
                <span className="gold-gradient italic">BeamDots Media</span></>, <>在 <span className="gold-gradient italic">BeamDots Media</span><br className="hidden md:block" />专注做增长</>)}
              </h2>
              <div className="space-y-6 text-on-surface-variant text-base md:text-lg font-medium leading-relaxed">
                <p>
                  {t(<>As a <span className="text-on-surface font-bold">Growth Marketer</span>, I've spent years obsessing over the mathematical bridge between marketing spend and ROI. I don't believe in "fancy" marketing that doesn't yield results.</>, <>作为<span className="text-on-surface font-bold">增长营销师</span>，这些年来我只钻研一件事：花出去的营销费，怎样才能赚回来。那些好看却没有成效的“花哨”营销，我不相信。</>)}
                </p>
                <p>
                  {t(<>At BeamDots Media, we don't just "run ads" or "post content" — we architect ecosystems. Content, social media, video, ads, and the website all report to the same goal, run by one team, not five disconnected vendors. I lead a team dedicated to one thing: <span className="text-primary italic">predictable performance.</span> Whether you're a local SME or an e-commerce brand, our mission is to ensure your every ringgit spent is working for you, not against you.</>, <>在 BeamDots Media，我们做的不只是“跑广告”或“发贴文”，而是把整套营销串联起来。内容、社交媒体、视频、广告和网站都朝同一个目标走，由同一个团队负责，不用你找五家公司各做各的。我的团队只专注一件事：<span className="text-primary italic">稳定、可预期的成绩。</span>无论你是本地中小企业还是电商品牌，我们都希望你花的每一令吉都用得值得。</>)}
                </p>
                <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-10">
                  <div>
                    <div className="text-xl md:text-2xl font-black text-on-surface">{t("8+ Years", "8 年以上")}</div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-widest text-primary mt-1">{t("Direct Industry Experience", "行业实战经验")}</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-black text-on-surface">{t("RM 8M+", "RM 800万+")}</div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-widest text-primary mt-1">{t("Managed Ad Spend Return", "广告投放回报")}</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 relative"
            >
              <div
                className="max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-card p-4 gold-glow group relative"
              >
                <img
                  src={src}
                  alt={t("Founder of BeamDots Media, growth marketing agency in Petaling Jaya", "BeamDots Media 创办人，八打灵再也数码营销公司")}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== IMAGES.heroPlaceholder) {
                      setSrc(IMAGES.heroPlaceholder);
                    }
                  }}
                  className="w-full h-full object-cover rounded-xl filter brightness-110 contrast-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-bg-gradient opacity-20 blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10" id="plan">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-10 mb-16 md:mb-24 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">{t("The Methodology", "合作流程")}</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-8 leading-[1.2]">
                {t(<>Our Simple <span className="gold-gradient italic inline-block px-1 md:px-2 py-1 md:py-2">4-Step Success Plan</span></>, <>简单的<span className="gold-gradient italic inline-block px-1 md:px-2 py-1 md:py-2">四步成功计划</span></>)}
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg font-medium leading-relaxed">
                {t("I believe marketing should be effective, not complicated. Here is how we work together to grow your business:", "营销不需要复杂，有效最重要。我们是这样合作的：")}
              </p>
            </div>
            <div className="hidden lg:block pt-12">
              <div className="flex items-center gap-4 text-primary opacity-20 group">
                <span className="font-mono text-xs tracking-widest uppercase">{t("System Operational", "系统运行中")}</span>
                <div className="w-12 h-[1px] bg-primary"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getSteps(t).map((s, i) => (
              <motion.div
                key={i}
                className="relative group flex flex-col glass-card overflow-hidden hover:bg-surface-container-high/40 transition-all duration-500 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative aspect-video lg:aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={s.img}
                    alt={t(`Step ${s.number}: ${s.title} - BeamDots Media growth marketing process`, `第 ${s.number} 步：${s.title} - BeamDots Media 增长营销流程`)}
                    loading="lazy"
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 opacity-40 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 flex justify-between items-center w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]">
                    <span className="text-3xl md:text-4xl font-black text-white/10 group-hover:text-primary/40 transition-colors duration-500">{s.number}</span>
                    {s.icon}
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-1">
                  <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-medium">
                    {s.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="text-[0.6rem] font-black uppercase tracking-widest text-primary mb-2">{t("The Objective", "目标")}</div>
                    <p className="text-xs text-on-surface font-bold leading-relaxed">
                      {s.goal}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        heading={t("Ready to Work With a Team, Not a Vendor?", "想找一个真正并肩作战的团队吗？")}
        description={t("Book a free consultation and I'll personally walk you through how the 4-step process would apply to your business.", "预约免费咨询，我亲自跟你讲解这四个步骤怎么用在你的生意上。")}
      />
    </>
  );
};

export default AboutPage;
