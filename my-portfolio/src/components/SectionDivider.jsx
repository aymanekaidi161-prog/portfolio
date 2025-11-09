import { useState, useEffect } from 'react';
import './SectionDivider.css';

export default function SectionDivider() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const divider = document.querySelector('.section-divider');
    if (divider) observer.observe(divider);

    return () => {
      if (divider) observer.unobserve(divider);
    };
  }, []);

  return (
    <div className={`section-divider ${isVisible ? 'visible' : ''}`}>
      <div className="divider-line">
        <div className="divider-dot"></div>
      </div>
    </div>
  );
}