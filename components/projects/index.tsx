"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";

import { Carousel } from "./carousel";
import { ProjectModal } from "./project-modal";
import { ProjectCard, Project } from "./project-card";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { Badge } from "../ui/badge";

const projectStaticData = [
  {
    image: "/panel-admin-frontend.png",
    icons: ["uil", "uil-react"],
    tags: ["Figma", "React.js", "Vite", "TypeScript", "TailwindCSS"],
    projectLink: "https://github.com/malu-monteiro/admin-panel-frontend",
  },
  {
    image: "/panel-admin-backend.png",
    icons: ["uil", "uil-figma"],
    tags: ["Node.js", "Fastify", "Prisma", "PostgreSQL"],
    projectLink: "https://gerenciador-tarefas.vercel.app",
  },
  {
    image: "/website-estetica-automotiva.png",
    icons: ["uil", "uil-node-js"],
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Cypress"],
    projectLink: "https://mssstudiocar.com.br",
  },
];

export default function Projects() {
  const t = useTranslations("Projects");

  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const projects: Project[] = projectStaticData.map((project, index) => ({
    ...project,
    title: t.raw("items")[index].title,
    description: t.raw("items")[index].description,
  }));

  const selectedProject =
    activeModalIndex !== null ? projects[activeModalIndex] : null;

  const carouselItems = projects.map((project, index) => (
    <ProjectCard
      key={project.title}
      project={project}
      index={index}
      onOpenModal={setActiveModalIndex}
      buttonText={t("viewDetails")}
    />
  ));

  return (
    <section className="py-16 sm:py-20 md:py-24" id="projects">
      <MaxWidthWrapper>
        <div className="space-y-6">
          <div className="text-center">
            <Badge>{t("badge")}</Badge>
          </div>

          <h2 className="font-light text-center tracking-tighter">
            {t("title")}
          </h2>

          <div className="mt-16">
            <Carousel items={carouselItems} />
          </div>
        </div>
      </MaxWidthWrapper>

      {selectedProject && (
        <ProjectModal
          isOpen={activeModalIndex !== null}
          onClose={() => setActiveModalIndex(null)}
          title={selectedProject.title}
          description={selectedProject.description}
          projectLink={selectedProject.projectLink}
          buttonText={t("github")}
        />
      )}
    </section>
  );
}
