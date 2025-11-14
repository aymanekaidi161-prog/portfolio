import { useState, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
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

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React, featuring smooth animations and interactive elements. Showcasing my skills and projects in an elegant way.',
      tags: ['React', 'CSS3', 'Vite', 'JavaScript'],
      category: 'Frontend',
      image: '💼',
      github: 'https://github.com/aymanekaidi161-prog',
      live: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack online shopping platform with user authentication, product management, and payment integration. Built with modern web technologies.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Full Stack',
      image: '🛒',
      github: 'https://github.com/aymanekaidi161-prog',
      live: '#',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates, drag-and-drop functionality, and team collaboration features for efficient project management.',
      tags: ['React', 'Firebase', 'Tailwind', 'Context API'],
      category: 'Frontend',
      image: '✅',
      github: 'https://github.com/aymanekaidi161-prog',
      live: '#',
      status: 'Planning'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with real-time data, forecasts, and location-based recommendations. Features clean UI and responsive design.',
      tags: ['JavaScript', 'API', 'CSS3', 'HTML5'],
      category: 'Frontend',
      image: '🌤️',
      github: 'https://github.com/aymanekaidi161-prog',
      live: '#',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Social Media API',
      description: 'RESTful API for social media platform with authentication, posts, comments, likes, and real-time notifications. Built with scalable architecture.',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'Backend',
      image: '🔌',
      github: 'https://github.com/aymanekaidi161-prog',
      live: null,
      status: 'In Progress'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, file sharing, and online status indicators. Modern UI with real-time updates.',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      image: '💬',
      github: 'https://github.com/aymanekaidi161-prog',
      live: '#',
      status: 'Planning'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#10B981';
      case 'In Progress': return '#F59E0B';
      case 'Planning': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A collection of projects that showcase my skills and passion for development
        </p>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
              <span className="filter-count">
                {category === 'All' 
                  ? projects.length 
                  : projects.filter(p => p.category === category).length
                }
              </span>
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isVisible ? 'animate' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div 
                  className="project-status"
                  style={{ backgroundColor: getStatusColor(project.status) }}
                >
                  {project.status}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📁</div>
            <h3>No projects found</h3>
            <p>No projects match the selected filter. Try another category.</p>
          </div>
        )}

        <div className="projects-cta">
          <p>Interested in seeing more? Check out my GitHub for additional projects and contributions.</p>
          <a 
            href="https://github.com/aymanekaidi161-prog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}