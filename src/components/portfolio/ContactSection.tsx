import React from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter,
  FileText,
  ExternalLink,
  MapPin,
} from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ansu-sharma-b74617211",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Ansu6000",
  },
  {
    icon: Twitter,
    label: "Twitter/X",
    href: "https://twitter.com/_Ansu_Sharma",
  },
];

const ContactSection = () => {
  // Make sure the actual file is at: <project-root>/public/Ansu-Sharma-Resume.pdf
  // The site will serve it at: https://your-site/Ansu-Sharma-Resume.pdf
  const resumePath = "/Ansu-Sharma-Resume.pdf";

  const handleResumeClick = (e) => {
    // If this is an actual <a> click, prevent default navigation because we control both open + download
    if (e && e.preventDefault) e.preventDefault();

    // 1) open in new tab
    const newWindow = window.open(resumePath, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }

    // 2) trigger download
    try {
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "Ansu_Sharma_Resume.pdf";
      // append to DOM for some browsers to allow .click()
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      // fallback: if download fails, just open the file in the current window
      window.location.href = resumePath;
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-card opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-foreground mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I'm actively looking for Associate Product Manager, Product Manager,
            and Business Analyst opportunities. Let's discuss how I can add value
            to your team.
          </p>
        </div>

        {/* Contact card */}
        <div className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-card">
          {/* Direct contact */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <a
              href="mailto:ansusharma2112@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">ansusharma2112@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+918749893984"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+91 8749893984</p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 justify-center text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>Guwahati, India • Open to Remote</span>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {socialLinks.map((social) => (
              <Button key={social.label} variant="social" size="lg" asChild>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <social.icon className="w-5 h-5" />
                  {social.label}
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </Button>
            ))}
          </div>

          {/* Resume CTA */}
          <div id="resume" className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">Want the full picture?</p>
            <Button variant="hero" size="xl" asChild>
              <a
                href={resumePath}
                onClick={handleResumeClick}
                className="flex items-center gap-2 cursor-pointer"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-5 h-5" />
                Download Resume
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-muted-foreground/60 text-sm mt-8">
          Built with precision and passion • © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
