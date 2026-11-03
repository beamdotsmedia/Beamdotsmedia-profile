import Link from "../components/LocaleLink";
import { motion } from "motion/react";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import PageCta from "../components/PageCta";
import Breadcrumbs from "../components/Breadcrumbs";
import { useT, type Translate } from "../i18n";

const getIndustries = (t: Translate) => [
  t("Beauty & aesthetics clinics", "美容与医美诊所"),
  t("F&B and lifestyle e-commerce brands", "餐饮食品和生活品牌电商"),
  t("Furniture & interior design retailers", "家具行和室内设计公司"),
  t("General SMEs looking to scale ad spend", "希望扩大广告投放的中小企业"),
];

const ServiceAreasPage = () => {
  const t = useT();
  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Service Areas", "服务范围") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Malaysia-Focused, Worldwide-Ready", "立足马来西亚，也服务海外客户")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Our <span className="gold-gradient italic">Service Areas</span></>, <>我们的<span className="gold-gradient italic">服务范围</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("Our founder and team are based in Petaling Jaya, Selangor — that's simply where we sit, not where our work stops. Our main focus is Malaysian SMEs and e-commerce brands nationwide, and because content, social media, ads, and web work are all delivered remotely, we take on clients worldwide too.", "我们的创办人和团队在雪兰莪八打灵再也，但服务不限于这里。我们的数码营销服务主要面向全马各地的中小企业和电商品牌；由于内容、社交媒体、广告和网站都能远程完成，海外客户也一样可以合作。")}
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">
              {t("Why Malaysia Is the Focus", "为什么专注马来西亚")}
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-medium mb-4">
              {t("Being based in the Klang Valley means we understand Malaysian consumer behavior firsthand, run on Malaysian business hours, and can meet in person when it's useful — not just over a call. That's why most of our work, and every case study on this site, is with Malaysian businesses.", "我们在巴生谷，很了解马来西亚消费者的习惯，上班时间和你一样，有需要也可以见面谈，不只是通电话。所以我们大部分的项目，以及网站上的每个案例，都来自马来西亚企业。")}
            </p>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              {t("It doesn't mean we're limited to Malaysia. Content planning, video, social media, Meta & Google Ads, XHS influencer marketing, and website builds are all delivered remotely — so we're just as equipped to work with businesses anywhere that want the same approach.", "但这不代表我们只服务马来西亚。内容策划、视频、社交媒体、Meta 与 Google 广告、小红书网红营销和网站制作都能远程完成，所以其他国家的企业，一样可以和我们合作。")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">
              {t("Who We Work With", "我们服务的客户")}
            </h2>
            <ul className="space-y-3">
              {getIndustries(t).map((item, i) => (
                <li
                  key={i}
                  className="text-on-surface-variant font-medium leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full gold-bg-gradient mt-2 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-on-surface-variant tracking-wide">
                {t("HQ: Petaling Jaya, Selangor, Malaysia", "总部：马来西亚雪兰莪八打灵再也")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-on-surface-variant tracking-wide">
                +6016-7731754
              </span>
            </div>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
          >
            {t("See case studies from Malaysian businesses we've worked with", "查看我们与马来西亚企业合作的案例")}{" "}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <PageCta
        heading={t("Malaysia-Focused. Open Worldwide.", "立足马来西亚，也欢迎海外客户。")}
        description={t("Book a free consultation — whether you're a Malaysian SME or reaching out from elsewhere, I'll personally look at where your business is losing sales.", "预约免费咨询。无论你在马来西亚还是其他地方，我都会亲自看看你的生意卡在哪里。")}
      />
    </>
  );
};

export default ServiceAreasPage;
