
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Mood = 'great' | 'good' | 'okay' | 'bad' | 'awful';

interface MoodOption {
  value: Mood;
  label: string;
  emoji: string;
  color: string;
}

const moodOptions: MoodOption[] = [
  { value: 'great', label: 'Great', emoji: '😄', color: 'bg-mindmate-green' },
  { value: 'good', label: 'Good', emoji: '🙂', color: 'bg-mindmate-blue' },
  { value: 'okay', label: 'Okay', emoji: '😐', color: 'bg-mindmate-yellow' },
  { value: 'bad', label: 'Bad', emoji: '😔', color: 'bg-mindmate-orange' },
  { value: 'awful', label: 'Awful', emoji: '😢', color: 'bg-mindmate-pink' },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  const handleSelectMood = (mood: Mood) => {
    setSelectedMood(mood);
  };

  const handleSaveMood = () => {
    if (selectedMood) {
      console.log('Mood saved:', selectedMood);
      // Would save to backend in a real app
    }
  };

  return (
    <Card className="p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-mindmate-secondary">How are you feeling today?</h3>
      
      <div className="flex justify-between mb-6">
        {moodOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelectMood(option.value)}
            className={cn(
              "flex flex-col items-center p-2 rounded-full w-16 h-16 transition-all",
              selectedMood === option.value ? 
                `ring-2 ring-mindmate-primary ${option.color}` : 
                "hover:bg-muted"
            )}
          >
            <span className="text-2xl">{option.emoji}</span>
            <span className="text-xs mt-1">{option.label}</span>
          </button>
        ))}
      </div>
      
      <Button 
        className="w-full"
        disabled={!selectedMood}
        onClick={handleSaveMood}
      >
        Save Mood
      </Button>
    </Card>
  );
};

export default MoodTracker;
