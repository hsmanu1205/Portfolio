import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Hibernate", level: 80 },
        { name: "JSP/Servlet", level: 85 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Database & Tools",
      icon: "🗄️", 
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Git/GitHub", level: 80 },
        { name: "RESTful APIs", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "Linux", level: 70 }
      ]
    }
  ];

  const tools = [
    "IntelliJ IDEA", "VS Code", "Eclipse", "MySQL Workbench", 
    "Postman", "Git", "Jupyter Notebook", "Bootstrap", "GitHub", "Tailwind CSS", "Workbench"
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
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
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-tag">
                <span className="code">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;