import { Link } from "react-router";
import { motion } from "motion/react";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import PageCta from "../components/PageCta";
import Breadcrumbs from "../components/Breadcrumbs";

const INDUSTRIES = [
  "Beauty & aesthetics clinics",
  "F&B and lifestyle e-commerce brands",
  "Furniture & interior design retailers",
  "General SMEs looking to scale ad spend",
];

const ServiceAreasPage = () => {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Service Areas" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            Malaysia-Focused, Worldwide-Ready
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Our <span className="gold-gradient italic">Service Areas</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Our founder and team are based in Petaling Jaya, Selangor — that's
            simply where we sit, not where our work stops. Our main focus is
            Malaysian SMEs and e-commerce brands nationwide, and because
            content, social media, ads, and web work are all delivered
            remotely, we take on clients worldwide too.
          </p>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10 bg-surface-container/20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">
              Why Malaysia Is the Focus
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-medium mb-4">
              Being based in the Klang Valley means we understand Malaysian
              consumer behavior firsthand, run on Malaysian business hours, and
              can meet in person when it's useful — not just over a call. That's
              why most of our work, and every case study on this site, is with
              Malaysian businesses.
            </p>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              It doesn't mean we're limited to Malaysia. Content planning,
              video, social media, Meta &amp; Google Ads, XHS influencer
              marketing, and website builds are all delivered remotely — so
              we're just as equipped to work with businesses anywhere that want
              the same approach.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-6">
              Who We Work With
            </h2>
            <ul className="space-y-3">
              {INDUSTRIES.map((item, i) => (
                <li
                  key={i}
                  className="text-on-surface-variant font-medium leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full gold-bg-gradient mt-2 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-on-surface-variant tracking-wide">
                HQ: Petaling Jaya, Selangor, Malaysia
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-on-surface-variant tracking-wide">
                +6016-7731754
              </span>
            </div>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
          >
            See case studies from Malaysian businesses we've worked with{" "}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <PageCta
        heading="Malaysia-Focused. Open Worldwide."
        description="Book a free consultation — whether you're a Malaysian SME or reaching out from elsewhere, I'll personally look at where your business is losing sales."
      />
    </>
  );
};

export default ServiceAreasPage;
