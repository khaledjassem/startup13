import { useLanguage } from '../context/LanguageContext';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const { t, isRTL } = useLanguage();

  const testimonials = [
    {
      quote: "Start Up 13 transformed our business with their innovative mobile app. The team's dedication and expertise exceeded our expectations.",
      author: "Mohammed Al-Rashid",
      position: "CEO, TechVentures",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
    },
    {
      quote: "Their attention to detail and commitment to quality is unmatched. They delivered our e-commerce platform on time and within budget.",
      author: "Fatima Hassan",
      position: "Founder, StyleHub",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60"
    },
    {
      quote: "Working with Start Up 13 was a game-changer for our startup. Their technical skills and creative approach helped us stand out in the market.",
      author: "Khalid Omar",
      position: "CTO, InnovateTech",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1D4ED8]/5 blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="text-[#00F0FF] font-medium text-sm uppercase tracking-wider mb-4 block"
            data-testid="testimonials-section-title"
          >
            {t.testimonials.sectionTitle}
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            data-testid="testimonials-title"
          >
            {t.testimonials.title}
          </h2>
          <p 
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            data-testid="testimonials-description"
          >
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-testid="testimonials-grid"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#00F0FF]/30 transition-all duration-500 card-hover"
              data-testid={`testimonial-card-${index}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 end-6 opacity-10">
                <Quote className="w-16 h-16 text-[#00F0FF]" />
              </div>

              {/* Content */}
              <div className="relative">
                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#00F0FF]/30"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-slate-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
