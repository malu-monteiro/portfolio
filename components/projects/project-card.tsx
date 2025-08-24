import Image from "next/image";

import { Button } from "../ui/button";

export interface Project {
  image: string;
  title: string;
  icons: string[];
  tags: string[];
  description: string;
  projectLink: string | null;
}

export function ProjectCard({
  project,
  index,
  onOpenModal,
  buttonText,
}: {
  project: Project;
  index: number;
  onOpenModal: (index: number) => void;
  buttonText: string;
}) {
  return (
    <div className="flex h-full max-w-sm flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 p-6 text-white">
      <div className="relative mb-4 h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        {project.icons.length > 0 && <i className={project.icons.join(" ")} />}
        <h3 className="text-lg font-semibold">{project.title}</h3>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={`${index}-${i}`}
            className="rounded bg-white/10 px-2 py-1 text-sm text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-3 flex-grow text-sm text-gray-300 line-clamp-3">
        {project.description}
      </p>

      <Button
        className="mt-4 self-start text-sm"
        onClick={() => onOpenModal(index)}
        variant="secondary"
      >
        {buttonText}
      </Button>
    </div>
  );
}
