import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navigation.css'; // Import styles for the navigation bar

const Navigation = () => {
  return (
    <nav className="navigation"> 
      <div className="logo"> 
        <Link to="/">Jesus M</Link> {/* Logo/Name linking to home page */}
      </div>

      <ul> {/* Navigation menu links */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 
