import { motion } from "framer-motion";
import { Star, Quote, MessageSquarePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TestimonialForm from "./TestimonialForm";

// Check if Supabase is configured
const isSupabaseConfigured = () => {
  return Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);
};

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  rating: number;
  text: string;
  created_at: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [supabaseReady, setSupabaseReady] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchTestimonials = async () => {
    if (!isSupabaseConfigured()) {
      setIsLoading(false);
      return;
    }

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      setSupabaseReady(true);
      
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching testimonials:", error);
      } else {
        setTestimonials(data || []);
      }
    } catch (error) {
      console.error("Supabase not ready:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTestimonials();

    if (!isSupabaseConfigured()) return;

    // Subscribe to realtime updates
    let channel: ReturnType<typeof import("@/integrations/supabase/client").supabase.channel> | null = null;
    
    import("@/integrations/supabase/client").then(({ supabase }) => {
      channel = supabase
        .channel("testimonials-changes")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "testimonials" },
          (payload) => {
            setTestimonials((prev) => [payload.new as Testimonial, ...prev]);
          }
        )
        .subscribe();
    });

    return () => {
      if (channel) {
        import("@/integrations/supabase/client").then(({ supabase }) => {
          supabase.removeChannel(channel!);
        });
      }
    };
  }, []);

  // Default testimonials shown when database is empty
  const defaultTestimonials: Testimonial[] = [
    {
      id: "default-1",
      name: "Prof. Mensah",
      role: "CS Department, KNUST",
      rating: 5,
      text: "Seth demonstrates exceptional problem-solving skills and a deep understanding of software architecture. His projects consistently exceed expectations.",
      created_at: new Date().toISOString(),
    },
    {
      id: "default-2",
      name: "Luna Chen",
      role: "Tech Lead, StartupGH",
      rating: 5,
      text: "Working with Seth was a fantastic experience. He delivered a robust mobile app that perfectly met our requirements and timeline.",
      created_at: new Date().toISOString(),
    },
    {
      id: "default-3",
      name: "Marcus Adjei",
      role: "Freelance Client",
      rating: 5,
      text: "The e-commerce platform Seth built for us increased our sales by 40%. His attention to detail and user experience is remarkable.",
      created_at: new Date().toISOString(),
    },
    {
      id: "default-4",
      name: "Olivia Darko",
      role: "Project Manager",
      rating: 5,
      text: "Seth's ability to integrate AI features seamlessly into our existing system was impressive. Highly recommend his services.",
      created_at: new Date().toISOString(),
    },
  ];

  const displayedTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

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
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="pro-card p-6 animate-pulse">
                <div className="h-4 bg-muted rounded w-1/4 mb-4" />
                <div className="h-20 bg-muted rounded mb-4" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted" />
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-24" />
                    <div className="h-3 bg-muted rounded w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
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
                    <p className="text-sm text-muted-foreground">{testimonial.role || "Guest"}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Add Comment Button */}
        {supabaseReady && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Worked with me? I'd love to hear about your experience!
            </p>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <MessageSquarePlus className="w-5 h-5" />
                  Add Comment
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-orbitron text-center">
                    Share Your Experience
                  </DialogTitle>
                </DialogHeader>
                <TestimonialForm 
                  onSuccess={() => {
                    fetchTestimonials();
                    setIsDialogOpen(false);
                  }} 
                />
              </DialogContent>
            </Dialog>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
