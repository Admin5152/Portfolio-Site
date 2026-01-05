import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Users, TrendingUp, MessageSquare, Clock, Award, Heart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExperienceBiscovs = () => {
  const lessons = [
    {
      icon: Users,
      title: "Customer Relations",
      description: "Learning to read people, understand needs, and provide solutions that actually help."
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Clear, professional communication became second nature — essential in any career."
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Balancing work with university taught me discipline and prioritization."
    },
    {
      icon: TrendingUp,
      title: "Sales Psychology",
      description: "Understanding what drives decisions and how to present value effectively."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Every customer issue was a puzzle to solve — creative thinking became routine."
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Showing up, being reliable, and maintaining standards no matter the circumstances."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
        
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Briefcase className="w-5 h-5 text-secondary" />
              <span className="text-sm font-orbitron text-secondary">2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              Sales Associate at <span className="gradient-text">Biscovs</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My first professional role — where I learned that soft skills are just as important as technical ones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pro-card p-8 mb-12"
            >
              <h2 className="text-2xl font-orbitron font-semibold text-foreground mb-6">The Beginning</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2024, I took my first step into the professional world as a Sales Associate at Biscovs.
                  It wasn't a tech job, but it was exactly what I needed at that point in my journey.
                </p>
                <p>
                  Walking into work on my first day, I was nervous. Would I be good enough? Could I balance this 
                  with my studies? These questions quickly faded as I immersed myself in the role.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="my-8 rounded-lg overflow-hidden border border-border bg-muted/30 aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <Briefcase className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Photo from Biscovs coming soon</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pro-card p-8 mb-12"
            >
              <h2 className="text-2xl font-orbitron font-semibold text-foreground mb-6">What I Learned</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  This role taught me that every job, regardless of the field, has valuable lessons. 
                  As a developer, understanding how businesses operate, how customers think, and how to 
                  communicate effectively has been invaluable.
                </p>
                <p>
                  I learned responsibility — showing up on time, being accountable for my tasks, and 
                  representing the company professionally. These are skills that directly translate to 
                  any software development role.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="py-16 relative bg-card/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-center mb-12"
          >
            Key <span className="gradient-text">Lessons</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {lessons.map((lesson, index) => {
              const Icon = lesson.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pro-card p-6 hover-scale"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lesson.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center pro-card p-8 md:p-12"
          >
            <Heart className="w-10 h-10 text-secondary mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-orbitron text-foreground mb-4">
              "My time at Biscovs shaped who I am professionally. Every interaction was a lesson in human connection."
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

export default ExperienceBiscovs;
