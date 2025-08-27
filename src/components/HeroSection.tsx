import { Button } from "@/components/ui/button";
import HeroBadge from "./HeroBadge";
import StarRating from "./StarRating";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center top, #74e8a0 0%, rgba(116, 232, 160, 0.8) 30%, rgba(116, 232, 160, 0.4) 60%, rgba(116, 232, 160, 0.1) 90%, transparent 100%)'
      }}
    >
      <div className="container mx-auto px-6 pt-32 pb-48 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <HeroBadge />
        </div>
        
        <h1 className="mb-6 max-w-3xl mx-auto"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            color: 'rgb(14, 18, 27)',
            fontSize: '44px',
            lineHeight: '56px'
          }}
        >
          Transformamos  ideias em sistemas que falam por si – prontos apartir 7 dias
        </h1>
        
        <p className="mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            color: 'rgb(82, 88, 102)',
            fontSize: '18px',
            lineHeight: '27px'
          }}
        >
          Tenha a sua empresa aberta 24 horas por dia, onde o seu cliente encontra informações, pede orçamentos, faz pedidos e entra em contacto consigo no momento que quiser. Enquanto isso, você ganha organização, praticidade e liberdade para focar no que realmente importa
        </p>
        
        <div className="mb-16">
          <button 
            className="text-base px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(180deg, #000000 0%, #000000 60%, #1a1a1a 80%, #333333 100%)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            Peça Orçamento
          </button>
        </div>
      </div>

      {/* Prova social - Confiança (Esquerda Inferior) */}
      <div className="absolute bottom-24 left-8 z-10">
        <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
          <img
            src="https://raw.githubusercontent.com/Filho18/vibrant-hero-template/main/public/lista%20de%20empresas.svg"
            alt="Logos de empresas"
            className="h-8 w-auto"
          />
          <div className="text-left">
            <p className="text-sm md:text-base font-medium text-hero-text">Confiado por mais de 1k empresas</p>
            <p className="text-xs md:text-sm text-hero-text-muted">ao redor do mundo</p>
          </div>
        </div>
      </div>
      
      {/* Prova social - Avaliação (Direita Inferior) */}
      <div className="absolute bottom-24 right-8 z-10">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
          <div className="flex items-start gap-3">
            <p className="mr-1"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 600,
                color: 'rgb(14, 18, 27)',
                fontSize: '40px',
                lineHeight: '56px'
              }}
            >
              4.9
            </p>
            <div className="flex flex-col items-start justify-center">
              <div className="translate-y-[-4px]"><StarRating /></div>
              <p className="mt-1 leading-tight"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  color: 'rgb(82, 88, 102)',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}
              >
                Baseado em 200+ avaliações
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;