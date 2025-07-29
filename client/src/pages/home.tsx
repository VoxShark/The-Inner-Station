import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { GameState, StoryChoice, GameProgress } from "@shared/schema";
import { storySegments } from "@/lib/story-data";

import { GameHeader } from "@/components/game-header";
import { StoryDisplay } from "@/components/story-display";
import { ChoiceButtons } from "@/components/choice-buttons";
import { CharacterModal } from "@/components/character-modal";
import { MenuModal } from "@/components/menu-modal";
import { GameControls } from "@/components/game-controls";

export default function Home() {
  const [sessionId] = useState(() => crypto.randomUUID());
  const [showCharacterModal, setShowCharacterModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const { toast } = useToast();

  // Fetch game state
  const { data: gameState, isLoading } = useQuery<GameState>({
    queryKey: ["/api/game", sessionId],
    queryFn: async () => {
      const response = await fetch(`/api/game/${sessionId}`);
      if (!response.ok) throw new Error("Failed to fetch game state");
      return response.json();
    },
  });

  // Make choice mutation
  const makeChoiceMutation = useMutation({
    mutationFn: async ({ choiceId, nextSegment, character, progress }: {
      choiceId: string;
      nextSegment: string;
      character: string;
      progress: number;
    }) => {
      const response = await apiRequest(
        "POST",
        `/api/game/${sessionId}/choice`,
        { choiceId, nextSegment, character, progress }
      );
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/game", sessionId] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save your choice. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Save game mutation
  const saveGameMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", `/api/game/${sessionId}/save`);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Game Saved",
        description: "Your progress has been saved successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Save Failed",
        description: "Failed to save your game. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Reset game mutation
  const resetGameMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", `/api/game/${sessionId}/reset`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/game", sessionId] });
      toast({
        title: "Game Reset",
        description: "Your adventure has been reset to the beginning.",
      });
    },
    onError: () => {
      toast({
        title: "Reset Failed",
        description: "Failed to reset your game. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleMakeChoice = (choice: StoryChoice) => {
    if (!gameState) return;
    
    const nextSegment = storySegments[choice.next];
    if (!nextSegment) {
      toast({
        title: "Error",
        description: "Invalid story segment. Please try again.",
        variant: "destructive",
      });
      return;
    }

    makeChoiceMutation.mutate({
      choiceId: choice.id,
      nextSegment: choice.next,
      character: nextSegment.character,
      progress: gameState.progress + 1,
    });
  };

  const handleSaveGame = () => {
    saveGameMutation.mutate();
  };

  const handleRestartGame = () => {
    if (confirm("Are you sure you want to restart? All progress will be lost.")) {
      resetGameMutation.mutate();
    }
  };

  const handleLoadGame = () => {
    // For now, just close the menu - in a full implementation this would load from storage
    setShowMenuModal(false);
    toast({
      title: "Load Game",
      description: "Load game functionality not yet implemented.",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-hell-dark flex items-center justify-center">
        <div className="text-white text-xl">Loading your adventure...</div>
      </div>
    );
  }

  if (!gameState) {
    return (
      <div className="min-h-screen bg-hell-dark flex items-center justify-center">
        <div className="text-white text-xl">Failed to load game state.</div>
      </div>
    );
  }

  const currentSegment = storySegments[gameState.currentSegment];
  if (!currentSegment) {
    return (
      <div className="min-h-screen bg-hell-dark flex items-center justify-center">
        <div className="text-white text-xl">Invalid game state.</div>
      </div>
    );
  }

  const progress: GameProgress = {
    current: gameState.progress,
    total: gameState.totalProgress,
    percentage: (gameState.progress / gameState.totalProgress) * 100,
  };

  return (
    <div className="bg-hell-dark text-gray-100 font-ui min-h-screen">
      <GameHeader 
        progress={progress}
        onShowMenu={() => setShowMenuModal(true)}
      />

      <main className="pt-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <StoryDisplay 
            segment={currentSegment}
            currentCharacter={gameState.currentCharacter}
          />
          
          {!currentSegment.isEnding && (
            <ChoiceButtons 
              choices={currentSegment.choices || []}
              onMakeChoice={handleMakeChoice}
              disabled={makeChoiceMutation.isPending}
            />
          )}

          {currentSegment.isEnding && (
            <div className="text-center mt-8">
              <div className="bg-hell-darker/60 rounded-xl p-6 border border-amber-glow/30">
                <h2 className="text-2xl font-semibold text-amber-glow mb-4">
                  The End
                </h2>
                <p className="text-gray-300 mb-6">
                  Thank you for playing The Inner Station. Your choices have led you to this conclusion.
                </p>
                <button
                  onClick={handleRestartGame}
                  className="bg-gradient-to-r from-blood-red/80 to-blood-red/60 hover:from-blood-red hover:to-blood-red/80 text-white font-medium py-3 px-6 rounded-lg border border-blood-red/50 transition-all duration-300"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <GameControls 
        onSaveGame={handleSaveGame}
        onRestartGame={handleRestartGame}
        onShowCharacterMap={() => setShowCharacterModal(true)}
      />

      <CharacterModal 
        open={showCharacterModal}
        onOpenChange={setShowCharacterModal}
      />

      <MenuModal 
        open={showMenuModal}
        onOpenChange={setShowMenuModal}
        onLoadGame={handleLoadGame}
        onRestartGame={handleRestartGame}
      />
    </div>
  );
}
