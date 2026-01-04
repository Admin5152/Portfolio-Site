import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  // Generate random leaves for the falling animation
  const leaves = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4,
    rotate: Math.random() * 360,
    size: 16 + Math.random() * 24,
  }));

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Falling Leaves Animation */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-primary/60"
          initial={{ 
            top: -50, 
            left: `${leaf.x}%`,
            rotate: 0,
            opacity: 0.8
          }}
          animate={{ 
            top: "110%",
            rotate: leaf.rotate + 720,
            x: [0, 30, -20, 40, -30, 0],
            opacity: [0.8, 1, 0.6, 1, 0.4]
          }}
          transition={{ 
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Leaf size={leaf.size} />
        </motion.div>
      ))}

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Falling Plant Pot */}
        <motion.div
          initial={{ y: -200, rotate: 0, opacity: 0 }}
          animate={{ y: 0, rotate: [0, -10, 10, -5, 5, 0], opacity: 1 }}
          transition={{ 
            y: { duration: 1.5, type: "spring", bounce: 0.4 },
            rotate: { duration: 2, delay: 1.5, repeat: Infinity, repeatType: "reverse" }
          }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Plant Pot */}
            <motion.div
              className="text-8xl md:text-9xl"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🪴
            </motion.div>
            
            {/* Crack Effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.3 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-4xl"
            >
              💥
            </motion.div>
          </div>
        </motion.div>

        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-orbitron font-bold mb-4">
            <span className="gradient-text">404</span>
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-orbitron font-semibold text-foreground mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like this page took a tumble! The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Button
            size="lg"
            className="font-orbitron bg-primary hover:bg-primary-glow text-primary-foreground"
            onClick={() => navigate("/")}
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-primary/5 border border-primary/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 rounded-full bg-secondary/5 border border-secondary/20"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Ground Effect */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.4, duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
    </div>
  );
};

export default NotFound;
