import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Riyaah E-Commerce Website",
    isNew: true,
    description:
      "Features a lightning-fast search powered by Algolia. Offers seamless support for both English and Arabic languages. Provides an excellent user experience(UX) tailored for high - volume shopping.Features Rima AI to deliver tailored product recommendations.",
    tags: [
      "Nextjs",
      "Reactjs",
      "Tailwind",
      "Algolia",
      "React Query",
      "CleverTap",
      "Google Analytics"
    ],
    githubUrl:
      "",
    liveUrl: "https://riyaah.sa/en",
    git: false,
    demo: true,
  },
  {
    title: "OMS (Order Management System)",
    description:
      "A premier tech education platform featuring AI-powered assistance, interactive student dashboards, and comprehensive course management. Delivered as a high-performance freelance project for a real-world client.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
      "Zustand",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/VARA4u-tech/AOTMS",
    liveUrl: "https://aotms.in",
    git: false,
    demo: false,
  },
  {
    title: "Parmarth Trust Website",
    description:
      "The Parmarth Trust website serves as a digital platform for a Bihar-based NGO, featuring a multi-functional registration system, a secure donation portal, a simple galary and a dynamic success story showcase. The interface prioritizes accessible UI/UX specialy.",
    tags: [
      "Nextjs",
      "Reactjs",
      "Tailwind",
      "TailwindUi"
    ],
    githubUrl:
      "",
    liveUrl: "https://theparmarthtrust.org/",
    git: false,
    demo: true,
  },
  {
    title: "An Institute Website",
    description:
      "In Ronex Study, I developed an Automated Certificate Verification system for student credentials, a dynamic Course Catalog for safety diplomas, and a Placement Showcase highlighting 145+ successful career transitions ronexstudy.com.",
    tags: [
      "Nextjs",
      "Reactjs",
      "Tailwind",
      "TailwindUi",
      "Yarn"
    ],
    githubUrl: "https://github.com/VARA4u-tech/EduPredict",
    liveUrl: "https://edu-pridect.vercel.app/",
    git: false,
    demo: true,
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative border-2 border-black p-5 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          {"isNew" in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 rotate-12">
              LATEST WORK
            </div>
          )}
          <div>
            <h3 className="text-xl font-black opacity-60 text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.git ? project.githubUrl : undefined}
              target={project.git ? "_blank" : undefined}
              rel={project.git ? "noopener noreferrer" : undefined}
              className={`flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${project.git
                ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
                : "opacity-50 cursor-not-allowed"
                }`}
              onClick={(e) => {
                if (!project.git) e.preventDefault();
              }}
            >
              <Github className="w-3.5 h-3.5" />
              {project.git ? "Source" : "Private"}
            </a>
            <a
              href={project.demo ? project.liveUrl : undefined}
              target={project.demo ? "_blank" : undefined}
              rel={project.demo ? "noopener noreferrer" : undefined}
              className={`flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${project.demo
                ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
                : "opacity-50 cursor-not-allowed"
                }`}
              onClick={(e) => {
                if (!project.demo) e.preventDefault();
              }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {project.demo ? "Demo" : "Private"}
            </a>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
