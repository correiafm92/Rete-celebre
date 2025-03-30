
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import AboutUs from '@/components/home/AboutUs';
import FAQ from '@/components/home/FAQ';
import ProductCard from '@/components/products/ProductCard';
import Footer from '@/components/layout/Footer';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
      
      // Check which sections are visible
      const sections = ['produtos', 'sobre', 'faq'];
      const currentVisible = sections.filter(id => {
        const element = document.getElementById(id);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight - 150 && rect.bottom > 150;
      });
      
      setVisibleSections(currentVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-darkgreen text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      
      {/* Products Section */}
      <section id="produtos" className="py-20 bg-darkgreen">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`text-center mb-16 transition-all duration-700 transform ${
            visibleSections.includes('produtos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Soluções Premium</h2>
            <div className="w-24 h-1 bg-buttongreen mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Kits sofisticados com acabamento de alto padrão, desenvolvidos para expressar valor e fortalecer conexões profissionais estratégicas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard 
              title="Kit Élégance Vin" 
              description="Uma combinação sofisticada que transmite exclusividade e atenção aos detalhes, ideal para fortalecer relações com clientes VIP e parceiros estratégicos."
              image="https://i.postimg.cc/SQBYVtP0/A-high-angle-perspective-photograph-of-a-rectangular-brown-wooden-box-with-a-ribbon-thin-leaves-a.jpg"
              items={[
                "Caixa de madeira com acabamento premium",
                "Garrafa de vinho cuidadosamente selecionada",
                "Nescafé"
              ]}
              price="R$ 168,90"
              delay={100}
            />
            
            <ProductCard 
              title="Kit Champagne Prestige" 
              description="Uma experiência sensorial completa que celebra conquistas e fortalece alianças comerciais importantes com elegância e refinamento."
              image="https://i.postimg.cc/QxZZfpkY/Mystical-and-ethereal-scene-A-brown-wooden-box-with-a-ribbon-thin-leaves-a-Celebre-champagne-bottl.jpg"
              items={[
                "Caixa de madeira com acabamento premium",
                "Champanhe",
                "Nescafé"
              ]}
              price="R$ 189,90"
              delay={300}
            />
          </div>
        </div>
      </section>
      
      <FAQ />
      <Footer />
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 bg-buttongreen text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-buttongreen/80 hover:-translate-y-1 hover:shadow-xl ${
          showScrollToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
