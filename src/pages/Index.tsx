
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, User, MessageCircle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/home/HeroSection';
import FeatureShowcase from '@/components/home/FeatureShowcase';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 overflow-x-hidden">
      <HeroSection />
      
      <FeatureShowcase />
      
      {/* How MindMate Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-mindmate-primary/5 to-mindmate-tertiary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent">
              The MindMate Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined approach combines AI technology with evidence-based techniques to support your mental health journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <ExperienceCard
              icon={<MessageCircle className="h-8 w-8 text-mindmate-primary" />}
              title="Conversational Support"
              description="Our AI engages in meaningful conversations about your thoughts and feelings, providing a judgment-free space to express yourself."
            />
            
            <ExperienceCard
              icon={<Lightbulb className="h-8 w-8 text-mindmate-primary" />}
              title="Personalized Insights"
              description="Gain deeper understanding of your emotional patterns through AI-powered analysis of your journal entries and mood tracking data."
            />
            
            <ExperienceCard
              icon={<Shield className="h-8 w-8 text-mindmate-primary" />}
              title="Privacy-First Approach"
              description="Your journal entries, chat conversations, and personal data are protected with advanced encryption and never shared."
            />
          </div>
          
          <div className="mt-20 text-center">
            <Button size="lg" className="group relative overflow-hidden" asChild>
              <Link to="/about">
                Learn More About Our Approach
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* User Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-mindmate-light/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent">
              Real Stories, Real Progress
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how MindMate has helped people transform their mental wellbeing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <StoryCard
              quote="Before MindMate, I struggled with constant anxiety that affected my work and relationships. The daily check-ins and guided journaling helped me identify my triggers and develop healthier coping mechanisms."
              author="Alex K."
              title="Overcame Anxiety"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
            />
            
            <StoryCard
              quote="As someone dealing with depression, finding motivation was always a challenge. MindMate's personalized encouragement and progress tracking gave me small wins to celebrate, which made a huge difference in my recovery journey."
              author="Taylor M."
              title="Managing Depression"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
            />
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="border-mindmate-primary/30 hover:bg-mindmate-primary/5 group" asChild>
              <Link to="/resources">
                Explore Success Stories
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-mindmate-primary/30 via-purple-500/20 to-mindmate-tertiary/30 animate-pulse-gentle"></div>
            <div className="absolute inset-0 backdrop-blur-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span className="block mt-2 bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent">Mental Wellbeing?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Join thousands of others who have already started their journey to better mental health with MindMate.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button size="lg" className="h-14 px-8 text-base relative group overflow-hidden bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary hover:shadow-lg hover:shadow-mindmate-primary/20 transition-all duration-300" asChild>
                  <Link to="/chat">
                    Start Your Journey Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="h-14 px-8 text-base group border-white/20 hover:border-white/40 bg-white/10 backdrop-blur-sm" asChild>
                  <Link to="/about">
                    Learn More About MindMate
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExperienceCard = ({ icon, title, description }: ExperienceCardProps) => (
  <div className="flex flex-col items-center text-center group">
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-mindmate-primary/20 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-background to-background/80 border border-mindmate-primary/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-3 group-hover:text-mindmate-primary transition-colors duration-300">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

interface StoryCardProps {
  quote: string;
  author: string;
  title: string;
  image: string;
}

const StoryCard = ({ quote, author, title, image }: StoryCardProps) => (
  <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-mindmate-light/20 hover:border-mindmate-primary/20 transition-all duration-300 hover:shadow-lg relative group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-mindmate-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-6 text-lg italic text-muted-foreground">"{quote}"</div>
      
      <div className="mt-auto flex items-center">
        <div className="mr-4 relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-background flex items-center justify-center">
            <User className="w-3 h-3 text-white" />
          </div>
        </div>
        
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-mindmate-primary">{title}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
