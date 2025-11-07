import { useState, useEffect } from 'react';
import './About.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const techStack = [
    { name: 'React', category: 'Frontend', color: '#61DAFB' },
    { name: 'JavaScript', category: 'Language', color: '#F7DF1E' },
    { name: 'Node.js', category: 'Backend', color: '#339933' },
    { name: 'MongoDB', category: 'Database', color: '#47A248' },
    { name: 'HTML5', category: 'Frontend', color: '#E34F26' },
    { name: 'CSS3', category: 'Frontend', color: '#1572B6' },
    { name: 'Express', category: 'Backend', color: '#ffffff' },
    { name: 'Git', category: 'Tools', color: '#F05032' },
    { name: 'Python', category: 'Language', color: '#3776AB' },
    { name: 'TypeScript', category: 'Language', color: '#3178C6' },
    { name: 'Tailwind', category: 'Frontend', color: '#06B6D4' },
    { name: 'Redux', category: 'Frontend', color: '#764ABC' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hi! I'm <span className="highlight">Aymane Kaidi</span>, a passionate Full Stack Developer 
              who loves turning complex problems into elegant solutions.
            </p>
            <p className="about-description">
              I specialize in building modern web applications using cutting-edge technologies. 
              With a strong foundation in both frontend and backend development, I create 
              seamless user experiences that are both beautiful and functional.
            </p>
            <p className="about-description">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        <div className="tech-stack-section">
          <h3 className="tech-title">
            <span className="tech-title-icon">🚀</span>
            Tech Stack & Skills
          </h3>
          <div className={`tech-grid ${isVisible ? 'animate' : ''}`}>
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="tech-card"
                style={{ 
                  '--tech-color': tech.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="tech-card-inner">
                  <div className="tech-icon" style={{ color: tech.color }}>
                    {tech.name.charAt(0)}
                  </div>
                  <div className="tech-info">
                    <h4 className="tech-name">{tech.name}</h4>
                    <span className="tech-category">{tech.category}</span>
                  </div>
                </div>
                <div className="tech-glow" style={{ background: tech.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}