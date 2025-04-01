
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const JournalEntry = () => {
  const [entry, setEntry] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (entry.trim()) {
      console.log('Journal entry saved:', entry);
      // Would save to backend in a real app
      toast({
        title: 'Journal entry saved',
        description: 'Your thoughts have been recorded.',
      });
      setEntry('');
    }
  };

  return (
    <Card className="p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-mindmate-secondary">Today's Journal</h3>
      
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="Write your thoughts here..."
          className="min-h-[150px] mb-4"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        
        <div className="flex justify-end">
          <Button type="submit" disabled={!entry.trim()}>
            Save Entry
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default JournalEntry;
