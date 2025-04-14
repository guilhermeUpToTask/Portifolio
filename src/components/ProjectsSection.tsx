import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, LineChart, Code, CheckCircle2, Circle, Clock, Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Task Wise Finances",
      description: "Development of a web application for personal finance management. The application provides a clean and intuitive interface with a calendar to facilitate navigation and user comprehension.",
      icon: <LineChart className="w-6 h-6" />,
      github: "https://github.com/guilhermeUpToTask/TaskWiseFinancesFront",
      demo: "https://task-wise-finances-front.vercel.app/",
      status: "active",
      tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Calendar API"],
      launchDate: "2023-05-15"
    },
    {
      title: "Mercado Livre Price Monitoring",
      description: "The project involves a price monitoring system for Mercado Livre. Using the Scrapy library in Python, it collects data daily from a specific selection of products on Mercado Livre. This data is stored in a MongoDB database and exposed through an API built with FastAPI.",
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/guilhermeUpToTask/mercado_livre_scraper_server",
      demo: "#",
      status: "completed",
      tech: ["Python", "Scrapy", "FastAPI", "MongoDB", "Docker", "React"],
      launchDate: "2024-03-01"
    },
    {
      title: "IA Assistant – RAG Chatbot",
      description: "Developed a chatbot system using Retrieval-Augmented Generation (RAG) architecture. Leveraged a vectorized database containing personal information, integrated via LangChain and embeddings, to retrieve relevant data and generate natural language responses using a large language model (LLM).",
      icon: <Brain className="w-6 h-6" />,
      github: "#",
      demo: "#chat",
      status: "in-progress",
      tech: ["LangChain", "Python", "FastAPI", "Vector Database", "LLM", "Embeddings"],
      launchDate: "2025-04-15"
    }
  ];

  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Projects</h2>
          <p className="text-gray-400">Current and upcoming projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0,
                y: 100,
                scale: 0.8,
                rotateX: 45,
                transformOrigin: "bottom"
              }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
                rotateX: {
                  duration: 0.6,
                  delay: index * 0.2
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    className="flex items-center justify-between mb-4"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                      >
                        {project.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    {project.status === "completed" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
                        className="flex items-center gap-1 text-green-500"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm">Completed</span>
                      </motion.div>
                    )}
                    {project.status === "active" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
                        className="flex items-center gap-1 text-blue-500"
                      >
                        <Circle className="w-4 h-4 animate-pulse" />
                        <span className="text-sm">Active</span>
                      </motion.div>
                    )}
                    {project.status === "in-progress" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
                        className="flex items-center gap-1 text-yellow-500"
                      >
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">In Progress</span>
                      </motion.div>
                    )}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className="text-sm text-muted-foreground mb-4"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + index * 0.2 + i * 0.1 }}
                            className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Date</h4>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 + index * 0.2 }}
                        className="text-sm text-muted-foreground"
                      >
                        {new Date(project.launchDate).toLocaleDateString()}
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + index * 0.2 }}
                      className="flex gap-4"
                    >
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Launch Demo
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 