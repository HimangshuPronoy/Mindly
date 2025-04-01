
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { ThemeProvider } from '@/hooks/use-theme';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullWidth = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(isMobile);
  
  // Update sidebar state when screen size changes
  useEffect(() => {
    setSidebarCollapsed(isMobile);
  }, [isMobile]);
  
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="flex min-h-screen bg-gradient-to-br from-background to-background/90">
        <Sidebar 
          collapsed={sidebarCollapsed} 
          setCollapsed={setSidebarCollapsed}
        />
        <div 
          className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out ${
            !isMobile && !sidebarCollapsed ? 'md:ml-[240px]' : 
            !isMobile && sidebarCollapsed ? 'md:ml-[70px]' : ''
          }`}
        >
          <Header toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
          <main className={`flex-1 ${fullWidth || isHomePage ? 'px-0' : 'px-4 md:px-8 py-6'}`}>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
