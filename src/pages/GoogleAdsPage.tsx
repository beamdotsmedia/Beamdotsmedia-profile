import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import CaseStudyBlock from '../components/CaseStudyBlock';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { getProject } from '../data/projects';

const INCLUDED = [
  "Keyword research focused on commercial and local search intent",
  "Ad copy and extensions built around what actually gets a click to convert",
  "Conversion tracking so spend maps to real leads and sales, not just clicks",
  "Bid and budget management to keep cost-per-lead sustainable as spend scales",
  "Combined Google + Meta campaign coordination when both channels are in play",
];

const GoogleAdsPage = () => {
  const tekni = getProject("tekni-furniture");

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Google Ads Management" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            Service · Petaling Jaya, Malaysia
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Google Ads <span className="gold-gradient italic">/ PPC Management</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Search ads reach people already looking for what you sell — which means a poorly managed Google Ads account is one of the most expensive mistakes an SME can make. We build and manage PPC campaigns focused on capturing that high-intent traffic and converting it into calls, leads, and in-store visits, not just clicks.
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">What's Included</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            Every engagement is scoped to your business and goals — here's what a typical Google Ads engagement covers:
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
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight italic gold-gradient">PPC Results</h2>
          </div>
          <CaseStudyBlock
            project={tekni}
            narrative="Tekni Furniture wanted more people walking into their showroom, not just more website traffic. We ran coordinated Google and Meta campaigns targeting people actively searching for furniture nearby alongside broader brand awareness, with local-intent keywords and location extensions doing the heavy lifting on the Google side. Store walk-ins increased 300% as a direct result."
          />
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
        heading="Ready to Capture High-Intent Search Traffic?"
        description="Book a free consultation and I'll personally look at what your Google Ads account is — and isn't — converting."
      />
    </>
  );
};

export default GoogleAdsPage;
