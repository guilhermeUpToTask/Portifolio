import { lazy, Suspense } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import SectionLoading from './components/SectionLoading';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load sections
const HeroSection = lazy(() => import('./components/HeroSection'));
const MissionSection = lazy(() => import('./components/MissionSection'));
const SpaceStationSection = lazy(() => import('./components/SpaceStationSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const DarkMatterSection = lazy(() => import('./components/DarkMatterSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const FooterComponent = lazy(() => import('./components/Footer'));

function App() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ErrorBoundary>
        <Suspense fallback={<SectionLoading />}>
          <HeroSection y1={y1} y2={y2} opacity={opacity} spring={scrollYProgress} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoading />}>
          <MissionSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoading />}>
          <SpaceStationSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoading />}>
          <SkillsSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoading />}>
          <ProjectsSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoading />}>
          <DarkMatterSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoading />}>
          <ContactSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionLoading />}>
          <FooterComponent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;