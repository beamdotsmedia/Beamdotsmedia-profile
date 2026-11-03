import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';

export { ROUTE_META, ZH_SERVICE_NAMES } from './data/seo';
export { HTML_LANG, LOCALES, localePath } from './i18n';

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
