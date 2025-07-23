import Image from "next/image";

import { Button } from "./button";

interface Project {
  image: string;
  title: string;
  icons: string[];
  tags: string[];
  description: string;
  projectLink: string | null;
}

export const projects: Project[] = [
  {
    image: "/aboutimg.png",
    title: "Projeto 1",
    icons: ["uil", "uil-react"],
    tags: ["Next.js", "TailwindCSS", "PostCSS"],
    description:
      "Este projeto é um website moderno e responsivo para uma empresa de estética automotiva, focado em apresentar os serviços e a qualidade de forma visualmente atraente. Desenvolvido com Next.js para alta performance e SEO, e estilizado com TailwindCSS para um desenvolvimento ágil e consistente.",
    projectLink: "https://website-estetica.vercel.app",
  },
  {
    image: "/aboutimg.png",
    title: "Projeto 2",
    icons: ["uil", "uil-figma"],
    tags: ["React", "TypeScript", "UX/UI Design"],
    description:
      "Uma aplicação web intuitiva para gerenciamento de tarefas, permitindo aos usuários organizar suas atividades diárias. O foco foi na usabilidade e na experiência do usuário, com um design limpo e funcional. Inclui funcionalidades de criação, edição e exclusão de tarefas, além de filtros por status.",
    projectLink: "https://gerenciador-tarefas.vercel.app",
  },
  {
    image: "/aboutimg.png",
    title: "Projeto 3",
    icons: ["uil", "uil-node-js"],
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    description:
      "Um sistema de blog completo com um backend robusto construído com Node.js e Express, utilizando MongoDB para persistência de dados. A API RESTful permite gerenciamento de posts, usuários e comentários. O foco foi na arquitetura de backend e na segurança da API.",
    projectLink: "https://gerenciador-tarefas.vercel.app",
  },
  {
    image: "/aboutimg.png",
    title: "Projeto 4",
    icons: ["uil", "uil-shopping-cart"],
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    description:
      "Plataforma de e-commerce completa com sistema de pagamento integrado via Stripe. Inclui gerenciamento de produtos, carrinho de compras, sistema de pedidos e painel administrativo. Desenvolvido com foco na segurança e experiência do usuário.",
    projectLink: "https://ecommerce.vercel.app",
  },
  {
    image: "/aboutimg.png",
    title: "Projeto 5",
    icons: ["uil", "uil-chart-line"],
    tags: ["React", "D3.js", "WebSocket", "Chart.js"],
    description:
      "Dashboard interativo para visualização de dados em tempo real, com gráficos dinâmicos e métricas atualizadas via WebSocket. Inclui filtros avançados, exportação de relatórios e interface responsiva. Foco na performance e usabilidade.",
    projectLink: "https://gerenciador-tarefas.vercel.app",
  },
  {
    image: "/aboutimg.png",
    title: "Projeto 6",
    icons: ["uil", "uil-chart-line"],
    tags: ["React", "D3.js", "WebSocket", "Chart.js"],
    description:
      "Dashboard interativo para visualização de dados em tempo real, com gráficos dinâmicos e métricas atualizadas via WebSocket. Inclui filtros avançados, exportação de relatórios e interface responsiva. Foco na performance e usabilidade.",
    projectLink: "https://gerenciador-tarefas.vercel.app",
  },
];

export function ProjectCard({
  project,
  index,
  onOpenModal,
}: {
  project: Project;
  index: number;
  onOpenModal: (index: number) => void;
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
        View Details
      </Button>
    </div>
  );
}
