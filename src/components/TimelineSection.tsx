import { motion } from 'framer-motion';
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { GraduationCap, Briefcase, Code, BookOpen, Building2, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TimelineSection = () => {
  const { t } = useTranslation();
  
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
          <h2 className="text-4xl font-bold mb-4">{t('timeline.title')}</h2>
          <p className="text-muted-foreground">{t('timeline.description')}</p>
        </motion.div>
        
        <Timeline className="relative">
          <TimelineItem
            date="2014 – 2017"
            title={t('timeline.items.school.title')}
            description={t('timeline.items.school.description')}
            icon={<GraduationCap className="w-4 h-4" />}
          />
          <TimelineItem
            date="Jan 2017 – Apr 2017"
            title={t('timeline.items.nb.title')}
            description={t('timeline.items.nb.description')}
            icon={<Briefcase className="w-4 h-4" />}
          />
          <TimelineItem
            date="2018 – 2019"
            title={t('timeline.items.utfpr.title')}
            description={t('timeline.items.utfpr.description')}
            icon={<BookOpen className="w-4 h-4" />}
          />
          <TimelineItem
            date="Since Jan 2022"
            title={t('timeline.items.galera.title')}
            description={t('timeline.items.galera.description')}
            icon={<Building2 className="w-4 h-4" />}
          />
          <TimelineItem
            date="2023 – 2024"
            title={t('timeline.items.taskwise.title')}
            description={t('timeline.items.taskwise.description')}
            icon={<Code className="w-4 h-4" />}
          />
          <TimelineItem
            date="2024"
            title={t('timeline.items.ml_monitor.title')}
            description={t('timeline.items.ml_monitor.description')}
            icon={<Rocket className="w-4 h-4" />}
          />
        </Timeline>
      </div>
    </section>
  );
};

export default TimelineSection; 