
import { Award, Gift, Gem, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type BenefitProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const BenefitItem = ({ icon, title, description, delay }: BenefitProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center p-6 rounded-lg transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-navy-light p-4 rounded-full mb-4 text-rose">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher nossos kits?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Presentes corporativos que fazem a diferença na consolidação do relacionamento com seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitItem
            icon={<Award size={32} />}
            title="Qualidade Premium"
            description="Produtos selecionados com o mais alto padrão de qualidade para impressionar seus clientes."
            delay={100}
          />
          <BenefitItem
            icon={<Gift size={32} />}
            title="Experiência Memorável"
            description="Kits que criam uma experiência completa e memorável, fortalecendo relacionamentos."
            delay={300}
          />
          <BenefitItem
            icon={<Gem size={32} />}
            title="Exclusividade"
            description="Presentes únicos e sofisticados que destacam sua marca no mercado."
            delay={500}
          />
          <BenefitItem
            icon={<TrendingUp size={32} />}
            title="Impacto Comercial"
            description="Aumente as chances de fechar negócios e fidelize seus clientes mais importantes."
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
