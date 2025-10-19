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
`;

const wpcProducts = [
  // Hollow Square 22mm Grooved Lines
  {
    category: "WPC Decking Planks Hollow Square 22mm Grooved lines",
    products: [
      {
        name: "Dark Brown Lines Decking",
        code: "WPC Dark Brown Lines",
        normalPrice: "AED 195/m2",
        salePrice: "AED 175/m2",
        color: "Dark Brown",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 50%"
      },
      {
        name: "Dark Brown Wood Grains",
        code: "WPC Dark Brown Wood Grains",
        normalPrice: "AED 195/m2",
        salePrice: "AED 175/m2",
        color: "Dark Brown",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 50%"
      },
      {
        name: "Grey Lines Decking",
        code: "WPC Grey Lines",
        normalPrice: "AED 195/m2",
        salePrice: "AED 175/m2",
        color: "Grey",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 50%"
      },
      {
        name: "WPC Maple Lines Decking",
        code: "WPC Maple Lines",
        normalPrice: "AED 195/m2",
        salePrice: "AED 175/m2",
        color: "Maple",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 50%"
      },
      {
        name: "WPC Maple Wood Grains",
        code: "WPC Maple Wood Grains",
        normalPrice: "AED 195/m2",
        salePrice: "AED 175/m2",
        color: "Maple",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 50%"
      },
      {
        name: "Pineapple Decking",
        code: "WPC Pineapple",
        normalPrice: "AED 195/m2",
        salePrice: "AED 175/m2",
        color: "Pineapple",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 50%"
      },
      {
        name: "WPC Cedar Decking",
        code: "WPC Cedar",
        normalPrice: "AED 195/m2",
        salePrice: "AED 175/m2",
        color: "Pineapple",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 50%"
      }
    ]
  },
  // 3D Pattern Effect 24mm
  {
    category: "WPC Decking Planks Hollow Square 3D Pattern Effect 24mm",
    products: [
      {
        name: "WPC 3D Black Grey",
        code: "WPC 3D Black Grey",
        normalPrice: "AED 220/m2",
        salePrice: "AED 195/m2",
        color: "Black Grey",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 65%"
      },
      {
        name: "WPC 3D Lite Grey",
        code: "WPC 3D Lite Grey",
        normalPrice: "AED 220/m2",
        salePrice: "AED 195/m2",
        color: "Lite Grey",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 65%"
      },
      {
        name: "3D Brown Decking",
        code: "WPC 3D Brown",
        normalPrice: "AED 220/m2",
        salePrice: "AED 195/m2",
        color: "Brown",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 65%"
      },
      {
        name: "WPC 3D Macca",
        code: "WPC 3D Macca",
        normalPrice: "AED 220/m2",
        salePrice: "AED 195/m2",
        color: "Macca",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 65%"
      },
      {
        name: "3D Teak Decking",
        code: "WPC 3D Teak",
        normalPrice: "AED 220/m2",
        salePrice: "AED 195/m2",
        color: "Teak",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 65%"
      },
      {
        name: "White Grey Decking",
        code: "WPC White Grey",
        normalPrice: "AED 220/m2",
        salePrice: "AED 195/m2",
        color: "White Grey",
        warranty: "10 Year Warranty",
        density: "Hollow Lines 65%"
      }
    ]
  },
  // Semi Solid 23mm
  {
    category: "WPC Decking Planks Semi Solid 23mm Reversible Grooved Lines or 3D",
    products: [
      {
        name: "WPC Brown Decking",
        code: "WPC Brown",
        normalPrice: "AED 255/m2",
        salePrice: "AED 210/m2",
        color: "Brown",
        warranty: "10 Year Warranty",
        density: "Semi Solid 75%"
      },
      {
        name: "WPC Coffee Decking",
        code: "WPC Coffee",
        normalPrice: "AED 255/m2",
        salePrice: "AED 210/m2",
        color: "Coffee",
        warranty: "10 Year Warranty",
        density: "Semi Solid 75%"
      },
      {
        name: "WPC Grey Decking",
        code: "WPC Grey",
        normalPrice: "AED 255/m2",
        salePrice: "AED 210/m2",
        color: "Grey",
        warranty: "10 Year Warranty",
        density: "Semi Solid 75%"
      },
      {
        name: "WPC Teak Decking",
        code: "WPC Teak",
        normalPrice: "AED 255/m2",
        salePrice: "AED 210/m2",
        color: "Teak",
        warranty: "10 Year Warranty",
        density: "Semi Solid 75%"
      }
    ]
  },
  // Full Solid 20mm
  {
    category: "WPC Decking Planks Full Solid 20mm Reversible Grooved Lines or 3D",
    products: [
      {
        name: "Solid-3d-Brown",
        code: "ZS-SOLIDREV0040",
        normalPrice: "AED 300/m2",
        salePrice: "AED 265/m2",
        color: "Dark Brown",
        warranty: "10 Year Warranty",
        density: "Solid 100%"
      },
      {
        name: "Solid Maple",
        code: "ZS-SOLIDREV0041",
        normalPrice: "AED 300/m2",
        salePrice: "AED 265/m2",
        color: "Maple",
        warranty: "10 Year Warranty",
        density: "Solid 100%"
      },
      {
        name: "Solid-Forest-Grey",
        code: "ZS-SOLIDREV0042",
        normalPrice: "AED 300/m2",
        salePrice: "AED 265/m2",
        color: "Forest Grey",
        warranty: "10 Year Warranty",
        density: "Solid 100%"
      },
      {
        name: "Solid-Teak-Decking",
        code: "ZS-SOLIDREV0043",
        normalPrice: "AED 300/m2",
        salePrice: "AED 265/m2",
        color: "Teak",
        warranty: "10 Year Warranty",
        density: "Solid 100%"
      }
    ]
  }
];

const features = [
  {
    title: "Ranked #1 for Quality!",
    description: "WPC decking boards were named 'Highest Quality' in the PVC / Composite Decking category of the 2021 BUILDER Brand Use Study."
  },
  {
    title: "Low Maintenance",
    description: "WPC Decking never has to be stained or deep cleaned."
  },
  {
    title: "Fade and Stain Resistant",
    description: "WPC Decking boards resist fading, mould, mildew, stains, splinters and rot."
  },
  {
    title: "Environmentally Friendly",
    description: "Our boards are made using reclaimed wood that would otherwise go into landfill."
  },
  {
    title: "Looks Like Real Wood",
    description: "All the beauty of natural wood…with all the benefits of composite decking!"
  },
  {
    title: "Wide Range of Colours",
    description: "Our products range from charmingly traditional to stylish and contemporary."
  }
];

const heroImages = [
  "/images/wpc decking/pic1.jpg",
  "/images/wpc decking/pic3.avif"
];

export default function WPCOutdoorDecking() {
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    location: '',
    requirements: '',
    contactMethod: 'Email'
  });

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

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    setShowContact(true);
  };

  const handleCloseContact = () => {
    setShowContact(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setShowContact(false);
  };

  const handleWhatsAppClick = (productName = '') => {
    const phoneNumber = '971558344467'; // Your WhatsApp number without + and spaces
    const message = productName 
      ? `Hello! I'm interested in getting a quote for ${productName}. Could you please provide me with more information?`
      : `Hello! I'm interested in getting a quote for your WPC decking products. Could you please provide me with more information?`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
            <Link to="/" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B168] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/#services" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B168] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/#portfolio" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">Portfolio</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B168] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/#about" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B168] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/#contact" className={`relative group hover:text-[#D6B168] transition-all duration-300 ${
              scrolled ? 'text-[#FDF8F2]' : 'text-[#FDF8F2]'
            }`}>
              <span className="relative z-10">Contact</span>
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
      <section className="h-screen relative overflow-hidden">
        <img
          src={heroImages[currentImage]}
          alt="WPC Outdoor Decking"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-110 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
        

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="animate-fade-in-up">

              {/* Main Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#FDF8F2] mb-6 leading-tight tracking-wider uppercase">
                Transform Your
                <span className="block text-[#D6B168] font-normal">
                  Outdoor Space
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-[#FDF8F2]/80 mb-8 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
                Premium WPC Decking Solutions - Weather-resistant, low-maintenance, and stunning wood-like appearance. 
                <span className="text-[#D6B168] font-normal"> Perfect for patios, terraces, and outdoor living areas.</span>
              </p>

              {/* Features Row */}
              <div className="flex flex-wrap justify-center gap-8 mb-12 text-[#FDF8F2]/70">
                <div className="flex items-center gap-3">
                  <span className="text-[#D6B168] text-sm">✓</span>
                  <span className="text-sm font-light tracking-wide uppercase">No Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#D6B168] text-sm">✓</span>
                  <span className="text-sm font-light tracking-wide uppercase">Fade Resistant</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#D6B168] text-sm">✓</span>
                  <span className="text-sm font-light tracking-wide uppercase">Eco-Friendly</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#D6B168] text-sm">✓</span>
                  <span className="text-sm font-light tracking-wide uppercase">5 Year Warranty</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-md mx-auto">
                <button 
                  onClick={handleContactClick}
                  className="bg-[#D6B168] text-[#392e23] px-8 py-4 rounded-lg hover:bg-[#FDF8F2] hover:text-[#392e23] transition-all duration-300 text-base font-medium transform hover:scale-105 shadow-lg flex-1 h-12 flex items-center justify-center"
                >
                  GET FREE QUOTE
                </button>
                <button 
                  onClick={() => document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent border border-[#FDF8F2] text-[#FDF8F2] px-8 py-4 rounded-lg hover:bg-[#FDF8F2] hover:text-[#392e23] transition-all duration-300 text-base font-medium transform hover:scale-105 flex-1 h-12 flex items-center justify-center"
                >
                  VIEW PRODUCTS
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

      {/* Introduction Section */}
      <section className="py-12 bg-[#F1E7D0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-[#392e23] tracking-wider hover:scale-105 transition-transform duration-300 uppercase">
              Premium WPC Decking Solutions
            </h2>
            <p className="text-lg text-[#2A211A] max-w-3xl mx-auto leading-relaxed mb-6 font-light">
              If you are looking for high–quality WPC decking, then you have come to the right place. Here at FIXITBILAL, we pride ourselves on providing our customers with only the best products on the market. Our WPC decking is made from high–quality wood and polymer, and it is designed to last for years. It is also very easy to install and maintain, so you can enjoy your deck for many years to come.
            </p>
            <p className="text-lg text-[#2A211A] max-w-3xl mx-auto leading-relaxed mb-6 font-light">
              If you have any questions about our WPC decking, or if you would like to know more about our other products, please do not hesitate to contact us.
            </p>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#392e23] mb-2">Call Now: +971 55 834 4467</p>
            </div>
          </div>
        </div>
      </section>


      {/* Products Section */}
      <section id="products-section" className="py-24 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-20 text-[#392e23] tracking-wider animate-fade-in-up hover:scale-105 transition-transform duration-300 uppercase">
            Our WPC Decking Products
          </h2>
          
          {wpcProducts.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 animate-fade-in-up" style={{animationDelay: `${categoryIndex * 300}ms`}}>
              <h3 className="text-xl font-light text-[#392e23] mb-8 text-center tracking-wider bg-[#F1E7D0] py-4 px-6 rounded-lg uppercase">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                    
                    {/* Product Title */}
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h4>
                    <p className="text-sm text-gray-700 mb-3">{product.code}</p>
                    
                    
                    {/* Product Details */}
                    <div className="space-y-2 mb-4 text-sm flex-grow">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Colour Option:</span>
                        <span className="font-medium text-gray-900">{product.color}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Warranty:</span>
                        <span className="font-medium text-gray-900">{product.warranty}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Density:</span>
                        <span className="font-medium text-gray-900">{product.density}</span>
                      </div>
                    </div>
                    
                    {/* Additional Options */}
                    <div className="bg-gray-100 p-3 rounded mb-4">
                      <h5 className="text-sm font-bold text-gray-900 mb-2">Additional Options:</h5>
                      <div className="space-y-1 text-xs text-gray-700">
                        <p>Fitting Accessories: 60 AED SQM</p>
                        <p>Installation Price: 75 AED SQM</p>
                        <p>L Profiles If Needed: 45 AED LM</p>
                        <p className="font-medium">All Above Plus VAT</p>
                      </div>
                    </div>
                    
                    {/* Get Quote Button */}
                    <button 
                      onClick={() => handleWhatsAppClick(product.name)}
                      className="w-full bg-red-600 text-white py-3 px-4 rounded hover:bg-red-700 transition-colors duration-300 text-sm font-medium uppercase tracking-wide mt-auto"
                    >
                      Get Quote
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-[#F1E7D0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-[#392e23] mb-6 tracking-wider animate-fade-in-up hover:scale-105 transition-transform duration-300 uppercase">
            Not sure what you need?
          </h2>
          <h3 className="text-xl md:text-2xl font-light text-[#392e23] mb-4 tracking-wider uppercase">
            Book A Free Appointment
          </h3>
          <p className="text-lg text-[#2A211A] mb-6 font-light leading-relaxed">
            Not sure which wpc decking option is best for you? Get in touch with one of our representative to find the best option for you.
          </p>
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-[#392e23] mb-2">Call Now: +971 55 834 4467</p>
          </div>
          <button 
            onClick={handleContactClick}
            className="bg-[#392e23] text-[#FDF8F2] px-8 py-4 rounded-lg hover:bg-[#B89345] hover:text-[#FDF8F2] transition-all duration-300 text-base font-medium transform hover:scale-105 hover:shadow-2xl tracking-wide uppercase h-12 flex items-center justify-center mx-auto"
          >
            Connect With Our Specialist
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-light text-[#392e23] tracking-wider uppercase">Connect With Our Specialist</h2>
              <button 
                onClick={handleCloseContact}
                className="text-[#2A211A] hover:text-[#392e23] text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">E-Mail *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">Contact Number *</label>
                <input 
                  type="tel" 
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">Location *</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent"
                  placeholder="Enter your location"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">Tell Us Your Requirements *</label>
                <textarea 
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-[#E1D9CE] rounded-lg focus:ring-2 focus:ring-[#392e23] focus:border-transparent"
                  placeholder="Tell us about your decking requirements..."
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#392e23] mb-2">How To Contact You?</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="contactMethod"
                      value="Email"
                      checked={formData.contactMethod === 'Email'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="contactMethod"
                      value="WhatsApp"
                      checked={formData.contactMethod === 'WhatsApp'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    WhatsApp
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="contactMethod"
                      value="Call"
                      checked={formData.contactMethod === 'Call'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Call
                  </label>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button 
                  type="submit"
                  className="flex-1 bg-[#392e23] text-[#FDF8F2] py-4 px-6 rounded-lg hover:bg-[#B89345] transition-all duration-300 font-medium text-sm tracking-wide uppercase h-12 flex items-center justify-center"
                >
                  Send Message
                </button>
                <button 
                  type="button"
                  onClick={handleCloseContact}
                  className="flex-1 bg-[#E1D9CE] text-[#392e23] py-4 px-6 rounded-lg hover:bg-[#D6B168] transition-all duration-300 font-medium text-sm tracking-wide uppercase h-12 flex items-center justify-center"
                >
                  Cancel
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-[#E1D9CE]">
              <h3 className="text-lg font-light text-[#392e23] mb-4 tracking-wider uppercase">Contact Information</h3>
              <div className="space-y-2 text-[#2A211A]">
                <p><strong>Working Hours:</strong> From Monday to Saturday: 9am - 5pm</p>
                <p><strong>Phone:</strong> +971 55 834 4467</p>
                <p><strong>Email:</strong> info@fixitbilal.com</p>
                <p><strong>Website:</strong> www.fixitbilal.com</p>
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
                <li><Link to="/" className="text-[#D6B168] hover:text-white transition-colors duration-300 text-sm font-light">Home</Link></li>
                <li><Link to="/#services" className="text-[#D6B168] hover:text-white transition-colors duration-300 text-sm font-light">Services</Link></li>
                <li><Link to="/#portfolio" className="text-[#D6B168] hover:text-white transition-colors duration-300 text-sm font-light">Portfolio</Link></li>
                <li><Link to="/#about" className="text-[#D6B168] hover:text-white transition-colors duration-300 text-sm font-light">About</Link></li>
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
