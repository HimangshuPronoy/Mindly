
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Sparkles, BookOpen, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Companion",
    description: "24/7 access to a supportive AI trained in evidence-based mental health practices.",
    color: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Mood Tracking",
    description: "Track your emotions daily to identify patterns and triggers.",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Guided Journaling",
    description: "Structured prompts to help process thoughts and emotions effectively.",
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Progress Timeline",
    description: "Visualize your emotional journey and see your growth over time.",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Coping Strategies",
    description: "Personalized techniques to manage stress, anxiety, and other challenges.",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Privacy-First",
    description: "End-to-end encryption and stringent data protection for your peace of mind.",
    color: "from-indigo-500/20 to-blue-500/20"
  }
];

const FeatureShowcase = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent">
            Features Designed for Your Wellbeing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of tools and features to support every aspect of your mental health journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl border border-mindmate-light/30 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-mindmate-primary/30"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-10", feature.color)} />
              <div className="relative z-10">
                <div className="p-3 rounded-full bg-white dark:bg-mindmate-dark inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-mindmate-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-mindmate-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary text-white group relative overflow-hidden" asChild>
            <Link to="/resources">
              Discover All Features
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
