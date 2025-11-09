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
    { 
      name: 'React.js', 
      category: 'Frontend', 
      color: '#61DAFB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'JavaScript', 
      category: 'Language', 
      color: '#F7DF1E',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'HTML5', 
      category: 'Frontend', 
      color: '#E34F26',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS3', 
      category: 'Frontend', 
      color: '#1572B6',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'PHP', 
      category: 'Backend', 
      color: '#777BB4',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    { 
      name: 'Laravel', 
      category: 'Backend', 
      color: '#FF2D20',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg'
    },
    { 
      name: 'MySQL', 
      category: 'Database', 
      color: '#4479A1',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    { 
      name: 'Bootstrap', 
      category: 'Frontend', 
      color: '#7952B3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    { 
      name: 'MongoDB', 
      category: 'Database', 
      color: '#47A248',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    }
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
            <span className="tech-title-icon">⚡</span>
            Tech Stack & Tools
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
                  <div className="tech-logo-wrapper">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="tech-logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="tech-letter" style={{ display: 'none', color: tech.color }}>
                      {tech.name.charAt(0)}
                    </div>
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