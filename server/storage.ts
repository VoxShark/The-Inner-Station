import { type GameState, type InsertGameState } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getGameState(sessionId: string): Promise<GameState | undefined>;
  createGameState(gameState: InsertGameState): Promise<GameState>;
  updateGameState(sessionId: string, updates: Partial<InsertGameState>): Promise<GameState | undefined>;
  deleteGameState(sessionId: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private gameStates: Map<string, GameState>;

  constructor() {
    this.gameStates = new Map();
  }

  async getGameState(sessionId: string): Promise<GameState | undefined> {
    return Array.from(this.gameStates.values()).find(
      (state) => state.sessionId === sessionId,
    );
  }

  async createGameState(insertGameState: InsertGameState): Promise<GameState> {
    const id = randomUUID();
    const now = new Date();
    const gameState: GameState = { 
      ...insertGameState, 
      id,
      createdAt: now,
      updatedAt: now,
    };
    this.gameStates.set(id, gameState);
    return gameState;
  }

  async updateGameState(sessionId: string, updates: Partial<InsertGameState>): Promise<GameState | undefined> {
    const existing = await this.getGameState(sessionId);
    if (!existing) return undefined;

    const updated: GameState = {
      ...existing,
      ...updates,
      updatedAt: new Date(),
    };

    this.gameStates.set(existing.id, updated);
    return updated;
  }

  async deleteGameState(sessionId: string): Promise<boolean> {
    const existing = await this.getGameState(sessionId);
    if (!existing) return false;
    
    return this.gameStates.delete(existing.id);
  }
}

export const storage = new MemStorage();
