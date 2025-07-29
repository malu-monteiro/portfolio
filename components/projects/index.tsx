"use client";

import { useState } from "react";

import { Carousel } from "./carousel";
import { ProjectModal } from "./project-modal";
import { ProjectCard, projects } from "./project-card";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { Badge } from "../ui/badge";

export default function Projects() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const selectedProject =
    activeModalIndex !== null ? projects[activeModalIndex] : null;

  const carouselItems = projects.map((project, index) => (
    <ProjectCard
      key={project.title}
      project={project}
      index={index}
      onOpenModal={setActiveModalIndex}
    />
  ));

  return (
    <section className="py-16 sm:py-20 md:py-24" id="projects">
      <MaxWidthWrapper>
        <div className="space-y-6">
          <div className="text-center">
            <Badge>Projects</Badge>
          </div>

          <h3 className="font-light text-center tracking-tighter">
            Lorem ipsum dolor sit amet
          </h3>

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
        />
      )}
    </section>
  );
}
