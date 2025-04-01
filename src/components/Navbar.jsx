import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/home" className="navbar__logo">
          <span className="navbar__logo-text">Unsolved Mysteries</span>
          <span className="navbar__logo-highlight">Fanpage</span>
        </Link>

        <button 
          className={`navbar__toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/home" 
            className={`navbar__link ${isActive('/home') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/cases" 
            className={`navbar__link ${isActive('/cases') ? 'active' : ''}`}
          >
            Case Files
          </Link>
          <Link 
            to="/timeline" 
            className={`navbar__link ${isActive('/timeline') ? 'active' : ''}`}
          >
            Timeline
          </Link>
          <Link 
            to="/ufo-encounters" 
            className={`navbar__link ${isActive('/ufo-encounters') ? 'active' : ''}`}
          >
            UFO Encounters
          </Link>
          <Link 
            to="/paranormal-tools" 
            className={`navbar__link ${isActive('/paranormal-tools') ? 'active' : ''}`}
          >
            Paranormal Tools
          </Link>
          <Link 
            to="/submit-theory" 
            className={`navbar__link navbar__link--highlight ${isActive('/submit-theory') ? 'active' : ''}`}
          >
            Submit Theory
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
