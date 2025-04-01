
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from '@/components/ui/label';

interface JournalEntry {
  date: Date;
  content: string;
}

const Journal = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [entryContent, setEntryContent] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Load entries from local storage on component mount
    const storedEntries = localStorage.getItem('journalEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);
  
  useEffect(() => {
    // Save entries to local storage whenever entries change
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);
  
  useEffect(() => {
    if (selectedDate) {
      const existingEntry = entries.find(entry => format(entry.date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'));
      if (existingEntry) {
        setEntryContent(existingEntry.content);
        setSelectedEntry(existingEntry);
      } else {
        setEntryContent('');
        setSelectedEntry(null);
      }
    }
  }, [selectedDate, entries]);
  
  const handleSaveEntry = () => {
    if (!selectedDate) return;
    
    const newEntry: JournalEntry = {
      date: selectedDate,
      content: entryContent,
    };
    
    setEntries(prevEntries => {
      const existingEntryIndex = prevEntries.findIndex(entry => format(entry.date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'));
      
      if (existingEntryIndex !== -1) {
        // Update existing entry
        const updatedEntries = [...prevEntries];
        updatedEntries[existingEntryIndex] = newEntry;
        return updatedEntries;
      } else {
        // Add new entry
        return [...prevEntries, newEntry];
      }
    });
    
    toast({
      title: "Journal entry saved",
      description: `Your entry for ${format(selectedDate, 'PPP')} has been saved.`,
    });
  };
  
  const handleDeleteEntry = () => {
    if (!selectedDate) return;
    
    setEntries(prevEntries => {
      return prevEntries.filter(entry => format(entry.date, 'yyyy-MM-dd') !== format(selectedDate, 'yyyy-MM-dd'));
    });
    
    setEntryContent('');
    setSelectedEntry(null);
    
    toast({
      title: "Journal entry deleted",
      description: `Your entry for ${format(selectedDate, 'PPP')} has been deleted.`,
    });
  };
  
  return (
    <Layout>
      <div className="mindmate-container">
        <h1 className="text-3xl font-bold text-mindmate-primary mb-4">Journal</h1>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Reflect on your thoughts and feelings by writing in your personal journal. Use the calendar to select a date and start writing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-mindmate-primary/20 shadow-md">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border border-border/50"
              />
            </CardContent>
          </Card>
          
          <Card className="border-mindmate-primary/20 shadow-md">
            <CardHeader>
              <CardTitle>
                {selectedDate ? format(selectedDate, 'PPP') : 'Select a date'}
              </CardTitle>
              {selectedDate && (
                <p className="text-sm text-muted-foreground">
                  Write your thoughts and feelings for the selected date.
                </p>
              )}
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="entry">Entry</Label>
                  <Textarea 
                    id="entry"
                    placeholder="Write your journal entry here..."
                    value={entryContent}
                    onChange={(e) => setEntryContent(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handleSaveEntry}>Save Entry</Button>
              {selectedEntry && (
                <Button variant="destructive" onClick={handleDeleteEntry}>Delete Entry</Button>
              )}
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-mindmate-primary mb-4">Past Entries</h2>
          {entries.length === 0 ? (
            <p className="text-muted-foreground">No entries yet. Start writing in your journal!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entries.map((entry) => (
                <Card key={format(entry.date, 'yyyy-MM-dd')} className="border-border/50">
                  <CardHeader>
                    <CardTitle>{format(entry.date, 'PPP')}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {entry.content.substring(0, 100)}...
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button variant="outline">View Entry</Button>
                      </DrawerTrigger>
                      <DrawerContent className="sm:max-w-md">
                        <DrawerHeader>
                          <DrawerTitle>{format(entry.date, 'PPP')}</DrawerTitle>
                        </DrawerHeader>
                        <div className="grid gap-4">
                          <p className="text-muted-foreground">{entry.content}</p>
                        </div>
                        <DrawerClose>
                          <Button variant="secondary">Close</Button>
                        </DrawerClose>
                      </DrawerContent>
                    </Drawer>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Journal;
