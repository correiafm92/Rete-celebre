
import React from 'react';

const AboutUs = () => {
  return (
    <section id="sobre" className="py-20 bg-darkgreen-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">Sobre a Rêve Célébrer</h2>
            <img 
              src="https://i.postimg.cc/yY52sHZW/486222471-1390265878772894-944744138674179901-n-removebg-preview.png" 
              alt="Rêve Célébré" 
              className="h-16 md:h-20 mt-4 md:mt-0"
            />
          </div>
          
          <p className="text-lg text-white/90 mb-6">
            Nascida na vibrante cidade de Marabá, Pará, a Rêve Célébrer foi criada para ajudar empresas a se destacarem no relacionamento com seus clientes e parceiros através de presentes sofisticados e estratégicos. Sabemos que um simples presente pode ser a chave para fortalecer parcerias, gerar novas oportunidades de negócios e consolidar sua marca.
          </p>
          
          <p className="text-lg text-white/90 mb-10">
            Nosso compromisso é oferecer presentes corporativos exclusivos, personalizados e entregues com excelência, garantindo que cada item represente sua empresa da melhor forma possível.
          </p>
          
          <div className="bg-darkgreen rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Por que Escolher a Rêve Célébrer?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-rose mr-3 text-xl font-bold">✔</span>
                <div>
                  <h4 className="font-bold mb-1">Sofisticação</h4>
                  <p className="text-white/80">Presentes cuidadosamente selecionados para impressionar e encantar.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-rose mr-3 text-xl font-bold">✔</span>
                <div>
                  <h4 className="font-bold mb-1">Posicionamento de Marca</h4>
                  <p className="text-white/80">Construa uma imagem premium na mente dos seus clientes e parceiros.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-rose mr-3 text-xl font-bold">✔</span>
                <div>
                  <h4 className="font-bold mb-1">Fidelização Estratégica</h4>
                  <p className="text-white/80">Transforme simples interações em relacionamentos duradouros.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-rose mr-3 text-xl font-bold">✔</span>
                <div>
                  <h4 className="font-bold mb-1">Entrega Ágil</h4>
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
