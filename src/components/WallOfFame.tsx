import { motion, AnimatePresence } from "framer-motion";
import { Award, Download, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
  image?: string;
  downloadUrl?: string;
}

const certificates: Certificate[] = [
  {
    title: "Full-Stack Web Development",
    issuer: "Coursera / Meta",
    year: "2025",
    description: "Comprehensive certification covering React, Node.js, databases, and deployment.",
  },
  {
    title: "Python for Data Science & AI",
    issuer: "IBM / Coursera",
    year: "2025",
    description: "Mastery of Python programming for data analysis and machine learning applications.",
  },
  {
    title: "Mobile App Development",
    issuer: "Google / Udacity",
    year: "2025",
    description: "Building cross-platform mobile applications with React Native and Flutter.",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    description: "Foundational understanding of AWS Cloud services, architecture, and security.",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google / Coursera",
    year: "2025",
    description: "User-centered design principles, wireframing, prototyping, and usability testing.",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2024",
    description: "Advanced problem-solving with JavaScript including recursion, sorting, and graph algorithms.",
  },
];

const WallOfFame = () => {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Award className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-orbitron font-semibold text-foreground">Wall of Fame</h3>
        <span className="text-xs text-muted-foreground font-orbitron ml-2">3rd Year Achievements</span>
      </div>

      {/* Wall grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 8px 30px hsl(var(--primary) / 0.2)" }}
            onClick={() => setSelected(cert)}
            className="relative cursor-pointer group"
          >
            {/* Certificate frame */}
            <div className="bg-card border-2 border-border group-hover:border-primary/50 rounded-lg p-4 transition-all duration-300 h-full flex flex-col">
              {/* Decorative top border like a plaque */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/40 rounded-b group-hover:bg-primary transition-colors" />
              
              {/* Certificate icon */}
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award className="w-5 h-5 text-primary" />
              </div>

              <h4 className="text-xs md:text-sm font-semibold text-foreground text-center leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {cert.title}
              </h4>
              <p className="text-[10px] md:text-xs text-muted-foreground text-center">{cert.issuer}</p>
              <p className="text-[10px] text-primary/60 font-orbitron text-center mt-auto pt-2">{cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotateX: -10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full"
            >
              {/* Certificate display */}
              <div className="bg-card border-2 border-primary/30 rounded-xl overflow-hidden shadow-2xl">
                {/* Ornamental header */}
                <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-6 text-center border-b border-primary/20">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xs text-primary font-orbitron tracking-[0.3em] uppercase mb-1">Certificate of Achievement</p>
                  <h3 className="text-xl font-orbitron font-bold text-foreground">{selected.title}</h3>
                </div>

                <div className="p-6 text-center space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Issued by</p>
                    <p className="text-lg font-semibold text-foreground">{selected.issuer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="text-foreground font-orbitron">{selected.year}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>

                  <div className="flex gap-3 justify-center pt-2">
                    {selected.downloadUrl && (
                      <a href={selected.downloadUrl} download>
                        <Button size="sm" className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </a>
                    )}
                    <Button size="sm" variant="outline" onClick={() => setSelected(null)} className="font-orbitron border-border hover:border-primary">
                      <X className="w-4 h-4 mr-2" />
                      Close
                    </Button>
                  </div>
                </div>

                {/* Decorative footer */}
                <div className="h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WallOfFame;
