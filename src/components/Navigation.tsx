import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Home, Code, Rocket, Clock, Briefcase, BookOpen, Satellite, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home', icon: <Home className="w-4 h-4" /> },
  { id: 'chat', label: 'Chat', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 'mission', label: 'Mission', icon: <Clock className="w-4 h-4" /> },
  { id: 'station', label: 'Space Station', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
  { id: 'projects', label: 'Projects', icon: <Rocket className="w-4 h-4" /> },
  { id: 'matter', label: 'Dark Matter', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'contact', label: 'Mission Control', icon: <Satellite className="w-4 h-4" /> },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      style={{ opacity }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Constellation Lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="w-[60px] h-[300px]" aria-hidden="true">
            {sections.map((_, index) => {
              if (index < sections.length) {
                return (
                  <motion.line
                    key={`line-${index}`}
                    x1="30"
                    y1={index * 60 + 30}
                    x2="30"
                    y2={(index + 1) * 60 + 30}
                    stroke="rgba(var(--primary), 0.1)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    aria-hidden="true"
                  />
                );
              }
              return null;
            })}
          </svg>
        </div>

        {/* Navigation Items */}
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.1
            }}
            whileHover={{ scale: 1.1 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className={`w-9 h-9 rounded-full ${
                activeSection === section.id
                  ? 'bg-primary/20 text-primary'
                  : 'bg-background/50 text-muted-foreground'
              }`}
              onClick={() => scrollToSection(section.id)}
              aria-label={`Go to ${section.label} section`}
              aria-current={activeSection === section.id ? 'true' : undefined}
            >
              {section.icon}
              <span className="sr-only">{section.label}</span>
            </Button>
          </motion.div>
        ))}


      </div>
    </motion.div>
  );
} 