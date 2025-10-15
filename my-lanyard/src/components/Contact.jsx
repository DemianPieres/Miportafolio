import { useEffect, useRef } from 'react';

const Contact = () => {
  const contactRef = useRef(null);

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

    const animateElements = contactRef.current?.querySelectorAll('.animate-fade-in');
    animateElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto" ref={contactRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 animate-fade-in">
          Contacto
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          ¿Queres Contactarme?
        </p>
        
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <div className="bg-gray-800 p-8 rounded-xl shadow-md h-full animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-purple-700"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      Email
                    </h4>
                    <a 
                      href="mailto:drkdemianpieres@gmail.com?subject=Hola&body=Quiero%20contactarte" 
                      className="text-purple-700 hover:underline"
                    >
                      drkdemianpieres@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-purple-700"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      Teléfono
                    </h4>
                    <a 
                      href="https://wa.me/5493825419431" 
                      className="text-purple-700 hover:underline"
                    >
                      +3825 419431
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-purple-700"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      Ubicación
                    </h4>
                    <p className="text-gray-300">
                      Cordoba, Argentina
                    </p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-medium text-white mb-4">
                    Buscame en
                  </h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/demianpieres" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 hover:bg-purple-200 transition"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a 
                      href="https://github.com/DemianPieres" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 hover:bg-purple-200 transition"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a 
                      href="https://www.instagram.com/demian_p.m16?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 hover:bg-purple-200 transition"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
