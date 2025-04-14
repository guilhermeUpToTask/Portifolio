import { motion } from 'framer-motion';
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Rocket, Briefcase, Code } from 'lucide-react';

const MissionSection = () => {
  return (
    <section id="mission" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Timeline</h2>
          <p className="text-muted-foreground">My journey through the technology world</p>
        </motion.div>
        
        <Timeline className="relative">
          <TimelineItem
            date="2023 - Present"
            title="Intergalactic Explorer"
            description="Leading development teams through uncharted territories of web technology"
            icon={<Rocket className="w-4 h-4" />}
          />
          <TimelineItem
            date="2021 - 2023"
            title="Space Station Engineer"
            description="Building robust systems and infrastructure for enterprise applications"
            icon={<Briefcase className="w-4 h-4" />}
          />
          <TimelineItem
            date="2019 - 2021"
            title="Cosmic Navigator"
            description="Charting courses through the vast universe of full-stack development"
            icon={<Code className="w-4 h-4" />}
          />
        </Timeline>
      </div>
    </section>
  );
};

export default MissionSection; 