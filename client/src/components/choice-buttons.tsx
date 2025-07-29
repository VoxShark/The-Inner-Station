import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { StoryChoice } from "@shared/schema";

interface ChoiceButtonsProps {
  choices: StoryChoice[];
  onMakeChoice: (choice: StoryChoice) => void;
  disabled?: boolean;
}

export function ChoiceButtons({ choices, onMakeChoice, disabled }: ChoiceButtonsProps) {
  if (!choices || choices.length === 0) {
    return null;
  }

  return (
    <div className="choices-container space-y-4">
      {choices.map((choice, index) => (
        <Button
          key={choice.id}
          onClick={() => onMakeChoice(choice)}
          disabled={disabled}
          className={`choice-btn w-full font-medium py-4 px-6 rounded-lg text-left transition-all duration-300 hover:transform hover:translate-y-[-2px] ${
            index === 0 
              ? "bg-gradient-to-r from-blood-red/80 to-blood-red/60 hover:from-blood-red hover:to-blood-red/80 border border-blood-red/50" 
              : "bg-gradient-to-r from-shadow-gray/80 to-shadow-gray/60 hover:from-shadow-gray hover:to-shadow-gray/80 border border-shadow-gray/50"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex-1 text-white">
              {choice.text}
            </span>
            <ArrowRight className="text-amber-glow ml-4 h-4 w-4" />
          </div>
        </Button>
      ))}
    </div>
  );
}
