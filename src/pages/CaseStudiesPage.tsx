import { ProjectCard } from '../components/HomeSections';
import { useProjects } from '../data/projects';
import PageCta from '../components/PageCta';
import Breadcrumbs from '../components/Breadcrumbs';
import { useT } from '../i18n';

const CaseStudiesPage = () => {
  const t = useT();
  const projects = useProjects();
  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Case Studies", "客户案例") }]} />
      <section className="pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">
            {t("Case Studies", "客户案例")}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
            {t(<>Marketing Case Studies: <span className="gold-gradient italic">Real Results for Malaysian Businesses</span></>, <>马来西亚数码营销<span className="gold-gradient italic">客户案例</span></>)}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t("Every project below is a client we've actually worked with — real budgets, documented outcomes, across beauty and aesthetics, F&B e-commerce, furniture, and interior design.", "下面每个案例都是我们真实合作过的客户，预算是真的，成绩也有记录，涵盖美容医美、食品电商、家具和室内设计。")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface-container-low px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight text-center mb-16 md:mb-20">
            {t("Results Across Beauty, F&B, Furniture & Interior Design", "美容、食品、家具与室内设计案例")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <PageCta
        heading={t("Want Results Like These?", "也想要这样的成果吗？")}
        description={t("Book a free consultation and I'll personally look at your business and tell you what's realistic for your budget.", "预约免费咨询，我亲自了解你的生意，老实告诉你这个预算能做到什么。")}
      />
    </>
  );
};

export default CaseStudiesPage;
