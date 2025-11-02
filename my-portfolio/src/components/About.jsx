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

  const skills = [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'HTML/CSS', level: 95, icon: '🎨' },
    { name: 'MongoDB', level: 75, icon: '🍃' },
    { name: 'Git', level: 85, icon: '📦' }
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
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`}
                      style={{ '--skill-level': `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}