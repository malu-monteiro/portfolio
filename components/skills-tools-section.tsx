"use client";

import Image from "next/image";
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
    <section className="py-16 sm:py-20 md:py-24 bg-black" id="skills">
      <Container>
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white text-center">
            Skills & Tools
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Tabs Section */}
            <div className="w-full md:w-1/2">
              <Tabs className="flex flex-col items-center md:items-start">
                <TabList
                  aria-label="My skills"
                  className="mx-auto max-w-fit md:mx-0"
                >
                  {SKILLS_DATA.map(({ id, title }) => (
                    <Tab key={id} id={id}>
                      {title}
                    </Tab>
                  ))}
                </TabList>

                <div className="w-full max-w-md md:max-w-none">
                  {SKILLS_DATA.map(({ id, skills }) => (
                    <TabPanel key={id} id={id} className="min-h-[250px] mt-4">
                      <ul className="list-disc space-y-1 text-gray-300 pl-4">
                        {skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </TabPanel>
                  ))}
                </div>
              </Tabs>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
              {/* Purple Glow Effect */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-[30%] w-[285px] h-[53px] bg-purple-600 rounded-full opacity-100 blur-[40px] z-20"
                aria-hidden="true"
              />

              <Image
                src="/skills.svg"
                alt="Skills Illustration"
                width={400}
                height={400}
                className="max-w-full h-auto object-contain relative z-10"
              />
            </div>
          </div>

          {/* Tools Section */}
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
