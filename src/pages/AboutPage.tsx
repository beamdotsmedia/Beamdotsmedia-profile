import { motion } from 'motion/react';
import { useCustomImage } from '../hooks/useCustomImage';
import { IMAGES } from '../data/images';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';

const STEPS = [
  {
    number: "01",
    title: "The \"Under the Hood\" Check",
    desc: "First, I need to see where you are. You'll share your current social media, website, or past ads with me.",
    goal: "I'll find the \"leaks\" where you might be losing money and identify your biggest opportunities for growth.",
    icon: <div className="text-primary font-mono text-sm">[DIAGNOSTICS]</div>,
    img: IMAGES.step1
  },
  {
    number: "02",
    title: "The Coffee Chat",
    desc: "We jump on a quick call (or message) to talk about your goals and where you want to be in 6 months.",
    goal: "Whether you want more leads, more sales, or a better brand image, we get on the same page instantly.",
    icon: <div className="text-primary font-mono text-sm">[ALIGNMENT]</div>,
    img: IMAGES.step2
  },
  {
    number: "03",
    title: "The Game Plan",
    desc: "I'll build a custom Strategy Blueprint for you. A step-by-step guide on how we will reach your customers.",
    goal: "You'll see exactly what ads we run, what your website should look like, and how we turn strangers into buyers.",
    icon: <div className="text-primary font-mono text-sm">[BLUEPRINT]</div>,
    img: IMAGES.step3
  },
  {
    number: "04",
    title: "Pressing \"Go\"",
    desc: "Once you approve, I handle the heavy lifting. I set up campaigns, monitor results, and constantly tweak the engine.",
    goal: "You focus on running your business; I focus on bringing the customers to your door through precision execution.",
    icon: <div className="text-primary font-mono text-sm">[IGNITION]</div>,
    img: IMAGES.step4
  }
];

const AboutPage = () => {
  const { src, setSrc } = useCustomImage(IMAGES.hero, 'user-hero-image');

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            About · Petaling Jaya, Malaysia
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            The Team &amp; Process Behind <span className="gold-gradient italic">BeamDots Media</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Who we are, how we think about growth, and the exact process we use to take a Malaysian SME from scattered marketing to a predictable sales engine.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-28 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 text-center lg:text-left"
            >
              <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">The Mind Behind The Machine</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-8 leading-tight">
                Crafting Growth at <br className="hidden md:block" />
                <span className="gold-gradient italic">BeamDots Media</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant text-base md:text-lg font-medium leading-relaxed">
                <p>
                  As a <span className="text-on-surface font-bold">Growth Marketer</span>, I've spent years obsessing over the mathematical bridge between marketing spend and ROI. I don't believe in "fancy" marketing that doesn't yield results.
                </p>
                <p>
                  At BeamDots Media, we don't just "run ads" or "post content" — we architect ecosystems. Content, social media, video, ads, and the website all report to the same goal, run by one team, not five disconnected vendors. I lead a team dedicated to one thing: <span className="text-primary italic">predictable performance.</span> Whether you're a local SME or an e-commerce brand, our mission is to ensure your every ringgit spent is working for you, not against you.
                </p>
                <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-10">
                  <div>
                    <div className="text-xl md:text-2xl font-black text-on-surface">8+ Years</div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-widest text-primary mt-1">Direct Industry Experience</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-black text-on-surface">RM 8M+</div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-widest text-primary mt-1">Managed Ad Spend Return</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 relative"
            >
              <div
                className="max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-card p-4 gold-glow group relative"
              >
                <img
                  src={src}
                  alt="Founder of BeamDots Media, growth marketing agency in Petaling Jaya"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== IMAGES.heroPlaceholder) {
                      setSrc(IMAGES.heroPlaceholder);
                    }
                  }}
                  className="w-full h-full object-cover rounded-xl filter brightness-110 contrast-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-bg-gradient opacity-20 blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 border-t border-outline-variant/10" id="plan">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-10 mb-16 md:mb-24 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-on-surface-variant block mb-6">The Methodology</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-8 leading-[1.2]">
                Our Simple <span className="gold-gradient italic inline-block px-1 md:px-2 py-1 md:py-2">4-Step Success Plan</span>
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg font-medium leading-relaxed">
                I believe marketing should be effective, not complicated. Here is how we work together to grow your business:
              </p>
            </div>
            <div className="hidden lg:block pt-12">
              <div className="flex items-center gap-4 text-primary opacity-20 group">
                <span className="font-mono text-xs tracking-widest uppercase">System Operational</span>
                <div className="w-12 h-[1px] bg-primary"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                className="relative group flex flex-col glass-card overflow-hidden hover:bg-surface-container-high/40 transition-all duration-500 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative aspect-video lg:aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={s.img}
                    alt={`Step ${s.number}: ${s.title} - BeamDots Media growth marketing process`}
                    loading="lazy"
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 opacity-40 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 flex justify-between items-center w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]">
                    <span className="text-3xl md:text-4xl font-black text-white/10 group-hover:text-primary/40 transition-colors duration-500">{s.number}</span>
                    {s.icon}
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-1">
                  <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-medium">
                    {s.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="text-[0.6rem] font-black uppercase tracking-widest text-primary mb-2">The Objective</div>
                    <p className="text-xs text-on-surface font-bold leading-relaxed">
                      {s.goal}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        heading="Ready to Work With a Team, Not a Vendor?"
        description="Book a free consultation and I'll personally walk you through how the 4-step process would apply to your business."
      />
    </>
  );
};

export default AboutPage;
