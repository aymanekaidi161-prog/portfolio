import { useState, useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const highlights = [
    {
      icon: '💼',
      title: '2+ Years',
      description: 'Learning & Building',
    },
    {
      icon: '🎓',
      title: 'Self-Taught',
      description: 'Continuous Learner',
    },
    {
      icon: '📍',
      title: 'Location',
      description: 'Casablanca, Morocco',
    },
  ];

  const skillsData = [
    {
      category: 'Frontend Technologies',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 88 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      category: 'Backend Technologies',
      icon: '⚙️',
      skills: [
        { name: 'PHP', level: 75 },
        { name: 'Laravel', level: 70 },
        { name: 'Node.js', level: 65 },
        { name: 'Express.js', level: 60 },
        { name: 'RESTful APIs', level: 80 }
      ]
    },
    {
      category: 'Database & Tools',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 65 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 75 }
      ]
    },
    {
      category: 'Soft Skills',
      icon: '💡',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Team Collaboration', level: 80 },
        { name: 'Time Management', level: 85 },
        { name: 'Adaptability', level: 90 }
      ]
    }
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About Me
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content-grid">
          {/* About Content */}
          <div className="about-text-section">
            <h3 className="about-greeting">
              Hi, I'm Aymane Kaidi
            </h3>
            <p className="about-description">
              I'm a passionate Full Stack Developer with expertise in building modern web applications. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="about-description">
              With a strong foundation in both frontend and backend technologies, I create 
              seamless user experiences that are both functional and aesthetically pleasing. 
              I'm always eager to learn new technologies and improve my skills.
            </p>

            {/* Highlights */}
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="highlight-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-content">
                    <h4 className="highlight-title">{item.title}</h4>
                    <p className="highlight-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image - Moved to the right */}
          <div className="profile-section">
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <div className="profile-image-container">
                  {!imageLoaded && (
                    <div className="image-placeholder loading-shimmer"></div>
                  )}
                  <img 
                    src="/src/assets/aymane kaidi.jpg" 
                    alt="Aymane Kaidi - Full Stack Developer" 
                    className={`profile-image ${imageLoaded ? 'loaded' : 'loading'}`}
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="skills-title">
            
            Skills & Technologies
          </h3>
          <div className={`skills-grid ${isVisible ? 'animate' : ''}`}>
            {skillsData.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="skill-category-card"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h4 className="category-title">{category.category}</h4>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            '--skill-level': `${skill.level}%`,
                            width: `${skill.level}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}