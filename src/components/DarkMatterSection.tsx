import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DarkMatterSection = () => {
  return (
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
  );
};

export default DarkMatterSection; 