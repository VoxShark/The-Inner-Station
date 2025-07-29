import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FolderOpen, Settings, Info, RotateCcw } from "lucide-react";

interface MenuModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoadGame: () => void;
  onRestartGame: () => void;
}

export function MenuModal({ open, onOpenChange, onLoadGame, onRestartGame }: MenuModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-hell-darker border border-shadow-gray/30 shadow-2xl max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">
            Game Menu
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3">
          <Button
            onClick={onLoadGame}
            className="w-full bg-shadow-gray/60 hover:bg-shadow-gray/80 text-white py-3 px-4 rounded-lg transition-all duration-300 justify-start"
          >
            <FolderOpen className="mr-3 h-4 w-4 text-amber-glow" />
            Load Saved Game
          </Button>
          
          <Button
            onClick={() => alert("Settings not yet implemented")}
            className="w-full bg-shadow-gray/60 hover:bg-shadow-gray/80 text-white py-3 px-4 rounded-lg transition-all duration-300 justify-start"
          >
            <Settings className="mr-3 h-4 w-4 text-amber-glow" />
            Settings
          </Button>
          
          <Button
            onClick={() => alert("About: A choose-your-own-adventure game featuring Vox and Alastor from Hazbin Hotel. Navigate through Vox's fractured psyche to find redemption and understanding.")}
            className="w-full bg-shadow-gray/60 hover:bg-shadow-gray/80 text-white py-3 px-4 rounded-lg transition-all duration-300 justify-start"
          >
            <Info className="mr-3 h-4 w-4 text-amber-glow" />
            About
          </Button>
          
          <div className="pt-3 border-t border-shadow-gray/30">
            <Button
              onClick={onRestartGame}
              className="w-full bg-blood-red/60 hover:bg-blood-red/80 text-white py-3 px-4 rounded-lg transition-all duration-300 justify-start"
            >
              <RotateCcw className="mr-3 h-4 w-4" />
              Restart Adventure
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
