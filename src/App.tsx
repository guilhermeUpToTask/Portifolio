import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Mail, Code, Boxes, LineChart, Server, Rocket, Satellite, Cpu, Circle, CheckCircle2, Clock, Briefcase, Linkedin, Twitter, Globe } from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiGit } from 'react-icons/si';
import { Navigation } from './components/Navigation';
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";


function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const spring = useSpring(scrollYProgress, springConfig);

  const skills = [
    {
      category: "Frontend Development",
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      description: "Building modern, responsive user interfaces with cutting-edge technologies",
      items: [
        { name: "React", level: 90, icon: <FaReact className="w-6 h-6" />, color: "text-blue-400", description: "Advanced component architecture and state management" },
        { name: "TypeScript", level: 85, icon: <SiTypescript className="w-6 h-6" />, color: "text-blue-600", description: "Type-safe development and advanced type features" },
        { name: "Tailwind CSS", level: 88, icon: <Code className="w-6 h-6" />, color: "text-cyan-400", description: "Utility-first CSS framework for rapid UI development" },
        { name: "Next.js", level: 80, icon: <SiNextdotjs className="w-6 h-6" />, color: "text-black dark:text-white", description: "Server-side rendering and static site generation" }
      ]
    },
    {
      category: "Backend Development",
      icon: <Satellite className="w-8 h-8 text-green-400" />,
      description: "Designing scalable and efficient server-side applications",
      items: [
        { name: "Node.js", level: 85, icon: <FaNodeJs className="w-6 h-6" />, color: "text-green-500", description: "Event-driven architecture and non-blocking I/O" },
        { name: "Python", level: 90, icon: <FaPython className="w-6 h-6" />, color: "text-yellow-500", description: "Clean code and efficient algorithms" },
        { name: "PostgreSQL", level: 80, icon: <SiPostgresql className="w-6 h-6" />, color: "text-blue-500", description: "Relational database design and optimization" },
        { name: "REST APIs", level: 88, icon: <Server className="w-6 h-6" />, color: "text-purple-500", description: "RESTful architecture and API design" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      description: "Streamlining development workflows and deployment processes",
      items: [
        { name: "Docker", level: 82, icon: <FaDocker className="w-6 h-6" />, color: "text-blue-400", description: "Containerization and microservices architecture" },
        { name: "Git", level: 90, icon: <SiGit className="w-6 h-6" />, color: "text-orange-500", description: "Version control and collaborative development" },
        { name: "AWS", level: 75, icon: <FaAws className="w-6 h-6" />, color: "text-yellow-500", description: "Cloud infrastructure and services" },
        { name: "CI/CD", level: 80, icon: <LineChart className="w-6 h-6" />, color: "text-green-500", description: "Continuous integration and deployment pipelines" }
      ]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&h=900",
      icon: <Boxes className="w-6 h-6" />,
      github: "#",
      demo: "#",
      status: "completed",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      launchDate: "2023-12-15"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1600&h=900",
      icon: <Code className="w-6 h-6" />,
      github: "#",
      demo: "#",
      status: "active",
      tech: ["Next.js", "OpenAI", "WebSocket", "Redis"],
      launchDate: "2024-02-01"
    },
    {
      title: "Analytics Dashboard",
      description: "Beautiful data visualization dashboard with real-time updates",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&h=900",
      icon: <LineChart className="w-6 h-6" />,
      github: "#",
      demo: "#",
      status: "in-progress",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      launchDate: "2024-04-15"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      <Navigation />
      <ParticleBackground />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&h=1080')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              y: useTransform(spring, [0, 1], [0, -100])
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />
        </div>

        {/* Particles */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-1/4 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl z-0" 
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute bottom-1/4 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl z-0"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4 relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            className="mb-8"
          >
            <motion.div
              className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white/50"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(255,255,255,0.4)",
                  "0 0 10px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Full Stack Developer
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Building modern web applications with a focus on performance, accessibility, and user experience
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary/10 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          style={{ y: useTransform(spring, [0, 0.5], [0, 100]) }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 flex flex-col items-center gap-2"
          >
            <span>↓ Scroll to explore</span>
            <motion.div
              className="w-4 h-4 border-2 border-gray-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Statement Section */}
      <section id="mission" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Mission Timeline</h2>
            <p className="text-muted-foreground">My journey through the cosmos of technology</p>
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

      {/* Space Station (Work Experience) Section */}
      <section id="station" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Space Station</h2>
            <p className="text-muted-foreground">My professional journey through the tech universe</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle>Senior Space Engineer</CardTitle>
                <CardDescription>Galactic Tech Corp • 2023 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Leading development of next-generation space exploration software</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle>Space Systems Architect</CardTitle>
                <CardDescription>Orbit Solutions • 2021 - 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Designed and implemented scalable space mission control systems</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
            {/* Constellation Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full">
                {skills.map((category, i) => (
                  skills.slice(i + 1).map((otherCategory, j) => (
                    <motion.line
                      key={`${i}-${j}`}
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="50%"
                      stroke="rgba(var(--primary), 0.1)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  ))
                ))}
              </svg>
            </div>

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
                              <span className="font-medium text-foreground">{skill.name}</span>
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

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Mission Control</h2>
            <p className="text-gray-400">Current and upcoming projects</p>
          </motion.div>

          {/* Mission Control Interface */}
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
                        <h4 className="text-sm font-medium mb-2">Mission Parameters</h4>
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
                        <h4 className="text-sm font-medium mb-2">Launch Schedule</h4>
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
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button variant="default" size="sm" className="flex-1">
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

      {/* Dark Matter (Blog) Section */}
      <section id="matter" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Dark Matter</h2>
            <p className="text-muted-foreground">Exploring the unknown territories of technology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle>The Future of Web Development</CardTitle>
                <CardDescription>March 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Exploring emerging technologies and their impact on the web development landscape...</p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle>Space Architecture Patterns</CardTitle>
                <CardDescription>February 28, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Designing scalable systems for the next generation of space applications...</p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle>Quantum Computing Basics</CardTitle>
                <CardDescription>January 10, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A beginner's guide to understanding quantum computing principles...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Control (Contact) Section */}
      <section id="contact" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Mission Control</h2>
            <p className="text-muted-foreground">Establish communication for your next space mission</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle>Transmission Details</CardTitle>
                  <CardDescription>Connect with mission control through various channels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                      onClick={() => window.open('mailto:contact@spaceexplorer.dev', '_blank')}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">contact@spaceexplorer.dev</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                      onClick={() => window.open('https://github.com/spaceexplorer', '_blank')}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-muted-foreground">github.com/spaceexplorer</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                      onClick={() => window.open('https://linkedin.com/in/spaceexplorer', '_blank')}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">linkedin.com/in/spaceexplorer</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                      onClick={() => window.open('https://twitter.com/spaceexplorer', '_blank')}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Twitter className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Twitter</p>
                        <p className="text-sm text-muted-foreground">@spaceexplorer</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                      onClick={() => window.open('https://spaceexplorer.dev', '_blank')}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Website</p>
                        <p className="text-sm text-muted-foreground">spaceexplorer.dev</p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle>Send Transmission</CardTitle>
                  <CardDescription>Direct line to mission control</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-sm font-medium">Name</label>
                      <input 
                        type="text" 
                        className="w-full mt-1 p-2 rounded-md bg-background/20 border border-primary/20 focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-colors" 
                        placeholder="Enter your name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        className="w-full mt-1 p-2 rounded-md bg-background/20 border border-primary/20 focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-colors" 
                        placeholder="Enter your email"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-sm font-medium">Message</label>
                      <textarea 
                        className="w-full mt-1 p-2 rounded-md bg-background/20 border border-primary/20 focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-colors h-32" 
                        placeholder="Type your message here..."
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <Button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20">
                        Launch Transmission
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 text-center text-gray-400">
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;