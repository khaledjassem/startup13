import { useLanguage } from '../context/LanguageContext';
import { Smartphone, Globe, Palette, Settings } from 'lucide-react';

export function ServicesSection() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Smartphone,
      title: t.services.service1.title,
      description: t.services.service1.description,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      className: "md:col-span-8 md:row-span-2"
    },
    {
      icon: Globe,
      title: t.services.service2.title,
      description: t.services.service2.description,
      image: "https://images.unsplash.com/photo-1770734360042-676ef707d022?crop=entropy&cs=srgb&fm=jpg&q=85",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      icon: Palette,
      title: t.services.service3.title,
      description: t.services.service3.description,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
      className: "md:col-span-4 md:row-span-1"
    },
    {
      icon: Settings,
      title: t.services.service4.title,
      description: t.services.service4.description,
      image: "https://images.unsplash.com/photo-1771793231904-a516cd3baff4?crop=entropy&cs=srgb&fm=jpg&q=85",
      className: "md:col-span-12"
    }
  ];

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-32 bg-[#0A111C]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="text-[#00F0FF] font-medium text-sm uppercase tracking-wider mb-4 block"
            data-testid="services-section-title"
          >
            {t.services.sectionTitle}
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
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

        {/* Bento Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          data-testid="services-grid"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#00F0FF]/30 transition-all duration-500 card-hover ${service.className}`}
              data-testid={`service-card-${index}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B12] via-[#060B12]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[250px]">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#00F0FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00F0FF]/20 transition-colors">
                    <service.icon className="w-7 h-7 text-[#00F0FF]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[#00F0FF] blur-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
