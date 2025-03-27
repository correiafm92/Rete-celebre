
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Benefits from '@/components/home/Benefits';
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
    <div className="flex flex-col min-h-screen bg-navy text-white">
      <Navbar />
      <Hero />
      <Benefits />
      
      {/* Products Section */}
      <section id="produtos" className="py-20 bg-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Produtos</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Kits exclusivos desenvolvidos para causar a melhor impressão aos seus clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard 
              title="Kit Premium Wine" 
              description="Presente sofisticado com vinho selecionado e acessórios para uma experiência completa."
              image="https://i.postimg.cc/ZRksGjqG/High-contrast-image-of-a-wooden-box-with-a-ribbon-a-wine-bottle-and-a-notebook-inside-bathed-in-d.jpg"
              items={[
                "Caixa de madeira personalizada",
                "Garrafa de vinho premium selecionado",
                "Caderno executivo de couro",
                "Caneta executiva metálica",
                "Embalagem com acabamento sofisticado"
              ]}
              delay={100}
            />
            
            <ProductCard 
              title="Kit Celebration" 
              description="Um brinde ao sucesso da sua parceria com um kit que combina elegância e praticidade."
              image="https://i.postimg.cc/DzGBPscB/A-wooden-box-with-a-ribbon-champagne-and-a-notebook-inside-sits-on-an-office-desk-illuminated-by.jpg"
              items={[
                "Caixa de madeira personalizada",
                "Champagne premium selecionado",
                "Caderno executivo de couro",
                "Caneta executiva metálica",
                "Cartão personalizado com sua mensagem"
              ]}
              delay={300}
            />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white/70 mb-4">Não encontrou o que procura?</p>
            <a 
              href="https://www.instagram.com/revecelebre/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-transparent border border-rose text-rose hover:bg-rose/10 font-medium px-6 py-3 rounded-md transition-colors"
            >
              Entre em contato para kits personalizados
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 bg-rose text-navy p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-rose-dark ${
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
