import { useLocation } from 'react-router';

export type Locale = 'en' | 'zh';

export const LOCALES: Locale[] = ['en', 'zh'];

export const HTML_LANG: Record<Locale, string> = { en: 'en', zh: 'zh-Hans' };

export type Translate = <T>(en: T, zh: T) => T;

export const stripLocale = (pathname: string) => {
  if (pathname !== '/zh' && !pathname.startsWith('/zh/')) return pathname;
  return pathname.slice(3).replace(/^\/$/, '') || '/';
};

// Accepts hash links too: "/#contact" -> "/zh#contact", "/about#plan" -> "/zh/about#plan".
export const localePath = (path: string, locale: Locale) => {
  if (locale === 'en') return path;
  if (path === '/') return '/zh';
  return `/zh${path.startsWith('/#') ? path.slice(1) : path}`;
};

export const useLocale = (): Locale => {
  const { pathname } = useLocation();
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
};

export const useT = (): Translate => {
  const locale = useLocale();
  return (en, zh) => (locale === 'zh' ? zh : en);
};
