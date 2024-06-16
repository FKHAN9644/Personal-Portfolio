import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HamburgerMenu.module.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        <div className={isOpen ? `${styles.bar} ${styles.bar1}` : styles.bar}></div>
        <div className={isOpen ? `${styles.bar} ${styles.bar2}` : styles.bar}></div>
        <div className={isOpen ? `${styles.bar} ${styles.bar3}` : styles.bar}></div>
      </div>
      <ul className={isOpen ? `${styles.menu} ${styles.menuOpen}` : styles.menu}>
        <li><Link to="/about" onClick={toggleMenu}>About Me</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
