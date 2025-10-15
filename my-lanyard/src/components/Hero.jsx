import { useEffect, useRef } from 'react';
import Aurora from './Aurora';
import StarBorder from './StarBorder';
import './Hero.css';
import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  const heroRef = useRef(null);

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

    const animateElements = heroRef.current?.querySelectorAll('.animate-fade-in');
    animateElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/DemianPieresCV.docx';
    link.download = 'DemianPieresCV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="inicio" 
      ref={heroRef}
      className="relative pt-28 pb-20 md:pt-32 md:pb-24 min-h-screen flex items-center overflow-hidden"
    >
      {/* Fondo de Aurora - Solo en esta sección */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#1E3A8A", "#5B21B6", "#9333EA"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center relative z-10 hero-typography">
        <div className="md:w-2/3 lg:w-1/2 mb-12 md:mb-0 hero-left">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in">
            Hola, soy <span className="text-purple-700">Demian Pieres</span>
          </h1>
          <p className="hero-lead text-2xl md:text-3xl text-gray-200 mb-6 animate-fade-in" style={{ transitionDelay: '0.2s' }}>
            Desarrollador Fullstack
          </p>
          <p className="text-gray-300/90 text-lg md:text-xl mb-10 leading-relaxed animate-fade-in" style={{ transitionDelay: '0.4s' }}>
            +Experiencia en Elaboración de Proyectos. Graduado en <span className="text-purple-700">Desarrollo de Software</span> Especializado en Crear Soluciones Digitales.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ transitionDelay: '0.6s' }}>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="px-7 py-3 bg-purple-700 text-black rounded-lg hover:bg-purple-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver proyectos
            </button>
            <StarBorder
              onClick={downloadCV}
              color="#9333EA"
              speed="4s"
              className="bg-black rounded-lg"
              innerClassName="px-7 py-3 border border-gray-300 text-gray-100 rounded-lg hover:bg-white/10 transition bg-transparent"
            >
              Descargar CV
            </StarBorder>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
          <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] float-animation">
            <img 
              src={profilePhoto} 
              alt="Demian Pieres" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
