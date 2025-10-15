const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-2xl font-bold hover:text-blue-400 transition"
            >
              Demian<span className="text-purple-700">.</span>
            </button>
            <p className="mt-2 text-gray-400">
              Desarrollador Full Stack
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-400 hover:text-white transition"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="text-gray-400 hover:text-white transition"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="text-gray-400 hover:text-white transition"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('habilidades')}
              className="text-gray-400 hover:text-white transition"
            >
              Habilidades
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-400 hover:text-white transition"
            >
              Contacto
            </button>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Demian Pieres. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/demianpieres" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/DemianPieres" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
