import React from 'react';
import './Projects.css';
import reactLogoImage from '../images/reactLogo.png';
import djangoPythonLogo from '../images/djangoPythonLogo.png';
import Spaceship from '../images/Spaceship.jpg';

const Projects = () => {
  const projects = [
    {// Project 1 data (details, technologies, timeline, etc.)
      title: 'Project 1',
      description: 'Frontend Web App',
      technologies: ['React', 'Node.js'],
      link: 'https://github.com/jesusmar0930',
      image: reactLogoImage,
      timeline: [
        { date: 'Jan 2022', milestone: 'Project Started' },
        { date: 'Feb 2022', milestone: 'Design Phase' },
        { date: 'Mar 2022', milestone: 'Development Phase' },
        { date: 'Apr 2022', milestone: 'Testing Phase' },
        { date: 'May 2022', milestone: 'Deployment' },
      ],
    },
    {
      title: 'Project 2',
      description: 'Backend Web App.',
      technologies: ['JavaScript', 'Python', 'Django'],
      link: 'https://github.com/jesusmar0930',
      image: djangoPythonLogo,
      timeline: [
        { date: 'Jun 2022', milestone: 'Project Kickoff' },
        { date: 'Jul 2022', milestone: 'Backend Development' },
        { date: 'Aug 2022', milestone: 'API Integration' },
        { date: 'Sep 2022', milestone: 'Testing and Bug Fixes' },
        { date: 'Oct 2022', milestone: 'Launch' },
      ],
    },
    {
      title: 'Project 3',
      description: 'Spaceship',
      technologies: ['Radiation Protection', 'Energy Shields', 'Hyperdrive'],
      link: 'https://github.com/jesusmar0930',
      image: Spaceship,
      timeline: [
        { date: 'Jun 2022', milestone: 'Project Kickoff' },
        { date: 'Jul 2022', milestone: 'Backend Development' },
        { date: 'Aug 2022', milestone: 'API Integration' },
        { date: 'Sep 2022', milestone: 'Testing and Bug Fixes' },
        { date: 'Oct 2022', milestone: 'Launch' },
      ],
    },
    // Add more projects...
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <div className="project-timeline">
              <h4>Project Timeline</h4>
              <div className="timeline">
                {project.timeline.map((item, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-milestone">{item.milestone}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;