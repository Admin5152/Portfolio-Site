import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // 🔥 EXACT behavior from your working project
  base: mode === "production" ? "/Portfolio-Site/" : "/",

  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    open: true,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  preview: {
    port: 8080,
    strictPort: true,
  },

  optimizeDeps: {
    include: ["@radix-ui/react-dialog"],
  },
}));
