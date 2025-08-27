import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-text rounded-md flex items-center justify-center">
            <span className="text-btn-cta-foreground font-bold text-sm">C</span>
          </div>
          <span className="text-xl font-bold text-nav-text">Custo</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-nav-text hover:text-hero-text-muted transition-colors">
            About
          </a>
          <a href="#" className="text-nav-text hover:text-hero-text-muted transition-colors">
            Pricing
          </a>
          <a href="#" className="text-nav-text hover:text-hero-text-muted transition-colors">
            Blog
          </a>
        </nav>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="cta-outline" size="default" className="hidden sm:inline-flex">
          Contact Sales
        </Button>
        <Button variant="cta" size="default">
          Start for Free
        </Button>
      </div>
    </header>
  );
};

export default Header;