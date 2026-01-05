import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone, Zap, Bell, Database, Palette, Play, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceMobileApps = () => {
  const features = [
    {
      icon: Zap,
      title: "Cross-Platform",
      description: "One codebase for iOS and Android, maximizing efficiency without sacrificing quality."
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Engaging users with timely, relevant notifications that drive retention."
    },
    {
      icon: Database,
      title: "Offline Support",
      description: "Apps that work seamlessly even without internet connectivity."
    },
    {
      icon: Palette,
      title: "Native Feel",
      description: "UI that feels natural on each platform while maintaining brand consistency."
    }
  ];

  const techStack = [
    "React Native", "Expo", "Firebase", "AsyncStorage", 
    "React Navigation", "Redux/Zustand", "TypeScript"
  ];

  const apps = [
    {
      title: "Tracker 78",
      type: "Personal Project",
      description: "My first mobile app — a habit and progress tracker with local storage and analytics.",
      status: "Completed"
    },
    {
      title: "Client Mobile Apps",
      type: "Freelance",
      description: "Cross-platform mobile applications for various business needs and use cases.",
      status: "Ongoing"
    },
    {
      title: "ECL Mobile Solutions",
      type: "Work",
      description: "Enterprise mobile applications for internal operations and client engagement.",
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link to="/#about">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                Back to About
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Smartphone className="w-5 h-5 text-accent" />
              <span className="text-sm font-orbitron text-accent">Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="gradient-text">Mobile App Development</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creating cross-platform mobile experiences that users love to use every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pro-card p-8 mb-12"
            >
              <h2 className="text-2xl font-orbitron font-semibold text-foreground mb-6">What I Do</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I specialize in building mobile applications using React Native, which allows me 
                  to create high-quality apps for both iOS and Android from a single codebase. 
                  This approach saves time and resources while delivering native-like performance.
                </p>
                <p>
                  From simple utility apps to complex data-driven applications, I focus on creating 
                  smooth, intuitive experiences that feel natural on any device.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="my-8 rounded-lg overflow-hidden border border-border bg-muted/30 aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <Play className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">App demo coming soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 relative bg-card/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-center mb-12"
          >
            Key <span className="gradient-text">Capabilities</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pro-card p-6 hover-scale text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-center mb-12"
          >
            Tech <span className="gradient-text">Stack</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Apps */}
      <section className="py-16 relative bg-card/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-center mb-12"
          >
            Apps I've <span className="gradient-text">Built</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {apps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="pro-card p-6 hover-scale"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-orbitron text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {app.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{app.status}</span>
                </div>
                <h3 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                  {app.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Link to="/#about">
            <Button className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to About
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceMobileApps;
