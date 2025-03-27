
import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.postimg.cc/QC2bRdSj/486555759-637211109095046-4812668224269979376-n-removebg-preview.png" 
              alt="Rêve Célébré" 
              className="h-14 md:h-16"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-rose transition-colors">Início</a>
            <a href="#beneficios" className="text-white hover:text-rose transition-colors">Benefícios</a>
            <a href="#produtos" className="text-white hover:text-rose transition-colors">Produtos</a>
            <a href="https://www.instagram.com/revecelebre/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose transition-colors flex items-center gap-1">
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-rose-light transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-light/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#inicio" className="text-white hover:text-rose py-2 border-b border-navy-dark/30" onClick={() => setIsOpen(false)}>Início</a>
            <a href="#beneficios" className="text-white hover:text-rose py-2 border-b border-navy-dark/30" onClick={() => setIsOpen(false)}>Benefícios</a>
            <a href="#produtos" className="text-white hover:text-rose py-2 border-b border-navy-dark/30" onClick={() => setIsOpen(false)}>Produtos</a>
            <a href="https://www.instagram.com/revecelebre/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose py-2 flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
