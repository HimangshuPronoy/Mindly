
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="mindmate-container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-mindmate-primary mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, feedback, or need support? We're here to help. Reach out to our team using any of the methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <ContactCard 
            icon={<Mail className="h-6 w-6 text-mindmate-primary" />}
            title="Email Us"
            content="support@mindmate.example.com"
            description="We'll respond within 24 hours"
          />
          <ContactCard 
            icon={<Phone className="h-6 w-6 text-mindmate-primary" />}
            title="Call Us"
            content="+1 (555) 123-4567"
            description="Monday-Friday, 9am-5pm PST"
          />
          <ContactCard 
            icon={<MapPin className="h-6 w-6 text-mindmate-primary" />}
            title="Visit Us"
            content="123 Wellness Street, Suite 101"
            description="San Francisco, CA 94103"
          />
        </div>

        <div className="bg-card/60 shadow-md rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-mindmate-secondary mb-6 flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            <span>Send Us a Message</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                className="w-full min-h-[150px]"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              className="group relative overflow-hidden"
            >
              Send Message
              <span className="absolute inset-0 bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary opacity-0 group-hover:opacity-20 transition-opacity" />
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  description: string;
}

const ContactCard = ({ icon, title, content, description }: ContactCardProps) => (
  <div className="bg-card/60 shadow-md rounded-xl p-6 border border-border/50 backdrop-blur-sm hover:shadow-lg hover:border-mindmate-primary/20 transition-all hover:-translate-y-1">
    <div className="flex flex-col items-center text-center">
      <div className="p-3 rounded-full bg-mindmate-primary/10 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-mindmate-primary font-medium mb-1">{content}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Contact;
