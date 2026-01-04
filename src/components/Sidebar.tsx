import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, FileText, Briefcase, MessageSquare, Mail } from "lucide-react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "HOME", icon: Home },
    { id: "about", label: "ABOUT ME", icon: User },
    { id: "resume", label: "RESUME", icon: FileText },
    { id: "projects", label: "PORTFOLIO", icon: Briefcase },
    { id: "testimonials", label: "TESTIMONIALS", icon: MessageSquare },
    { id: "contact", label: "CONTACT", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 h-full w-16 md:w-20 bg-card/80 backdrop-blur-lg border-r border-border z-50 hidden md:flex flex-col items-center py-8"
    >
      {/* Logo */}
      <motion.div
        className="mb-12 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={() => scrollToSection("home")}
      >
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-orbitron font-bold text-sm">S</span>
        </div>
      </motion.div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col items-center justify-center gap-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-3 py-1.5 bg-card border border-border rounded-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>

              {/* Active Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -right-[1px] w-1 h-8 bg-primary rounded-l"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Timeline Dots */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-primary scale-150"
                : "bg-border hover:bg-primary/50"
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          />
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
