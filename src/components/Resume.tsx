import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye, Award, Code, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const highlights = [
    {
      icon: GraduationCap,
      label: "BSc Computer Science",
      value: "KNUST"
    },
    {
      icon: Code,
      label: "Projects Completed",
      value: "15+"
    },
    {
      icon: Briefcase,
      label: "Tech Stack",
      value: "20+"
    },
    {
      icon: Award,
      label: "Years Experience",
      value: "3+"
    }
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground text-lg mb-12">
            Full-stack developer specializing in AI integration, mobile development, and scalable solutions
          </p>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="pro-card p-6 hover-scale"
              >
                <highlight.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-orbitron font-bold text-foreground mb-1">
                  {highlight.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {highlight.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pro-card p-8 md:p-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-full bg-primary/10 border border-primary/20 hover-scale">
                <FileText className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
              Seth Charles Agyei Mensah
            </h3>
            
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Computer Science Student at KNUST</strong> with proven expertise in 
                full-stack development, AI integration, and mobile applications. Demonstrated track record of delivering 
                15+ production-ready projects using modern technologies including React Native, Django, Firebase, and AI APIs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 text-left text-sm">
                <div className="space-y-2">
                  <h4 className="font-orbitron text-primary font-semibold mb-3">Core Competencies:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>✓ Full-Stack Web & Mobile Development</li>
                    <li>✓ AI/ML Integration (Google Gemini API)</li>
                    <li>✓ Real-time Location & Mapping Systems</li>
                    <li>✓ E-commerce Platform Development</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-orbitron text-primary font-semibold mb-3">Technical Proficiency:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>✓ React Native, Django, Spring Boot</li>
                    <li>✓ Firebase, Appwrite, PostgreSQL</li>
                    <li>✓ Java, Python, JavaScript, Assembly</li>
                    <li>✓ Git, GitHub, Agile Development</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/SCAM_Resume.pdf" download="SCAM_Resume.pdf">
                <Button
                  size="lg"
                  className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground min-w-[200px]"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
              
              <a href="/SCAM_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-orbitron border-primary/30 hover:border-primary hover:bg-primary/10 min-w-[200px]"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Available for Full-Time Opportunities • Immediate Start
              </p>
              <p className="text-xs text-muted-foreground">
                PDF Format • Last Updated November 2025 • ATS-Friendly
              </p>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              KNUST Student
            </span>
            <span className="flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              15+ Portfolio Projects
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Open to Opportunities
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
