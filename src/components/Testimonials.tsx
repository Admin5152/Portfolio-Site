import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Prof. Mensah",
      role: "CS Department, KNUST",
      image: "/placeholder.svg",
      rating: 5,
      text: "Seth demonstrates exceptional problem-solving skills and a deep understanding of software architecture. His projects consistently exceed expectations."
    },
    {
      name: "Luna Chen",
      role: "Tech Lead, StartupGH",
      image: "/placeholder.svg",
      rating: 5,
      text: "Working with Seth was a fantastic experience. He delivered a robust mobile app that perfectly met our requirements and timeline."
    },
    {
      name: "Marcus Adjei",
      role: "Freelance Client",
      image: "/placeholder.svg",
      rating: 5,
      text: "The e-commerce platform Seth built for us increased our sales by 40%. His attention to detail and user experience is remarkable."
    },
    {
      name: "Olivia Darko",
      role: "Project Manager",
      image: "/placeholder.svg",
      rating: 5,
      text: "Seth's ability to integrate AI features seamlessly into our existing system was impressive. Highly recommend his services."
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-card/50">
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
            <span className="gradient-text">TESTIMONIALS</span>
          </h2>
          <div className="flex-1 h-[2px] bg-border" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="pro-card p-6 hover-scale"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
