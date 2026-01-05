import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Eye, GraduationCap, Briefcase, Code, Award, ChevronRight } from "lucide-react";

const Resume = () => {
  const education = [
    {
      period: "2023 - Present",
      title: "BSc Computer Science",
      institution: "KNUST, Ghana",
      description: "Focusing on software engineering, AI/ML, and system design.",
      link: "/education/knust"
    }
  ];

  const experience = [
    {
      period: "2024",
      title: "Sales Associate",
      company: "Biscovs",
      description: "First professional role — learning responsibility, communication, and work ethic.",
      link: "/experience/biscovs"
    },
    {
      period: "2025 - Present",
      title: "Software Developer",
      company: "ECL",
      description: "Building full-stack solutions with React, Django, and AI integration.",
      link: "/experience/ecl"
    }
  ];

  const skills = [
    { name: "React / React Native", level: 90 },
    { name: "Python / Django", level: 85 },
    { name: "JavaScript / TypeScript", level: 88 },
    { name: "Firebase / Supabase", level: 82 },
    { name: "AI / Machine Learning", level: 75 },
    { name: "Java", level: 80 },
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden bg-card/50">
      <div className="absolute inset-0 grid-background opacity-15" />
      
      <div className="container mx-auto px-4 md:pl-24 lg:pl-32 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold">
            <span className="gradient-text">RESUME</span>
          </h2>
          <div className="flex-1 h-[2px] bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Education & Experience */}
          <div className="space-y-10">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-orbitron font-semibold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((item, index) => (
                  <Link key={index} to={item.link}>
                    <motion.div 
                      className="pro-card p-5 border-l-4 border-l-primary cursor-pointer group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-xs text-primary font-orbitron mb-2 block">{item.period}</span>
                          <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-xl font-orbitron font-semibold text-foreground">Experience</h3>
              </div>
              
              <div className="space-y-4">
                {experience.map((item, index) => (
                  <Link key={index} to={item.link}>
                    <motion.div 
                      className="pro-card p-5 border-l-4 border-l-secondary cursor-pointer group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-xs text-secondary font-orbitron mb-2 block">{item.period}</span>
                          <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills & Download */}
          <div className="space-y-10">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-orbitron font-semibold text-foreground">Skills</h3>
              </div>
              
              <div className="pro-card p-6 space-y-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-orbitron">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pro-card p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-orbitron font-semibold text-foreground mb-2">
                Download My Resume
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                Get a detailed overview of my skills, experience, and achievements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/SCAM_Resume.pdf" download="Seth_Charles_Agyei_Mensah_Resume.pdf">
                  <Button className="w-full sm:w-auto font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </a>
                <a href="/SETH_CHARLES_AGYEI_MENSAH_Resume.docx" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto font-orbitron border-primary/30 hover:border-primary hover:bg-primary/10">
                    <Eye className="w-4 h-4 mr-2" />
                    View DOCX
                  </Button>
                </a>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Available for Full-Time • ATS Friendly
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
