import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Satellite, Cpu, Code, Layers, Shield, Brain, ExternalLink } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiGit, SiFastapi, SiNginx, SiLinux } from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      description: "Building modern, responsive user interfaces with cutting-edge technologies",
      items: [
        { name: "React", level: 90, icon: <FaReact className="w-6 h-6" />, color: "text-blue-400", description: "Advanced component architecture and state management", link: "https://react.dev" },
        { name: "TypeScript", level: 85, icon: <SiTypescript className="w-6 h-6" />, color: "text-blue-600", description: "Type-safe development and advanced type features", link: "https://www.typescriptlang.org" },
        { name: "Tailwind CSS", level: 88, icon: <Code className="w-6 h-6" />, color: "text-cyan-400", description: "Utility-first CSS framework for rapid UI development", link: "https://tailwindcss.com" },
        { name: "Next.js", level: 80, icon: <SiNextdotjs className="w-6 h-6" />, color: "text-black dark:text-white", description: "Server-side rendering and static site generation", link: "https://nextjs.org" },
        { name: "shadcn/ui", level: 85, icon: <Layers className="w-6 h-6" />, color: "text-purple-400", description: "Reusable, accessible, and customizable UI components", link: "https://ui.shadcn.com" },
        { name: "Semantic HTML", level: 90, icon: <Code className="w-6 h-6" />, color: "text-orange-500", description: "Accessible and meaningful HTML structure", link: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics" }
      ]
    },
    {
      category: "Backend Development",
      icon: <Satellite className="w-8 h-8 text-green-400" />,
      description: "Designing scalable and efficient server-side applications",
      items: [
        { name: "Node.js", level: 85, icon: <FaNodeJs className="w-6 h-6" />, color: "text-green-500", description: "Event-driven architecture and non-blocking I/O", link: "https://nodejs.org" },
        { name: "Python", level: 90, icon: <FaPython className="w-6 h-6" />, color: "text-yellow-500", description: "Clean code and efficient algorithms", link: "https://www.python.org" },
        { name: "FastAPI", level: 85, icon: <SiFastapi className="w-6 h-6" />, color: "text-teal-500", description: "Modern, fast web framework for building APIs", link: "https://fastapi.tiangolo.com" },
        { name: "PostgreSQL", level: 80, icon: <SiPostgresql className="w-6 h-6" />, color: "text-blue-500", description: "Relational database design and optimization", link: "https://www.postgresql.org" },
        { name: "LangChain", level: 80, icon: <Brain className="w-6 h-6" />, color: "text-purple-500", description: "Building applications with LLMs and AI agents", link: "https://python.langchain.com" },
        { name: "JWT", level: 85, icon: <Shield className="w-6 h-6" />, color: "text-red-500", description: "Secure authentication and authorization", link: "https://jwt.io" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      description: "Streamlining development workflows and deployment processes",
      items: [
        { name: "Docker", level: 82, icon: <FaDocker className="w-6 h-6" />, color: "text-blue-400", description: "Containerization and microservices architecture", link: "https://www.docker.com" },
        { name: "Git", level: 90, icon: <SiGit className="w-6 h-6" />, color: "text-orange-500", description: "Version control and collaborative development", link: "https://git-scm.com" },
        { name: "AWS", level: 75, icon: <FaAws className="w-6 h-6" />, color: "text-yellow-500", description: "Cloud infrastructure and services", link: "https://aws.amazon.com" },
        { name: "Nginx", level: 80, icon: <SiNginx className="w-6 h-6" />, color: "text-green-600", description: "Web server and reverse proxy configuration", link: "https://www.nginx.com" },
        { name: "Linux", level: 85, icon: <SiLinux className="w-6 h-6" />, color: "text-yellow-600", description: "System administration and shell scripting", link: "https://www.linux.org" },
        { name: "CI/CD", level: 80, icon: <Code className="w-6 h-6" />, color: "text-green-500", description: "Continuous integration and deployment pipelines", link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Technical Skills</h2>
          <p className="text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="perspective-1000"
            >
              <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 group transform-gpu">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-primary">{category.category}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                  <div className="space-y-6">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <motion.div
                              className={`${skill.color} group-hover/skill:scale-110 transition-transform duration-300`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              {skill.icon}
                            </motion.div>
                            <a 
                              href={skill.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                            >
                              {skill.name}
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                            </a>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-primary/50"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: skillIndex * 0.1 }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 