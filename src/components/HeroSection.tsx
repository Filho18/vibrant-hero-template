import { Button } from "@/components/ui/button";
import HeroBadge from "./HeroBadge";
import StarRating from "./StarRating";
import heroPattern from "@/assets/hero-pattern.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-hero-primary to-hero-secondary relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-6 pt-20 pb-32 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <HeroBadge />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-hero-text mb-6 leading-tight">
          Powerful CRM Solutions
          <br />
          <span className="text-hero-text">for Growing Businesses</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-hero-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
          Streamline your customer relationships with an intuitive CRM platform.
          <br />
          Optimize workflows, and drive business growth with ease.
        </p>
        
        <div className="mb-16">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Start for Free
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <StarRating />
      </div>
    </section>
  );
};

export default HeroSection;