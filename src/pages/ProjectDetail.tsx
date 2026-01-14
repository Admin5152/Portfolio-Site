import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Lightbulb, Target, Wrench, ImageIcon, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

// Project data with full details
export const projectsData = [
  {
    slug: "tracker-78",
    title: "Tracker 78",
    icon: "🗺️",
    description: "Real-time family and friends tracking application with live location sharing and weather notifications.",
    fullDescription: "Tracker 78 is a comprehensive location tracking application designed to help families and friends stay connected. The app provides real-time location sharing, geofencing alerts, and weather-based notifications to ensure everyone's safety and awareness.",
    ideaOrigin: "The idea came from the need to stay connected with family members, especially during travel or when living in different cities. I wanted to create a solution that would give peace of mind to parents and loved ones by allowing them to see each other's locations in real-time.",
    purpose: "To provide a secure and easy-to-use platform for families and friends to share their locations, set up safety zones, and receive weather-related alerts for their loved ones' locations.",
    timePeriod: "January 2024 - March 2024",
    tech: ["React Native", "Firebase", "Google Maps API", "Expo", "Real-time Database"],
    category: "mobile",
    liveUrl: "https://www.linkedin.com/posts/sethcharlesagyeimensah5152_reactnative-mobiledevelopment-innovation-ugcPost-7390686995758387200-2dLk",
    githubUrl: "https://github.com/Admin5152/TRACKER-78.git",
    images: [] as string[], // Add your images here
  },
  {
    slug: "jarvis-chatbot",
    title: "JARVIS Chatbot",
    icon: "🤖",
    description: "AI assistant inspired by Tony Stark's JARVIS with futuristic interface, powered by Google Gemini.",
    fullDescription: "JARVIS is an AI-powered chatbot that brings the iconic assistant from Iron Man to life. Featuring a sleek, futuristic interface with glowing animations and voice interactions, JARVIS can answer questions, provide information, and assist with daily tasks.",
    ideaOrigin: "As a huge Marvel fan, I was always fascinated by Tony Stark's AI assistant JARVIS. I wanted to recreate that experience using modern AI technology, combining Google's Gemini API with a visually stunning interface that matches the Iron Man aesthetic.",
    purpose: "To create an immersive AI assistant experience that combines cutting-edge language models with a visually captivating interface, making AI interactions feel more personal and engaging.",
    timePeriod: "February 2024 - April 2024",
    tech: ["React Native", "Google Gemini API", "Expo", "Speech Recognition", "Text-to-Speech"],
    category: "ai",
    liveUrl: null,
    githubUrl: null,
    images: [] as string[],
  },
  {
    slug: "hermes-store",
    title: "Hermes Store",
    icon: "🛍️",
    description: "Full-featured e-commerce platform with cart, checkout, Firebase auth, and dark mode.",
    fullDescription: "Hermes Store is a complete e-commerce solution built with Django and Firebase. It features a beautiful product catalog, shopping cart functionality, secure checkout process, user authentication, and a fully responsive design with dark mode support.",
    ideaOrigin: "I wanted to challenge myself by building a full-stack e-commerce platform from scratch. The name 'Hermes' was chosen after the Greek god of commerce and trade, symbolizing the app's purpose as a marketplace.",
    purpose: "To demonstrate full-stack development capabilities by creating a production-ready e-commerce platform with all essential features including authentication, product management, cart functionality, and order processing.",
    timePeriod: "September 2023 - December 2023",
    tech: ["Django", "Firebase", "Google Maps", "PostgreSQL", "Bootstrap", "Stripe"],
    category: "web",
    liveUrl: null,
    githubUrl: null,
    images: [] as string[],
  },
  {
    slug: "recyclemate",
    title: "RecycleMate",
    icon: "♻️",
    description: "Eco-friendly AI app with image recognition for waste sorting and sustainability tips.",
    fullDescription: "RecycleMate is an environmentally conscious mobile application that uses AI-powered image recognition to help users properly sort their waste. Simply take a photo of an item, and the app will identify it and tell you which bin it belongs in, along with sustainability tips.",
    ideaOrigin: "During a community cleanup event, I noticed many people were unsure about how to properly sort recyclables from trash. This inspired me to create an app that could educate and assist people in making better recycling decisions using AI.",
    purpose: "To promote environmental sustainability by making recycling easier and more accessible through AI technology, ultimately reducing contamination in recycling streams and educating users about eco-friendly practices.",
    timePeriod: "March 2024 - May 2024",
    tech: ["React Native", "AI Vision", "Gemini API", "TensorFlow Lite", "Expo"],
    category: "ai",
    liveUrl: "https://admin5152.github.io/Recycling-guide-website./",
    githubUrl: "https://github.com/Admin5152/Recruitment-System.git",
    images: [] as string[],
  },
  {
    slug: "systa-systa",
    title: "SYSTA SYSTA",
    icon: "👔",
    description: "Minimalist black and white fashion e-commerce website showcasing clothing collections.",
    fullDescription: "SYSTA SYSTA is a minimalist fashion e-commerce website featuring a striking black and white aesthetic. The site showcases clothing collections with an emphasis on clean design, smooth animations, and an intuitive shopping experience.",
    ideaOrigin: "Inspired by high-end fashion brands like Maison Margiela and COS, I wanted to create a fashion website that prioritized visual impact and simplicity. The monochromatic design puts the focus on the clothing itself.",
    purpose: "To create a visually stunning fashion e-commerce experience that demonstrates advanced CSS techniques, responsive design principles, and modern web development practices while maintaining a unique brand identity.",
    timePeriod: "November 2023 - January 2024",
    tech: ["React", "CSS", "Responsive Design", "Framer Motion", "Vite"],
    category: "web",
    liveUrl: "https://admin5152.github.io/systa-style-shop/",
    githubUrl: "https://github.com/Admin5152/systa-style-shop.git",
    images: [] as string[],
  },
  {
    slug: "amanabi-stock-tracker",
    title: "Amanabi Stock Tracker",
    icon: "📈",
    description: "Financial dashboard for real-time stock analysis with interactive charts.",
    fullDescription: "Amanabi Stock Tracker is a comprehensive financial dashboard that provides real-time stock market data, interactive charts, portfolio tracking, and market analysis tools. Users can track their investments, set price alerts, and visualize market trends.",
    ideaOrigin: "As I started learning about personal finance and investing, I found existing stock tracking apps either too complex or lacking key features. I decided to build my own solution that strikes the perfect balance between functionality and usability.",
    purpose: "To provide individual investors with a powerful yet user-friendly tool for tracking stocks, analyzing market trends, and making informed investment decisions through beautiful data visualizations.",
    timePeriod: "April 2024 - June 2024",
    tech: ["React", "Vite", "Chart.js", "Financial APIs", "TailwindCSS"],
    category: "web",
    liveUrl: "https://admin5152.github.io/amanabi-stock-tracker/",
    githubUrl: "https://github.com/Admin5152/amanabi-stock-tracker",
    images: [] as string[],
  }
];

