import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Cpu, Brain, MessageSquare, Image, Sparkles, Bot, Wand2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceAI = () => {
  const capabilities = [
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants powered by large language models."
    },
    {
      icon: Image,
      title: "Image Recognition",
      description: "Computer vision solutions for object detection, classification, and analysis."
    },
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment detection, and language understanding features."
    },
    {
      icon: Wand2,
      title: "AI-Powered Automation",
      description: "Smart workflows that learn and adapt to improve efficiency over time."
    }
  ];

  const tools = [
    "Google Gemini", "OpenAI API", "TensorFlow", "Python", 
    "LangChain", "Hugging Face", "scikit-learn"
  ];

  const applications = [
    {
      title: "AI-Powered Study Tools",
      context: "School Projects",
      description: "Smart flashcard generators and quiz systems that adapt to learning patterns."
    },
    {
      title: "Intelligent Data Analysis",
      context: "Work",
      description: "Automated report generation and insights extraction from business data."
    },
    {
      title: "Content Generation",
      context: "Freelance",
      description: "AI assistants that help create, edit, and optimize content."
    },
    {
      title: "Predictive Features",
      context: "Personal Apps",
      description: "Machine learning models for habit prediction and goal recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5" />
        
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Cpu className="w-5 h-5 text-primary" />
              <span className="text-sm font-orbitron text-primary">Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="gradient-text">AI Integration</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Adding artificial intelligence capabilities to applications, making them smarter and more powerful.
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
                  I integrate AI capabilities into web and mobile applications, transforming standard 
                  software into intelligent systems. Whether it's adding a conversational interface, 
                  implementing smart recommendations, or automating complex tasks, I bring the power 
                  of AI to everyday applications.
                </p>
                <p>
                  My approach is practical — I focus on AI solutions that provide real value, not just 
                  buzzwords. Every AI feature I implement is designed to solve a specific problem or 
                  enhance user experience in a meaningful way.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="my-8 rounded-lg overflow-hidden border border-border bg-muted/30 aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <Bot className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">AI demo coming soon</p>
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
            AI <span className="gradient-text">Capabilities</span>
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
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

      {/* Tools */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-center mb-12"
          >
            Tools & <span className="gradient-text">Technologies</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm"
              >
                {tool}
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

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="pro-card p-6 hover-scale"
              >
                <span className="text-xs font-orbitron text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {app.context}
                </span>
                <h3 className="text-lg font-orbitron font-semibold text-foreground mt-4 mb-2">
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

      {/* Future Vision */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center pro-card p-8 md:p-12"
          >
            <Lightbulb className="w-10 h-10 text-primary mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-orbitron text-foreground mb-4">
              "AI isn't about replacing humans — it's about augmenting our capabilities and solving problems we couldn't before."
            </blockquote>
            <p className="text-muted-foreground">— Seth Charles Agyei Mensah</p>
          </motion.div>
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

export default ServiceAI;
