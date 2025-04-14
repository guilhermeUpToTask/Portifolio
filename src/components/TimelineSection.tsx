import { motion } from 'framer-motion';
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { GraduationCap, Briefcase, Code, BookOpen, Building2, Rocket } from 'lucide-react';

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Timeline</h2>
          <p className="text-muted-foreground">My journey through education and professional experience</p>
        </motion.div>
        
        <Timeline className="relative">
          <TimelineItem
            date="2014 – 2017"
            title="Floriano Peixoto State School"
            description="High School/Technical Course in Informatics"
            icon={<GraduationCap className="w-4 h-4" />}
          />
          <TimelineItem
            date="Jan 2017 – Apr 2017"
            title="NB Informática"
            description="Intern - Provided technical support, diagnostics, and computer maintenance, resolving both hardware and software issues."
            icon={<Briefcase className="w-4 h-4" />}
          />
          <TimelineItem
            date="2018 – 2019"
            title="UTFPR, Guarapuava"
            description="Internet Systems Technology (Incomplete)"
            icon={<BookOpen className="w-4 h-4" />}
          />
          <TimelineItem
            date="Since Jan 2022"
            title="Galera Burger"
            description="Manager - Oversees operations and team management in a high-demand environment, enhancing leadership, organizational, and problem-solving skills."
            icon={<Building2 className="w-4 h-4" />}
          />
          <TimelineItem
            date="2023 – 2024"
            title="Task Wise Finances"
            description="Application for personal financial management featuring an intuitive interface."
            icon={<Code className="w-4 h-4" />}
          />
          <TimelineItem
            date="2024"
            title="Mercado Livre Price Monitoring"
            description="System (in development) for price monitoring using Python (Scrapy), FastAPI, SQLite, Docker, and React for data visualization."
            icon={<Rocket className="w-4 h-4" />}
          />
        </Timeline>
      </div>
    </section>
  );
};

export default TimelineSection; 