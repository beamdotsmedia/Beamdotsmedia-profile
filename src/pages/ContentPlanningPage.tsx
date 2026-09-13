import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';

const INCLUDED = [
  "Monthly content calendars mapped to campaign goals, launches, and seasonal demand",
  "Platform-specific planning for Instagram, Facebook, TikTok, and XHS — not one-size-fits-all content",
  "Messaging and hooks built around what your ideal customer actually searches for and scrolls past",
  "Content briefs handed to your shooting and design team (ours or yours) so execution matches strategy",
  "Monthly performance review to double down on what's working and cut what isn't",
];

const ContentPlanningPage = () => {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Content Planning" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            Service · Petaling Jaya, Malaysia
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Content Planning <span className="gold-gradient italic">& Strategy</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Random posting doesn't build a brand — it burns time and budget. We plan content calendars built around what your audience actually engages with and what your sales funnel actually needs, so every post, video, and ad has a job to do.
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">What's Included</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            Every engagement is scoped to your business and goals — here's what a typical content planning engagement covers:
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
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">Why Content Planning Comes First</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              Ads and social media only perform as well as the content behind them. Without a plan, budget gets spent testing random ideas instead of a deliberate content system — one where every piece feeds the next.
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
              A solid content plan is the foundation for our{' '}
              <Link to="/services/video-production" className="text-primary font-bold hover:underline">Video Production</Link>,{' '}
              <Link to="/services/social-media-management" className="text-primary font-bold hover:underline">Social Media Management</Link>, and{' '}
              <Link to="/services/facebook-instagram-ads" className="text-primary font-bold hover:underline">Meta Ads Management</Link>{' '}
              work — so creative direction stays consistent across every channel instead of getting rebuilt from scratch each time.
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
        heading="Ready for Content That Actually Has a Plan?"
        description="Book a free consultation and I'll personally review your current content and show you where a real content strategy would move the needle."
      />
    </>
  );
};

export default ContentPlanningPage;
