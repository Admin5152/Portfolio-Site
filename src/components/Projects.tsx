import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "ALL" },
    { id: "web", label: "WEB DESIGN" },
    { id: "mobile", label: "MOBILE" },
    { id: "ai", label: "AI/ML" },
  ];

  const projects = [
    {
      title: "Tracker App",
      description: "Real-time family and friends tracking application with live location sharing and weather notifications.",
      tech: ["React Native", "Firebase", "Google Maps API"],
      category: "mobile",
      icon: "🗺️",
      image: "/placeholder.svg",
      view: "https://www.linkedin.com/posts/sethcharlesagyeimensah5152_reactnative-mobiledevelopment-innovation-ugcPost-7390686995758387200-2dLk",
      code: "https://github.com/Admin5152/TRACKER-78.git"
    },
    {
      title: "JARVIS Chatbot",
      description: "AI assistant inspired by Tony Stark's JARVIS with futuristic interface, powered by Google Gemini.",
      tech: ["React Native", "Google Gemini API", "Expo"],
      category: "ai",
      icon: "🤖",
      image: "/placeholder.svg",
      view: "#",
      code: "#"
    },
    {
      title: "Hermes Store",
      description: "Full-featured e-commerce platform with cart, checkout, Firebase auth, and dark mode.",
      tech: ["Django", "Firebase", "Google Maps"],
      category: "web",
      icon: "🛍️",
      image: "/placeholder.svg",
      view: "#",
      code: "#"
    },
    {
      title: "RecycleMate",
      description: "Eco-friendly AI app with image recognition for waste sorting and sustainability tips.",
      tech: ["React Native", "AI Vision", "Gemini API"],
      category: "ai",
      icon: "♻️",
      image: "/placeholder.svg",
      view: "https://admin5152.github.io/Recycling-guide-website./",
      code: "https://github.com/Admin5152/Recruitment-System.git"
    },
    {
      title: "SYSTA SYSTA",
      description: "Minimalist black and white fashion e-commerce website showcasing clothing collections.",
      tech: ["React", "CSS", "Responsive Design"],
      category: "web",
      icon: "👔",
      image: "/placeholder.svg",
      view: "https://admin5152.github.io/systa-style-shop/",
      code: "https://github.com/Admin5152/systa-style-shop.git"
    },
    {
      title: "Amanabi Stock Tracker",
      description: "Financial dashboard for real-time stock analysis with interactive charts.",
      tech: ["React", "Vite", "Chart.js"],
      category: "web",
      icon: "📈",
      image: "/placeholder.svg",
      view: "https://admin5152.github.io/amanabi-stock-tracker/",
      code: "https://github.com/Admin5152/amanabi-stock-tracker"
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container mx-auto px-4 md:pl-24 lg:pl-32 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold">
            <span className="gradient-text">PORTFOLIO</span>
          </h2>
          <div className="flex-1 h-[2px] bg-border" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-orbitron text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="group"
            >
              <div className="pro-card overflow-hidden hover-scale">
                {/* Project Image/Icon Area */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl">{project.icon}</span>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.view} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-orbitron font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-muted text-foreground rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
