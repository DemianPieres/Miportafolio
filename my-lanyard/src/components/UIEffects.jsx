import { useEffect, useState } from 'react';

const UIEffects = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Custom cursor effect
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (window.innerWidth > 768) {
      const handleMouseMove = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        if (cursorDot) {
          cursorDot.style.left = `${posX}px`;
          cursorDot.style.top = `${posY}px`;
        }
        
        if (cursorOutline) {
          cursorOutline.style.left = `${posX}px`;
          cursorOutline.style.top = `${posY}px`;
        }
      };

      const handleMouseDown = () => {
        if (cursorDot) cursorDot.style.transform = 'translate(-50%, -50%) scale(0.7)';
        if (cursorOutline) cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.7)';
      };

      const handleMouseUp = () => {
        if (cursorDot) cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        if (cursorOutline) cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);

      // Cursor hover effects for links and buttons
      const links = document.querySelectorAll('a, button');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          if (cursorDot) cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
          if (cursorOutline) {
            cursorOutline.style.width = '30px';
            cursorOutline.style.height = '30px';
          }
        });
        
        link.addEventListener('mouseleave', () => {
          if (cursorDot) cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
          if (cursorOutline) {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
          }
        });
      });

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, []);

  useEffect(() => {
    // Scroll progress bar and back to top button
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      
      setScrollProgress(scrollPercentage);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor-dot hidden md:block"></div>
      <div className="cursor-outline hidden md:block"></div>
      
      {/* Progress Bar */}
      <div 
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      
      {/* Back to Top Button */}
      <button 
        className={`back-to-top bg-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition focus:outline-none ${
          showBackToTop ? 'visible' : ''
        }`}
        onClick={scrollToTop}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M5 15l7-7 7 7" 
          />
        </svg>
      </button>
    </>
  );
};

export default UIEffects;
