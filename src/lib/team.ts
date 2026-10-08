export type TeamMember = {
  name: string;
  designation: string;
  bio: string;
  photo?: string;
  initials: string;
  linkedin?: string;
};

export const founder: TeamMember = {
  name: "Awais Malick",
  designation: "Founder & CEO, WordbitX",
  bio: "Founded WordbitX in 2021 in Pakistan. Still joins discovery calls, signs off on scope, and stays accountable for delivery — not a distant figurehead.",
  photo: "/brand/team/awais-malick.jpg",
  initials: "AM",
  linkedin: "https://www.linkedin.com/in/awais-malick/",
};

/**
 * Three paragraphs, deliberately. An earlier pass ran to five and read like a
 * company profile rather than a note from a person — length is not gravitas.
 * Each paragraph now does one job: the problem, the proof, the promise.
 *
 * The proof paragraph names PropertiesPak because it is ours, live, and
 * checkable. On a domain this young that is worth more than any claim about
 * years of experience or client counts, which is why none appear here.
 */
export const founderMessage = [
  "I started WordbitX in 2021 after watching the same pattern too many times. Businesses rarely fail at technology because the code is wrong. They fail because the software they were sold never matched how they actually work — a retailer who cannot change their own pricing, a clinic running three tools that refuse to speak to each other. The business grows. The gap just costs more.",
  "We exist to close that gap, and we test it on ourselves. PropertiesPak is our own property platform — built, launched and still run in-house — and it carries the same problems we are hired to solve: search that has to be useful, pages that have to load, traffic that has to be earned. That is also why marketing sits beside engineering here, and why we build for local reality: payment rails, Urdu receipts, weak connectivity, FBR invoicing.",
  "You own what we build. Source code, repositories, hosting and documentation, in your accounts — no licence traps, no dependency on us to keep operating. I still sit in discovery calls and still sign off on scope. Honest estimates, realistic timelines, and the confidence to tell you when a simpler solution, or no build at all, would serve you better.",
];

export const teamValues = [
  {
    title: "Engineering ownership",
    text: "Whoever builds a module supports it. Accountability does not get handed to a different department after launch.",
  },
  {
    title: "Clear communication",
    text: "Weekly demos, one channel for decisions and a named contact for the entire engagement.",
  },
  {
    title: "Continuous learning",
    text: "The team allocates time every sprint to evaluate tooling, so recommendations stay current rather than habitual.",
  },
];
