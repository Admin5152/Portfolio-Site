import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "SQL", level: 82 },
        { name: "Assembly x86-64", level: 75 },
        { name: "VB.NET", level: 70 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React Native", level: 90 },
        { name: "Django", level: 85 },
        { name: "React", level: 87 },
        { name: "Expo", level: 88 },
        { name: "Spring Boot", level: 70 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Firebase", level: 88 },
        { name: "Appwrite", level: 82 },
        { name: "Git/GitHub", level: 90 },
        { name: "Google Maps API", level: 85 },
        { name: "AI APIs (Gemini)", level: 87 },
        { name: "Vite", level: 85 }
      ]
    },
    {
      category: "Concepts",
      skills: [
        { name: "Full-Stack Development", level: 88 },
        { name: "AI Integration", level: 85 },
        { name: "Database Design", level: 82 },
        { name: "Mobile Development", level: 90 },
        { name: "API Development", level: 86 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            My technology stack and expertise levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card p-6 rounded-lg glow-border"
            >
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-orbitron">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
                      >
                        <motion.div
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            { label: "Projects", value: "15+" },
            { label: "Technologies", value: "20+" },
            { label: "Years Coding", value: "3+" },
            { label: "Coffee Cups", value: "∞" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-card p-6 rounded-lg glow-border hover-scale"
            >
              <div className="text-4xl font-orbitron font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
