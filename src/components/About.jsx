import '@fontsource/roboto/300.css';
import { Code, Database, Globe, Coffee } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: <Code size={24} />, number: "20+", label: "Projects Completed" },
    { icon: <Database size={24} />, number: "1+", label: "Years Experience" },
    { icon: <Globe size={24} />, number: "10+", label: "Technologies" },
    { icon: <Coffee size={24} />, number: "1Lakh+", label: "Cups of Coffee" }
  ];

  const highlights = [
    "🎓 Computer Science Graduate with strong foundation in software development",
    "💻 Experienced in full-stack web development with Java and modern frameworks",
    "🚀 Passionate about creating efficient, scalable, and user-friendly applications",
    "🌱 Continuously learning new technologies and best practices",
    "🤝 Strong problem-solving skills and collaborative team player"
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="about-description">
              <p>
                I&apos;m a passionate <strong>Java Full Stack Developer</strong> with a keen interest in 
                creating robust web applications and solving complex problems. With expertise in 
                both frontend and backend technologies, I enjoy building complete solutions from 
                concept to deployment.
              </p>
              <p>
                My journey in software development started during my college years, where I 
                discovered my love for coding and problem-solving. Since then, I&apos;ve been 
                continuously learning and working on various projects that have shaped my 
                skills and understanding of modern development practices.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or enjoying a good cup of coffee while reading about 
                the latest trends in software development.
              </p>
            </div>

            <div className="highlights">
              <h3>What drives me:</h3>
              <ul className="highlights-list">
                {highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card glass">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;