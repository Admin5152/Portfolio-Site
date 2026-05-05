import { motion, AnimatePresence } from "framer-motion";
import { Award, Download, X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { certificates, Certificate } from "@/components/WallOfFame";

const WallOfFamePage = () => {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Back button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/#resume">
            <Button variant="ghost" className="mb-8 font-orbitron text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold">
              <span className="gradient-text">WALL OF FAME</span>
            </h1>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Certificates and achievements earned during my 3rd year at KNUST — a testament to continuous learning and growth.
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: index * 0.06, type: "spring", stiffness: 200 }}
              whileHover={{
                scale: 1.06,
                y: -8,
                boxShadow: "0 12px 40px hsl(var(--primary) / 0.25)",
              }}
              onClick={() => setSelected(cert)}
              className="relative cursor-pointer group"
            >
              <div className="bg-card border-2 border-border group-hover:border-primary/50 rounded-xl p-5 transition-all duration-300 h-full flex flex-col items-center min-h-[180px]">
                {/* Plaque accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-primary/40 rounded-b group-hover:bg-primary transition-colors" />

                {cert.imageUrl ? (
                  <img src={cert.imageUrl} alt={cert.title} className="w-full h-24 object-cover rounded-lg mb-3" />
                ) : (
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                )}

                <h4 className="text-sm font-semibold text-foreground text-center leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted-foreground text-center">{cert.issuer}</p>
                <p className="text-xs text-primary/60 font-orbitron text-center mt-auto pt-3">{cert.year}</p>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
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
              <div className="bg-card border-2 border-primary/30 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-6 text-center border-b border-primary/20">
                  {selected.imageUrl ? (
                    <img src={selected.imageUrl} alt={selected.title} className="w-full max-h-48 object-contain rounded-lg mx-auto mb-3" />
                  ) : (
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                  )}
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
                <div className="h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WallOfFamePage;
