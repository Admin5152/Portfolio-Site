import { useState, useEffect } from "react";
import { Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { SupabaseClient } from "@supabase/supabase-js";

const TestimonialForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(5);
  const [supabaseClient, setSupabaseClient] = useState<SupabaseClient | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
  });

  useEffect(() => {
    import("@/integrations/supabase/client").then(({ supabase }) => {
      setSupabaseClient(supabase);
    }).catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.text.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name and testimonial.",
        variant: "destructive",
      });
      return;
    }

    if (!supabaseClient) {
      toast({
        title: "Not ready",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabaseClient.from("testimonials").insert({
        name: formData.name.trim(),
        role: formData.role.trim() || null,
        rating,
        text: formData.text.trim(),
      });

      if (error) throw error;

      toast({
        title: "Thank you! 🎉",
        description: "Your testimonial has been submitted successfully.",
      });

      setFormData({ name: "", role: "", text: "" });
      setRating(5);
      onSuccess?.();
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
          Your Name *
        </label>
        <Input
          id="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          maxLength={100}
          required
        />
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-muted-foreground mb-1">
          Your Role (optional)
        </label>
        <Input
          id="role"
          placeholder="CEO, Designer, Client..."
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          maxLength={100}
        />
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-2">
          Rating *
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="focus:outline-none transition-transform hover:scale-110"
            >
              <Star
                className={`w-7 h-7 ${
                  star <= rating
                    ? "fill-primary text-primary"
                    : "text-muted-foreground/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <div>
        <label htmlFor="text" className="block text-sm font-medium text-muted-foreground mb-1">
          Your Testimonial *
        </label>
        <Textarea
          id="text"
          placeholder="Share your experience working with me..."
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          rows={4}
          maxLength={500}
          required
        />
        <p className="text-xs text-muted-foreground mt-1">
          {formData.text.length}/500 characters
        </p>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit Testimonial
          </>
        )}
      </Button>
    </form>
  );
};

export default TestimonialForm;
