import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { characterPersonalities } from "@/lib/story-data";

interface CharacterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CharacterModal({ open, onOpenChange }: CharacterModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-hell-darker border border-shadow-gray/30 shadow-2xl max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-white">
            The Five Personalities of Vox
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {characterPersonalities.map((personality, index) => (
            <div 
              key={index}
              className={`bg-hell-dark/60 rounded-lg p-4 border-l-4 ${
                personality.color === 'amber-glow' ? 'border-amber-glow' :
                personality.color === 'blood-red' ? 'border-blood-red' :
                personality.color === 'green-500' ? 'border-green-500' :
                personality.color === 'blue-500' ? 'border-blue-500' :
                'border-orange-500'
              }`}
            >
              <h3 className={`font-semibold mb-2 ${
                personality.color === 'amber-glow' ? 'text-amber-glow' :
                personality.color === 'blood-red' ? 'text-blood-red' :
                personality.color === 'green-500' ? 'text-green-500' :
                personality.color === 'blue-500' ? 'text-blue-500' :
                'text-orange-500'
              }`}>
                {personality.name}
              </h3>
              <p className="text-gray-300 text-sm">
                {personality.description}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
