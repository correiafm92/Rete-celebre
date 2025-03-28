
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Benefits from '@/components/home/Benefits';
import AboutUs from '@/components/home/AboutUs';
import FAQ from '@/components/home/FAQ';
import ProductCard from '@/components/products/ProductCard';
import Footer from '@/components/layout/Footer';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
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
      <Benefits />
      <AboutUs />
      
      {/* Products Section */}
      <section id="produtos" className="py-20 bg-darkgreen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Soluções Premium</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Kits sofisticados com acabamento de alto padrão, desenvolvidos para expressar valor e fortalecer conexões profissionais estratégicas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard 
              title="Kit Élégance Vin" 
              description="Uma combinação sofisticada que transmite exclusividade e atenção aos detalhes, ideal para fortalecer relações com clientes VIP e parceiros estratégicos."
              image="https://i.postimg.cc/ZRksGjqG/High-contrast-image-of-a-wooden-box-with-a-ribbon-a-wine-bottle-and-a-notebook-inside-bathed-in-d.jpg"
              items={[
                "Caixa de madeira com acabamento premium",
                "Garrafa de vinho cuidadosamente selecionada",
                "Caderno Office",
                "Caneta office"
              ]}
              delay={100}
            />
            
            <ProductCard 
              title="Kit Champagne Prestige" 
              description="Uma experiência sensorial completa que celebra conquistas e fortalece alianças comerciais importantes com elegância e refinamento."
              image="https://i.postimg.cc/DzGBPscB/A-wooden-box-with-a-ribbon-champagne-and-a-notebook-inside-sits-on-an-office-desk-illuminated-by.jpg"
              items={[
                "Caixa de madeira com acabamento premium",
                "Champagne",
                "Caderno Office",
                "Caneta Office"
              ]}
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
        className={`fixed right-6 bottom-6 bg-buttongreen text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-buttongreen/80 ${
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
