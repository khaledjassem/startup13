import { useLanguage } from '../context/LanguageContext';
import { Smartphone, Globe, Palette, Settings, ArrowUpRight } from 'lucide-react';

export function ServicesSection() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Smartphone,
      title: t.services.service1.title,
      description: t.services.service1.description,
      gradient: "from-[#00F0FF] to-[#0EA5E9]",
      iconBg: "bg-[#00F0FF]/20",
      number: "01"
    },
    {
      icon: Globe,
      title: t.services.service2.title,
      description: t.services.service2.description,
      gradient: "from-[#8B5CF6] to-[#6366F1]",
      iconBg: "bg-[#8B5CF6]/20",
      number: "02"
    },
    {
      icon: Palette,
      title: t.services.service3.title,
      description: t.services.service3.description,
      gradient: "from-[#F59E0B] to-[#EF4444]",
      iconBg: "bg-[#F59E0B]/20",
      number: "03"
    },
    {
      icon: Settings,
      title: t.services.service4.title,
      description: t.services.service4.description,
      gradient: "from-[#10B981] to-[#059669]",
      iconBg: "bg-[#10B981]/20",
      number: "04"
    }
  ];

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -start-40 w-[500px] h-[500px] rounded-full bg-[#00F0FF]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -end-40 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-6"
            data-testid="services-section-title"
          >
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-sm text-[#00F0FF] font-medium">{t.services.sectionTitle}</span>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            data-testid="services-title"
          >
            {t.services.title}
          </h2>
          <p 
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            data-testid="services-description"
          >
            {t.services.description}
          </p>
        </div>

        {/* Services Grid - New Design */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          data-testid="services-grid"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              data-testid={`service-card-${index}`}
            >
              {/* Card */}
              <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                
                {/* Gradient Glow on Hover */}
                <div className={`absolute -top-20 -end-20 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                
                {/* Number */}
                <div className="absolute top-6 end-6 text-7xl font-black text-white/[0.03] select-none">
                  {service.number}
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text`} style={{ color: service.gradient.includes('00F0FF') ? '#00F0FF' : service.gradient.includes('8B5CF6') ? '#8B5CF6' : service.gradient.includes('F59E0B') ? '#F59E0B' : '#10B981' }} />
                  </div>

                  {/* Title with Arrow */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                      <ArrowUpRight className={`w-4 h-4 text-white ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Bottom Line */}
                  <div className={`absolute -bottom-10 start-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} transition-all duration-500 rounded-full`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6">
            {isRTL ? 'هل لديك مشروع في ذهنك؟' : 'Have a project in mind?'}
          </p>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#0EA5E9] text-[#060B12] font-semibold hover:shadow-lg hover:shadow-[#00F0FF]/25 transition-all duration-300 hover:scale-105"
          >
            {isRTL ? 'تواصل معنا الآن' : "Let's Talk"}
            <ArrowUpRight className={`w-5 h-5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
