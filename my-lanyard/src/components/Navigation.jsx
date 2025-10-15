import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-95 backdrop-blur-sm shadow-lg' 
          : 'bg-white bg-opacity-90 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-2xl font-bold text-purple-700 hover:text-purple-700 transition"
          >
            Demian Pieres<span className="text-gray-800">.</span>
          </button>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="nav-link text-gray-700 hover:text-purple-700 transition"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="nav-link text-gray-700 hover:text-purple-700 transition"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="nav-link text-gray-700 hover:text-purple-700 transition"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('habilidades')}
              className="nav-link text-gray-700 hover:text-purple-700 transition"
            >
              Habilidades
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="nav-link text-gray-700 hover:text-purple-700 transition"
            >
              Contacto
            </button>
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
        
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white w-full py-4 px-4 shadow-md">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-purple-700 transition text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className="text-gray-700 hover:text-purple-700 transition text-left"
              >
                Sobre mí
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="text-gray-700 hover:text-purple-700 transition text-left"
              >
                Proyectos
              </button>
              <button 
                onClick={() => scrollToSection('habilidades')}
                className="text-gray-700 hover:text-purple-700 transition text-left"
              >
                Habilidades
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-purple-700 transition text-left"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
