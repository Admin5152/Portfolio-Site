import { motion, AnimatePresence } from "framer-motion";
import { Award, Download, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
  imageUrl?: string;
  downloadUrl?: string;
}

export const certificates: Certificate[] = [
  {
    title: "AI 150: Fundamentals of Responsible AI for All",
    issuer: "KNUST AI Courses Coordinating Office",
    year: "2026",
    description: "Completed the AI 150 Fundamentals of Responsible Artificial Intelligence (AI) for All course, awarded January 28, 2026.",
    imageUrl: "/certificates/ai-150-knust.png",
    downloadUrl: "/certificates/CERTIFICATE_OF_COMPLETION.pdf",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2026",
    description: "Successfully satisfied the requirements for Cloud Computing Fundamentals, issued January 30, 2026 by IBM SkillsBuild.",
    imageUrl: "/certificates/cloud-computing-ibm.png",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2026",
    description: "Successfully satisfied the requirements for Cybersecurity Fundamentals, issued February 3, 2026 by IBM SkillsBuild.",
    imageUrl: "/certificates/cybersecurity-ibm.png",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google / Coursera",
    year: "2025",
    description: "An online non-credit course authorized by Google and offered through Coursera, completed December 24, 2025.",
    imageUrl: "/certificates/foundations-cybersecurity-google.png",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google / Coursera",
    year: "2025",
    description: "An online non-credit course authorized by Google and offered through Coursera, completed December 26, 2025.",
    imageUrl: "/certificates/play-it-safe-google.png",
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google / Coursera",
    year: "2025",
    description: "An online non-credit course authorized by Google and offered through Coursera, completed December 31, 2025.",
    imageUrl: "/certificates/connect-protect-google.png",
  },
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

/** Summary version shown on the home page (first 3 certs + "View All" button) */
const WallOfFame = () => {
  const preview = certificates.slice(0, 3);

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

      <div className="grid grid-cols-3 gap-3">
        {preview.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="relative group"
          >
            <div className="bg-card border-2 border-border group-hover:border-primary/50 rounded-lg p-4 transition-all duration-300 h-full flex flex-col items-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/40 rounded-b group-hover:bg-primary transition-colors" />
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

      <div className="mt-6 text-center">
        <Link to="/wall-of-fame">
          <Button variant="outline" className="font-orbitron border-primary/30 hover:border-primary hover:bg-primary/10">
            View All Certificates
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default WallOfFame;
