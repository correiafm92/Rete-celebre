
import { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  items: string[];
  delay: number;
  price?: string;
}

const ProductCard = ({ title, description, image, items, delay, price }: ProductCardProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entry animation delay based on prop
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleButtonClick = () => {
    // Redirect to Instagram profile without showing toast
    window.open("https://www.instagram.com/revecelebrer/", "_blank");
  };

  return (
    <div
      ref={ref}
      className={`bg-darkgreen-dark/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl transform transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-[300px]">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkgreen-dark to-transparent opacity-80"></div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          {price && (
            <span className="text-xl font-bold text-white font-playfair">
              {price}
            </span>
          )}
        </div>
        <p className="text-white/90 mb-4">{description}</p>

        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">Conteúdo do Kit:</h4>
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight size={16} className="text-white mr-1 mt-1 flex-shrink-0" />
                <span className="text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleButtonClick}
          className="w-full bg-buttongreen hover:bg-buttongreen/80 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-md"
        >
          Adquirir
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
