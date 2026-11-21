import type { ReactNode } from 'react';
import Link from './LocaleLink';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { localePath, useLocale, useT } from '../i18n';

const SITE_URL = 'https://beamdotsmedia.com';

export type Faq = { q: string; a: string };

/** Breadcrumbs + Article/FAQPage JSON-LD + H1 header for a guide page. */
export const GuideHeader = ({
  path, title, eyebrow, intro, updated, faqs, description,
}: {
  path: string;
  title: string;
  eyebrow: string;
  intro: ReactNode;
  updated: string; // ISO date
  faqs: Faq[];
  description: string;
}) => {
  const t = useT();
  const locale = useLocale();
  const url = `${SITE_URL}${localePath(path, locale)}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "inLanguage": locale === 'zh' ? 'zh-Hans' : 'en',
      "datePublished": updated,
      "dateModified": updated,
      "mainEntityOfPage": url,
      "image": `${SITE_URL}/logo.jpg`,
      "author": { "@type": "Organization", "name": "BeamDots Media", "url": SITE_URL },
      "publisher": { "@type": "Organization", "name": "BeamDots Media", "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.jpg` } },
    },
    ...(faqs.length ? [{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    }] : []),
  ];
  const [y, m, d] = updated.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateLabel = t(`Updated ${d} ${months[m - 1]} ${y}`, `更新于 ${y} 年 ${m} 月 ${d} 日`);

  return (
    <>
      <Breadcrumbs items={[{ label: t("Home", "首页"), to: "/" }, { label: t("Guides", "营销指南"), to: "/guides" }, { label: title }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="pb-10 md:pb-14 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-primary font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6">{eyebrow}</div>
          <h1 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-[1.15] mb-6 text-on-surface">{title}</h1>
          <p className="text-xs font-mono text-on-surface-variant opacity-70 mb-8">{dateLabel} · BeamDots Media</p>
          <div className="text-base md:text-lg text-on-surface-variant leading-relaxed text-left">{intro}</div>
        </div>
      </header>
    </>
  );
};

/** One H2 section of guide body copy. */
export const GuideSection = ({ id, title, children, tinted }: { id?: string; title: string; children: ReactNode; tinted?: boolean }) => (
  <section id={id} className={`px-6 md:px-8 py-12 md:py-16 ${tinted ? 'bg-surface-container/20 border-y border-outline-variant/10' : ''}`}>
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-heading font-black mb-6 text-on-surface">{title}</h2>
      <div className="guide-prose space-y-4 text-on-surface-variant font-medium leading-relaxed">{children}</div>
    </div>
  </section>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-heading font-black text-lg text-on-surface pt-4">{children}</h3>
);

export const InlineLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="text-primary font-bold hover:underline">{children}</Link>
);

/** Simple responsive table for comparisons. */
export const GuideTable = ({ head, rows }: { head: string[]; rows: ReactNode[][] }) => (
  <div className="overflow-x-auto border border-outline-variant/20 rounded-sm my-6">
    <table className="w-full text-sm text-left min-w-[480px]">
      <thead className="bg-surface-container/40">
        <tr>{head.map((h, i) => <th key={i} className="px-4 py-3 font-black text-on-surface text-xs uppercase tracking-wider">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-outline-variant/15">
            {r.map((c, j) => <td key={j} className={`px-4 py-3 align-top ${j === 0 ? 'font-bold text-on-surface' : ''}`}>{c}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const GuideFaq = ({ title, faqs }: { title: string; faqs: Faq[] }) => (
  <section className="px-6 md:px-8 py-12 md:py-16">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-heading font-black mb-8 text-on-surface">{title}</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="group border border-outline-variant/20 rounded-sm p-5 open:bg-surface-container/20">
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
              <h3 className="font-heading font-black text-base md:text-lg text-on-surface">{f.q}</h3>
              <span className="text-primary font-black text-xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="text-on-surface-variant font-medium leading-relaxed mt-4">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

/** Box that sends the reader down the funnel to the money page. */
export const ServiceCallout = ({ to, heading, text, cta }: { to: string; heading: string; text: string; cta: string }) => (
  <div className="my-8 p-6 border border-primary/40 bg-primary/5 rounded-sm">
    <p className="font-heading font-black text-lg text-on-surface mb-2">{heading}</p>
    <p className="text-on-surface-variant font-medium leading-relaxed mb-4">{text}</p>
    <Link to={to} className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all">
      {cta} <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
);

export const RelatedGuides = ({ title, items }: { title: string; items: { to: string; label: string }[] }) => (
  <section className="px-6 md:px-8 pb-16">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-heading font-black mb-6 text-on-surface">{title}</h2>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              {it.label} <ArrowRight className="w-4 h-4" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