// Animation variants for smoother transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
} as const;

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-background"
      >
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="fixed top-6 left-6 z-50"
        >
          <Link to="/#projects">
            <Button variant="outline" size="sm" className="gap-2 backdrop-blur-sm bg-background/80 hover:bg-background">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-20" />
          
          {/* Animated background glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span
                variants={itemVariants}
                className="text-8xl mb-6 block filter drop-shadow-lg"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
              >
                {project.icon}
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-orbitron font-bold mb-4"
              >
                <span className="gradient-text">{project.title}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground mb-8"
              >
                {project.description}
              </motion.p>
              
              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-4 flex-wrap"
              >
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Live Site
                    </Button>
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="gap-2">
                      <Github className="w-4 h-4" />
                      View Source Code
                    </Button>
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="max-w-4xl mx-auto grid gap-8"
            >
              {/* Full Description */}
              <motion.div
                variants={itemVariants}
                className="pro-card p-6 hover:border-primary/50 transition-colors duration-300"
              >
                <h2 className="text-xl font-orbitron font-bold text-foreground mb-4">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
              </motion.div>

              {/* Project Gallery Section */}
              <motion.div
                variants={itemVariants}
                className="pro-card p-6 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-orbitron font-bold text-foreground">Project Gallery</h3>
                </div>
                
                {project.images && project.images.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-video rounded-lg overflow-hidden border border-border"
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-lg border-2 border-dashed border-border bg-muted/30 flex flex-col items-center justify-center gap-2"
                      >
                        <ImageIcon className="w-8 h-8 text-muted-foreground/50" />
                        <span className="text-xs text-muted-foreground">Coming Soon</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {/* Info Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Idea Origin */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="pro-card p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-orbitron font-bold text-foreground">How It Started</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.ideaOrigin}</p>
                </motion.div>

                {/* Purpose */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="pro-card p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-orbitron font-bold text-foreground">Purpose</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.purpose}</p>
                </motion.div>

                {/* Time Period */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="pro-card p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-orbitron font-bold text-foreground">Timeline</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.timePeriod}</p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="pro-card p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-orbitron font-bold text-foreground">Tech Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs bg-muted text-foreground rounded-full border border-border hover:border-primary/50 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's create something amazing for your next project.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/#contact">
                  <Button size="lg" className="gap-2">
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;
