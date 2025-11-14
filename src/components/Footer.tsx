import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-orbitron font-bold gradient-text mb-2">
              SCAM
            </div>
            <p className="text-muted-foreground text-sm">
              Building the future with code
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Admin5152"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sethcharlesagyeimensah5152"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sethagyeimensah2@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p className="flex items-center gap-2 justify-center md:justify-end">
              {/* Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by SCAM */}
            </p>
            <p className="mt-1">© {currentYear} Seth Charles Agyei Mensah</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
