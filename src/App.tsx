import { lazy, Suspense } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import SectionLoading from './components/SectionLoading';
import ErrorBoundary from './components/ErrorBoundary';
import { Navigation } from './components/Navigation';

// Lazy load sections
const HeroSection = lazy(() => import('./components/HeroSection'));
const ChatSection = lazy (() => import('./components/ChatSection'));
const TimelineSection = lazy(() => import('./components/TimelineSection'));
const SpaceStationSection = lazy(() => import('./components/SpaceStationSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const DarkMatterSection = lazy(() => import('./components/DarkMatterSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const FooterComponent = lazy(() => import('./components/Footer'));

function App() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const spring = useSpring(scrollYProgress, springConfig);


  return (
    <div className="min-h-screen bg-background text-foreground">
      <header role="banner">
        <Navigation />
      </header>
      
      <main role="main">
        <ErrorBoundary>
          <Suspense fallback={<SectionLoading />}>
            <HeroSection y1={y1} y2={y2} opacity={opacity} spring={spring} />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoading />}>
            <ChatSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoading />}>
            <TimelineSection />
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
      </main>

      <footer role="contentinfo">
        <ErrorBoundary>
          <Suspense fallback={<SectionLoading />}>
            <FooterComponent />
          </Suspense>
        </ErrorBoundary>
      </footer>
    </div>
  );
}

export default App;