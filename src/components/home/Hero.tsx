
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Entry animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen relative flex items-center justify-center bg-darkgreen overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-darkgreen-dark/60 to-darkgreen"></div>
      
      <div 
        className={`container mx-auto px-4 md:px-6 pt-24 pb-16 relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
          <img 
            src="https://i.postimg.cc/yY52sHZW/486222471-1390265878772894-944744138674179901-n-removebg-preview.png" 
            alt="Rêve Célébré" 
            className={`h-28 md:h-40 lg:h-56 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          />
          
          <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight transition-all duration-700 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Fortaleça Seu Relacionamento com Clientes e parceiros Através de Presentes Estratégicos
          </h1>
          
          <p className={`text-lg md:text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Clientes e parcerias fiéis não surgem por acaso, são cultivados. Um presente bem escolhido não é apenas um gesto de cortesia, mas uma estratégia poderosa para fortalecer conexões, gerar reconhecimento e manter sua marca na memória dos clientes.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 mt-6 transition-all duration-700 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button 
              onClick={scrollToProducts}
              className="bg-buttongreen text-white font-medium px-8 py-3 rounded-md hover:bg-buttongreen/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-md"
            >
              Conheça nossos produtos
            </button>
            <a 
              href="https://www.instagram.com/revecelebrer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white/60 text-white px-8 py-3 rounded-md hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-md"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 animate-bounce ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <ChevronDown size={36} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
