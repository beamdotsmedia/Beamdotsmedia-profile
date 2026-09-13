import { Link } from 'react-router';

export type BreadcrumbItem = { label: string; to?: string };

const SITE_URL = 'https://beamdotsmedia.com';

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.label,
      ...(item.to ? { "item": `${SITE_URL}${item.to}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="pt-28 md:pt-36 pb-6 md:pb-8 px-6 md:px-8">
        <ol className="max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-2 text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span className="opacity-40">/</span>}
              {item.to ? (
                <Link to={item.to} className="hover:text-primary transition-colors">{item.label}</Link>
              ) : (
                <span className="text-primary">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Breadcrumbs;
