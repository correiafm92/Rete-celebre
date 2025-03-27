
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen relative flex items-center justify-center bg-navy overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy-dark/60 to-navy"></div>
      
      <div 
        className={`container mx-auto px-4 md:px-6 pt-24 pb-16 relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
          <img 
            src="https://i.postimg.cc/QC2bRdSj/486555759-637211109095046-4812668224269979376-n-removebg-preview.png" 
            alt="Rêve Célébré" 
            className="h-20 md:h-32 lg:h-40"
          />
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
            <span className="text-rose-light">Impressione</span> seus clientes com presentes <span className="text-rose-light">exclusivos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Kits corporativos premium que fortalecem relacionamentos e elevam a percepção da sua marca. Uma experiência sofisticada que seus clientes jamais esquecerão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button 
              onClick={scrollToProducts}
              className="bg-rose text-navy font-medium px-8 py-3 rounded-md hover:bg-rose-dark transition-colors"
            >
              Conheça nossos produtos
            </button>
            <a 
              href="https://www.instagram.com/revecelebre/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white/60 text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={36} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
