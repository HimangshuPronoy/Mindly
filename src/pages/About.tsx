
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield as ShieldIcon, Star, Zap, Brain } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Compassion",
      description: "We approach mental health with genuine care and understanding, creating a judgment-free space."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Accessibility",
      description: "We believe quality mental health support should be available to everyone, regardless of circumstances."
    },
    {
      icon: <ShieldIcon className="h-8 w-8 text-amber-500" />,
      title: "Privacy",
      description: "Your data and conversations are protected with industry-leading encryption and security measures."
    },
    {
      icon: <Star className="h-8 w-8 text-purple-500" />,
      title: "Evidence-Based",
      description: "Our AI is trained on proven therapeutic approaches backed by scientific research."
    },
    {
      icon: <Zap className="h-8 w-8 text-emerald-500" />,
      title: "Innovation",
      description: "We continuously improve our technology to provide the most effective support possible."
    },
    {
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
      title: "Education",
      description: "We empower you with knowledge and skills to understand and manage your mental health."
    }
  ];

  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent">
            About MindMate
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your AI companion on the journey to better mental wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              At MindMate, we believe everyone deserves access to quality mental health support. Our mission is to leverage AI technology to make mental wellness accessible, personalized, and effective for people worldwide.
            </p>
            <p className="text-lg text-muted-foreground">
              We're committed to breaking down barriers to mental health care and creating a tool that adapts to your unique needs, providing support whenever and wherever you need it.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card">
            <div className="h-64 bg-gradient-to-br from-mindmate-primary/20 to-mindmate-tertiary/20 flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-mindmate-primary to-mindmate-tertiary shadow-lg shadow-mindmate-primary/20 animate-pulse-gentle" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Founded in 2023</h3>
              <p className="text-muted-foreground">
                MindMate was created by a team of mental health professionals, AI specialists, and people with lived experience of mental health challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl border border-border hover:border-mindmate-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-mindmate-primary/10"
              >
                <div className="mb-4 p-3 rounded-full w-fit bg-card border border-border">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold mb-6">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We're constantly evolving and improving MindMate to better serve your needs. We welcome your feedback and ideas as we grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary text-white" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
