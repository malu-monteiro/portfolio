"use client";

import { useState } from "react";

import { Carousel } from "./ui/carousel";
import { Container } from "./ui/container";
import { ProjectModal } from "./ui/project-modal";
import { projects, ProjectCard } from "./ui/project-card";

export default function PortfolioSection() {
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
      <Container>
        <div className="space-y-10">
          <h2 className="text-center text-2xl font-medium text-white sm:text-3xl md:text-4xl">
            My Portfolio
          </h2>

          <Carousel items={carouselItems} />
        </div>
      </Container>

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
