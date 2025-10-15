import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Add custom animations to the global styles
const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fade-in-up {
    from { 
      opacity: 0; 
      transform: translateY(30px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @keyframes slide-in-bottom {
    from { 
      opacity: 0; 
      transform: translateY(50px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @keyframes slide-in-left {
    from { 
      opacity: 0; 
      transform: translateX(-100px); 
    }
    to { 
      opacity: 1; 
      transform: translateX(0); 
    }
  }
  
  @keyframes slide-in-right {
    from { 
      opacity: 0; 
      transform: translateX(100px); 
    }
    to { 
      opacity: 1; 
      transform: translateX(0); 
    }
  }
  
  @keyframes text-glow {
    0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.5); }
    50% { text-shadow: 0 0 30px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6); }
  }
  
  @keyframes bounce-in {
    0% { 
      opacity: 0; 
      transform: scale(0.3) translateY(50px); 
    }
    50% { 
      opacity: 1; 
      transform: scale(1.05) translateY(0); 
    }
    70% { 
      transform: scale(0.9); 
    }
    100% { 
      opacity: 1; 
      transform: scale(1) translateY(0); 
    }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out;
  }
  
  .animate-slide-in-bottom {
    animation: slide-in-bottom 1s ease-out;
  }
  
  .animate-slide-in-left {
    animation: slide-in-left 1s ease-out;
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 1s ease-out;
  }
  
  .animate-text-glow {
    animation: text-glow 3s ease-in-out infinite;
  }
  
  .animate-bounce-in {
    animation: bounce-in 1s ease-out;
  }
  
  .delay-200 {
    animation-delay: 200ms;
  }
  
  .delay-400 {
    animation-delay: 400ms;
  }
`;

const heroImages = [
  "/images/interrior/hero section.jpg",
  "/images/interrior/hero section2.jpg", 
  "/images/interrior/Brown-living-room-ideas.jpg"
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [satisfiedCustomers, setSatisfiedCustomers] = useState(0);
  const [expertTeam, setExpertTeam] = useState(0);
  const [qualityServices, setQualityServices] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [currentPartnership, setCurrentPartnership] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialInterval);
  }, []);

  useEffect(() => {
    const partnershipInterval = setInterval(() => {
      setCurrentPartnership((prev) => (prev + 1) % partnershipImages.length);
    }, 2000);
    return () => clearInterval(partnershipInterval);
  }, []);

  // Counting animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start counting animations
          animateCount(280, setSatisfiedCustomers, 50);
          animateCount(350, setExpertTeam, 50);
          animateCount(90, setQualityServices, 50);
          animateCount(100, setSatisfactionRate, 50);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  // Why Choose Us animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger Why Choose Us animations
          const imageElement = entry.target.querySelector('.why-choose-image');
          const textElement = entry.target.querySelector('.why-choose-text');
          
          if (imageElement) {
            imageElement.style.animation = 'slide-in-left 1.5s ease-out';
          }
          if (textElement) {
            textElement.style.animation = 'slide-in-right 1.5s ease-out 0.3s both';
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const whyChooseSection = document.getElementById('why-choose-section');
    if (whyChooseSection) {
      observer.observe(whyChooseSection);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animateCount = (target, setter, duration) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  const handleContactClick = () => {
    setShowContact(true);
  };

  const handleCloseContact = () => {
    setShowContact(false);
  };

  const services = [
    {
      icon: "🛋️",
      title: "Interior Design & Renovation",
      desc: "Tailored designs that match your lifestyle and elevate your space.",
      image: "/images/IMG-20250805-WA0149.jpg"
    },
    {
      icon: "🪚", 
      title: "Fit-Outs & Carpentry",
      desc: "Elegant carpentry and customized fit-outs built to perfection.",
      image: "/images/IMG-20250805-WA0148.jpg"
    },
    {
      icon: "❄️",
      title: "Air Conditioning & Electrical", 
      desc: "Energy-efficient and safety-compliant AC and electrical solutions.",
      image: "/images/IMG-20250805-WA0147.jpg"
    },
    {
      icon: "🌿",
      title: "Landscaping & Outdoor",
      desc: "Designing serene and functional outdoor living spaces.",
      image: "/images/IMG-20250805-WA0146.jpg"
    },
    {
      icon: "🎨",
      title: "Painting & Flooring",
      desc: "Premium finishes using top-quality paints and materials.",
      image: "/images/IMG-20250805-WA0145.jpg"
    },
    {
      icon: "🧰",
      title: "Maintenance Services",
      desc: "Reliable routine checks, repairs, and emergency fixes.",
      image: "/images/IMG-20250805-WA0144.jpg"
    }
  ];

  const whyChooseUs = [
    {
      icon: "✅",
      title: "Experienced Team",
      desc: "Skilled professionals with years of industry expertise"
    },
    {
      icon: "✅", 
      title: "Timely Execution",
      desc: "Fast turnaround with high-quality work"
    },
    {
      icon: "✅",
      title: "Affordable Packages", 
      desc: "Flexible options for every budget"
    },
    {
      icon: "✅",
      title: "24/7 Support",
      desc: "Emergency services available anytime"
    },
    {
      icon: "✅",
      title: "Certified & Insured",
      desc: "Reliable, safe, and fully insured"
    }
  ];

  const servicePackages = [
    {
      name: "Minimal",
      color: "🟡",
      price: "AED 108–125/sqft",
      style: "Clean | Essential | Cost-Efficient",
      perfectFor: "Budget homes, rentals, first-time buyers",
      features: [
        "Neutral wall paint",
        "Ceramic/laminate flooring",
        "Ready-made MDF kitchen",
        "Standard fixtures",
        "Ceiling fans",
        "Functional lighting"
      ],
      image: "/images/IMG-20250805-WA0143.jpg"
    },
    {
      name: "Modern",
      color: "🟠",
      price: "AED 133–151/sqft", 
      style: "Sleek | Urban | Functional",
      perfectFor: "Airbnb homes, small families",
      features: [
        "Feature walls",
        "Vinyl/matte porcelain flooring",
        "Modular kitchen with quartz",
        "LED mirrors",
        "Smart switches"
      ],
      image: "/images/IMG-20250805-WA0142.jpg"
    },
    {
      name: "Luxury",
      color: "🔵",
      price: "AED 205–271/sqft",
      style: "Elegant | Custom | High-End Finishes", 
      perfectFor: "Upscale homeowners, value maximizers",
      features: [
        "Textured finishes",
        "Italian marble flooring",
        "Designer kitchen",
        "Grohe/Kohler bathroom fittings",
        "Walk-in wardrobes",
        "Full smart automation"
      ],
      image: "/images/IMG-20250805-WA0141.jpg"
    },
    {
      name: "Signature Bespoke",
      color: "🟣",
      price: "AED 291–308/sqft",
      style: "Architectural | Bespoke | Ultra-Premium",
      perfectFor: "Marina/Downtown homes, signature builds",
      features: [
        "Marble slab backsplashes",
        "Wood panel features",
        "Frameless glass partitions",
        "Smart curtain controls",
        "Custom vanities"
      ],
      image: "/images/IMG-20250805-WA0140.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Elena Rodriguez",
      role: "Property Investor",
      text: "They delivered our luxury renovation on time and within budget. The craftsmanship is exceptional."
    },
    {
      name: "Sarah Ahmed", 
      role: "Dubai Marina Resident",
      text: "FIXITBILAL transformed our apartment beyond expectations. The attention to detail and quality of work is outstanding."
    },
    {
      name: "Mohammed Al Rashid",
      role: "Business Owner", 
      text: "Professional team, timely execution, and beautiful results. Highly recommend for any renovation project."
    }
  ];

  const portfolioProjects = [
    {
      title: "Luxury Villa – Palm Jumeirah",
      before: "/images/Before & After/Palm Jumeirah-Before.jpeg",
      after: "/images/Before & After/Palm Jumeirah-After.avif"
    },
    {
      title: "Downtown Dubai Apartment",
      before: "/images/Before & After/Modern Apartment – Downtown Dubai-BEFORE.jpeg",
      after: "/images/Before & After/Modern Apartment – Downtown Dubai-AFTER.jpeg"
    },
    {
      title: "Office Space – Business Bay",
      before: "/images/Before & After/Office Space – Business Bay-before.jpeg",
      after: "/images/Before & After/Office Space – Business Bay-After.png"
    }
  ];

  const portfolioImages = [
    "/images/IMG-20250805-WA0147.jpg",
    "/images/IMG-20250805-WA0152.jpg",
    "/images/IMG-20250805-WA0143.jpg",
    "/images/IMG-20250805-WA0149.jpg",
    "/images/IMG-20250805-WA0151.jpg",
    "/images/IMG-20250805-WA0145.jpg",
    "/images/IMG-20250805-WA0140.jpg",
    "/images/IMG-20250805-WA0153.jpg",
    "/images/IMG-20250805-WA0148.jpg",
    "/images/IMG-20250805-WA0142.jpg",
    "/images/IMG-20250805-WA0146.jpg",
    "/images/IMG-20250805-WA0139.jpg",
    "/images/IMG-20250805-WA0141.jpg",
    "/images/IMG-20250805-WA0150.jpg",
    "/images/IMG-20250805-WA0144.jpg",
    "/images/IMG-20250805-WA0138.jpg"
  ];

  const partnershipImages = [
    "/images/partnership/WhatsApp Image 2025-08-06 at 17.15.05_9157f94d.jpg",
    "/images/partnership/WhatsApp Image 2025-08-06 at 17.14.31_b3e2078f.jpg",
    "/images/partnership/WhatsApp Image 2025-08-06 at 17.13.46_af198770.jpg",
    "/images/partnership/WhatsApp Image 2025-08-06 at 17.13.05_dd15b325.jpg"
  ];

  const teamMembers = [
    {
      name: "Ahmed Bilal",
      role: "Founder & CEO",
      image: "/images/interrior/IMG-20250805-WA0120.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Lead Interior Designer",
      image: "/images/interrior/IMG-20250805-WA0111.jpg"
    },
    {
      name: "Mohammed Ali",
      role: "Senior Project Manager",
      image: "/images/interrior/IMG-20250805-WA0110.jpg"
    },
    {
      name: "Elena Rodriguez",
      role: "Architectural Consultant",
      image: "/images/interrior/IMG-20250805-WA0150.jpg"
    }
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      <style>{customStyles}</style>
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#392e23] bg-opacity-95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center animate-fade-in">
            <img src="/images/logo.png" alt="FIXITBILAL Logo" className="w-12 h-12 object-contain rounded-lg hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl" />
            <div className="ml-3">
              <div className="text-xl font-bold text-[#FDF8F2] tracking-wide">FIXITBILAL</div>
              <div className="text-xs text-white font-medium">INTERIOR DESIGN & RENOVATION</div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 font-medium">
            <a href="#home" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B168] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B168] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">Portfolio</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B168] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B168] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B168] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link to="/wpc-outdoor-decking" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">WPC Decking</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B168] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <span className={`text-sm font-semibold hover:scale-105 transition-transform duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>📞 +971 55 834 4467</span>
          </nav>
          <button className={`md:hidden hover:scale-110 transition-transform duration-300 ${
            scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
          }`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen relative overflow-hidden">
        <img
          src={heroImages[currentImage]}
          alt="Interior Design"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-110 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-md animate-fade-in-up">
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-xl animate-slide-in-bottom">
                <h2 className="text-2xl md:text-3xl font-normal mb-4 leading-tight text-[#392e23] tracking-wide">
                  Dubai's Trusted Interior Design & Renovation Experts
                </h2>
                <p className="text-sm md:text-base mb-6 font-light leading-relaxed text-[#2A211A]">
                  At FIXITBILAL, we create beautiful, functional spaces tailored to your lifestyle. From design to delivery-experience hassle-free transformations across the UAE.
                </p>
                <button 
                  onClick={handleContactClick}
                  className="bg-[#392e23] text-[#FDF8F2] px-8 py-4 rounded-lg hover:bg-[#B89345] hover:text-[#FDF8F2] transition-all duration-500 text-lg font-semibold transform hover:scale-105 hover:shadow-2xl animate-bounce-in"
                >
                  Book a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
                index === currentImage ? 'bg-white shadow-lg shadow-white/50' : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-12 bg-[#F1E7D0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-normal mb-4 text-[#392e23] tracking-wide hover:scale-105 transition-transform duration-300 uppercase">
              Trusted Experts in Property Transformation
            </h2>
            <p className="text-lg text-[#2A211A] max-w-3xl mx-auto leading-relaxed mb-6 font-light">
              At FIXITBILAL, we craft residential and commercial spaces that blend style, comfort, and functionality. With a team of seasoned professionals and a passion for detail, we deliver exceptional results—on time and on budget.
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-transparent text-[#392e23] border-2 border-[#392e23] px-8 py-3 rounded-lg hover:bg-[#392e23] hover:text-[#FDF8F2] transition-all duration-500 text-base font-semibold transform hover:scale-110 hover:shadow-2xl"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-section" className="py-12 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 why-choose-image">
              <img 
                src="/images/IMG-20250805-WA0150.jpg" 
                alt="Professional Team" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 hover:shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 why-choose-text">
              <h2 className="text-4xl font-normal mb-8 text-[#392e23] tracking-wide hover:scale-105 transition-transform duration-300">Why Choose Us?</h2>
              <p className="text-xl text-[#2A211A] leading-relaxed mb-8 font-light">
                At FIXITBILAL, our skilled professionals deliver high-quality results with top-notch materials and strict quality control. We ensure customer satisfaction with seamless solutions from planning and design to execution and aftercare.
              </p>
              <button 
                onClick={handleContactClick}
                className="bg-transparent text-[#392e23] border-2 border-[#392e23] px-8 py-4 rounded-lg hover:bg-[#392e23] hover:text-[#FDF8F2] transition-all duration-500 text-lg font-semibold transform hover:scale-110 hover:shadow-2xl"
              >
                More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-16 bg-[#F1E7D0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-[#392e23] mb-2">{satisfiedCustomers}+</div>
              <div className="text-lg text-[#2A211A] font-medium">Satisfied Customer</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-[#392e23] mb-2">{expertTeam}+</div>
              <div className="text-lg text-[#2A211A] font-medium">Expert In house team</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-[#392e23] mb-2">{qualityServices}+</div>
              <div className="text-lg text-[#2A211A] font-medium">Quality Services</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '600ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-[#392e23] mb-2">{satisfactionRate}%</div>
              <div className="text-lg text-[#2A211A] font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Slideshow */}
      <section className="py-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-normal text-[#392e23] tracking-wide animate-fade-in-up">Our Partnerships</h2>
            <p className="text-lg text-[#2A211A] mt-2 font-light">Trusted Partners in Excellence</p>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentPartnership * 100}%)` }}>
              {partnershipImages.map((image, index) => (
                <div key={index} className="w-full h-64 flex-shrink-0 relative">
                  <img
                    src={image}
                    alt={`Partnership ${index + 1}`}
                    className="w-full h-full object-contain bg-[#F1E7D0]"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {partnershipImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPartnership 
                      ? 'bg-[#D6B168] shadow-lg' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  onClick={() => setCurrentPartnership(index)}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentPartnership((prev) => (prev - 1 + partnershipImages.length) % partnershipImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#392e23]/80 text-[#FDF8F2] p-2 rounded-full hover:bg-[#392e23] transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentPartnership((prev) => (prev + 1) % partnershipImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#392e23]/80 text-[#FDF8F2] p-2 rounded-full hover:bg-[#392e23] transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-24 bg-[#FAF9F7]">
        <div className="max-w-6xl mx-auto px-6">
                      <h2 className="text-4xl font-normal text-center mb-20 text-[#392e23] tracking-wide animate-fade-in-up hover:scale-105 transition-transform duration-300">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-[#FFFFFF] p-10 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-[#E1D9CE] overflow-hidden group animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="h-48 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 group-hover:scale-125"
                    style={{animation: `slide-in-left 1s ease-out ${index * 0.2}s both`}}
                  />
                </div>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#392e23] tracking-wide group-hover:text-[#B89345] transition-colors duration-300">{service.title}</h3>
                <p className="text-[#2A211A] text-lg leading-relaxed font-light group-hover:text-[#392e23] transition-colors duration-300">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 animate-fade-in-up">
            <button 
              onClick={handleContactClick}
              className="bg-transparent text-[#392e23] border-2 border-[#392e23] px-10 py-4 rounded-lg hover:bg-[#392e23] hover:text-[#FDF8F2] transition-all duration-500 text-lg font-semibold transform hover:scale-110 hover:shadow-2xl"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio – Our Work */}
      <section id="portfolio" className="py-24 bg-[#F1E7D0]">
        <div className="max-w-6xl mx-auto px-6">
                      <h2 className="text-4xl font-normal text-center mb-20 text-[#392e23] tracking-wide animate-fade-in-up hover:scale-105 transition-transform duration-300">Portfolio – Our Work</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="bg-[#FFFFFF] rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <h4 className="text-xl font-bold mb-6 text-[#392e23] text-center tracking-wide group-hover:text-[#B89345] transition-colors duration-300">{project.title}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#2A211A] mb-2">Before</p>
                    <img src={project.before} alt="Before" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" style={{animation: `slide-in-left 1s ease-out ${index * 0.3}s both`}} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2A211A] mb-2">After</p>
                    <img src={project.after} alt="After" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" style={{animation: `slide-in-right 1s ease-out ${index * 0.3 + 0.2}s both`}} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIXITBILAL INTERIOR DESIGN PORTFOLIO 2025 */}
      <section className="py-24 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-normal text-center mb-20 text-[#392e23] tracking-wide animate-fade-in-up hover:scale-105 transition-transform duration-300">
            FIXITBILAL INTERIOR DESIGN PORTFOLIO 2025
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <img 
                  src={image} 
                  alt={`Interior Design ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{animation: `slide-in-left 1s ease-out ${index * 0.1}s both`}}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 bg-[#F1E7D0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-normal text-center mb-20 text-[#392e23] tracking-wide animate-fade-in-up hover:scale-105 transition-transform duration-300">Service Packages</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className="bg-[#FFFFFF] p-10 rounded-2xl border border-[#E1D9CE] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden group animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="h-48 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{pkg.color}</div>
                <h3 className="text-3xl font-bold mb-3 text-[#392e23] tracking-wide group-hover:text-[#B89345] transition-colors duration-300">{pkg.name}</h3>
                <p className="text-[#392e23] font-bold text-lg mb-3">{pkg.price}</p>
                <p className="text-[#2A211A] text-sm mb-4 font-medium">{pkg.style}</p>
                <p className="text-sm text-[#2A211A] mb-6 font-light">
                  <strong className="text-[#392e23]">Perfect for:</strong> {pkg.perfectFor}
                </p>
                <div className="mb-6 flex-grow">
                  <p className="text-sm font-bold text-[#392e23] mb-3">Includes:</p>
                  <ul className="text-sm text-[#2A211A] space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start font-light">
                        <span className="text-[#392e23] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={handleContactClick}
                  className="w-full bg-transparent text-[#392e23] border-2 border-[#392e23] px-8 py-4 rounded-lg hover:bg-[#392e23] hover:text-[#FDF8F2] transition-all duration-500 text-lg font-semibold transform hover:scale-105 hover:shadow-2xl mt-auto"
                >
                  Book {pkg.name} Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-[#F1E7D0]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-[#392e23] mb-4 tracking-wide animate-fade-in-up hover:scale-105 transition-transform duration-300">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-[#2A211A] mb-6 font-light animate-fade-in-up delay-200">
            Book your Free Consultation today.
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-transparent text-[#392e23] border-2 border-[#392e23] px-8 py-3 rounded-lg hover:bg-[#392e23] hover:text-[#FDF8F2] transition-all duration-500 text-lg font-semibold transform hover:scale-110 hover:shadow-2xl animate-bounce-in"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-normal text-[#392e23]">Contact Us</h2>
              <button 
                onClick={handleCloseContact}
                className="text-[#2A211A] hover:text-[#392e23] text-2xl"
              >
                ×
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#392e23] mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#392e23] mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">Service Required</label>
                <select className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent">
                  <option value="">Select a service</option>
                  <option value="interior-design">Interior Design & Renovation</option>
                  <option value="carpentry">Fit-Outs & Carpentry</option>
                  <option value="ac-electrical">Air Conditioning & Electrical</option>
                  <option value="landscaping">Landscaping & Outdoor</option>
                  <option value="painting">Painting & Flooring</option>
                  <option value="maintenance">Maintenance Services</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">Package (Optional)</label>
                <select className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent">
                  <option value="">Select a package</option>
                  <option value="minimal">Minimal Package</option>
                  <option value="modern">Modern Package</option>
                  <option value="luxury">Luxury Package</option>
                  <option value="signature">Signature Bespoke Package</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              
              <div className="flex gap-4">
                <button 
                  type="submit"
                  className="flex-1 bg-[#392e23] text-[#FDF8F2] py-4 rounded-lg hover:bg-[#B89345] transition-all duration-300 font-semibold"
                >
                  Send Message
                </button>
                <button 
                  type="button"
                  onClick={handleCloseContact}
                  className="flex-1 bg-[#E1D9CE] text-[#392e23] py-4 rounded-lg hover:bg-[#D6B168] transition-all duration-300 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-[#E1D9CE]">
              <h3 className="text-lg font-semibold text-[#392e23] mb-4">Contact Information</h3>
              <div className="space-y-2 text-[#2A211A]">
                <p>📞 +971 55 834 4467</p>
                <p>📧 info@fixitbilal.com</p>
                <p>🌐 www.fixitbilal.com</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#392e23] text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/images/logo.png" alt="FIXITBILAL Logo" className="w-12 h-12 object-contain rounded-lg" />
                <div className="ml-3">
                  <div className="text-lg font-bold text-white tracking-wide">FIXITBILAL</div>
                  <div className="text-xs text-[#D6B168] font-medium">INTERIOR DESIGN & RENOVATION</div>
                </div>
              </div>
              <p className="text-[#D6B168] text-sm mb-1">📞 +971 55 834 4467</p>
              <p className="text-[#D6B168] text-sm mb-1">📧 info@fixitbilal.com</p>
              <p className="text-[#D6B168] text-sm">🌐 www.fixitbilal.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg tracking-wide">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-[#D6B168] hover:text-white transition-colors duration-300 text-sm font-light">Home</a></li>
                <li><a href="#services" className="text-[#D6B168] hover:text-white transition-colors duration-300 text-sm font-light">Services</a></li>
                <li><a href="#portfolio" className="text-[#D6B168] hover:text-white transition-colors duration-300 text-sm font-light">Portfolio</a></li>
                <li><a href="#about" className="text-[#D6B168] hover:text-white transition-colors duration-300 text-sm font-light">About</a></li>
                <li><Link to="/wpc-outdoor-decking" className="text-[#D6B168] hover:text-white transition-colors duration-300 text-sm font-light">WPC Decking</Link></li>
                <li><button onClick={handleContactClick} className="text-[#D6B168] hover:text-white transition-colors duration-300 text-sm font-light text-left">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg tracking-wide">Contact Info</h4>
              <p className="text-[#D6B168] text-sm mb-1">📞 +971 55 834 4467</p>
              <p className="text-[#D6B168] text-sm mb-1">📧 info@fixitbilal.com</p>
              <p className="text-[#D6B168] text-sm">🌐 www.fixitbilal.com</p>
            </div>
          </div>
          <div className="border-t border-[#B89345] mt-6 pt-4 text-center text-[#D6B168]">
            <p className="text-sm font-light">&copy; 2025 FIXITBILAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}