import { Button } from "@/components/ui/button";
import { Save, RotateCcw, Users } from "lucide-react";

interface GameControlsProps {
  onSaveGame: () => void;
  onRestartGame: () => void;
  onShowCharacterMap: () => void;
}

export function GameControls({ onSaveGame, onRestartGame, onShowCharacterMap }: GameControlsProps) {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
      <Button
        onClick={onSaveGame}
        className="bg-hell-darker/90 hover:bg-shadow-gray/80 text-white p-3 rounded-full shadow-lg border border-shadow-gray/30 transition-all duration-300"
        title="Save Game"
      >
        <Save className="h-4 w-4" />
      </Button>
      
      <Button
        onClick={onRestartGame}
        className="bg-hell-darker/90 hover:bg-amber-glow/80 text-white p-3 rounded-full shadow-lg border border-shadow-gray/30 transition-all duration-300"
        title="Restart"
      >
        <RotateCcw className="h-4 w-4" />
      </Button>
      
      <Button
        onClick={onShowCharacterMap}
        className="bg-hell-darker/90 hover:bg-blood-red/80 text-white p-3 rounded-full shadow-lg border border-shadow-gray/30 transition-all duration-300"
        title="Character Map"
      >
        <Users className="h-4 w-4" />
      </Button>
    </div>
  );
}
