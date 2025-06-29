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
  {
    id: "4",
    title: "Soft Skills / Extras",
    skills: [
      "Problem Solving",
      "Collaboration & Communication",
      "Continuous Learning",
      "Languages (Português, Español, English)",
    ],
  },
];

export default function SkillsToolsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black" id="about">
      <Container>
        <div className="text-left space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white">
            Skills & Tools
          </h2>

          <Tabs>
            <TabList aria-label="My skills" className="max-w-fit">
              {SKILLS_DATA.map(({ id, title }) => (
                <Tab key={id} id={id}>
                  {title}
                </Tab>
              ))}
            </TabList>

            {SKILLS_DATA.map(({ id, skills }) => (
              <TabPanel key={id} id={id}>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </Container>
    </section>
  );
}
