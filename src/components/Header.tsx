import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-6 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hero-text rounded-md flex items-center justify-center">
              <span className="text-btn-cta-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-nav-text">Custo</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-nav-text hover:text-hero-text-muted transition-colors">
              Especificações
            </a>
            <a href="#" className="text-nav-text hover:text-hero-text-muted transition-colors">
              Serviços
            </a>
            <a href="#" className="text-nav-text hover:text-hero-text-muted transition-colors">
              Testemunho
            </a>
          </nav>
        </div>
        
        <div className="flex items-center">
          <button 
            className="px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 text-sm"
            style={{
              background: 'linear-gradient(180deg, #000000 0%, #000000 60%, #1a1a1a 80%, #333333 100%)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            Orçamento
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;