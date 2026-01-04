import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Cpu, Users, Coffee, Award, Briefcase } from "lucide-react";

const About = () => {
  const whatIDo = [
    { icon: Globe, label: "WEB DESIGN" },
    { icon: Code2, label: "DEVELOPMENT" },
    { icon: Smartphone, label: "MOBILE APPS" },
    { icon: Cpu, label: "AI INTEGRATION" },
  ];

  const funFacts = [
    { value: "15+", label: "PROJECTS DONE", icon: Briefcase },
    { value: "450+", label: "COMMITS", icon: Code2 },
    { value: "65", label: "REPOS", icon: Award },
    { value: "3+", label: "YEARS EXP", icon: Coffee },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-background opacity-20" />
      
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
            ABOUT <span className="gradient-text">ME</span>
          </h2>
          <div className="flex-1 h-[2px] bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image & What I Do */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Section */}
            <div className="flex gap-6 items-start">
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary">
                  <img
                    src="/me.jpg"
                    alt="Seth Charles"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full border-2 border-background" />
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-orbitron font-bold mb-2">
                  I'm <span className="text-primary">Seth Charles Agyei Mensah</span>,
                </h3>
                <p className="text-muted-foreground">
                  Full-Stack Developer / AI Enthusiast
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Computer Science student at <span className="text-primary font-semibold">Kwame Nkrumah University of Science and Technology (KNUST)</span>, 
                dedicated to creating innovative solutions that merge technology with creativity.
              </p>
              <p>
                My expertise spans across <span className="text-secondary font-semibold">Java, Python, React Native, Django, Firebase,</span> and 
                <span className="text-accent font-semibold"> AI integration</span>. I specialize in building intuitive mobile apps, 
                robust web applications, and intelligent systems.
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h4 className="text-lg font-orbitron font-semibold mb-4 text-foreground">What I Do?</h4>
              <div className="grid grid-cols-2 gap-3">
                {whatIDo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="pro-card p-4 flex items-center gap-3 hover-scale cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-lg font-orbitron font-semibold mb-6 text-foreground">Fun Facts</h4>
              <div className="grid grid-cols-2 gap-4">
                {funFacts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="pro-card p-6 text-center hover-scale"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-3xl font-orbitron font-bold text-primary mb-1">
                        {fact.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {fact.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pro-card p-6"
            >
              <h4 className="text-lg font-orbitron font-semibold mb-4 text-foreground">
                Technical Excellence
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground text-sm">Performance-optimized solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-muted-foreground text-sm">User-centric design approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground text-sm">Cutting-edge AI integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground text-sm">Scalable architecture patterns</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
