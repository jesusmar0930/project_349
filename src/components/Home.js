
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation to projects
import './Home.css';  // Import styles specific to this home page

const Home = () => {
  return (
    <section className="home"> 
      <div className="hero">  {/* Main banner/hero section */}
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a skilled developer passionate about creating amazing web experiences.</p>
        <Link to="/projects" className="cta-button">View Projects</Link> {/* Call-to-Action button */}
      </div>

      <div className="about">  {/* About me section */}
        <h2>About Me</h2>
        <p>I am a 4th year Computer Science Major at CSUFI.</p>
      </div>
    </section>
  );
};

export default Home; 
