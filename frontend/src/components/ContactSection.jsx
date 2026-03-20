import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export function ContactSection() {
  const { t, language, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, {
        ...formData,
        language
      });

      if (response.data.success) {
        toast.success(t.contact.form.success);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(t.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: t.contact.info.email, value: 'info@startup13.net', href: 'mailto:info@startup13.net' },
    { icon: Phone, label: t.contact.info.phone, value: '+90 551 044 3444', href: 'tel:+905510443444' },
    { icon: MapPin, label: t.contact.info.address, value: t.contact.info.addressValue, href: '#' }
  ];

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-[#0A111C]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="text-[#00F0FF] font-medium text-sm uppercase tracking-wider mb-4 block"
            data-testid="contact-section-title"
          >
            {t.contact.sectionTitle}
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            data-testid="contact-title"
          >
            {t.contact.title}
          </h2>
          <p 
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            data-testid="contact-description"
          >
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div 
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5"
            data-testid="contact-form-container"
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.form.name}
                    required
                    className="bg-white/5 border-white/10 focus:border-[#00F0FF] h-12"
                    data-testid="contact-input-name"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.form.email}
                    required
                    className="bg-white/5 border-white/10 focus:border-[#00F0FF] h-12"
                    data-testid="contact-input-email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.form.phone}
                    className="bg-white/5 border-white/10 focus:border-[#00F0FF] h-12"
                    data-testid="contact-input-phone"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.form.subject}
                    required
                    className="bg-white/5 border-white/10 focus:border-[#00F0FF] h-12"
                    data-testid="contact-input-subject"
                  />
                </div>
              </div>

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.message}
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 focus:border-[#00F0FF] resize-none"
                  data-testid="contact-input-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00F0FF] text-[#060B12] hover:bg-[#00C3D0] font-semibold h-12 btn-glow"
                data-testid="contact-submit-button"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="me-2 w-5 h-5 animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="me-2 w-5 h-5" />
                    {t.contact.form.submit}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6" data-testid="contact-info">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00F0FF]/30 transition-all duration-300 group card-hover"
                  data-testid={`contact-info-${index}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#00F0FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00F0FF]/20 transition-colors">
                    <info.icon className="w-6 h-6 text-[#00F0FF]" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400 mb-1">{info.label}</h4>
                    <p className="text-lg font-medium group-hover:text-[#00F0FF] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div 
              className="mt-8 h-48 rounded-2xl overflow-hidden border border-white/10"
              data-testid="contact-map"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.6395847988847!2d28.9783!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzI5LjUiTiAyOMKwNTgnNDEuOSJF!5e0!3m2!1sen!2str!4v1600000000000!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
