import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Palette, Layout, Monitor, Figma, Layers, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceWebDesign = () => {
  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your brand, goals, and target audience through in-depth research and consultation."
    },
    {
      step: "02",
      title: "Wireframing",
      description: "Creating structural layouts that map out the user journey and information architecture."
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Crafting beautiful, on-brand designs with attention to typography, color, and spacing."
    },
    {
      step: "04",
      title: "Prototyping",
      description: "Building interactive prototypes to test user flows and gather feedback before development."
    }
  ];

  const tools = [
    { name: "Figma", icon: Figma },
    { name: "Adobe XD", icon: Layers },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Framer Motion", icon: Sparkles },
  ];

  const applications = [
    {
      title: "Portfolio Websites",
      description: "Personal and professional portfolios that showcase skills and projects effectively."
    },
    {
      title: "Business Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive action."
    },
    {
      title: "E-commerce Interfaces",
      description: "Clean, intuitive shopping experiences that guide users to purchase."
    },
    {
      title: "Dashboard UIs",
      description: "Data-rich interfaces that present complex information in digestible formats."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
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
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-orbitron text-primary">Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="gradient-text">Web Design</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creating visually stunning, user-centric web experiences that leave lasting impressions.
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
                  I design web interfaces that blend aesthetics with functionality. Every design decision 
                  is intentional — from the color palette that evokes the right emotions to the spacing 
                  that guides the user's eye naturally.
                </p>
                <p>
                  My approach focuses on creating designs that not only look beautiful but also convert. 
                  I understand that great design serves a purpose: to communicate, engage, and inspire action.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="my-8 rounded-lg overflow-hidden border border-border bg-muted/30 aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <Monitor className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Design showcase coming soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 relative bg-card/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-center mb-12"
          >
            My <span className="gradient-text">Process</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="pro-card p-6 hover-scale text-center"
              >
                <div className="text-4xl font-orbitron font-bold text-primary/30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
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

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pro-card px-6 py-4 flex items-center gap-3 hover-scale"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{tool.name}</span>
                </motion.div>
              );
            })}
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
                <Eye className="w-8 h-8 text-primary mb-4" />
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

export default ServiceWebDesign;
