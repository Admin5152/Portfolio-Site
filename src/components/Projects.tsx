import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Tracker App",
      description: "Real-time family and friends tracking application with live location sharing, weather notifications, and emergency contact features. Built for seamless coordination and safety.",
      tech: ["React Native", "Firebase", "Google Maps API", "AsyncStorage"],
      gradient: "from-primary/20 to-secondary/20",
      icon: "🗺️"
    },
    {
      title: "JARVIS Chatbot",
      description: "AI assistant inspired by Tony Stark's JARVIS with futuristic interface. Powered by Google Gemini Pro API for intelligent conversations and task automation.",
      tech: ["React Native", "Google Gemini API", "AI/ML", "Expo"],
      gradient: "from-secondary/20 to-accent/20",
      icon: "🤖"
    },
    {
      title: "Hermes Store",
      description: "Full-featured e-commerce platform with shopping cart, checkout system, order tracking with Google Maps, Firebase authentication, and dark mode support.",
      tech: ["Django", "Firebase", "Google Maps", "HTML/CSS"],
      gradient: "from-accent/20 to-primary/20",
      icon: "🛍️"
    },
    {
      title: "RecycleMate",
      description: "Eco-friendly AI app with image recognition for waste identification, local recycling information, sustainability tips, and personalized daily advice for environmental impact.",
      tech: ["React Native", "AI Vision", "Firebase", "Gemini API"],
      gradient: "from-primary/20 to-accent/20",
      icon: "♻️"
    },
    {
      title: "SYSTA SYSTA",
      description: "Sleek black and white fashion e-commerce website with modern minimalist design, showcasing clothing collections with elegant product displays.",
      tech: ["React", "CSS", "Responsive Design"],
      gradient: "from-secondary/20 to-primary/20",
      icon: "👔"
    },
    {
      title: "Amanabi Stock Tracker",
      description: "Financial dashboard for real-time stock monitoring and analysis. Hosted on GitHub Pages with interactive charts and market insights.",
      tech: ["React", "Vite", "Chart.js", "GitHub Pages"],
      gradient: "from-accent/20 to-secondary/20",
      icon: "📈"
    },
    {
      title: "Java Sales Analyzer",
      description: "Business intelligence tool comparing Shop A and Shop B sales performance with monthly and quarterly analytics using advanced data structures.",
      tech: ["Java", "Data Analysis", "Algorithms"],
      gradient: "from-primary/20 to-secondary/20",
      icon: "💼"
    },
    {
      title: "Assembly Number Game",
      description: "Advanced number guessing game with multiple difficulty levels, intelligent feedback system, and replay functionality. Built in x86-64 Assembly.",
      tech: ["Assembly x86-64", "System Programming"],
      gradient: "from-secondary/20 to-accent/20",
      icon: "🎮"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my best work showcasing full-stack development, AI integration, and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${project.gradient} p-6 rounded-lg glow-border hover-scale h-full flex flex-col`}>
                <div className="text-5xl mb-4">{project.icon}</div>
                
                <h3 className="text-2xl font-orbitron font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-orbitron bg-primary/10 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
