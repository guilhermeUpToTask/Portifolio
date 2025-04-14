import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { ChatBot } from './ChatBot';

const ChatSection = () => {
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

  return (
    <section 
      id="chat"
      ref={ref}
      className="relative py-32 px-4"
      aria-label="Chat card section"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 top-32 left-1/2 -translate-x-1/2"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio - Guilherme Augusto</h2>
        <p className="text-muted-foreground">A showcase of my work, skills, and passion for technology.</p>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 w-full max-w-4xl mx-auto"
      >
        <Card className="bg-background/80 backdrop-blur-md border-primary/30 shadow-2xl transform-gpu">
          <CardContent className="p-6">
            <ChatBot/>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default ChatSection; 