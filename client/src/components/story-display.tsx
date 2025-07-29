import { StorySegment } from "@shared/schema";

interface StoryDisplayProps {
  segment: StorySegment;
  currentCharacter: string;
}

export function StoryDisplay({ segment, currentCharacter }: StoryDisplayProps) {
  return (
    <div className="story-container animate-fade-in">
      {/* Current Character Indicator */}
      <div className="mb-6 flex items-center justify-center">
        <div className="bg-shadow-gray/50 rounded-lg px-4 py-2 border border-blood-red/30">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-amber-glow rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-amber-glow">
              {currentCharacter}
            </span>
          </div>
        </div>
      </div>

      {/* Story Text Container */}
      <div className="bg-hell-darker/60 rounded-xl p-8 mb-8 border border-shadow-gray/30 shadow-2xl">
        <div className="story-text font-story text-lg text-gray-100 leading-relaxed">
          {segment.text.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
