import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';

const INCLUDED = [
  "Daily/weekly posting across Instagram, Facebook, TikTok, and XHS, built from your content plan",
  "Community management — replying to comments and DMs so leads don't go cold",
  "Profile and bio optimization so visitors know what you sell and how to buy",
  "Hashtag, caption, and trend research tailored to Malaysian audiences",
  "Monthly growth and engagement reporting tied to actual business goals, not just follower count",
];

const SocialMediaManagementPage = () => {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Social Media Management" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            Service · Petaling Jaya, Malaysia
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Social Media <span className="gold-gradient italic">Management</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Posting consistently isn't the same as growing. We manage day-to-day content posting, community engagement, and platform growth so your social presence actively supports sales instead of sitting idle between ad campaigns.
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-black mb-4 text-center">What's Included</h2>
          <p className="text-on-surface-variant text-sm md:text-base text-center max-w-2xl mx-auto mb-10 font-medium">
            Every engagement is scoped to your business and goals — here's what typical social media management covers:
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
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">Why Organic Social Still Matters</h2>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              A page that goes cold between ad campaigns costs you trust — people check your profile before they buy. Organic engagement also builds the warm audiences your retargeting ads convert best.
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
              Posting runs off the same{' '}
              <Link to="/services/content-planning" className="text-primary font-bold hover:underline">Content Plan</Link>{' '}
              and{' '}
              <Link to="/services/video-production" className="text-primary font-bold hover:underline">video shoots</Link>{' '}
              we produce for your paid campaigns, so organic and paid content reinforce each other instead of competing for budget.
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
        heading="Ready for Social Media That Works While You Don't?"
        description="Book a free consultation and I'll show you what your current social presence is — and isn't — doing for your sales."
      />
    </>
  );
};

export default SocialMediaManagementPage;
