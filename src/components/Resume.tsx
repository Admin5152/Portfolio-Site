import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          
          <div className="bg-card p-8 md:p-12 rounded-lg glow-border hover-scale">
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-full bg-primary/10 animate-glow-pulse">
                <FileText className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
              Seth Charles Agyei Mensah
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Download my complete resume to learn more about my education, experience, 
              technical skills, and projects. Get insights into my journey as a Computer Science 
              student and developer.
            </p>
            
            <a href="/SCAM_Resume.pdf" download="SCAM_Resume.pdf">
              <Button
                size="lg"
                className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground glow-border hover-scale"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
            
            <p className="text-sm text-muted-foreground mt-6">
              PDF Format • Last Updated 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
