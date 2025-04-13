import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Sparkles } from 'lucide-react';

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
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1">
                <Sparkles className="w-4 h-4 mr-2" />
                Featured
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1">
                <Sparkles className="w-4 h-4 mr-2" />
                New
              </Badge>
            </motion.div>
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={controls}
              className="space-y-2"
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
            <motion.div 
              variants={contentVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <motion.span
                    variants={iconVariants}
                    initial="hidden"
                    animate={controls}
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.span>
                  About Me
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm a passionate developer with expertise in modern web technologies.
                  My journey in tech is driven by curiosity and a desire to create
                  meaningful digital experiences.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <motion.span
                    variants={iconVariants}
                    initial="hidden"
                    animate={controls}
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.span>
                  What I Do
                </h3>
                <ul className="space-y-3 text-muted-foreground text-lg">
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Full-stack web development
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    UI/UX design
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Cloud architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Technical consulting
                  </li>
                </ul>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default MainCardSection; 