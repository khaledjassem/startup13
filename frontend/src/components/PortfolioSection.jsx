import { useLanguage } from '../context/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function PortfolioSection() {
  const { t, isRTL } = useLanguage();

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
      description: "A modern e-commerce platform with seamless user experience"
    },
    {
      title: "Healthcare App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop&q=60",
      description: "Patient management and telemedicine solution"
    },
    {
      title: "FinTech Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      description: "Financial analytics dashboard with real-time data"
    },
    {
      title: "Smart Home System",
      category: "Custom Software",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60",
      description: "IoT-based home automation system"
    },
    {
      title: "Learning Management",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
      description: "Online education platform with interactive features"
    },
    {
      title: "Delivery Tracking",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=60",
      description: "Real-time logistics and delivery tracking app"
    }
  ];

  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00F0FF]/5 blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="text-[#00F0FF] font-medium text-sm uppercase tracking-wider mb-4 block"
            data-testid="portfolio-section-title"
          >
            {t.portfolio.sectionTitle}
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            data-testid="portfolio-title"
          >
            {t.portfolio.title}
          </h2>
          <p 
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            data-testid="portfolio-description"
          >
            {t.portfolio.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-testid="portfolio-grid"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#00F0FF]/30 transition-all duration-500 card-hover"
              data-testid={`portfolio-card-${index}`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B12] via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 start-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00F0FF]/20 text-[#00F0FF] backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#060B12]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-[#00F0FF] text-[#060B12] hover:bg-[#00C3D0]"
                    data-testid={`view-project-${index}`}
                  >
                    {t.portfolio.viewProject}
                    <ExternalLink className="ms-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
