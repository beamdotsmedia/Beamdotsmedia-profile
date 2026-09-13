import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import CaseStudyBlock from '../components/CaseStudyBlock';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { getProject } from '../data/projects';

const INCLUDED = [
  "Audience research & lookalike targeting based on your actual buyers, not platform defaults",
  "Creative testing across image, video, and carousel formats to find what converts",
  "Retargeting sequences for cart abandoners and warm leads who haven't bought yet",
  "Weekly performance reporting tied to ROAS and revenue, not reach or likes",
  "Landing page feedback so ad traffic doesn't leak before it converts",
];

const FacebookAdsPage = () => {
  const verthys = getProject("verthys-beauty");
  const chillins = getProject("chillins-pyjamas");

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Meta Ads Management" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            Service · Facebook &amp; Instagram Ads · Petaling Jaya, Malaysia
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Meta Ads Management <span className="gold-gradient italic">(Sales Focused)</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            If your Facebook and Instagram Ads are burning budget on likes and reach instead of sales, the problem usually isn't the platform — it's the targeting, the creative, or the funnel behind the click. We manage Meta Ads for Malaysian SMEs and e-commerce brands end-to-end, tied to actual revenue, not vanity metrics.
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">What's Included</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            Every engagement is scoped to your business and goals — here's what a typical Meta Ads engagement covers:
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
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">The Proof</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight italic gold-gradient">Meta Ads Results</h2>
          </div>
          <div className="space-y-10">
            <CaseStudyBlock
              project={verthys}
              narrative="Verthys Beauty came to us running Meta Ads with inconsistent bookings and no clear read on what was actually working. We rebuilt the campaign structure around audience testing and creative refreshes tailored to premium beauty and aesthetics buyers, then layered in retargeting for people who'd shown interest but hadn't booked. The result was a sustained 12x return on ad spend, with Meta Ads becoming the clinic's most reliable channel for premium service bookings."
            />
            <CaseStudyBlock
              project={chillins}
              narrative="Chillins Pyjamas needed Instagram Ads that could keep performing past the initial launch spike lifestyle brands often see. We focused on creative testing and audience refinement to keep cost-per-acquisition stable as spend scaled, maintaining a consistent 8x ROAS instead of the steep drop-off that typically follows a strong launch."
            />
          </div>
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
        heading="Ready to Turn Scrollers Into Customers?"
        description="Book a free consultation and I'll personally look at what your Meta Ads are — and aren't — doing for your revenue."
      />
    </>
  );
};

export default FacebookAdsPage;
