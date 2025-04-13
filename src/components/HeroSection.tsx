import { motion, MotionValue, useScroll, useTransform, cubicBezier } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ParticleBackground } from './ParticleBackground';

interface HeroSectionProps {
  y1: MotionValue<number>;
  y2: MotionValue<number>;
  opacity: MotionValue<number>;
  spring?: MotionValue<number>;
}

const HeroSection = ({ y1, y2, opacity, spring }: HeroSectionProps) => {
  const { scrollYProgress } = useScroll();
  const springValue = spring || scrollYProgress;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
        {/* Background layers */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&h=1080')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              y: useTransform(springValue, [0, 1], [0, -100])
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />
        </div>

      {/* Particles */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ParticleBackground />
      </div>
      
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-1/4 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl z-0"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-1/4 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl z-0"
        aria-hidden="true"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4 relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="mb-8"
        >
          <motion.div
            className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white/50"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.3)",
                "0 0 20px rgba(255,255,255,0.4)",
                "0 0 10px rgba(255,255,255,0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Full Stack Developer
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Building modern web applications with a focus on performance, accessibility, and user experience
        </motion.p>
        
        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary/10 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('projects')}
            aria-label="View my projects"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('contact')}
            aria-label="Contact me"
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div
        style={{ y: springValue }}
        className="absolute bottom-10 w-full flex justify-center"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400 flex flex-col items-center gap-2"
        >
          <span>↓ Scroll to explore</span>
          <motion.div
            className="w-4 h-4 border-2 border-gray-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 