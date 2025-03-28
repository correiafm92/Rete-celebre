
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-darkgreen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Perguntas Frequentes</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 rounded-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left text-white hover:no-underline bg-darkgreen-dark/50">
                Como adquirir os presentes corporativos?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-white/80 bg-darkgreen-dark/20">
                <ol className="list-decimal list-inside space-y-3">
                  <li>Escolha o presente ideal em nosso catálogo.</li>
                  <li>Clique no botão "Adquirir".</li>
                  <li>Mande uma mensagem em nosso perfil no Instagram.</li>
                  <li>Nossa equipe entrará em contato o mais rápido possível.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-white/10 rounded-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left text-white hover:no-underline bg-darkgreen-dark/50">
                Como funciona a entrega?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-white/80 bg-darkgreen-dark/20">
                <p>Após a confirmação do pedido, nossos especialistas preparam os produtos com todo o cuidado e atenção aos detalhes.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-white/10 rounded-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left text-white hover:no-underline bg-darkgreen-dark/50">
                Qual é o prazo de entrega? Estou sujeito a taxas de frete?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-white/80 bg-darkgreen-dark/20">
                <p>O prazo de entrega é de até 4 dias úteis, sem qualquer taxa adicional.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-white/10 rounded-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left text-white hover:no-underline bg-darkgreen-dark/50">
                Quais são as formas de pagamento?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-white/80 bg-darkgreen-dark/20">
                <p>Aceitamos transferências via Pix para garantir praticidade e agilidade na transação.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-white/10 rounded-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left text-white hover:no-underline bg-darkgreen-dark/50">
                Quais locais a Rêve Célébrer faz as suas entregas?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-white/80 bg-darkgreen-dark/20">
                <p>Nossa empresa atua principalmente em áreas de Marabá, Pará, garantindo entregas rápidas e um serviço de qualidade na região.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-white font-medium">Escolha um presente corporativo que vai além do esperado. Faça seu pedido agora!</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
