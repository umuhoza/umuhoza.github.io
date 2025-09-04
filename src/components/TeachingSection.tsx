import React from "react";

interface Course {
  title: string;
  code: string;
  location: string;
  units: number;
  semester: string;
  description: string;
  objectives: string[];
  content: string;
  prerequisites: string;
  open?: boolean; // whether the accordion starts open
}

const courses: Course[] = [
  {
    title: "Software Architecture and Design",
    code: "17-214",
    location: "Kigali, Rwanda",
    units: 12,
    semester: "Fall",
    description:
      "Fundamental principles of software architecture and design, covering architectural patterns, design principles, and quality attributes for complex systems.",
    objectives: [
      "Understand key architectural patterns and design principles.",
      "Apply design principles to build robust, scalable architectures.",
      "Evaluate architectures using quality attributes.",
    ],
    content:
      "Lectures, design exercises, case studies, and a semester-long project.",
    prerequisites:
      "Introduction to Programming (15-112) and Data Structures and Algorithms (15-121).",
    open: true,
  },
  {
    title: "Software Accessibility",
    code: "17-313",
    location: "Kigali, Rwanda",
    units: 12,
    semester: "Spring",
    description:
      "Designing and developing software accessible to users with disabilities: accessibility standards, assistive technologies, inclusive design.",
    objectives: [
      "Understand accessibility standards and guidelines.",
      "Design and develop accessible software applications.",
      "Evaluate software for accessibility compliance.",
    ],
    content:
      "Lectures, hands-on labs, and a project focused on developing an accessible application.",
    prerequisites: "Human-Computer Interaction (17-310).",
  },
  {
    title: "DevOps: Software Development and IT Operations",
    code: "17-437",
    location: "Kigali, Rwanda",
    units: 12,
    semester: "Fall",
    description:
      "Principles and practices of DevOps: collaboration, CI/CD, automation and operational excellence.",
    objectives: [
      "Understand the principles of DevOps and its benefits.",
      "Implement continuous integration & continuous delivery pipelines.",
      "Automate deployment and operational workflows.",
    ],
    content: "Lectures, labs, and a project setting up a DevOps pipeline.",
    prerequisites: "Software Engineering (17-214).",
  },
  {
    title: "Advanced Database Systems",
    code: "17-645",
    location: "Kigali, Rwanda",
    units: 12,
    semester: "Spring",
    description:
      "Advanced topics: distributed databases, NoSQL paradigms, data warehousing, performance & scalability for large-scale systems.",
    objectives: [
      "Understand distributed database architectures.",
      "Design and implement NoSQL data models.",
      "Manage & optimize data warehouse solutions.",
    ],
    content:
      "Lectures, assignments, and a project designing a domain-specific data platform.",
    prerequisites: "Database Systems (15-445).",
  },
];

const TeachingSection: React.FC = () => {
  return (
    <section id="teaching" className="px-6 sm:px-10 lg:px-40 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-12 border-b-2 border-gray-800 pb-5 text-textPrimary">
          Teaching
        </h1>

        <div className="space-y-4">
          {courses.map((course) => (
            <details
              key={course.code}
              className="group rounded-lg border border-gray-800 bg-cardBackground/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/60 focus-within:border-primary/70"
              {...(course.open ? { open: true } : {})}
            >
              <summary className="flex list-none cursor-pointer items-center justify-between p-6">
                <h3 className="text-lg font-semibold text-textPrimary pr-4">
                  {course.title}
                </h3>
                <div className="text-textSecondary transition-transform duration-300 group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-textSecondary text-sm leading-relaxed">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6 text-[13px] sm:text-sm">
                  <div>
                    <span className="font-semibold text-gray-400">
                      Course Code:
                    </span>{" "}
                    {course.code}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-400">
                      Location:
                    </span>{" "}
                    {course.location}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-400">Units:</span>{" "}
                    {course.units}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-400">
                      Semester:
                    </span>{" "}
                    {course.semester}
                  </div>
                </div>
                <p className="mb-4 text-base text-textSecondary/90">
                  {course.description}
                </p>
                <h4 className="font-semibold text-textPrimary mb-2 text-sm tracking-wide uppercase">
                  Learning Objectives
                </h4>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  {course.objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
                <h4 className="font-semibold text-textPrimary mb-2 text-sm tracking-wide uppercase">
                  Content Details
                </h4>
                <p className="mb-4">{course.content}</p>
                <h4 className="font-semibold text-textPrimary mb-2 text-sm tracking-wide uppercase">
                  Prerequisites
                </h4>
                <p>{course.prerequisites}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
