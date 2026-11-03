import { Link, useLocation } from 'react-router';
import { HTML_LANG, localePath, stripLocale, useLocale } from '../i18n';

const LanguageSwitch = ({ className }: { className?: string }) => {
  const { pathname, hash } = useLocation();
  const target = useLocale() === 'zh' ? 'en' : 'zh';

  return (
    <Link
      to={`${localePath(stripLocale(pathname), target)}${hash}`}
      hrefLang={HTML_LANG[target]}
      lang={HTML_LANG[target]}
      aria-label={target === 'zh' ? '切换到中文' : 'Switch to English'}
      className={`font-bold text-xs text-on-surface-variant hover:text-primary transition-colors ${className ?? ''}`}
    >
      {target === 'zh' ? '中文' : 'EN'}
    </Link>
  );
};

export default LanguageSwitch;
