import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';

const INCLUDED = [
  "Influencer and KOC (Key Opinion Consumer) sourcing matched to your product category and budget",
  "Campaign briefs and content guidelines that keep posts authentic, not obviously scripted ads",
  "Negotiation and coordination with creators, from product seeding to paid collaborations",
  "Performance tracking on views, saves, comments, and traceable leads or bookings",
  "Integration with your other social and ad campaigns so XHS isn't running in isolation",
];

const XhsInfluencerPage = () => {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "XHS Influencer Marketing" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            Service · Petaling Jaya, Malaysia
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            XHS Influencer <span className="gold-gradient italic">Marketing</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Xiaohongshu (小红书, XHS), internationally branded as RedNote, has become one of the fastest-growing platforms for reaching Malaysia's Chinese-speaking, beauty, lifestyle, and F&amp;B audiences — but most brands don't know how to work it. We plan and manage XHS influencer and KOC campaigns that turn genuine recommendations into real bookings and sales.
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">What's Included</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            Every engagement is scoped to your business and goals — here's what a typical XHS influencer campaign covers:
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
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">Why XHS Matters for Malaysian Brands</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              XHS users treat the platform like a search engine for recommendations before they buy — especially in beauty, aesthetics, F&amp;B, and lifestyle categories, where we already have deep experience through our{' '}
              <Link to="/case-studies" className="text-primary font-bold hover:underline">case studies</Link>. A genuine creator post often earns more trust than a paid ad ever will.
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
              KOC content and briefs draw from the same{' '}
              <Link to="/services/content-planning" className="text-primary font-bold hover:underline">Content Plan</Link>{' '}
              we build for every other channel, and top-performing creator content can be repurposed into{' '}
              <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta Ads</Link>{' '}
              creative once it's proven to convert.
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
        heading="Ready to Tap Into XHS?"
        description="Book a free consultation and let's see if an XHS influencer campaign fits your brand and budget."
      />
    </>
  );
};

export default XhsInfluencerPage;
