import React from 'react';
import './Skills.css'; // Import styling for the skills section

const Skills = () => {
  const skills = [ // Array of skills data
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
  ];

  return (
    <section className="skills"> 
      <h2>Skills and Expertise</h2>
      <div className="skill-list">
        {skills.map((skill, index) => ( // Map skills data to JSX elements
          <div key={index} className="skill-item"> 
            <div className="skill-icon"> {/* Display skill icon */}
              <i className={skill.icon}></i> 
            </div>
            <div className="skill-name">{skill.name}</div> {/* Display skill name */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 
