
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, BookOpen, MessageCircle, BookMarked, 
  Menu, HelpCircle, X, ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger 
} from '@/components/ui/drawer';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

const NavItem = ({ to, icon, label, active, collapsed = false, onClick }: NavItemProps) => (
  <Link 
    to={to} 
    className={cn(
      "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300",
      "hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground hover:shadow-sm",
      collapsed ? "justify-center" : "hover:translate-x-1",
      "group relative overflow-hidden",
      active && "bg-sidebar-primary/70 text-sidebar-primary-foreground font-medium"
    )}
    onClick={onClick}
    title={collapsed ? label : undefined}
  >
    <span className="flex-shrink-0 w-5 h-5 group-hover:scale-110 transition-transform duration-300">{icon}</span>
    {!collapsed && <span className="font-medium">{label}</span>}
    {active && !collapsed && (
      <span className="absolute inset-0 bg-gradient-to-r from-mindmate-primary/20 to-transparent opacity-50 pointer-events-none" />
    )}
  </Link>
);

const routes = [
  { path: '/', label: 'Dashboard', icon: <Home size={20} /> },
  { path: '/journal', label: 'Journal', icon: <BookOpen size={20} /> },
  { path: '/chat', label: 'AI Chat', icon: <MessageCircle size={20} /> },
  { path: '/resources', label: 'Resources', icon: <BookMarked size={20} /> },
  { path: '/about', label: 'About Us', icon: <HelpCircle size={20} /> },
  // Terms and Privacy removed from sidebar
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Close mobile drawer after navigation
  const handleMobileNavClick = () => {
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  if (isMobile) {
    return (
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerTrigger asChild className="lg:hidden fixed left-4 top-4 z-50">
          <Button variant="outline" size="icon" className="rounded-full shadow-md">
            <Menu size={20} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[90vh] rounded-t-xl">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-mindmate-primary to-mindmate-tertiary shadow-lg shadow-mindmate-primary/20 animate-pulse-gentle" />
                <span className="font-bold text-xl bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent">MindMate</span>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X size={20} />
                </Button>
              </DrawerClose>
            </div>
          </div>
          <nav className="flex flex-col gap-2 p-4 overflow-y-auto">
            {routes.map((route) => (
              <NavItem
                key={route.path}
                to={route.path}
                icon={route.icon}
                label={route.label}
                active={location.pathname === route.path}
                onClick={handleMobileNavClick}
              />
            ))}
          </nav>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-30 bg-sidebar border-r border-sidebar-border shadow-md transition-all duration-300 ease-in-out",
        collapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      <div className="flex flex-col h-screen p-3">
        <div className="flex items-center justify-between p-2 mb-6">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-mindmate-primary to-mindmate-tertiary shadow-lg shadow-mindmate-primary/20 animate-pulse-gentle" />
              <span className="font-bold text-xl bg-gradient-to-r from-mindmate-primary to-mindmate-tertiary bg-clip-text text-transparent">MindMate</span>
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className={`${collapsed ? 'mx-auto' : 'ml-auto'} hover:bg-sidebar-accent/50 transition-all`}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>
        
        <nav className="flex flex-col gap-2 px-2 overflow-y-auto">
          {routes.map((route) => (
            <NavItem
              key={route.path}
              to={route.path}
              icon={route.icon}
              label={route.label}
              active={location.pathname === route.path}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
