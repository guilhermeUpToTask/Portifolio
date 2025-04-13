import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Sparkles } from 'lucide-react';
import { ChatBot } from './ChatBot';

const MainCardSection = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: 100,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 1,
        delay: 0.1,
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        delay: 0.3,
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        delay: 0.5,
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 20,
        delay: 0.7,
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center p-4" 
      aria-label="Main card section"
    >
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 w-full max-w-4xl"
      >
        <Card className="bg-background/80 backdrop-blur-md border-primary/30 shadow-2xl transform-gpu">
          <CardHeader className="space-y-6">
            <motion.div 
              variants={badgeVariants}
              initial="hidden"
              animate={controls}
              className="flex flex-wrap gap-3"
            >
              <CardTitle className="text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Welcome to My Portfolio
              </CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                A showcase of my work, skills, and passion for technology
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent>
            <ChatBot/>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default MainCardSection; 