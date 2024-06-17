import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './About.module.css';

function About() {
  const aboutRef = useRef(null);
  const aboutVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });

  return (
    <div className={styles.about} ref={aboutRef}>
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
      </div>
    </div>
  );
}

export default About;
