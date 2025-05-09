
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkgreen/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.postimg.cc/yY52sHZW/486222471-1390265878772894-944744138674179901-n-removebg-preview.png" 
              alt="Rêve Célébré" 
              className="h-14 md:h-16"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-white/70 transition-colors">Início</a>
            <a href="#beneficios" className="text-white hover:text-white/70 transition-colors">Benefícios</a>
            <a href="#produtos" className="text-white hover:text-white/70 transition-colors">Produtos</a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-white/70 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-darkgreen-light/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#inicio" className="text-white hover:text-white/70 py-2 border-b border-darkgreen-dark/30" onClick={() => setIsOpen(false)}>Início</a>
            <a href="#beneficios" className="text-white hover:text-white/70 py-2 border-b border-darkgreen-dark/30" onClick={() => setIsOpen(false)}>Benefícios</a>
            <a href="#produtos" className="text-white hover:text-white/70 py-2 border-b border-darkgreen-dark/30" onClick={() => setIsOpen(false)}>Produtos</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
