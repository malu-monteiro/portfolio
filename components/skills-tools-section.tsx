import Image from "next/image";

import { Container } from "./ui/container";
import { Tab, TabList, TabPanel, Tabs } from "./ui/tabs";

const SKILLS_DATA = [
  {
    id: "1",
    title: "UX & Product Design",
    skills: [
      "User Research",
      "Interaction Design",
      "Usability Testing",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design Systems",
      "Responsive Web Design",
    ],
  },
  {
    id: "2",
    title: "Frontend Development",
    skills: [
      "UI Development",
      "Component-Based Architecture",
      "State Management",
      "Accessibility (a11y)",
      "Performance Optimization",
      "Cross-Browser Compatibility",
      "Testing & Debugging",
      "Technical SEO & Metadata Management",
    ],
  },
  {
    id: "3",
    title: "Backend & Architecture",
    skills: [
      "API Design & Integration",
      "Authentication & Authorization",
      "Database Modeling",
      "Server-Side Logic",
      "Error Handling",
      "Code Quality & Maintainability",
    ],
  },
];

const TOOLS_SVG_DATA = [
  { name: "Figma", url: "/figma.svg" },
  { name: "React", url: "/react.svg" },
  { name: "TypeScript", url: "/typescript.svg" },
  { name: "Next", url: "/next.svg" },
  { name: "Tailwind", url: "/tailwind.svg" },
  { name: "Node.js", url: "/node.svg" },
  { name: "Git", url: "/git.svg" },
  { name: "GitHub", url: "/github.svg" },
  { name: "PostgreSQL", url: "/pgsql.svg" },
  { name: "Insomnia", url: "/insomnia.svg" },
  { name: "Jest", url: "/jest.svg" },
];
export default function SkillsToolsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black" id="about">
      <Container>
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white text-center">
            Skills & Tools
          </h2>

          {/* Skills section */}
          <Tabs>
            <TabList aria-label="My skills" className="mx-auto max-w-fit">
              {SKILLS_DATA.map(({ id, title }) => (
                <Tab key={id} id={id}>
                  {title}
                </Tab>
              ))}
            </TabList>
            {/* Mover lista pra esquerda ao invés de centralizar */}
            {SKILLS_DATA.map(({ id, skills }) => (
              <TabPanel key={id} id={id} className="min-h-[250px]">
                <div className="mx-auto max-w-fit">
                  <ul className="list-disc space-y-1 text-gray-300">
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </TabPanel>
            ))}
          </Tabs>

          {/* Tools section */}
          {/* Adicionar um carrossel aqui */}
          <div className="mt-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-6 text-center">
              My Tools
            </h3>
            <div className="flex flex-wrap gap-8 justify-center">
              {TOOLS_SVG_DATA.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center w-28 h-28 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:border-white/30"
                >
                  <Image
                    src={tool.url}
                    alt={`${tool.name} icon`}
                    width={40}
                    height={40}
                  />
                  <span className="text-gray-300 text-sm mt-2 text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
