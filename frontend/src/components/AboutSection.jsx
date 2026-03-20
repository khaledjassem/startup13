import { useLanguage } from '../context/LanguageContext';
import { Code, Users, Calendar, Award } from 'lucide-react';

export function AboutSection() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { icon: Code, value: '150+', label: t.about.stat1 },
    { icon: Users, value: '80+', label: t.about.stat2 },
    { icon: Calendar, value: '5+', label: t.about.stat3 },
    { icon: Award, value: '20+', label: t.about.stat4 },
  ];

  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1D4ED8]/10 blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span 
              className="text-[#00F0FF] font-medium text-sm uppercase tracking-wider mb-4 block"
              data-testid="about-section-title"
            >
              {t.about.sectionTitle}
            </span>
            
            <h2 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              data-testid="about-title"
            >
              {t.about.title}
            </h2>
            
            <p 
              className="text-lg text-slate-400 leading-relaxed mb-10"
              data-testid="about-description"
            >
              {t.about.description}
            </p>

            {/* Stats Grid */}
            <div 
              className="grid grid-cols-2 gap-6"
              data-testid="about-stats"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors card-hover"
                  data-testid={`stat-${index}`}
                >
                  <stat.icon className="w-8 h-8 text-[#00F0FF] mb-4" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#00F0FF]/20 blur-[60px] rounded-3xl" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Team working"
                  className="w-full h-[500px] object-cover"
                  data-testid="about-image"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B12] via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -start-6 glass rounded-2xl p-6 glow-cyan">
                <div className="text-4xl font-bold text-[#00F0FF]">13</div>
                <div className="text-sm text-slate-300">Start Up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
