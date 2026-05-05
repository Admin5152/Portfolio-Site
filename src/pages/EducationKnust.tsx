import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Users, Smartphone, Rocket, Calendar, BookOpen, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import matriculationImg from "@/assets/knust-matriculation.jpeg";
import mobileDevImg from "@/assets/knust-mobile-dev.jpeg";
import tracker78Img from "@/assets/tracker78-cssweek.jpeg";
import studyCultImg from "@/assets/study-cult-team.jpeg";
import level300Img from "@/assets/level300-portrait.jpg";

const EducationKnust = () => {
  const timelineEvents = [
    {
      year: "2023",
      title: "Level 100 - The Beginning",
      icon: GraduationCap,
      content: `Walking through the gates of KNUST for the first time was surreal. The sprawling campus, 
      the energy of students everywhere, the weight of my laptop bag — it all felt like the start of something big.
      As a fresh Computer Science student, I was both nervous and excited. The first semester was a whirlwind of 
      adapting to university life, understanding algorithms, and learning the fundamentals that would shape my journey.`,
      highlights: ["Introduction to Programming", "Discrete Mathematics", "Finding My Rhythm"],
      image: matriculationImg,
      imageAlt: "Matriculation day at KNUST",
    },
    {
      year: "2023",
      title: "The Study Cult is Born",
      icon: Users,
      content: `One thing I noticed early on — many of us were struggling alone. So I decided to change that.
      I founded "The Study Cult" — a close-knit study group focused on collaborative learning. We'd meet after classes,
      break down complex concepts together, and push each other to excel. It wasn't just about grades; it was about
      building a support system. The Study Cult became a second family.`,
      highlights: ["Collaborative Learning", "Peer Teaching", "Building Community"],
      image: studyCultImg,
      imageAlt: "The Study Cult team",
    },
    {
      year: "2024",
      title: "Level 200 - Mobile Development Awakening",
      icon: Smartphone,
      content: `Second year hit different. The courses got harder, but so did my determination. This was when I 
      discovered my passion for mobile development. React Native opened up a whole new world. I spent countless nights
      building small apps, breaking things, fixing them, and learning from every error message. The satisfaction of
      seeing my code run on an actual phone was unmatched.`,
      highlights: ["React Native Deep Dive", "Firebase Integration", "UI/UX Fundamentals"],
      image: mobileDevImg,
      imageAlt: "Working on mobile development projects with classmates",
    },
    {
      year: "2024",
      title: "Tracker 78 - My First Real App",
      icon: Rocket,
      content: `Tracker 78 was born from a personal need — I wanted to track my habits and progress in a way that felt
      personal and motivating. It became my first complete mobile application. Building it taught me everything from
      state management to local storage, from user authentication to push notifications. It wasn't perfect, but it was
      mine. And shipping it gave me the confidence to take on bigger challenges.`,
      highlights: ["Full App Development Cycle", "User Testing", "Iterative Design"],
      image: tracker78Img,
      imageAlt: "The Tracker 78 team at CSS Week",
    },
    {
      year: "2025",
      title: "Level 300 - The Present",
      icon: Calendar,
      content: `Now in my third year, I look back at how far I've come. The nervous freshman who didn't know what a
      for-loop was has transformed into a developer building real solutions. My focus has expanded to include AI 
      integration, web development with React, and backend systems with Django. Every day brings new challenges,
      and I embrace them all.`,
      highlights: ["AI/ML Integration", "Full-Stack Development", "Leadership Roles"],
      image: level300Img,
      imageAlt: "Seth in Level 300",
    },
    {
      year: "Future",
      title: "What Lies Ahead",
      icon: BookOpen,
      content: `The future is full of possibilities. I'm working towards becoming a well-rounded software engineer
      who can build solutions that matter. Whether it's through startups, open-source contributions, or working with
      innovative companies, I'm ready for what's next. The foundation KNUST has given me is solid — now it's time
      to build something extraordinary on top of it.`,
      highlights: ["Graduation Goals", "Industry Ready", "Continuous Learning"],
      imagePlaceholder: true,
    },
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
            <Link to="/#resume">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                Back to Resume
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
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm font-orbitron text-primary">2023 - Present</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              My Journey at <span className="gradient-text">KNUST</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kwame Nkrumah University of Science and Technology — where dreams meet discipline,
              and code becomes reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Line */}
                  {index < timelineEvents.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary/50 to-primary/10" />
                  )}
                  
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 pro-card p-6 hover-scale">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-orbitron text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {event.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-orbitron font-semibold text-foreground mb-4">
                        {event.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {event.content}
                      </p>

                      {/* Image */}
                      {event.image ? (
                        <motion.div 
                          className="mb-6 rounded-lg overflow-hidden border border-border max-w-md"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img 
                            src={event.image} 
                            alt={event.imageAlt} 
                            className="w-full h-auto max-h-72 object-cover"
                          />
                        </motion.div>
                      ) : event.imagePlaceholder && (
                        <div className="mb-6 rounded-lg overflow-hidden border border-border bg-muted/30 aspect-video flex items-center justify-center">
                          <div className="text-center p-8">
                            <Code2 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground">Photo coming soon</p>
                          </div>
                        </div>
                      )}

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center pro-card p-8 md:p-12"
          >
            <Heart className="w-10 h-10 text-primary mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-orbitron text-foreground mb-4">
              "KNUST didn't just teach me to code. It taught me to think, to persevere, and to build."
            </blockquote>
            <p className="text-muted-foreground">— Seth Charles Agyei Mensah</p>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Link to="/#resume">
            <Button className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resume
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EducationKnust;
