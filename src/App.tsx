import { useRef, lazy, Suspense } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { ParticleBackground } from './components/ParticleBackground';
import Footer from './components/Footer';

// Lazy load sections
const HeroSection = lazy(() => import('./components/HeroSection'));
const MissionSection = lazy(() => import('./components/MissionSection'));
const SpaceStationSection = lazy(() => import('./components/SpaceStationSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const DarkMatterSection = lazy(() => import('./components/DarkMatterSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

// Loading component for Suspense fallback
const SectionLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      <Navigation />
      <ParticleBackground />
      
      <Suspense fallback={<SectionLoading />}>
        <HeroSection y1={y1} y2={y2} opacity={opacity} />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <MissionSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <SpaceStationSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <SkillsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <DarkMatterSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <ContactSection />
      </Suspense>
      
      <Footer />
    </div>
  );
}

export default App;