
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <Layout>
      <div className="mindmate-container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-full bg-mindmate-light/50 dark:bg-mindmate-primary/10">
            <Shield className="h-6 w-6 text-mindmate-primary" />
          </div>
          <h1 className="text-3xl font-bold text-mindmate-primary">Privacy Policy</h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <p className="text-lg text-muted-foreground">
            At MindMate, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our service.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <Eye className="h-5 w-5" />
            <span>Information We Collect</span>
          </h2>
          <p>
            We collect information that you provide directly to us when you:
          </p>
          <ul>
            <li>Create an account</li>
            <li>Use our AI chat feature</li>
            <li>Track your moods</li>
            <li>Write journal entries</li>
            <li>Access educational resources</li>
            <li>Contact our support</li>
          </ul>
          <p>
            This information may include your name, email address, mood data, journal entries, 
            chat conversations, and other content you share while using our services.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <Lock className="h-5 w-5" />
            <span>How We Use Your Information</span>
          </h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your experience</li>
            <li>Process and complete transactions</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Train our AI systems to better understand mental health needs</li>
          </ul>
          <p>
            All personal data used to train our AI systems is anonymized and stripped of identifying information.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <Shield className="h-5 w-5" />
            <span>Data Security</span>
          </h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data 
            from accidental or unlawful destruction, loss, alteration, or unauthorized disclosure. 
            However, no method of transmission over the Internet or method of electronic storage is 100% 
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <FileText className="h-5 w-5" />
            <span>Your Rights</span>
          </h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as:
          </p>
          <ul>
            <li>Right to access personal data we hold about you</li>
            <li>Right to request correction of inaccurate data</li>
            <li>Right to request deletion of your data</li>
            <li>Right to withdraw consent</li>
            <li>Right to data portability</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information provided below.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <span>Contact Us</span>
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@mindmate.example.com.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
