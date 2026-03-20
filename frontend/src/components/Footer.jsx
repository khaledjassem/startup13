import { useLanguage } from '../context/LanguageContext';
import { Instagram, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';

export function Footer() {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
  ];

  const services = [
    { label: t.services.service1.title, href: '#services' },
    { label: t.services.service2.title, href: '#services' },
    { label: t.services.service3.title, href: '#services' },
    { label: t.services.service4.title, href: '#services' },
  ];

  const socials = [
    { icon: Instagram, href: 'https://www.instagram.com/start_up13/', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/startup13', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/startup13', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/startup13', label: 'Facebook' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      data-testid="footer"
      className="relative pt-20 pb-8 border-t border-white/5"
    >
      {/* Background Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#00F0FF]/5 blur-[120px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6" data-testid="footer-logo">
              <span className="text-2xl font-bold tracking-tight">
                Start Up <span className="text-[#00F0FF]">13</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3" data-testid="footer-socials">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00F0FF] hover:text-[#060B12] transition-colors"
                  aria-label={social.label}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3" data-testid="footer-quick-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-slate-400 hover:text-[#00F0FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.services}</h4>
            <ul className="space-y-3" data-testid="footer-services">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    onClick={(e) => scrollToSection(e, service.href)}
                    className="text-slate-400 hover:text-[#00F0FF] transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-3 text-slate-400" data-testid="footer-contact">
              <li>
                <a href="mailto:info@startup13.net" className="hover:text-[#00F0FF] transition-colors">
                  info@startup13.net
                </a>
              </li>
              <li>
                <a href="tel:+905510443444" className="hover:text-[#00F0FF] transition-colors">
                  +90 551 044 3444
                </a>
              </li>
              <li>{t.contact.info.addressValue}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm" data-testid="footer-copyright">
            © {new Date().getFullYear()} Start Up 13. {t.footer.rights}
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#00F0FF]/10 flex items-center justify-center hover:bg-[#00F0FF] hover:text-[#060B12] transition-colors"
            aria-label="Scroll to top"
            data-testid="scroll-to-top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
