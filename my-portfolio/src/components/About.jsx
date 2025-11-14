import { useState, useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const [activeFilter, setActiveFilter] = useState('All');
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
      id: 1,
      name: 'React.js',
      category: 'Frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      id: 2,
      name: 'JavaScript',
      category: 'Frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      id: 3,
      name: 'HTML5',
      category: 'Frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      id: 4,
      name: 'CSS3',
      category: 'Frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      id: 5,
      name: 'Bootstrap',
      category: 'Frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    {
      id: 6,
      name: 'Tailwind CSS',
      category: 'Frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    },
    {
      id: 7,
      name: 'PHP',
      category: 'Backend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    {
      id: 8,
      name: 'Laravel',
      category: 'Backend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg'
    },
    {
      id: 9,
      name: 'Node.js',
      category: 'Backend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      id: 10,
      name: 'Express.js',
      category: 'Backend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
      id: 11,
      name: 'RESTful APIs',
      category: 'Backend',
      icon: '🔗'
    },
    {
      id: 12,
      name: 'MySQL',
      category: 'Database',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      id: 13,
      name: 'MongoDB',
      category: 'Database',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      id: 14,
      name: 'Git',
      category: 'Tools',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      id: 15,
      name: 'GitHub',
      category: 'Tools',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      id: 16,
      name: 'VS Code',
      category: 'Tools',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
      id: 17,
      name: 'Postman',
      category: 'Tools',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postman.svg'
    },
    {
      id: 18,
      name: 'Problem Solving',
      category: 'Soft Skills',
      icon: '🧩'
    },
    {
      id: 19,
      name: 'Communication',
      category: 'Soft Skills',
      icon: '💬'
    },
    {
      id: 20,
      name: 'Team Collaboration',
      category: 'Soft Skills',
      icon: '👥'
    },
    {
      id: 21,
      name: 'Time Management',
      category: 'Soft Skills',
      icon: '⏰'
    },
    {
      id: 22,
      name: 'Adaptability',
      category: 'Soft Skills',
      icon: '🔄'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Soft Skills'];

  const filteredSkills = activeFilter === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeFilter);

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

        <div className="skills-section">
          <h3 className="skills-title">
            <span className="skills-title-icon">🚀</span>
            Skills & Technologies
          </h3>

          <div className="skills-filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`skills-filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
                <span className="skills-filter-count">
                  {category === 'All' 
                    ? skillsData.length 
                    : skillsData.filter(skill => skill.category === category).length
                  }
                </span>
              </button>
            ))}
          </div>

          <div className={`skills-grid ${isVisible ? 'animate' : ''}`}>
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.id} 
                className="skill-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon">
                  {skill.icon.includes('http') ? (
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="skill-icon-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'skill-icon-fallback';
                        fallback.textContent = skill.name.charAt(0);
                        e.target.parentNode.appendChild(fallback);
                      }}
                    />
                  ) : (
                    <span className="skill-icon-emoji">{skill.icon}</span>
                  )}
                </div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-category">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="skills-empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No skills found</h3>
              <p>No skills match the selected filter. Try another category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}