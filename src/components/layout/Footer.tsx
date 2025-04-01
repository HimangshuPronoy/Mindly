
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-background pt-12 pb-8 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-mindmate-primary to-mindmate-tertiary shadow-md" />
              <span className="text-xl font-bold bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent">MindMate</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your AI-powered companion for mental wellbeing, providing personalized support whenever you need it.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-mindmate-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-mindmate-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-mindmate-primary transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/chat" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">AI Chat</Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">Mood Tracking</Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">Journaling</Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">Resources</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">About Us</Link>
              </li>
              <li>
                <a href="https://mindmateblog.example.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">Blog</a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">Support</Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms#cookies" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/privacy#data-protection" className="text-sm text-muted-foreground hover:text-mindmate-primary transition-colors">Data Protection</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} MindMate. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={14} className="text-rose-500 fill-rose-500" />
            <span>for better mental health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
