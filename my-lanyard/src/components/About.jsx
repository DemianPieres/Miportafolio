import { useEffect, useRef } from 'react';
import aboutPhoto from '../assets/about-photo.jpg';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = aboutRef.current?.querySelectorAll('.animate-fade-in');
    animateElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre-mi" ref={aboutRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 animate-fade-in">
          Sobre mí
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <div className="about-image-container relative rounded-lg group">
              <img 
                src={aboutPhoto} 
                alt="Demian Pieres" 
                className="about-image w-auto h-auto max-w-full max-h-80 object-contain about-image-animate"
              />
              <div className="absolute bottom-2 left-2 right-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 bg-black/50 px-2 py-1 rounded">
                  Trekking en la Mina del Oro - Chilecito, Argentina
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-4 animate-fade-in">
              ¿Quién soy?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed animate-fade-in">
            Soy desarrollador full stack con una fuerte orientación a la creación de soluciones prácticas y funcionales. No me limito a una única tecnología o área específica, sino que disfruto explorar distintos entornos y herramientas para dar vida a ideas y proyectos que aporten valor real.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed animate-fade-in">
            Tengo 21 años y resido en Córdoba Capital. Soy egresado de la carrera de Desarrollo de Software en el Instituto Privado Santo Domingo. Me apasionan los deportes, especialmente el tenis y el fútbol. También practico trekking, ciclismo y maratones. Llevo un estilo de vida saludable, con buena alimentación y mucha actividad física, algo que me inculcó mi familia desde chico, ya que todos compartimos el amor por el deporte.

            Estoy en constante aprendizaje y me entusiasma profundamente el mundo de la tecnología, siempre buscando crecer y adquirir nuevos conocimientos que me permitan seguir desarrollándome tanto personal como profesionalmente.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <a 
                href="https://www.linkedin.com/in/demianpieres" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
              >
                <i className="fab fa-linkedin text-purple-700"></i>
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/DemianPieres" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
              >
                <i className="fab fa-github text-purple-700"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
