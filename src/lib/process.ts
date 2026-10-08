import type { Faq } from "@/lib/types";

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
  output: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    text: "Goals, users, constraints, competitors and success metrics documented before anything is designed.",
    output: "A written brief: problem, users, constraints and what ‘done’ looks like.",
  },
  {
    step: "02",
    title: "Strategy",
    text: "Scope, architecture, technology choices, keyword themes and a milestone plan you approve.",
    output: "A scoped plan with milestones, stack and a price you can actually read.",
  },
  {
    step: "03",
    title: "Design",
    text: "Wireframes, then high-fidelity UI and a reusable component system for every screen state.",
    output: "Approved screens and a component system — not a one-off mock-up.",
  },
  {
    step: "04",
    title: "Development",
    text: "Sprint delivery with staging previews, code review and automated checks on every change.",
    output: "Working software on a staging URL you can click, in a repository you own.",
  },
  {
    step: "05",
    title: "Testing",
    text: "Functional, cross-device, performance, accessibility and security QA with a written report.",
    output: "A QA report and a punch-list closed before launch.",
  },
  {
    step: "06",
    title: "Launch",
    text: "Deployment, redirects, indexing checks, analytics validation and team handover training.",
    output: "Production, analytics, search indexing checks and a handover your team can run.",
  },
  {
    step: "07",
    title: "Support & Growth",
    text: "Monitoring, maintenance and a data-driven backlog of improvements after go-live.",
    output: "A stabilisation window, then an optional monthly plan with a prioritised backlog.",
  },
];

export const processFaqs: Faq[] = [
  {
    question: "When does paid development actually start?",
    answer:
      "After you approve a written scope with milestones, deliverables and price. Discovery is a conversation and a document — not a surprise invoice for ‘research’.",
  },
  {
    question: "Do we own the code and accounts?",
    answer:
      "Yes. Source code, Git repositories, hosting, domains and analytics go in your accounts. We do not hold the product hostage behind a licence you cannot leave.",
  },
  {
    question: "How do you work with USA, UK, UAE, Canada and Australia?",
    answer:
      "Pakistan is the operating base. Each market gets scheduled overlap hours, a shared board and weekly demo calls. The US number is a real WhatsApp and voice line — not a rented office plaque.",
  },
  {
    question: "What tools do you use to collaborate?",
    answer:
      "Git for the repository, a staging URL for every sprint, a written decision log, and a weekly demo. We fit the board to yours (Linear, Jira, Notion or GitHub Issues) instead of forcing a private portal you cannot export.",
  },
];
