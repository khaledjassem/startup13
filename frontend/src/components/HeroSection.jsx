import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00F0FF]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#1D4ED8]/20 blur-[100px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in"
            data-testid="hero-tagline"
          >
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-sm text-slate-300">{t.hero.tagline}</span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6 animate-slide-up"
            data-testid="hero-title"
          >
            {t.hero.title}
            <br />
            <span className="gradient-text text-glow">{t.hero.titleHighlight}</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up stagger-1"
            data-testid="hero-description"
          >
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2"
            data-testid="hero-cta"
          >
            <Button
              size="lg"
              className="bg-[#00F0FF] text-[#060B12] hover:bg-[#00C3D0] font-semibold px-8 py-6 text-lg btn-glow group"
              onClick={(e) => scrollToSection(e, '#contact')}
              data-testid="hero-cta-primary"
            >
              {t.hero.cta}
              <ArrowRight className={`ms-2 w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg group"
              onClick={(e) => scrollToSection(e, '#portfolio')}
              data-testid="hero-cta-secondary"
            >
              <Play className="me-2 w-5 h-5" />
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <div className="w-1 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
