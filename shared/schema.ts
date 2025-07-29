import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const gameStates = pgTable("game_states", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull(),
  currentSegment: text("current_segment").notNull().default("cockroach"),
  progress: integer("progress").notNull().default(1),
  totalProgress: integer("total_progress").notNull().default(7),
  visitedSegments: jsonb("visited_segments").$type<string[]>().notNull().default([]),
  choices: jsonb("choices").$type<string[]>().notNull().default([]),
  currentCharacter: text("current_character").notNull().default("Meeting Cockroach"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`),
});

export const insertGameStateSchema = createInsertSchema(gameStates).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertGameState = z.infer<typeof insertGameStateSchema>;
export type GameState = typeof gameStates.$inferSelect;

// Story segment types
export interface StoryChoice {
  id: string;
  text: string;
  next: string;
}

export interface StorySegment {
  id: string;
  text: string;
  character: string;
  choices?: StoryChoice[];
  isEnding?: boolean;
}

export interface GameProgress {
  current: number;
  total: number;
  percentage: number;
}
