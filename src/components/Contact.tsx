import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.", {
      description: "Thanks for reaching out!"
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sethagyeimensah2@gmail.com",
      link: "mailto:sethagyeimensah2@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kumasi, Ghana",
      link: null
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+233 531771042",
      link: "tel:+233531771042"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container mx-auto px-4 md:pl-24 lg:pl-32 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold">
            <span className="gradient-text">CONTACT</span>
          </h2>
          <div className="flex-1 h-[2px] bg-border" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-orbitron text-sm mb-12"
        >
          Feel free to contact me!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pro-card p-5 flex items-center gap-4 hover-scale group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium">{info.value}</div>
                  </div>
                </motion.div>
              );

              return info.link ? (
                <a key={index} href={info.link}>
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pro-card p-6"
            >
              <h4 className="text-lg font-orbitron font-semibold mb-4 text-foreground">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Admin5152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/sethagyeimensah5152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sethagyeimensah2@gmail.com"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="pro-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-input border-border focus:border-primary text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-input border-border focus:border-primary text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-input border-border focus:border-primary text-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-orbitron font-bold">
            THANKS <span className="text-primary">FOR</span> PATIENCE!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
