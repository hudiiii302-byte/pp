import { pgTable, serial, text, timestamp, varchar, boolean, integer } from "drizzle-orm/pg-core";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 160 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 60 }),
  company: varchar("company", { length: 160 }),
  service: varchar("service", { length: 120 }).notNull(),
  budget: varchar("budget", { length: 80 }),
  message: text("message").notNull(),
  source: varchar("source", { length: 120 }).default("website"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 200 }).notNull().unique(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const siteReviews = pgTable("site_reviews", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 160 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  place: varchar("place", { length: 120 }).notNull(),
  industry: varchar("industry", { length: 40 }).notNull(),
  rating: integer("rating").notNull(),
  quote: text("quote").notNull(),
  source: varchar("source", { length: 120 }).default("website-review-form"),
  /** "pending" until an admin approves it. Existing rows also start as pending on migration. */
  status: varchar("status", { length: 20 }).default("pending").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;
export type SiteReviewRow = typeof siteReviews.$inferSelect;
