import { FC } from "react";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Early Warning System (EWS)",
    description:
      "Built a production-ready dropout prediction model using three years of attendance data. Enabled targeted interventions that brought back more than 6,000 at-risk students and unlocked $50K in project value.",
  },
  {
    title: "DistrictMail Automation Engine (DMAE)",
    description:
      "Developed a Python-based automated district-wide email dispatcher with segmentation logic and SMTP delivery. Reduced manual processing time by nearly 90% and owned architecture, documentation, and deployment end-to-end.",
  },
];

const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-syne font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-8 rounded-2xl bg-card border border-border shadow-card hover:border-primary transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
