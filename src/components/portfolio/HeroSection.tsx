import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";
const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 lg:px-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-300" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Status badge */}
        <div className="opacity-0 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Open to opportunities
          </span>
        </div>

        {/* Main headline */}
        <h1 className="opacity-0 animate-fade-up animation-delay-100 text-5xl md:text-7xl lg:text-8xl font-syne font-bold leading-tight mb-6">
          <span className="text-foreground">I Build</span>
          <br />
          <span className="text-gradient">Products That</span>
          <br />
          <span className="text-foreground">Matter</span>
        </h1>

        {/* Subtitle */}
        <p className="opacity-0 animate-fade-up animation-delay-200 text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 font-inter leading-relaxed">Hi I’m Ansu Sharma, and I build products that solve real problems.
I turn complexity into clarity, design intuitive user experiences, and drive business impact through thoughtful product execution.</p>

        {/* Role tags */}
        <div className="opacity-0 animate-fade-up animation-delay-300 flex flex-wrap gap-3 mb-10">
          {["APM", "Product Manager", "Business Analyst"].map(role => <span key={role} className="px-4 py-2 rounded-lg bg-secondary border border-border text-foreground font-medium text-sm">
              {role}
            </span>)}
        </div>

        {/* CTA buttons */}
        <div className="opacity-0 animate-fade-up animation-delay-400 flex flex-wrap gap-4">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Let's Connect
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#resume" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>;
};
export default HeroSection;