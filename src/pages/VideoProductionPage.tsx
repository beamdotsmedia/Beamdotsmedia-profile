import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';

const INCLUDED = [
  "On-location and studio video shoots for product, lifestyle, and testimonial content",
  "Short-form content built for Instagram Reels, TikTok, and XHS video — not repurposed TV ads",
  "Ad-ready creative variations for Meta and Google video campaigns",
  "Scripting and shot planning tied back to your content calendar, not shot in isolation",
  "Editing, captions, and platform-specific formatting for every deliverable",
];

const VideoProductionPage = () => {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Video Production & Shooting" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            Service · Petaling Jaya, Malaysia
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Video Production <span className="gold-gradient italic">& Shooting</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Static images don't stop the scroll the way video does. We shoot and produce short-form and campaign video content — product shoots, testimonials, ad creatives, and social content — built to perform on the platforms your customers actually use.
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">What's Included</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            Every engagement is scoped to your business and goals — here's what a typical video production engagement covers:
          </p>
          <ul className="space-y-5">
            {INCLUDED.map((item, i) => (
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
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">Why Video Drives More Than Views</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              Video creative consistently gives Meta and Google Ads more to work with than a static image — more watch time, more signal for the algorithm, and more room to build trust before someone ever visits your site.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">Where It Feeds Into</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              Every shoot is planned against your{' '}
              <Link to="/services/content-planning" className="text-primary font-bold hover:underline">Content Plan</Link>{' '}
              and cut for your{' '}
              <Link to="/services/social-media-management" className="text-primary font-bold hover:underline">Social Media</Link>,{' '}
              <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta Ads</Link>, and{' '}
              <Link to="/services/xhs-influencer-marketing" className="text-primary font-bold hover:underline">XHS</Link> campaigns, so nothing gets shot twice.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/about#plan" className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all">
            See our 4-step process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <PageCta
        heading="Ready to Put a Camera on Your Offer?"
        description="Book a free consultation and let's talk about the video content your ads and social channels are missing."
      />
    </>
  );
};

export default VideoProductionPage;
