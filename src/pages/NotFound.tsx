
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="mindmate-container">
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-full bg-mindmate-light flex items-center justify-center mb-6">
            <span className="text-4xl">🤔</span>
          </div>
          
          <h1 className="text-4xl font-bold text-mindmate-primary mb-4">Page Not Found</h1>
          <p className="text-xl text-mindmate-secondary mb-8 max-w-md">
            We couldn't find the page you were looking for. Let's get you back on track.
          </p>
          
          <Button asChild size="lg">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
