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
          
          <div className="pro-card p-8 md:p-12 hover-scale">
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-full bg-primary/10 border border-primary/20">
                <FileText className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-orbitron font-bold mb-3 text-foreground">
              Professional Resume
            </h3>
            
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed max-w-xl mx-auto">
              Comprehensive overview of education, technical expertise, project portfolio, and professional experience. 
              Available for immediate download in PDF format.
            </p>
            
            <a href="/SCAM_Resume.pdf" download="SCAM_Resume.pdf">
              <Button
                size="lg"
                className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </a>
            
            <p className="text-xs text-muted-foreground mt-6 uppercase tracking-wider">
              PDF Format • Updated 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
