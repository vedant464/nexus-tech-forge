import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RegistrationForm from "@/components/RegistrationForm";
import { Menu, X, Code2, Users, Calendar, Trophy, UserPlus, BookOpen, Camera, Mail } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Code2 },
  { name: "About", path: "/about", icon: Users },
  { name: "Events", path: "/events", icon: Calendar },
  { name: "Projects", path: "/projects", icon: Trophy },
  { name: "Join Us", path: "/join", icon: UserPlus },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Gallery", path: "/gallery", icon: Camera },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent p-2 group-hover:scale-110 smooth-transition animate-circuit-glow">
              <img 
                src="/lovable-uploads/cc512054-1876-4bbf-827b-6d40e2ff655a.png" 
                alt="ROI Tech Club" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ROI Tech Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium smooth-transition ${
                  isActive(item.path)
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="hero" 
              size="sm" 
              className="ml-4"
              onClick={() => setIsRegistrationOpen(true)}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium smooth-transition ${
                      isActive(item.path)
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Button 
                variant="hero" 
                size="sm" 
                className="mt-4 mx-3"
                onClick={() => {
                  setIsRegistrationOpen(true);
                  setIsOpen(false);
                }}
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </nav>
  );
}