import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Mail, Twitter, Code, Boxes, LineChart, Database, Server, Container } from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';

function App() {
  const [scrollY, setScrollY] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, icon: <Code className="w-6 h-6" /> },
        { name: "TypeScript", level: 85, icon: <Code className="w-6 h-6" /> },
        { name: "Tailwind CSS", level: 88, icon: <Code className="w-6 h-6" /> }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Python", level: 92, icon: <Code className="w-6 h-6" /> },
        { name: "FastAPI", level: 88, icon: <Server className="w-6 h-6" /> },
        { name: "PostgreSQL", level: 85, icon: <Database className="w-6 h-6" /> }
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", level: 82, icon: <Container className="w-6 h-6" /> },
        { name: "Nginx", level: 80, icon: <Server className="w-6 h-6" /> }
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
      demo: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1600&h=900",
      icon: <Code className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Beautiful data visualization dashboard with real-time updates",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&h=900",
      icon: <LineChart className="w-6 h-6" />,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* Parallax Background */}
      <div className="fixed inset-0 pointer-events-none">
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-1/4 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute bottom-1/4 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"
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

      {/* Skills Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-400">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-primary/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                    <div className="space-y-6">
                      {category.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            {skill.icon}
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary/30"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
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
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400">Some of my recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="relative overflow-hidden bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <CardContent className="relative p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {project.icon}
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" className="bg-background/50 backdrop-blur-sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="default" size="sm" className="bg-primary/10 backdrop-blur-sm hover:bg-primary/20">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 mb-8">Get in touch for opportunities or just to say hi</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="bg-background/50 backdrop-blur-sm hover:bg-primary/10">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" className="bg-background/50 backdrop-blur-sm hover:bg-primary/10">
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            <Button variant="outline" className="bg-background/50 backdrop-blur-sm hover:bg-primary/10">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 text-center text-gray-400">
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;