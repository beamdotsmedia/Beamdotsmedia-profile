import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';

const INCLUDED = [
  "Custom website and landing page design built around your offer and target customer, not templates",
  "Mobile-first builds — most Malaysian traffic is on a phone, and your site should perform like it",
  "Fast load times and clean structure that support Google Ads Quality Score and SEO",
  "Booking, checkout, or lead-form integration so the site actually captures the sale",
  "Ongoing updates and maintenance so the site doesn't rot after launch",
];

const WebsiteCreationPage = () => {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Website Creation & Design" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            Service · Petaling Jaya, Malaysia
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Website Creation <span className="gold-gradient italic">& Design</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            A slow, outdated, or confusing website is where a lot of ad spend quietly dies. We build fast, mobile-first websites and landing pages designed to convert the traffic your ads, content, and social channels already send you — not just look good in a portfolio.
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">What's Included</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            Every engagement is scoped to your business and goals — here's what a typical website build covers:
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
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">Why the Website Isn't a Separate Project</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              Ads and content can drive perfect traffic, but if the site is slow or the offer is unclear, that traffic leaves without buying. Building the site alongside your campaigns means it's designed for the traffic it will actually receive.
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
              A new or rebuilt site pairs directly with our{' '}
              <Link to="/services/funnel-optimization" className="text-primary font-bold hover:underline">Sales Funnel Optimization</Link>{' '}
              work, and gives our{' '}
              <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta</Link> and{' '}
              <Link to="/services/google-ads" className="text-primary font-bold hover:underline">Google Ads</Link>{' '}
              campaigns a landing experience actually built to convert the click.
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
        heading="Ready for a Website That Sells?"
        description="Book a free consultation and I'll personally look at what your current site is costing you in lost conversions."
      />
    </>
  );
};

export default WebsiteCreationPage;
