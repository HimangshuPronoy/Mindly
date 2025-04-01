
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hello! I'm MindMate, your mental health companion. How are you feeling today?",
    isUser: false,
    timestamp: new Date(),
  },
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response (would be replaced with actual AI API call)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(input),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Very simple response generation - would be replaced with actual AI
  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('sad') || input.includes('depress') || input.includes('unhappy')) {
      return "I'm sorry to hear you're feeling down. Remember that it's okay to have these feelings. Would you like to try a quick breathing exercise or talk more about what's bothering you?";
    } 
    
    if (input.includes('anxious') || input.includes('worry') || input.includes('stress')) {
      return "Anxiety can be really challenging. Let's take a moment to ground ourselves. Try focusing on five things you can see, four things you can touch, three things you can hear, two things you can smell, and one thing you can taste.";
    }
    
    if (input.includes('happy') || input.includes('good') || input.includes('great')) {
      return "I'm glad to hear you're doing well! It's important to acknowledge and celebrate these positive moments. What's contributing to your good mood today?";
    }
    
    if (input.includes('help') || input.includes('resource')) {
      return "I'm here to support you. MindMate offers various resources including guided meditations, breathing exercises, and articles on mental wellbeing. We can also connect you with professional help if needed. What kind of resources are you looking for?";
    }
    
    // Default response
    return "Thank you for sharing. I'm here to listen and support you. Would you like to tell me more about how you're feeling, or would you prefer some coping strategies?";
  };

  return (
    <Card className="flex flex-col h-[600px] shadow-md">
      <div className="bg-mindmate-primary/20 p-4 border-b">
        <h3 className="text-xl font-semibold text-mindmate-secondary">Chat with MindMate</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.isUser ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-2xl p-4",
                message.isUser
                  ? "bg-mindmate-primary text-white"
                  : "bg-mindmate-light text-foreground"
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-2xl p-4">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-mindmate-primary animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-mindmate-primary animate-pulse delay-150"></div>
                <div className="w-2 h-2 rounded-full bg-mindmate-primary animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={!input.trim()}>
            <SendIcon className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ChatInterface;
