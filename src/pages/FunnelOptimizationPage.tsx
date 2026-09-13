import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import CaseStudyBlock from '../components/CaseStudyBlock';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { getProject } from '../data/projects';

const INCLUDED = [
  "Full funnel audit from ad click to checkout or booking confirmation",
  "Landing page conversion rate optimization — copy, layout, and load speed",
  "Checkout and booking flow simplification to reduce drop-off",
  "Offer and pricing-page testing to find what actually converts",
  "Ongoing CRO iteration based on real user behavior, not guesswork",
];

const FunnelOptimizationPage = () => {
  const okiss = getProject("okiss-granola");

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Sales Funnel Optimization" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            Service · Petaling Jaya, Malaysia
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Sales Funnel <span className="gold-gradient italic">Optimization</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Most businesses lose more revenue to a broken funnel than to bad ads. If your traffic looks healthy but sales don't match, the leak is usually somewhere between the ad click and the checkout — a slow landing page, a confusing offer, or a checkout flow that loses people at the last step. We audit that entire journey and fix what's actually costing you sales.
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">What's Included</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            Every engagement is scoped to your business and goals — here's what a typical funnel optimization audit covers:
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
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight italic gold-gradient">Funnel Fix Results</h2>
          </div>
          <CaseStudyBlock
            project={okiss}
            narrative="Okiss Granola was driving decent traffic to their online store but converting far fewer of those visitors into paying customers than the traffic volume suggested they should. We audited the full path from ad click to checkout, identifying friction points in the product and checkout pages, then rebuilt the flow around conversion rate optimization rather than adding more ad spend on top of a leaky funnel. That fix alone generated RM 488k in direct-to-consumer revenue."
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
        heading="Ready to Stop the Leak?"
        description="Book a free audit and I'll personally identify where your funnel is losing you sales."
      />
    </>
  );
};

export default FunnelOptimizationPage;
