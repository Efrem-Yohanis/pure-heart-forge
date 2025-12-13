const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl font-bold text-gradient">E</span>
            <span className="font-display text-2xl font-medium text-foreground">mpiety</span>
          </div>
          
          <nav className="flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
              Services
            </a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
              Work
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
              Contact
            </a>
          </nav>
          
          <p className="text-muted-foreground text-sm">
            © 2024 Empiety. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
