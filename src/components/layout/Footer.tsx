
import { Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <img
              src="https://i.postimg.cc/QC2bRdSj/486555759-637211109095046-4812668224269979376-n-removebg-preview.png"
              alt="Rêve Célébré"
              className="h-16 mb-4"
            />
            <p className="text-white/70 max-w-md">
              Transformamos momentos em experiências memoráveis através dos nossos kits de presentes corporativos exclusivos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-rose-light">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#inicio" className="text-white/70 hover:text-rose transition-colors">Início</a>
              <a href="#beneficios" className="block text-white/70 hover:text-rose transition-colors">Benefícios</a>
              <a href="#produtos" className="block text-white/70 hover:text-rose transition-colors">Produtos</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-rose-light">Contato</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-rose" />
                <span className="text-white/70">Marabá, Pará, Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-rose" />
                <span className="text-white/70">contato@revecelebre.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-rose" />
                <span className="text-white/70">(94) 99999-9999</span>
              </div>
              <a 
                href="https://www.instagram.com/revecelebre/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/70 hover:text-rose transition-colors"
              >
                <Instagram size={18} className="text-rose" />
                <span>@revecelebre</span>
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
