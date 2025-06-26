import React from 'react';
import { ExternalLink, Github, Database, Globe, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Management System",
      description: "A comprehensive system for managing vehicle registrations, maintenance schedules, and driver information. Built with Spring Boot and MySQL for robust data management.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS", "Bootstrap"],
      features: [
        "Vehicle registration and tracking",
        "Maintenance scheduling",
        "Driver management",
        "Detailed reporting system"
      ],
      image: "https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=400",
      demoLink: "#",
      githubLink: "https://github.com/hsmanu1205",
      category: "Full Stack"
    },
    {
      title: "Job Portal Website",
      description: "A dynamic job portal connecting job seekers with employers. Features user authentication, job posting, application management, and advanced search functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      features: [
        "User registration and authentication",
        "Job posting and search",
        "Application management",
        "Employer dashboard"
      ],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      demoLink: "#",
      githubLink: "https://github.com/hsmanu1205",
      category: "Web Development"
    },
    {
      title: "Employee Management System",
      description: "Desktop application for managing employee records, payroll, and departmental information using Java Swing with MySQL database integration.",
      technologies: ["Java", "Swing", "MySQL", "JDBC"],
      features: [
        "Employee record management",
        "Payroll processing",
        "Department organization",
        "Generate reports"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      demoLink: "#",
      githubLink: "https://github.com/hsmanu1205",
      category: "Desktop App"
    },
    {
      title: "Flight Booking Website",
      description: "Online flight booking system with user authentication, flight search, booking management, and payment integration using Java web technologies.",
      technologies: ["Java", "JSP", "Servlet", "MySQL", "HTML/CSS"],
      features: [
        "Flight search and booking",
        "User account management",
        "Booking history",
        "Payment integration"
      ],
      image: "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=400",
      demoLink: "#",
      githubLink: "https://github.com/hsmanu1205/Flight-Booking-Website",
      category: "Web Development"
    },
    {
      title: "M-Baku Voice Assistant",
      description: "Intelligent voice assistant built with Python featuring speech recognition, natural language processing, and various automation capabilities.",
      technologies: ["Python", "Speech Recognition", "NLP", "APIs"],
      features: [
        "Voice command recognition",
        "Task automation",
        "Weather updates",
        "Web search integration"
      ],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
      demoLink: "#",
      githubLink: "https://github.com/hsmanu1205/M-Baku-Voice-Assistant",
      category: "Python"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing my projects and skills. Built with React.js featuring dark/light mode toggle and smooth animations.",
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5"],
      features: [
        "Responsive design",
        "Dark/Light mode",
        "Smooth animations",
        "Contact form"
      ],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      demoLink: "#",
      githubLink: "https://github.com/hsmanu1205",
      category: "Frontend"
    }
  ];

  const categories = ["All", "Full Stack", "Web Development", "Desktop App", "Python", "Frontend"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Full Stack": return <Database size={16} />;
      case "Web Development": return <Globe size={16} />;
      case "Desktop App": return <Code size={16} />;
      case "Python": return <Code size={16} />;
      case "Frontend": return <Globe size={16} />;
      default: return <Code size={16} />;
    }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and technical projects
          </p>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category !== "All" && getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.demoLink} 
                      className="project-link demo-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="project-link github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag code">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;