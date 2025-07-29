import { Button } from "@/components/ui/button";
import { Menu, Tv } from "lucide-react";

interface GameHeaderProps {
  progress: {
    current: number;
    total: number;
    percentage: number;
  };
  onShowMenu: () => void;
}

export function GameHeader({ progress, onShowMenu }: GameHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hell-darker/90 backdrop-blur-sm border-b border-shadow-gray/30">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Tv className="text-amber-glow text-xl" />
          <h1 className="text-xl font-semibold text-white">The Inner Station</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Progress</span>
            <div className="w-24 h-2 bg-shadow-gray rounded-full overflow-hidden">
              <div 
                className="progress-bar h-full transition-all duration-500" 
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
            <span className="text-xs text-amber-glow font-medium">
              {progress.current}/{progress.total}
            </span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onShowMenu}
            className="text-gray-400 hover:text-white transition-colors"
            title="Menu"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
