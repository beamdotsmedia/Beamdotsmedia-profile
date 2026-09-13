import { ProjectCard } from '../components/HomeSections';
import { projects } from '../data/projects';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';

const CaseStudiesPage = () => {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Case Studies" }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            Case Studies
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            Real Results for <span className="gold-gradient italic">Malaysian Businesses</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Every project below is a client we've actually worked with — real budgets, documented outcomes, across beauty and aesthetics, F&amp;B e-commerce, furniture, and interior design.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface-container-low px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <PageCta
        heading="Want Results Like These?"
        description="Book a free consultation and I'll personally look at your business and tell you what's realistic for your budget."
      />
    </>
  );
};

export default CaseStudiesPage;
