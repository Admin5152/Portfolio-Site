import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Code2, Database, Smartphone, Globe, Cpu, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import eclStudio from "@/assets/ecl-studio.jpeg";
import eclTeam from "@/assets/ecl-team.jpg";
import eclPortrait from "@/assets/ecl-portrait.jpg";

const ExperienceEcl = () => {
  const techStack = [
    { name: "React Native", icon: Smartphone },
    { name: "Django", icon: Database },
    { name: "Firebase", icon: Zap },
    { name: "React.js", icon: Globe },
    { name: "Python", icon: Code2 },
    { name: "AI/ML", icon: Cpu },
  ];

  const projects = [
    {
      title: "Internal Management System",
      description: "Built a comprehensive management dashboard for tracking operations, employee performance, and business metrics.",
      impact: "Increased operational efficiency by streamlining workflows",
      technologies: ["React.js", "Django", "PostgreSQL"]
    },
    {
      title: "Mobile Application",
      description: "Developed a cross-platform mobile app for client engagement and service delivery.",
      impact: "Enabled mobile-first approach for customer interactions",
      technologies: ["React Native", "Firebase", "Node.js"]
    },
    {
      title: "AI Integration Module",
      description: "Implemented AI-powered features for data analysis and automated decision support.",
      impact: "Reduced manual analysis time and improved accuracy",
      technologies: ["Python", "TensorFlow", "Google Gemini"]
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
            <Link to="/#resume">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                Back to Resume
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
              <Briefcase className="w-5 h-5 text-accent" />
              <span className="text-sm font-orbitron text-accent">2025 - Present</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              Software Developer at <span className="gradient-text">ECL</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Where I apply everything I've learned to build real-world solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Role Overview */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pro-card p-8 mb-12"
            >
              <h2 className="text-2xl font-orbitron font-semibold text-foreground mb-6">My Role</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At ECL, I work as a Software Developer, responsible for building and maintaining applications
                  that power business operations. This role allows me to apply my full-stack capabilities —
                  from designing intuitive frontends to architecting robust backends.
                </p>
                <p>
                  Every day brings new challenges: optimizing database queries, implementing new features,
                  debugging complex issues, and collaborating with team members to deliver quality software.
                </p>
              </div>

              {/* Image Carousel */}
              <div className="my-8">
                <Carousel className="w-full max-w-2xl mx-auto">
                  <CarouselContent>
                    {[
                      { src: eclTeam, alt: "ECL Team Photo" },
                      { src: eclPortrait, alt: "Seth at ECL" },
                      { src: eclStudio, alt: "ECL Studio Session" },
                    ].map((image, index) => (
                      <CarouselItem key={index}>
                        <motion.div 
                          className="rounded-lg overflow-hidden border border-border"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-80 object-cover"
                          />
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 relative bg-card/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-center mb-12"
          >
            Technologies <span className="gradient-text">I Use</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pro-card px-6 py-4 flex items-center gap-3 hover-scale"
                >
                  <Icon className="w-5 h-5 text-accent" />
                  <span className="font-medium text-foreground">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-center mb-12"
          >
            What I've <span className="gradient-text">Built</span>
          </motion.h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="pro-card p-6 hover-scale"
              >
                <h3 className="text-xl font-orbitron font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-accent">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center pro-card p-8 md:p-12"
          >
            <Zap className="w-10 h-10 text-accent mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-orbitron text-foreground mb-4">
              "At ECL, I'm not just writing code — I'm solving problems and building the future."
            </blockquote>
            <p className="text-muted-foreground">— Seth Charles Agyei Mensah</p>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Link to="/#resume">
            <Button className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resume
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExperienceEcl;
