import { useEffect, useRef } from 'react';
import diseñoWebCorporativo from '../assets/Diseño Web Corporativo.png';
import aplicacionEcommerce from '../assets/Aplicación E-commerce.png';
import loginWeb from '../assets/Login Web.png';

const Projects = () => {
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Diseño Web Corporativo",
      description: "Rediseño completo del sitio web para una empresa alimenticia, mejorando la experiencia de usuario y aumentando las conversiones.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      color: "purple",
      image: diseñoWebCorporativo,
      link: "https://github.com/DemianPieres/EvoFit"
    },
    {
      id: 2,
      title: "Aplicación E-commerce",
      description: "Desarrollo de una tienda online completa con carrito de compras, gestión de productos y sistema de pagos integrado.",
      technologies: ["React", "Node.js", "MongoDB"],
      color: "purple",
      image: aplicacionEcommerce,
      link: "https://github.com/DemianPieres/Innova-"
    },
    {
      id: 3,
      title: "Login Web",
      description: "Login simple y estético diseñado con un enfoque visualmente atractivo para el acceso a plataformas web.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      color: "purple",
      image: loginWeb,
      link: "https://github.com/DemianPieres/Login-Web"
    }
  ];

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

    const animateElements = projectsRef.current?.querySelectorAll('.animate-fade-in');
    animateElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-purple-700',
        icon: 'text-purple-700'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        icon: 'text-green-500'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        icon: 'text-purple-500'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="proyectos" ref={projectsRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 animate-fade-in">
          Mis Proyectos
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          Una selección de mis trabajos más recientes y destacados.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div 
                key={project.id} 
                className="bg-gray-800 rounded-xl overflow-hidden shadow-md project-card animate-fade-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gray-700 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 ${colors.bg} ${colors.text} text-sm rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 hover:text-purple-700 font-medium flex items-center"
                  >
                    Ver proyecto
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/DemianPieres?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-purple-700 text-purple-700 rounded-lg hover:bg-white/10 transition animate-fade-in"
          >
            Ver todos los proyectos
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
