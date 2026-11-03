import Link from '../components/LocaleLink';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { useT, type Translate } from '../i18n';

const getIncluded = (t: Translate) => [
  t("On-location and studio video shoots for product, lifestyle, and testimonial content", "外景和棚内拍摄，产品、生活感内容、顾客见证都可以"),
  t("Short-form content built for Instagram Reels, TikTok, and XHS video — not repurposed TV ads", "专为 Instagram Reels、TikTok 和小红书制作的短视频，不是把电视广告改短"),
  t("Ad-ready creative variations for Meta and Google video campaigns", "为 Meta 和 Google 视频广告准备多个版本，可以直接拿来投放"),
  t("Scripting and shot planning tied back to your content calendar, not shot in isolation", "脚本和分镜都对应内容日历，不是想到什么拍什么"),
  t("Editing, captions, and platform-specific formatting for every deliverable", "每支视频都包括剪辑、字幕，以及各平台需要的尺寸"),
];

const VideoProductionPage = () => {
  const t = useT();
  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Video Production & Shooting", "视频拍摄与制作") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Service · Petaling Jaya, Malaysia", "服务 · 马来西亚八打灵再也")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Video Production <span className="gold-gradient italic whitespace-nowrap">in Malaysia</span></>, <>马来西亚<span className="gold-gradient italic">视频拍摄与制作</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("Static images don't stop the scroll the way video does. We shoot and produce short-form and campaign video content — product shoots, testimonials, ad creatives, and social content — built to perform on the platforms your customers actually use.", "想让人滑手机时停下来，图片远远比不上视频。我们拍摄和制作短视频及广告视频，包括产品、顾客见证、广告和社交内容，专门针对你的客户常用的平台。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">{t("What's Included in Our Video Production", "视频拍摄与制作包括什么")}</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            {t("Every engagement is scoped to your business and goals — here's what a typical video production engagement covers:", "每个项目都会按你的生意和目标来安排，一般包括：")}
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
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">{t("Why Video Drives More Than Views", "视频带来的不只是观看次数")}</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              {t("Video creative consistently gives Meta and Google Ads more to work with than a static image — more watch time, more signal for the algorithm, and more room to build trust before someone ever visits your site.", "比起图片，视频能让 Meta 和 Google 广告发挥得更好：观看时间更长，系统能收集更多数据，客户还没进网站就已经对你有信任感。")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">{t("How Video Production Supports Your Other Marketing", "视频拍摄与制作如何配合其他服务")}</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              {t(<>Every shoot is planned against your{' '}
              <Link to="/services/content-planning" className="text-primary font-bold hover:underline">Content Plan</Link>{' '}
              and cut for your{' '}
              <Link to="/services/social-media-management" className="text-primary font-bold hover:underline">Social Media</Link>,{' '}
              <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta Ads</Link>, and{' '}
              <Link to="/services/xhs-influencer-marketing" className="text-primary font-bold hover:underline">XHS</Link> campaigns, so nothing gets shot twice.</>, <>每次拍摄都根据<Link to="/services/content-planning" className="text-primary font-bold hover:underline">内容计划</Link>安排，并为<Link to="/services/social-media-management" className="text-primary font-bold hover:underline">社交媒体</Link>、<Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta 广告</Link>和<Link to="/services/xhs-influencer-marketing" className="text-primary font-bold hover:underline">小红书</Link>活动剪辑不同版本，不必重复拍摄。</>)}
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
        heading={t("Ready to Put a Camera on Your Offer?", "准备好用镜头展示你的产品了吗？")}
        description={t("Book a free consultation and let's talk about the video content your ads and social channels are missing.", "预约免费咨询，一起聊聊你的广告和社交平台还缺什么视频。")}
      />
    </>
  );
};

export default VideoProductionPage;
