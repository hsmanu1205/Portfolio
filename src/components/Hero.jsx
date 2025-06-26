import { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const name = "I am Harshit Singh";

  const titles = useMemo(() => [
    "Java Full Stack Developer",
    "Web Developer", 
    "Python Developer",
    "Software Engineer"
  ], []);

  useEffect(() => {
    if (!isComplete) {
      // Typing the name first
      if (displayText.length < name.length && !isDeleting) {
        const timeout = setTimeout(() => {
          setDisplayText(name.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      }
      
      // Start deleting after name is complete
      if (displayText === name && !isDeleting) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
      
      // Delete the name
      if (isDeleting && displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      }
      
      // Start showing titles
      if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setIsComplete(true);
      }
    } else {
      // Typing cycle for titles
      const currentTitle = titles[currentIndex];
      
      if (!isDeleting && displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      }
      
      if (!isDeleting && displayText === currentTitle) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
      
      if (isDeleting && displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      }
      
      if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }
  }, [displayText, isDeleting, currentIndex, isComplete, name, titles]);

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/hsmanu1205",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/harshitsingh1205",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:harshit.singh.hs9454@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span className="greeting-text">Hello, I&#39;m</span>
            </div>
            
            <h1 className="hero-title">
              <span className="typing-text">
                {displayText}
                <span className="cursor">|</span>
              </span>
            </h1>
            
            <p className="hero-description">
              Passionate about creating robust web applications and solving complex problems 
              with clean, efficient code. Specialized in Java ecosystem with full-stack expertise.
            </p>
            
            <div className="hero-actions">
              <a href="mailto:harshit.singh.hs9454@gmail.com" className="btn btn-primary">
                <Mail size={20} />
                Get In Touch
              </a>
              <a href="https://drive.google.com/uc?export=download&id=13NEkVSIYW8Uporbou0J5QE5Lp_xyQX7k" className="btn btn-secondary" download>
                <Download size={20} />
                Download CV
              </a>
            </div>
            
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="https://i.ibb.co/ds3k8KpG/Dp-pro.jpg&w=400&h=400&fit=crop" 
                alt="Harshit Singh"
                className="profile-image"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <ArrowDown size={24} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;