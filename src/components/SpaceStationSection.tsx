import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SpaceStationSection = () => {
  return (
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
  );
};

export default SpaceStationSection; 