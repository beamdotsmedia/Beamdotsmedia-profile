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

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/content-planning" element={<ContentPlanningPage />} />
          <Route path="/services/video-production" element={<VideoProductionPage />} />
          <Route path="/services/social-media-management" element={<SocialMediaManagementPage />} />
          <Route path="/services/facebook-instagram-ads" element={<FacebookAdsPage />} />
          <Route path="/services/google-ads" element={<GoogleAdsPage />} />
          <Route path="/services/xhs-influencer-marketing" element={<XhsInfluencerPage />} />
          <Route path="/services/website-creation" element={<WebsiteCreationPage />} />
          <Route path="/services/funnel-optimization" element={<FunnelOptimizationPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
        </Route>
      </Routes>
    </>
  );
}
