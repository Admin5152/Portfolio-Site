import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 grid-background opacity-40" />

      {/* Soft Ambient Lights */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
            <div className="relative w-52 h-52 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <img
              src="/me2.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-[15%_15%]"
            />

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_10px_rgba(0,120,255,0.3)] pointer-events-none" />
          </div>
        </motion.div>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
        >
          <span className="text-primary font-orbitron text-sm tracking-widest uppercase">
            Computer Science • Developer • Innovator
          </span>
        </motion.div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6">
          <span className="text-foreground">Seth Charles</span><br/>
          <span className="gradient-text">Agyei Mensah</span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Full-Stack Developer & CS Student at{" "}
          <span className="text-primary font-semibold">KNUST</span>
          <br />
          <span className="text-foreground/70">
            Specializing in AI Integration, Mobile Development & Web Solutions
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            size="lg"
            className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground hover-scale"
            onClick={() => scrollToSection("projects")}
          >
            View Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-orbitron border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary hover-scale"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://github.com/Admin5152"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/sethagyeimensah5152"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:sethagyeimensah2@gmail.com?subject=Hello%20SCAM&body=Hi,%20I%20would%20like%20to%20contact%20you."
            className="text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

// const Hero = () => {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Blurred Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/me.jpg')",
//           filter: "blur(px)",
//           transform: "scale(1.1)"
//         }}
//       />
      
//       {/* Dark Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black/60" />
      
//       {/* Subtle Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-secondary/20" />
      
//       {/* Professional Grid Pattern */}
//       <div className="absolute inset-0 grid-background opacity-30" />
      
//       {/* Subtle Ambient Lights */}
//       <motion.div
//         className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.1, 0.2, 0.1],
//         }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
//         animate={{
//           scale: [1.1, 1, 1.1],
//           opacity: [0.2, 0.1, 0.2],
//         }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />

//       <div className="relative z-10 container mx-auto px-4 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring" }}
//           >
//             <span className="text-primary font-orbitron text-sm tracking-widest uppercase">
//               Computer Science • Developer • Innovator
//             </span>
//           </motion.div>

//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6">
//             <span className="text-foreground">Seth Charles</span><br/>
//             <span className="gradient-text">Agyei Mensah</span>
//           </h1>

//           <motion.p
//             className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Full-Stack Developer & CS Student at <span className="text-primary font-semibold">KNUST</span>
//             <br />
//             <span className="text-foreground/70">Specializing in AI Integration, Mobile Development & Web Solutions</span>
//           </motion.p>

//           <motion.div
//             className="flex flex-wrap gap-4 justify-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//           >
//             <Button
//               size="lg"
//               className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground hover-scale"
//               onClick={() => scrollToSection("projects")}
//             >
//               View Portfolio
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="font-orbitron border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary hover-scale"
//               onClick={() => scrollToSection("contact")}
//             >
//               Contact Me
//             </Button>
//           </motion.div>

//           <motion.div
//             className="flex gap-6 justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//           >
//             <a
//               href="https://github.com/Admin5152"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               <Github className="w-6 h-6" />
//             </a>
//             <a
//               href="https://linkedin.com/in/sethcharlesagyeimensah5152"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               <Linkedin className="w-6 h-6" />
//             </a>
//             <a
//               href="mailto:sethagyeimensah2@gmail.com?subject=Hello%20SCAM&body=Hi,%20I%20would%20like%20to%20contact%20you."
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               <Mail className="w-6 h-6" />
//             </a>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <ChevronDown className="w-8 h-8 text-primary" />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;