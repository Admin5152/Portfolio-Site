import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 clip-corner" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 clip-corner-bl" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container mx-auto px-4 md:pl-24 lg:pl-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Greeting Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-primary font-orbitron text-lg tracking-widest uppercase">
                HI THERE!
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4">
              <span className="text-foreground">I'M </span>
              <span className="gradient-text">SETH CHARLES</span>
            </h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                FULL-STACK DEVELOPER / AI ENTHUSIAST
              </p>
              <p className="text-primary font-orbitron text-sm mt-2">
                READY TO BUILD YOUR NEXT PROJECT
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Computer Science student at KNUST, passionate about creating innovative 
              solutions that merge cutting-edge technology with exceptional user experiences. 
              Specializing in AI integration, mobile development, and web solutions.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                size="lg"
                className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground group"
                onClick={() => scrollToSection("about")}
              >
                MORE ABOUT ME
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/Admin5152"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sethagyeimensah5152"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sethagyeimensah2@gmail.com"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Circle Border */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
              
              {/* Main Circle with Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Primary colored arc */}
                <div className="absolute inset-0 rounded-full border-8 border-primary/20" />
                <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-primary border-r-primary rotate-45" />
                
                {/* Image Container */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-card">
                  <img
                    src="/me2.jpg"
                    alt="Seth Charles Agyei Mensah"
                    className="w-full h-full object-cover object-[15%_15%]"
                  />
                </div>

                {/* Decorative Arrow */}
                <motion.div
                  className="absolute -right-8 top-1/4 text-primary"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M5 20 L30 20 M20 10 L30 20 L20 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>

              {/* Small decorative circles */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
