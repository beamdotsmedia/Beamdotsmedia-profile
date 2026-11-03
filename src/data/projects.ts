import { IMAGES } from './images';
import { useT, type Translate } from '../i18n';

export type Project = {
  slug: string;
  title: string;
  desc: string;
  tag: string;
  metric: string;
  metricLabel: string;
  img: string;
};

const getProjects = (t: Translate): Project[] => [
  {
    slug: "tekni-furniture",
    title: "Tekni Furniture",
    desc: t("Scaling luxury brand digital presence through Google & Meta Ads. 300% Walk-in Increased .", "用 Google 和 Meta 广告提升高端家具品牌的线上曝光，到店人数增加 300%。"),
    tag: t("Premium Furniture", "高端家具"),
    metric: "300%",
    metricLabel: t("Walk-in Increased", "到店人数增长"),
    img: IMAGES.tekni
  },
  {
    slug: "okiss-granola",
    title: "Okiss Granola",
    desc: t("Driving direct-to-consumer revenue via conversion rate optimization. RM 488k Revenue.", "优化网店转化率，直接为品牌带来 RM 48.8万 营业额。"),
    tag: t("F&B E-commerce", "食品电商"),
    metric: t("RM 488k", "RM 48.8万"),
    metricLabel: t("Revenue", "营业额"),
    img: IMAGES.okiss
  },
  {
    slug: "verthys-beauty",
    title: "Verthys Beauty",
    desc: t("Scaled Meta Ads performance to achieve a record-breaking 12x ROAS, significantly driving premium service bookings.", "Meta 广告做到破纪录的 12 倍 ROAS，高端疗程的预约明显增加。"),
    tag: t("Beauty & Aesthetics", "美容医美"),
    metric: t("12x ROAS", "12 倍 ROAS"),
    metricLabel: t("Meta Ads Performance", "Meta 广告成效"),
    img: IMAGES.verthys
  },
  {
    slug: "meso-beauty",
    title: "Meso Beauty",
    desc: t("Delivered a 100% increase in revenue within just 30 days through a strategic omni-channel approach.", "靠多渠道配合，短短 30 天营业额翻倍。"),
    tag: t("Beauty & Aesthetics", "美容医美"),
    metric: "+100%",
    metricLabel: t("Revenue (30 Days)", "营业额增长（30 天）"),
    img: IMAGES.meso
  },
  {
    slug: "chillins-pyjamas",
    title: "Chillins Pyjamas",
    desc: t("Optimized Instagram Ads targeting and creative to maintain a consistent 8x ROAS for this lifestyle brand.", "不断优化 Instagram 广告的受众和创意，让这个生活品牌稳定保持 8 倍 ROAS。"),
    tag: t("Lifestyle E-commerce", "生活品牌电商"),
    metric: t("8x ROAS", "8 倍 ROAS"),
    metricLabel: t("Consistent Growth", "持续增长"),
    img: IMAGES.chillins
  },
  {
    slug: "quarter-interior",
    title: "Quarter Interior",
    desc: t("Accelerated growth to hit 100% of previous annual sales within the first 6 months through precision leads.", "靠高质量的询问加快增长，前 6 个月就做到上一年全年的营业额。"),
    tag: t("Interior Design", "室内设计"),
    metric: "100%",
    metricLabel: t("Annual Sales in 6mo", "半年做到全年业绩"),
    img: IMAGES.quarter
  }
];

export const useProjects = () => getProjects(useT());

export const useProject = (slug: string) => useProjects().find(p => p.slug === slug)!;
