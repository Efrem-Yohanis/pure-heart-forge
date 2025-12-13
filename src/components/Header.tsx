import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-gradient">E</span>
          <span className="font-display text-xl font-medium text-foreground">mpiety</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            About
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            Services
          </a>
          <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            Work
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            Contact
          </a>
        </nav>
        
        <Button variant="hero" size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
