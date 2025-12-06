import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    type: "Experience",
    title: "Business Analyst",
    company: "RNIT AI Solutions LTD",
    period: "Sep 2023 - Present",
    highlights: [
      "Delivered Assam’s statewide attendance platform for 5M students and 2L teachers with over 90% data reliability by leading cross functional collaboration across engineering, QA, DevOps and government teams.",
      "Designed and launched the state’s digital leave management system processing more than 7.2 lakh yearly applications and reduced approval turnaround time by 40% through workflow automation.",
      "Created more than 20 analytics dashboards and automated 30 recurring reports which cut manual reporting effort by 60% and enabled KPI based decision making at scale.",
      "Digitized attendance and workforce operations for the Inland Water Transport Department covering 3,000 staff across 60 ferry stations and generated close to 100K dollars in annual operational impact.",
      "Strengthened product quality by leading UAT end to end including test planning, scenario creation, documentation and defect tracking while introducing Playwright based regression automation that improved release stability by 30%.",
      "Improved operational efficiency by designing user flows, wireframes and process maps and automating multi step workflows including alerts, validations and reconciliation checks which eliminated repetitive manual work."
    ]
  },
  {
    icon: Briefcase,
    type: "Experience",
    title: "Machine Learning Intern",
    company: "F Inverse",
    period: "Jan 2023 - Apr 2023",
    highlights: [
      "Built optimized KNN and regression modules in C++ with Python bindings for seamless integration in ML pipelines.",
      "Integrated Google Differential Privacy to ensure secure, compliant model execution.",
      "Deployed production-grade ML workflows using Git and Docker, enabling fast, reproducible development cycles."
    ]
  },
  {
    icon: GraduationCap,
    type: "Education",
    title: "B.Sc Statistics",
    company: "Gauhati University",
    period: "2019 - 2022",
    highlights: [
      "Relevant coursework in Mathematics and Statistics",
      "Secured CGPA of 8.3/10"
    ]
  }
];

const certifications = [
  "Atlassian Agile Project Management Professional",
  "Career Essentials in Business Analysis by Microsoft and LinkedIn",
  "Microsoft Power BI Desktop for Business Intelligence"
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A track record of delivering results and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience timeline */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-primary transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-background border-2 border-primary" />
                
                <div className="p-6 rounded-xl bg-card border border-border group-hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                    <exp.icon className="w-4 h-4" />
                    {exp.type}
                  </div>
                  <h3 className="text-xl font-syne font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground/70 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications sidebar */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-xl bg-card border border-border sticky top-8">
              <div className="flex items-center gap-2 text-primary mb-6">
                <Award className="w-5 h-5" />
                <h3 className="text-lg font-syne font-semibold">Certifications & Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-2 rounded-lg bg-secondary text-sm text-foreground border border-border"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-medium text-foreground mb-4">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Jira", "Confluence", "Figma", "SQL", "Excel", "Notion", "Python", "Power BI", "Agile", "Process Mapping", "Stakeholder Communication"].map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 rounded bg-muted text-xs text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;