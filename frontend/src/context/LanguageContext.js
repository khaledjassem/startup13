import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      team: "Team",
      testimonials: "Testimonials",
      contact: "Contact",
      getStarted: "Get Started"
    },
    // Hero
    hero: {
      tagline: "Building Digital Excellence",
      title: "We Transform Ideas Into",
      titleHighlight: "Digital Reality",
      description: "Start Up 13 is a leading software development company specializing in creating innovative digital solutions that drive business growth and success.",
      cta: "Start Your Project",
      ctaSecondary: "View Our Work"
    },
    // About
    about: {
      sectionTitle: "About Us",
      title: "Crafting Digital Solutions Since Day One",
      description: "We are a passionate team of developers, designers, and innovators dedicated to transforming your ideas into powerful digital solutions. With expertise across multiple platforms and technologies, we deliver exceptional results that exceed expectations.",
      stat1: "Projects Completed",
      stat2: "Happy Clients",
      stat3: "Years Experience",
      stat4: "Team Members"
    },
    // Services
    services: {
      sectionTitle: "Our Services",
      title: "What We Do Best",
      description: "We offer comprehensive digital solutions tailored to your business needs.",
      service1: {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences."
      },
      service2: {
        title: "Web Development",
        description: "Custom web applications and websites built with cutting-edge technologies for optimal performance."
      },
      service3: {
        title: "UI/UX Design",
        description: "User-centered design solutions that create intuitive and engaging digital experiences."
      },
      service4: {
        title: "Custom Software Solutions",
        description: "Tailored software solutions designed to address your unique business challenges and requirements."
      }
    },
    // Portfolio
    portfolio: {
      sectionTitle: "Portfolio",
      title: "Our Recent Work",
      description: "Explore some of our latest projects and see how we've helped businesses achieve their digital goals.",
      viewProject: "View Project"
    },
    // Team
    team: {
      sectionTitle: "Our Team",
      title: "Meet The Experts",
      description: "Our talented team brings together diverse skills and expertise to deliver outstanding results."
    },
    // Testimonials
    testimonials: {
      sectionTitle: "Testimonials",
      title: "What Our Clients Say",
      description: "Hear from the businesses we've helped transform through our digital solutions."
    },
    // Contact
    contact: {
      sectionTitle: "Contact Us",
      title: "Let's Work Together",
      description: "Ready to start your project? Get in touch with us and let's discuss how we can help bring your vision to life.",
      form: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again."
      },
      info: {
        email: "Email",
        phone: "Phone",
        address: "Address",
        addressValue: "Turkey"
      }
    },
    // Footer
    footer: {
      description: "Transforming ideas into digital reality. We build innovative software solutions that drive business success.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact Info",
      rights: "All rights reserved.",
      followUs: "Follow Us"
    }
  },
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      team: "فريقنا",
      testimonials: "آراء العملاء",
      contact: "تواصل معنا",
      getStarted: "ابدأ الآن"
    },
    // Hero
    hero: {
      tagline: "نبني التميز الرقمي",
      title: "نحول الأفكار إلى",
      titleHighlight: "واقع رقمي",
      description: "ستارت أب 13 شركة رائدة في تطوير البرمجيات متخصصة في إنشاء حلول رقمية مبتكرة تدفع نمو الأعمال ونجاحها.",
      cta: "ابدأ مشروعك",
      ctaSecondary: "شاهد أعمالنا"
    },
    // About
    about: {
      sectionTitle: "من نحن",
      title: "نصنع الحلول الرقمية منذ اليوم الأول",
      description: "نحن فريق شغوف من المطورين والمصممين والمبتكرين ملتزمون بتحويل أفكارك إلى حلول رقمية قوية. مع خبرتنا عبر منصات وتقنيات متعددة، نقدم نتائج استثنائية تتجاوز التوقعات.",
      stat1: "مشروع مكتمل",
      stat2: "عميل سعيد",
      stat3: "سنوات خبرة",
      stat4: "عضو في الفريق"
    },
    // Services
    services: {
      sectionTitle: "خدماتنا",
      title: "ما نتقنه",
      description: "نقدم حلولاً رقمية شاملة مصممة خصيصاً لاحتياجات عملك.",
      service1: {
        title: "تطوير تطبيقات الموبايل",
        description: "تطبيقات موبايل أصلية ومتعددة المنصات لنظامي iOS و Android تقدم تجارب مستخدم استثنائية."
      },
      service2: {
        title: "تطوير الويب",
        description: "تطبيقات ومواقع ويب مخصصة مبنية بأحدث التقنيات لأداء مثالي."
      },
      service3: {
        title: "تصميم UI/UX",
        description: "حلول تصميم تركز على المستخدم لخلق تجارب رقمية بديهية وجذابة."
      },
      service4: {
        title: "حلول برمجية مخصصة",
        description: "حلول برمجية مصممة خصيصاً لمعالجة تحديات ومتطلبات عملك الفريدة."
      }
    },
    // Portfolio
    portfolio: {
      sectionTitle: "أعمالنا",
      title: "أحدث مشاريعنا",
      description: "استكشف بعض أحدث مشاريعنا وشاهد كيف ساعدنا الشركات في تحقيق أهدافها الرقمية.",
      viewProject: "عرض المشروع"
    },
    // Team
    team: {
      sectionTitle: "فريقنا",
      title: "تعرف على الخبراء",
      description: "يجمع فريقنا الموهوب بين مهارات وخبرات متنوعة لتقديم نتائج متميزة."
    },
    // Testimonials
    testimonials: {
      sectionTitle: "آراء العملاء",
      title: "ماذا يقول عملاؤنا",
      description: "استمع إلى الشركات التي ساعدناها في التحول من خلال حلولنا الرقمية."
    },
    // Contact
    contact: {
      sectionTitle: "تواصل معنا",
      title: "لنعمل معاً",
      description: "مستعد لبدء مشروعك؟ تواصل معنا ودعنا نناقش كيف يمكننا المساعدة في تحقيق رؤيتك.",
      form: {
        name: "اسمك",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "الموضوع",
        message: "رسالتك",
        submit: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "تم إرسال الرسالة بنجاح!",
        error: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى."
      },
      info: {
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        address: "العنوان",
        addressValue: "تركيا"
      }
    },
    // Footer
    footer: {
      description: "نحول الأفكار إلى واقع رقمي. نبني حلولاً برمجية مبتكرة تدفع نجاح الأعمال.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      contact: "معلومات التواصل",
      rights: "جميع الحقوق محفوظة.",
      followUs: "تابعنا"
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    setIsRTL(language === 'ar');
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
