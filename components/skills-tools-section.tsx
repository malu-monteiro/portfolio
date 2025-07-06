"use client";

import { Container } from "./ui/container";
import { ToolsMarquee } from "./ui/marquee";
import SpotlightCard from "./ui/spotlight-card";

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
    <section className="py-16 sm:py-20 md:py-24 bg-black" id="skills">
      <Container>
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white text-center">
            My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_DATA.map(({ id, title, skills }) => (
              <SpotlightCard
                key={id}
                className="custom-spotlight-card"
                spotlightColor="rgba(118, 5, 255, 0.315)"
              >
                <div className="text-neutral-300 p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {title}
                  </h3>

                  <ul className="list-disc space-y-1 text-gray-300">
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-center">
              & Tools
            </h3>
            <ToolsMarquee />
          </div>
        </div>
      </Container>
    </section>
  );
}
