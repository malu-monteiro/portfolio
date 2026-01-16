import { Card } from "@/components/ui/card";

const EXPERIENCE = [
  {
    id: 1,
    company: "Company Name/ Country",
    position: "Lorem ipsum",
    duration: "Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
];

const EDUCATION = [
  {
    id: 1,
    period: "3242 - 2432",
    course: "Lorem Ipsum",
    institution: "Example University/EEU",
  },
  {
    id: 2,
    period: "2434 - 2342",
    course: "Lorem Ipsum",
    institution: "Example College Institute/EEU",
  },
];

const HARD_SKILLS = [
  { id: "html", label: "HTML5" },
  { id: "css", label: "CSS3" },
  { id: "javascript", label: "Javascript" },
  { id: "react", label: "React JS" },
  { id: "tailwind", label: "Tailwind CSS" },
];

const SOFT_SKILLS = [
  {
    id: "teamwork",
    label: "Teamwork",
  },
  {
    id: "problemsolving",
    label: "Problem Solving",
  },
  {
    id: "creativethinking",
    label: "Creative Thinking",
  },
  {
    id: "empathy",
    label: "Empathy",
  },
  {
    id: "adaptability",
    label: "Adaptability",
  },
  {
    id: "timemanagement",
    label: "Time Management",
  },
];

export function TabAbout() {
  return (
    <div className="space-y-8">
      <Card className="p-6">
        <p className="leading-relaxed text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
          adipisicing proin facilisis purus posuere massa pellentesque ac
          molestie permentum et eu felis vitae nunc.
        </p>
      </Card>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
        {EXPERIENCE.map((exp) => (
          <Card key={exp.id} className="p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                {exp.position}
              </h3>
              <div className="flex items-center gap-2">
                <span className="rounded bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  {exp.duration}
                </span>
                <span className="text-sm text-muted-foreground">
                  {exp.company}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.desc}
              </p>
            </div>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Education</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {EDUCATION.map((edu) => (
            <Card key={edu.id} className="p-6">
              <div className="space-y-2">
                <span className="rounded bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  {edu.period}
                </span>
                <h3 className="font-semibold text-foreground">{edu.course}</h3>
                <p className="text-sm text-muted-foreground">
                  {edu.institution}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Hard Skills</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {HARD_SKILLS.map((hard) => (
            <div key={hard.id} className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border shadow-sm">
                -
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground">{hard.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Soft Skills</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {SOFT_SKILLS.map((soft) => (
            <div key={soft.id} className="rounded-xl bg-card p-4 shadow-sm">
              <p className="font-medium text-foreground">{soft.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
