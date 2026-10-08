import { topicsA } from "@/lib/topics-a";
import { topicsB } from "@/lib/topics-b";
import { topicsC } from "@/lib/topics-c";
import { topicsD } from "@/lib/topics-d";
import { topicsE } from "@/lib/topics-e";
import type { Topic } from "@/lib/topic-types";

export type { Topic } from "@/lib/topic-types";

export const topics: Topic[] = [...topicsA, ...topicsB, ...topicsC, ...topicsD, ...topicsE];

export const topicCategories = [...new Set(topics.map((topic) => topic.category))];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function topicsInCategory(category: string) {
  return topics.filter((topic) => topic.category === category);
}

export function getTopics(slugs: string[]) {
  return slugs
    .map((slug) => getTopic(slug))
    .filter((topic): topic is Topic => Boolean(topic));
}
