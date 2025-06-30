"use client";

import { Container } from "./ui/container";
import { ToolsMarquee } from "./ui/marquee";
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

export default function SkillsToolsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black" id="about">
      <Container>
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white text-center">
            Skills & Tools
          </h2>

          {/* Skills section */}
          <Tabs className="flex flex-col items-center">
            <TabList aria-label="My skills" className="mx-auto max-w-fit">
              {SKILLS_DATA.map(({ id, title }) => (
                <Tab key={id} id={id}>
                  {title}
                </Tab>
              ))}
            </TabList>
            <div className="w-full max-w-md">
              {SKILLS_DATA.map(({ id, skills }) => (
                <TabPanel key={id} id={id} className="min-h-[250px] mt-4">
                  <ul className="list-disc space-y-1 text-gray-300 pl-4 text-left">
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </div>
          </Tabs>

          {/* Tools section with Marquee */}
          <div className="mt-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-6 text-center">
              My Tools
            </h3>
            <ToolsMarquee />
          </div>
        </div>
      </Container>
    </section>
  );
}
