import { IMAGES } from './images';

export type Project = {
  slug: string;
  title: string;
  desc: string;
  tag: string;
  metric: string;
  metricLabel: string;
  img: string;
};

export const projects: Project[] = [
  {
    slug: "tekni-furniture",
    title: "Tekni Furniture",
    desc: "Scaling luxury brand digital presence through Google & Meta Ads. 300% Walk-in Increased .",
    tag: "Premium Furniture",
    metric: "300%",
    metricLabel: "Walk-in Increased",
    img: IMAGES.tekni
  },
  {
    slug: "okiss-granola",
    title: "Okiss Granola",
    desc: "Driving direct-to-consumer revenue via conversion rate optimization. RM 488k Revenue.",
    tag: "F&B E-commerce",
    metric: "RM 488k",
    metricLabel: "Revenue",
    img: IMAGES.okiss
  },
  {
    slug: "verthys-beauty",
    title: "Verthys Beauty",
    desc: "Scaled Meta Ads performance to achieve a record-breaking 12x ROAS, significantly driving premium service bookings.",
    tag: "Beauty & Aesthetics",
    metric: "12x ROAS",
    metricLabel: "Meta Ads Performance",
    img: IMAGES.verthys
  },
  {
    slug: "meso-beauty",
    title: "Meso Beauty",
    desc: "Delivered a 100% increase in revenue within just 30 days through a strategic omni-channel approach.",
    tag: "Beauty & Aesthetics",
    metric: "+100%",
    metricLabel: "Revenue (30 Days)",
    img: IMAGES.meso
  },
  {
    slug: "chillins-pyjamas",
    title: "Chillins Pyjamas",
    desc: "Optimized Instagram Ads targeting and creative to maintain a consistent 8x ROAS for this lifestyle brand.",
    tag: "Lifestyle E-commerce",
    metric: "8x ROAS",
    metricLabel: "Consistent Growth",
    img: IMAGES.chillins
  },
  {
    slug: "quarter-interior",
    title: "Quarter Interior",
    desc: "Accelerated growth to hit 100% of previous annual sales within the first 6 months through precision leads.",
    tag: "Interior Design",
    metric: "100%",
    metricLabel: "Annual Sales in 6mo",
    img: IMAGES.quarter
  }
];

export const getProject = (slug: string) => projects.find(p => p.slug === slug)!;
