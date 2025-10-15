import { useEffect, useState } from 'react';

const Loading = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga de 1.5 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Esperar a que termine la animación de salida antes de llamar al callback
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="loading-container">
        <div className="letter-d">
          D
        </div>
      </div>
    </div>
  );
};

export default Loading;


