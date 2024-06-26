import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Helmet } from 'react-helmet';
import styles from './About.module.css';

function About() {
  const aboutRef = useRef(null);
  const aboutVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });

  return (
    <div className={styles.about} ref={aboutRef}>
      <Helmet>
        <title>Faraz Khan | About Me</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Helmet>
      <div className={`${styles.content} ${aboutVisible ? styles.fadeIn : ''}`}>
        <h2>About Me</h2>
        <p>
          Hello! I'm Faraz Khan, a passionate software engineer with a love for building innovative and efficient solutions.
          I have a strong foundation in software engineering, cloud technologies, and data analytics. I am proficient in
          programming languages such as JavaScript, C, Python, and Java. I am eager to leverage my technical expertise and
          collaborative project experience to contribute to innovative solutions. Passionate about developing scalable and
          impactful technologies, I am committed to lifelong learning and excited to collaborate with global teams to address
          complex challenges and drive digital transformation.
        </p>

        <h3>Skills</h3>
        <ul className={styles.skillsList}>
          <li>Git</li>
          <li>HTML & CSS</li>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>C</li>
          <li>C++</li>
          <li>C#</li>
          <li>SQL</li>
          <li>TensorFlow</li>
          <li>PyTorch</li>
          <li>Agile</li>
        </ul>

        <h3>Education</h3>
        <div className={styles.education}>
          <img src="/osu-seal.png" alt="The Ohio State University" className={styles.logo} />
          <div className={styles.educationDetails}>
            <p>The Ohio State University</p>
            <p>B.S. Computer and Information Science</p>
            <p>Minor in Business</p>
            <p>Class of 2024</p>
          </div>
        </div>

        <h3>Connect with Me</h3>
        <div className={styles.connect}>
          <a href="https://www.linkedin.com/in/faraz-khan-5b821b1b1/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-logo.png" alt="LinkedIn" className={styles.socialLogo} />
          </a>
          <a href="https://github.com/FKHAN9644" target="_blank" rel="noopener noreferrer">
            <img src="/github-logo.png" alt="GitHub" className={styles.socialLogo} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
