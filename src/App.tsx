import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { ParticleBackground } from './components/ParticleBackground';
import { HeroSection } from './components/HeroSection';
import { MissionSection } from './components/MissionSection';
import { SpaceStationSection } from './components/SpaceStationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DarkMatterSection } from './components/DarkMatterSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

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
      
      <HeroSection y1={y1} y2={y2} opacity={opacity} />
      <MissionSection />
      <SpaceStationSection />
      <SkillsSection />
      <ProjectsSection />
      <DarkMatterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;