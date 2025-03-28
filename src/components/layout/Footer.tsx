
import { Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkgreen-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Description */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-white">Rêve Célébré</h3>
            <p className="text-white/70 max-w-md">
              Transformamos momentos corporativos em experiências memoráveis através de presentes exclusivos que comunicam valor e fortalecem relacionamentos estratégicos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#inicio" className="text-white/70 hover:text-white transition-colors">Início</a>
              <a href="#sobre" className="block text-white/70 hover:text-white transition-colors">Sobre Nós</a>
              <a href="#beneficios" className="block text-white/70 hover:text-white transition-colors">Benefícios</a>
              <a href="#produtos" className="block text-white/70 hover:text-white transition-colors">Produtos</a>
              <a href="#faq" className="block text-white/70 hover:text-white transition-colors">Perguntas Frequentes</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-white">Área de contato</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-white" />
                <span className="text-white/70">Marabá, Pará</span>
              </div>
              <a 
                href="https://www.instagram.com/revecelebrer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
              >
                <Instagram size={18} className="text-white" />
                <span>@revecelebrer</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Rêve Célébré. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
