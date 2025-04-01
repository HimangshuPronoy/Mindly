
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Sparkles, ArrowRight, Clock, Shield, Star, MessageCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

export const HeroSection = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = orbRef.current.getBoundingClientRect();
      const x = (clientX - rect.left - rect.width / 2) * 0.1;
      const y = (clientY - rect.top - rect.height / 2) * 0.1;
      
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="space-y-20">
      {/* Hero */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-mindmate-primary/10 blur-[100px] animate-float opacity-70"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-mindmate-tertiary/10 blur-[100px] animate-float opacity-70" style={{ animationDelay: '-3s' }}></div>
          <div className="absolute top-[60%] left-1/3 w-64 h-64 rounded-full bg-pink-500/10 blur-[80px] animate-float opacity-50" style={{ animationDelay: '-1.5s' }}></div>
          
          {/* Mesh Grid Background - Subtle */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTggMThIMlYyaDE2eiIgc3Ryb2tlPSIjZTVkZWZmIiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAwdjIwaDIwVjB6IiBzdHJva2U9IiNlNWRlZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="mindmate-container relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center rounded-full bg-mindmate-primary/10 px-4 py-1.5 text-sm font-medium text-mindmate-primary shadow-inner animate-pulse-gentle mb-4">
              <Sparkles size={16} className="mr-2" />
              Your AI Mental Health Companion
            </div>
            
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Transform Your
              <span className="block mt-2 bg-gradient-to-r from-mindmate-primary via-purple-500 to-mindmate-tertiary bg-clip-text text-transparent">Mental Wellbeing</span>
              <span className="block mt-2">With AI</span>
            </h1>
            
            <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto md:mx-0">
              MindMate provides personalized AI-powered support, resources, and coping strategies
              to help you navigate life's challenges with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="group relative overflow-hidden text-base h-14 px-8" asChild>
                <Link to="/chat">
                  Start Chatting 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary opacity-0 group-hover:opacity-20 transition-opacity" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group text-base h-14 px-8 border-mindmate-primary/30 hover:bg-mindmate-primary/5" asChild>
                <Link to="/journal">
                  Track Your Mood
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4 opacity-80">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-background ${['bg-pink-400', 'bg-purple-400', 'bg-blue-400', 'bg-indigo-400'][i]}`}></div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">10,000+</span> people improving their mental health
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative h-[400px] w-full max-w-[400px] md:h-[500px] md:max-w-[500px]">
            <div ref={orbRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              {/* 3D-like Layered Orb */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mindmate-primary/70 to-indigo-600/70 blur-xl animate-pulse-gentle"></div>
              <div className="absolute inset-5 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-400/20 backdrop-blur-md border border-white/10"></div>
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-xl"></div>
              
              {/* Floating Icons */}
              <div className="absolute top-14 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl animate-float" style={{ animationDelay: "-1s" }}>
                <Brain className="h-8 w-8 text-mindmate-primary" />
              </div>
              <div className="absolute bottom-20 left-10 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg animate-float" style={{ animationDelay: "-2s" }}>
                <Heart className="h-7 w-7 text-pink-400" />
              </div>
              <div className="absolute top-32 right-12 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg animate-float" style={{ animationDelay: "-3s" }}>
                <Shield className="h-6 w-6 text-mindmate-tertiary" />
              </div>
              <div className="absolute bottom-32 right-16 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl animate-float" style={{ animationDelay: "-1.5s" }}>
                <MessageCircle className="h-8 w-8 text-blue-400" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg animate-float" style={{ animationDelay: "-2.5s" }}>
                <Zap className="h-5 w-5 text-amber-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="text-xs font-medium text-muted-foreground mb-2">Scroll to explore</div>
          <div className="w-6 h-10 rounded-full border-2 border-mindmate-primary/30 flex justify-center pt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-mindmate-primary animate-pulse-gentle"></div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mindmate-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent inline-block">Key Features</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Discover the tools and features that make MindMate your ideal companion for mental wellness</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Brain className="h-12 w-12 text-mindmate-primary group-hover:scale-110 transition-transform duration-500" />}
            title="AI-Powered Support"
            description="Our AI companion provides empathetic responses and personalized mental health tips based on your unique situation."
            gradient="from-mindmate-primary/20 via-purple-500/10 to-indigo-500/5"
          />
          <FeatureCard
            icon={<Heart className="h-12 w-12 text-rose-500 group-hover:scale-110 transition-transform duration-500" />}
            title="Track Your Progress"
            description="Log your moods and journal entries to gain insights into your emotional patterns and celebrate improvements."
            gradient="from-rose-500/20 via-pink-500/10 to-red-500/5"
          />
          <FeatureCard
            icon={<Sparkles className="h-12 w-12 text-amber-500 group-hover:scale-110 transition-transform duration-500" />}
            title="Resource Hub"
            description="Access curated mental health articles, videos, and exercises tailored to your needs and goals."
            gradient="from-amber-500/20 via-yellow-500/10 to-orange-500/5"
          />
        </div>
      </div>

      {/* Testimonials */}
      <div className="mindmate-container py-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-mindmate-light/30 via-background to-background p-10 border border-mindmate-light/30 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzAgMy4zMS0yLjY5IDYtNiA2djZjNi42MyAwIDEyLTUuMzcgMTItMTJoNnptLTYgNmMwLTkuOTQgOC4wNi0xOCAxOC0xOHY2Yy02LjYzIDAtMTIgNS4zNy0xMiAxMmg2YzAgMy4zMSAyLjY5IDYgNiA2djZjLTYuNjMgMC0xMi01LjM3LTEyLTEyaC02eiIgc3Ryb2tlPSIjZTVkZWZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-5"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent inline-block">What Our Users Say</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <TestimonialCard
                quote="MindMate helped me recognize patterns in my anxiety and develop healthier coping mechanisms. It's like having a supportive friend available 24/7."
                author="Sarah J."
                rating={5}
                progress={85}
                duration="3 months"
              />
              <TestimonialCard
                quote="The daily check-ins and mood tracking have been transformative for my mental health journey. I can actually see my progress over time."
                author="Michael T."
                rating={5}
                progress={92}
                duration="6 months"
              />
              <TestimonialCard
                quote="As someone who was hesitant about therapy, MindMate was the perfect first step. It helped me feel comfortable enough to eventually seek professional help."
                author="Jamie L."
                rating={4}
                progress={78}
                duration="2 months"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mindmate-container pb-16">
        <div className="relative text-center rounded-3xl overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-mindmate-primary/20 via-purple-500/15 to-mindmate-tertiary/20 animate-pulse-gentle"></div>
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent">Begin Your Wellness Journey Today</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Take the first step toward a healthier mind and join thousands who have transformed their mental wellbeing with MindMate.
            </p>
            <Button size="lg" className="group relative overflow-hidden h-14 px-8 text-base bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary hover:shadow-lg hover:shadow-mindmate-primary/20 transition-all duration-300" asChild>
              <Link to="/chat">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-mindmate-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Users Worldwide</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-mindmate-primary">89%</div>
                <div className="text-sm text-muted-foreground">Report Improvement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-mindmate-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-mindmate-primary">250+</div>
                <div className="text-sm text-muted-foreground">Wellness Resources</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard = ({ icon, title, description, gradient }: FeatureCardProps) => (
  <Card className="group overflow-hidden backdrop-blur-sm bg-card/30 border-muted/50 transition-all duration-500 hover:shadow-xl hover:shadow-mindmate-primary/10 hover:border-mindmate-primary/20 hover:-translate-y-2">
    <CardHeader className="relative overflow-hidden pb-0">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
      <div className="relative z-10 p-2">
        <div className="bg-gradient-to-br from-background to-background/80 rounded-2xl p-6 flex items-center justify-center mb-2 shadow-inner">
          {icon}
        </div>
      </div>
      <CardTitle className="relative z-10 mt-4 group-hover:text-mindmate-primary transition-colors duration-300">{title}</CardTitle>
    </CardHeader>
    <CardContent className="relative z-10 pt-4">
      <CardDescription className="text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
  progress: number;
  duration: string;
}

const TestimonialCard = ({ quote, author, rating, progress, duration }: TestimonialCardProps) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Card className="overflow-hidden backdrop-blur-sm bg-card/50 border-muted/50 transition-all duration-300 hover:shadow-lg hover:shadow-mindmate-primary/10 hover:border-mindmate-primary/20 cursor-pointer group">
        <CardContent className="pt-6 p-6">
          <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "text-amber-500 fill-amber-500" : "text-muted"}
              />
            ))}
          </div>
          <p className="italic text-muted-foreground mb-5 min-h-[100px]">"{quote}"</p>
          <div className="flex items-center justify-between">
            <p className="font-medium">— {author}</p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-mindmate-primary font-medium">
              Click to see details
            </div>
          </div>
        </CardContent>
      </Card>
    </HoverCardTrigger>
    <HoverCardContent className="bg-card/95 backdrop-blur-lg p-5 w-80">
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-lg">{author}'s Journey</p>
          <p className="text-sm text-muted-foreground mt-1">
            Started using MindMate {duration} ago and has made significant progress.
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex justify-between text-sm border-t border-border pt-3">
          <div className="flex items-center gap-1 text-mindmate-primary">
            <Clock size={14} />
            <span>Notable improvement in {duration}</span>
          </div>
          
          <div className="flex items-center gap-1 text-green-500">
            <Star size={14} className="fill-green-500" />
            <span>{rating}/5</span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default HeroSection;
