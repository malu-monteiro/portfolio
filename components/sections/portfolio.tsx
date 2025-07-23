"use client";

import { useState } from "react";

import { Carousel } from "../ui/carousel";
import { ProjectModal } from "../ui/project-modal";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { projects, ProjectCard } from "../ui/project-card";

export default function Portfolio() {
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
    <section className="bg-black py-16 sm:py-20 md:py-24" id="portfolio">
      <MaxWidthWrapper>
        <div className="space-y-6">
          <h2 className="text-center text-2xl font-medium text-white sm:text-3xl md:text-4xl">
            Portfolio
          </h2>

          <h3 className="font-light text-center">Lorem ipsum dolor sit amet</h3>

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
