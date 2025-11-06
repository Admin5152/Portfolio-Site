import { motion } from "framer-motion";
import { Code2, Cpu, Zap, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with React Native, Django, and modern web technologies"
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Creating intelligent applications powered by Google Gemini and advanced AI models"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience"
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Constantly exploring new technologies and pushing boundaries in software development"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              I'm a passionate Computer Science student at <span className="text-primary font-semibold">Kwame Nkrumah University of Science and Technology (KNUST)</span> in Ghana, 
              dedicated to creating innovative solutions that merge technology with creativity.
            </p>
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              My expertise spans across <span className="text-secondary font-semibold">Java, Python, React Native, Django, Firebase,</span> and 
              <span className="text-accent font-semibold"> AI integration</span>. I specialize in building intuitive mobile apps, 
              robust web applications, and intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              From developing <span className="text-primary">real-time tracking applications</span> to creating 
              <span className="text-secondary"> AI-powered chatbots</span> and 
              <span className="text-accent"> e-commerce platforms</span>, I thrive on challenges that push the 
              boundaries of what's possible with code.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg glow-border hover-scale cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-orbitron font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
