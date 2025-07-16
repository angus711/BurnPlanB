import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Intense athlete training" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-hero font-black tracking-tight mb-6 animate-rise">
          The World Doesn't Need Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire to-fire-glow animate-fire-glow">
            Plan B
          </span>
        </h1>
        
        <p className="text-subtitle text-muted-foreground mb-8 max-w-2xl mx-auto animate-rise" style={{ animationDelay: '0.2s' }}>
          Fuel your fire with stories from those who chose greatness—no backups.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-rise" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-fire to-fire-glow hover:from-fire-glow hover:to-fire text-lg px-8 py-6 group"
          >
            Get Your Daily Hit
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
          >
            <Play className="mr-2 h-5 w-5" />
            Explore Stories
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-rise" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Stories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Motivated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-sm text-muted-foreground">Plan Bs</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;