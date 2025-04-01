
import React, { useState, useRef, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Send, Sparkles, Clock, Activity, ChevronRight, User, Bot } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      role: 'assistant', 
      content: "Hello, I'm MindMate! How are you feeling today?", 
      timestamp: new Date(Date.now() - 1000 * 60 * 5) 
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState<string>('');
  const [isLoadingApiKey, setIsLoadingApiKey] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { user } = useAuth();
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        setIsLoadingApiKey(true);
        
        const { data, error } = await supabase.functions.invoke('getGeminiKey', {
          method: 'GET'
        });
        
        if (error) {
          throw error;
        }
        
        if (data && data.apiKey) {
          setApiKey(data.apiKey);
        } else {
          throw new Error('Failed to retrieve API key');
        }
      } catch (error) {
        console.error('Error fetching Gemini API key:', error);
        toast({
          title: 'Error',
          description: 'Failed to load the Gemini API key',
          variant: 'destructive'
        });
      } finally {
        setIsLoadingApiKey(false);
      }
    };
    
    if (user) {
      fetchApiKey();
    }
  }, [user, toast]);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      if (!apiKey) {
        throw new Error("API key is not available");
      }
      
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                { text: "You are MindMate, an AI mental health assistant. Be empathetic, supportive and helpful." },
                { text: userMessage.content }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      
      const data = await response.json() as GeminiResponse;
      
      const responseText = data.candidates[0]?.content?.parts[0]?.text || 
                          "I'm sorry, I couldn't process your request at the moment.";
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      toast({
        title: "New message",
        description: "MindMate has responded to your message",
      });
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "I'm having trouble connecting to my knowledge center. Please try again later.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Error",
        description: "Failed to get response from MindMate",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Layout>
      <div className="container max-w-6xl mx-auto h-[calc(100vh-12rem)] flex flex-col md:flex-row gap-4 md:gap-8 p-4">
        <div className="w-full md:w-2/3 h-full flex flex-col overflow-hidden">
          <Card className="flex-1 flex flex-col h-full border-mindmate-primary/20 shadow-md">
            <CardHeader className="pb-3 border-b">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-mindmate-primary" />
                <span>AI Conversation</span>
              </CardTitle>
            </CardHeader>
            
            {isLoadingApiKey ? (
              <CardContent className="flex-1 p-4 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-8 w-8 border-4 border-t-mindmate-primary border-mindmate-primary/30 rounded-full animate-spin"></div>
                  <p>Loading chat assistant...</p>
                </div>
              </CardContent>
            ) : (
              <CardContent className="flex-1 overflow-auto p-4">
                <div className="flex flex-col space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-2 animate-fade-in`}
                    >
                      {message.role === 'assistant' && (
                        <Avatar className="h-8 w-8 border border-mindmate-primary/20">
                          <AvatarImage src="/ai-avatar.png" />
                          <AvatarFallback className="bg-mindmate-primary/10 text-mindmate-primary">AI</AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div 
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === 'user' 
                            ? 'bg-mindmate-primary text-white rounded-tr-none' 
                            : 'bg-muted/50 border border-border rounded-tl-none'
                        }`}
                      >
                        <p className="mb-1">{message.content}</p>
                        <p className="text-xs opacity-70 text-right">
                          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      
                      {message.role === 'user' && (
                        <Avatar className="h-8 w-8 border border-primary/20">
                          <AvatarImage src="/user-avatar.png" />
                          <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start items-start gap-2">
                      <Avatar className="h-8 w-8 border border-mindmate-primary/20">
                        <AvatarFallback className="bg-mindmate-primary/10 text-mindmate-primary">AI</AvatarFallback>
                      </Avatar>
                      <div className="bg-muted/50 border border-border p-3 rounded-lg rounded-tl-none">
                        <div className="flex gap-1 items-center h-6">
                          <div className="h-2 w-2 bg-mindmate-primary/60 rounded-full animate-pulse"></div>
                          <div className="h-2 w-2 bg-mindmate-primary/60 rounded-full animate-pulse delay-150"></div>
                          <div className="h-2 w-2 bg-mindmate-primary/60 rounded-full animate-pulse delay-300"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
            )}
            
            <CardFooter className="p-4 border-t">
              <form onSubmit={handleSendMessage} className="w-full flex gap-2">
                <Input
                  placeholder="Type your message here..."
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  className="flex-1"
                  disabled={isLoading || isLoadingApiKey}
                />
                <Button type="submit" disabled={!inputValue.trim() || isLoading || isLoadingApiKey}>
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
        
        <div className="w-full md:w-1/3 h-full space-y-4">
          <Card className="border-mindmate-primary/20 shadow-md">
            <CardHeader className="pb-3 border-b">
              <CardTitle className="text-lg">AI Assistance</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <Tabs defaultValue="suggestions">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="suggestions">
                    <Sparkles className="h-4 w-4 mr-1" />
                    Ideas
                  </TabsTrigger>
                  <TabsTrigger value="recent">
                    <Clock className="h-4 w-4 mr-1" />
                    Recent
                  </TabsTrigger>
                  <TabsTrigger value="insights">
                    <Activity className="h-4 w-4 mr-1" />
                    Insights
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="suggestions" className="mt-4 space-y-3">
                  {[
                    "How are you feeling today?",
                    "I've been anxious about work lately.",
                    "Can you recommend some relaxation techniques?",
                    "I'd like to discuss my mood patterns.",
                    "Help me create a positive affirmation."
                  ].map((suggestion, i) => (
                    <Button 
                      key={i} 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-2 border-mindmate-primary/20 hover:bg-mindmate-primary/5 hover:border-mindmate-primary/40"
                      onClick={() => setInputValue(suggestion)}
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-mindmate-primary flex-shrink-0" />
                      <span className="truncate">{suggestion}</span>
                    </Button>
                  ))}
                </TabsContent>
                
                <TabsContent value="recent" className="mt-4 space-y-3">
                  {messages
                    .filter(msg => msg.role === 'user')
                    .slice(-5)
                    .reverse()
                    .map((msg) => (
                      <Button 
                        key={msg.id} 
                        variant="outline" 
                        className="w-full justify-start text-left h-auto py-2 border-muted hover:bg-secondary/50"
                        onClick={() => setInputValue(msg.content)}
                      >
                        <User className="h-4 w-4 mr-2 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">{msg.content}</span>
                      </Button>
                    ))}
                    
                  {messages.filter(msg => msg.role === 'user').length === 0 && (
                    <p className="text-muted-foreground text-center py-4">No recent messages yet</p>
                  )}
                </TabsContent>
                
                <TabsContent value="insights" className="mt-4 space-y-3">
                  <div className="bg-mindmate-light/30 dark:bg-mindmate-dark/30 p-3 rounded-lg">
                    <p className="font-medium flex items-center gap-1 text-sm">
                      <Bot className="h-4 w-4 text-mindmate-primary" />
                      Conversation Style
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your communication style is reflective and thoughtful. You tend to express your feelings openly.
                    </p>
                  </div>
                  
                  <div className="bg-mindmate-light/30 dark:bg-mindmate-dark/30 p-3 rounded-lg">
                    <p className="font-medium flex items-center gap-1 text-sm">
                      <Bot className="h-4 w-4 text-mindmate-primary" />
                      Common Themes
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Based on your conversations, you often discuss: self-reflection, personal growth, and emotional awareness.
                    </p>
                  </div>
                  
                  <div className="bg-mindmate-light/30 dark:bg-mindmate-dark/30 p-3 rounded-lg">
                    <p className="font-medium flex items-center gap-1 text-sm">
                      <Bot className="h-4 w-4 text-mindmate-primary" />
                      Suggestion
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      You might benefit from exploring mindfulness practices to complement your self-awareness journey.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card className="border-mindmate-primary/20 shadow-md">
            <CardHeader className="pb-3 border-b">
              <CardTitle className="text-lg">Privacy Note</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">
                Your conversations are private and secure. We use advanced encryption to protect your data. 
                You can delete your conversation history at any time from your account settings.
              </p>
              <Button variant="link" className="text-mindmate-primary p-0 h-auto mt-2 text-sm">
                Learn more about our privacy practices
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
