import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Globe, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground">Establish communication for your next project</p>
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
                <CardTitle>Contact Details</CardTitle>
                <CardDescription>Connect with me through various channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                    onClick={() => window.open('mailto:guilhermeaugustomatosferreira@gmail.com', '_blank')}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">guilhermeaugustomatosferreira@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                    onClick={() => window.open('https://wa.me/554299052187', '_blank')}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+55 42 9905-2187</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                    onClick={() => window.open('https://github.com/guilhermeUpToTask/', '_blank')}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">github.com/guilhermeUpToTask</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                    onClick={() => window.open('https://www.linkedin.com/in/guilherme-matos-a7aaa9279/', '_blank')}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/guilherme-matos-a7aaa9279/</p>
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
  );
};

export default ContactSection; 