import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Twitter, Github } from 'lucide-react';

export function TeamSection() {
  const { t, isRTL } = useLanguage();

  const team = [
    {
      name: "Ahmed Hassan",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
      socials: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Sara Ahmad",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
      socials: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Omar Ali",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
      socials: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Lina Mohammed",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
      socials: { linkedin: "#", twitter: "#", github: "#" }
    }
  ];

  return (
    <section
      id="team"
      data-testid="team-section"
      className="py-24 md:py-32 bg-[#0A111C]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="text-[#00F0FF] font-medium text-sm uppercase tracking-wider mb-4 block"
            data-testid="team-section-title"
          >
            {t.team.sectionTitle}
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            data-testid="team-title"
          >
            {t.team.title}
          </h2>
          <p 
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            data-testid="team-description"
          >
            {t.team.description}
          </p>
        </div>

        {/* Team Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-testid="team-grid"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#00F0FF]/30 transition-all duration-500 card-hover"
              data-testid={`team-card-${index}`}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B12] via-[#060B12]/50 to-transparent" />

                {/* Social Links - Appear on Hover */}
                <div className="absolute bottom-4 start-0 end-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={member.socials.linkedin}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00F0FF] hover:text-[#060B12] transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00F0FF] hover:text-[#060B12] transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.github}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00F0FF] hover:text-[#060B12] transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#00F0FF] transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
