import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Code2, Database, Server, Globe, Zap, GitBranch, Terminal, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceDevelopment = () => {
  const capabilities = [
    {
      icon: Globe,
      title: "Frontend Development",
      description: "Building responsive, interactive UIs with React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Creating robust APIs and server-side logic with Django, Node.js, and Python."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient database schemas with PostgreSQL, Firebase, and Supabase."
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Managing code with Git, implementing CI/CD pipelines, and collaborative workflows."
    }
  ];

  const techStack = [
    "React.js", "TypeScript", "Django", "Python", "Node.js", 
    "PostgreSQL", "Firebase", "Supabase", "Tailwind CSS", "Git"
  ];

  const projects = [
    {
      title: "Full-Stack Web Applications",
      context: "Freelance & Personal",
      description: "Complete web applications from database design to deployment."
    },
    {
      title: "API Development",
      context: "Work & Projects",
      description: "RESTful APIs that power mobile and web applications."
    },
    {
      title: "Real-time Features",
      context: "Various Projects",
      description: "Live updates, chat systems, and real-time data synchronization."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
        
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Code2 className="w-5 h-5 text-secondary" />
              <span className="text-sm font-orbitron text-secondary">Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="gradient-text">Full-Stack Development</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building complete web solutions from frontend to backend, database to deployment.
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
                  I build full-stack web applications that are fast, secure, and scalable. 
                  From crafting pixel-perfect frontends to designing efficient database schemas, 
                  I handle every layer of the stack.
                </p>
                <p>
                  My development philosophy centers on writing clean, maintainable code that 
                  other developers can easily understand and extend. I believe in building 
                  for the long term, not just shipping fast.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="my-8 rounded-lg overflow-hidden border border-border bg-muted/30 aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <Terminal className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Code samples coming soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 relative bg-card/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-center mb-12"
          >
            How I <span className="gradient-text">Do It</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pro-card p-6 hover-scale"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cap.description}
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
                className="px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-medium text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 relative bg-card/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-center mb-12"
          >
            Where I've <span className="gradient-text">Applied It</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="pro-card p-6 hover-scale"
              >
                <span className="text-xs font-orbitron text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {project.context}
                </span>
                <h3 className="text-lg font-orbitron font-semibold text-foreground mt-4 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
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

export default ServiceDevelopment;
