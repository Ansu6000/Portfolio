import { 
    Target, 
    Users, 
    TrendingUp, 
    Lightbulb, 
    BarChart3, 
    Workflow,
    Presentation,
    FileSearch
  } from "lucide-react";
  
  const skills = [
    {
      icon: Target,
      title: "Product Strategy",
      description: "Defining roadmaps, prioritizing features, and aligning product vision with business goals"
    },
    {
      icon: Users,
      title: "Stakeholder Management",
      description: "Building consensus across teams, managing expectations, and driving cross-functional alignment"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Decisions",
      description: "Leveraging analytics and user research to inform product decisions and measure success"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Breaking down complex challenges into actionable solutions with structured thinking"
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Competitive research, market sizing, and identifying opportunities for growth"
    },
    {
      icon: Workflow,
      title: "Process Optimization",
      description: "Streamlining workflows, improving efficiency, and implementing best practices"
    },
    {
      icon: Presentation,
      title: "Communication",
      description: "Crafting compelling narratives and presenting insights to diverse audiences"
    },
    {
      icon: FileSearch,
      title: "Requirements Gathering",
      description: "Eliciting, documenting, and translating business needs into technical specifications"
    }
  ];
  
  const SkillsSection = () => {
    return (
      <section className="py-24 px-6 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-card opacity-50" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Core Competencies
            </span>
            <h2 className="text-4xl md:text-5xl font-syne font-bold text-foreground mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A blend of analytical thinking, strategic vision, and user empathy that drives product excellence.
            </p>
          </div>
  
          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-syne">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;