import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGameStateSchema } from "@shared/schema";
import { randomUUID } from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get or create game state
  app.get("/api/game/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      let gameState = await storage.getGameState(sessionId);
      
      if (!gameState) {
        // Create new game state
        gameState = await storage.createGameState({
          sessionId,
          currentSegment: "cockroach",
          progress: 1,
          totalProgress: 7,
          visitedSegments: ["cockroach"],
          choices: [],
          currentCharacter: "Meeting Cockroach",
        });
      }
      
      res.json(gameState);
    } catch (error) {
      res.status(500).json({ message: "Failed to get game state" });
    }
  });

  // Update game state (make choice)
  app.post("/api/game/:sessionId/choice", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const { choiceId, nextSegment, character, progress } = req.body;
      
      const gameState = await storage.getGameState(sessionId);
      if (!gameState) {
        return res.status(404).json({ message: "Game state not found" });
      }

      const updatedState = await storage.updateGameState(sessionId, {
        currentSegment: nextSegment,
        progress: progress,
        visitedSegments: [...gameState.visitedSegments, nextSegment],
        choices: [...gameState.choices, choiceId],
        currentCharacter: character,
      });

      res.json(updatedState);
    } catch (error) {
      res.status(500).json({ message: "Failed to update game state" });
    }
  });

  // Save game state
  app.post("/api/game/:sessionId/save", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const gameState = await storage.getGameState(sessionId);
      
      if (!gameState) {
        return res.status(404).json({ message: "Game state not found" });
      }

      // In a real implementation, this might save to a different storage or create a named save
      res.json({ message: "Game saved successfully", gameState });
    } catch (error) {
      res.status(500).json({ message: "Failed to save game" });
    }
  });

  // Reset game state
  app.post("/api/game/:sessionId/reset", async (req, res) => {
    try {
      const { sessionId } = req.params;
      
      const resetState = await storage.updateGameState(sessionId, {
        currentSegment: "cockroach",
        progress: 1,
        totalProgress: 7,
        visitedSegments: ["cockroach"],
        choices: [],
        currentCharacter: "Meeting Cockroach",
      });

      res.json(resetState);
    } catch (error) {
      res.status(500).json({ message: "Failed to reset game" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
