/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContentPlanningPage from './pages/ContentPlanningPage';
import VideoProductionPage from './pages/VideoProductionPage';
import SocialMediaManagementPage from './pages/SocialMediaManagementPage';
import FacebookAdsPage from './pages/FacebookAdsPage';
import GoogleAdsPage from './pages/GoogleAdsPage';
import XhsInfluencerPage from './pages/XhsInfluencerPage';
import WebsiteCreationPage from './pages/WebsiteCreationPage';
import FunnelOptimizationPage from './pages/FunnelOptimizationPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import { ROUTE_META } from './data/seo';
import { HTML_LANG, LOCALES, localePath, stripLocale, useLocale } from './i18n';

const PAGES = [
  { path: '/', element: <HomePage /> },
  { path: '/services/content-planning', element: <ContentPlanningPage /> },
  { path: '/services/video-production', element: <VideoProductionPage /> },
  { path: '/services/social-media-management', element: <SocialMediaManagementPage /> },
  { path: '/services/facebook-instagram-ads', element: <FacebookAdsPage /> },
  { path: '/services/google-ads', element: <GoogleAdsPage /> },
  { path: '/services/xhs-influencer-marketing', element: <XhsInfluencerPage /> },
  { path: '/services/website-creation', element: <WebsiteCreationPage /> },
  { path: '/services/funnel-optimization', element: <FunnelOptimizationPage /> },
  { path: '/case-studies', element: <CaseStudiesPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/service-areas', element: <ServiceAreasPage /> },
];

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const DocumentMeta = () => {
  const { pathname } = useLocation();
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
    const meta = ROUTE_META[locale][stripLocale(pathname)];
    if (!meta) return;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [pathname, locale]);
  return null;
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <DocumentMeta />
      <Routes>
        <Route element={<Layout />}>
          {LOCALES.flatMap((locale) =>
            PAGES.map(({ path, element }) => (
              <Route key={localePath(path, locale)} path={localePath(path, locale)} element={element} />
            )),
          )}
        </Route>
      </Routes>
    </>
  );
}
