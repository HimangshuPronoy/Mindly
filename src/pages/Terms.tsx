
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, FileText, Eye, Lock } from 'lucide-react';

const Terms = () => {
  return (
    <Layout>
      <div className="mindmate-container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-full bg-mindmate-light/50 dark:bg-mindmate-primary/10">
            <FileText className="h-6 w-6 text-mindmate-primary" />
          </div>
          <h1 className="text-3xl font-bold text-mindmate-primary">Terms of Service</h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <p className="text-lg text-muted-foreground">
            Welcome to MindMate. These Terms of Service govern your use of our website, mobile application, 
            and the services we provide. By using MindMate, you agree to these terms in their entirety.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <span>1. Services Description</span>
          </h2>
          <p>
            MindMate provides an AI-powered mental wellness companion designed to support your emotional 
            and mental wellbeing. Our services include AI chat support, mood tracking, journaling tools, 
            and educational resources. While we strive to provide helpful mental wellness support, MindMate 
            is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <span>2. User Accounts</span>
          </h2>
          <p>
            When you create an account with us, you must provide accurate and complete information. 
            You are solely responsible for the activity that occurs on your account, and you must keep 
            your account password secure. You must notify us immediately of any breach of security or 
            unauthorized use of your account.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <span>3. User Content</span>
          </h2>
          <p>
            Our services allow you to post, link, store, share and otherwise make available certain 
            information, text, graphics, or other material. You retain any rights that you have in 
            your user content. By posting content, you grant us the right to use, modify, publicly 
            perform, publicly display, reproduce, and distribute such content on and through our services.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <span>4. Limitations</span>
          </h2>
          <p>
            MindMate is intended for informational and educational purposes only and is not a replacement 
            for professional medical advice or treatment for specific conditions. The use of MindMate does 
            not create a doctor-patient relationship. If you're experiencing a health crisis, please contact 
            your healthcare provider, go to your nearest emergency room, or call emergency services immediately.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <span>5. Changes to This Agreement</span>
          </h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. If we make changes, 
            we will provide notice to you by posting the updated terms on our website and updating the 
            "Last Updated" date at the top. Your continued use of our services after any such change 
            constitutes your acceptance of the new Terms of Service.
          </p>

          <h2 className="flex items-center gap-2 text-mindmate-secondary">
            <span>6. Contact Us</span>
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at support@mindmate.example.com.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
