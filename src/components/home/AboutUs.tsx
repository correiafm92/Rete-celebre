
import React from 'react';

const AboutUs = () => {
  return (
    <section id="sobre" className="py-20 bg-darkgreen-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">Sobre a Rêve Célébrer</h2>
            <div className="w-24 h-1 bg-buttongreen mx-auto rounded-full"></div>
          </div>
          
          <p className="text-lg text-white/90 mb-6 animate-fade-in">
            Nascida na vibrante cidade de Marabá, Pará, a Rêve Célébrer foi criada para ajudar empresas a se destacarem no relacionamento com seus clientes e parceiros através de presentes sofisticados e estratégicos. Sabemos que um simples presente pode ser a chave para fortalecer parcerias, gerar novas oportunidades de negócios e consolidar sua marca.
          </p>
          
          <p className="text-lg text-white/90 mb-10 animate-fade-in" style={{animationDelay: "150ms"}}>
            Nosso compromisso é oferecer presentes corporativos exclusivos, personalizados e entregues com excelência, garantindo que cada item represente sua empresa da melhor forma possível.
          </p>
          
          <div className="bg-darkgreen rounded-lg p-8 border border-white/10 shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01]">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Por que Escolher a Rêve Célébrer?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-buttongreen mr-3 text-xl font-bold">✔</span>
                <div>
                  <h4 className="font-bold mb-1 text-white">Sofisticação</h4>
                  <p className="text-white/80">Presentes cuidadosamente selecionados para impressionar e encantar.</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-buttongreen mr-3 text-xl font-bold">✔</span>
                <div>
                  <h4 className="font-bold mb-1 text-white">Posicionamento de Marca</h4>
                  <p className="text-white/80">Construa uma imagem premium na mente dos seus clientes e parceiros.</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-buttongreen mr-3 text-xl font-bold">✔</span>
                <div>
                  <h4 className="font-bold mb-1 text-white">Fidelização Estratégica</h4>
                  <p className="text-white/80">Transforme simples interações em relacionamentos duradouros.</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-buttongreen mr-3 text-xl font-bold">✔</span>
                <div>
                  <h4 className="font-bold mb-1 text-white">Entrega Ágil</h4>
                  <p className="text-white/80">Garantimos um processo rápido e eficiente, sem complicações.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
