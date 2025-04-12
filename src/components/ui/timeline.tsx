import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export function TimelineItem({ date, title, description, icon }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
        {icon}
      </div>
      <div className="absolute left-[7px] top-4 bottom-0 w-px bg-primary/20 last:hidden" />
      <div>
        <div className="text-sm text-muted-foreground mb-1">{date}</div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export function Timeline({ children, className = '' }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
} 