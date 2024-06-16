// src/components/MenuBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuBar.module.css';
import HamburgerMenu from './HamburgerMenu';

function MenuBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
      <Link to="/">FK |</Link>
      </div>
      <ul className={styles.menu}>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className={styles.hamburgerMenu}>
        <HamburgerMenu />
      </div>
    </nav>
  );
}

export default MenuBar;
