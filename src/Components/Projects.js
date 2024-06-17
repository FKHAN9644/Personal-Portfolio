import React, { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Projects.module.css';

function Projects() {
  const [repos, setRepos] = useState([]);
  const projectsRef = useRef(null);
  const projectsVisible = useIntersectionObserver(projectsRef, { threshold: 0.1 });

  useEffect(() => {
    fetch('https://api.github.com/users/FKHAN9644/repos')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch(error => console.error('Error fetching repos:', error));
  }, []);

  return (
    <div className={`${styles.projects} ${projectsVisible ? styles.fadeIn : ''}`} ref={projectsRef}>
      <h2>Projects</h2>

      <div className={styles.project}>
        <h3>AI ChatBot Development (July 2023)</h3>
        <ul>
          <li>Developed an AI-driven chatbot using JavaScript and integrated voice synthesis technology with the ElevenLabs API to simulate realistic conversational dynamics.</li>
          <li>Implemented GPT models to enhance interaction quality by making them feel more natural.</li>
          <li>Focused on user engagement, creating a more personalized and interactive user experience.</li>
        </ul>
      </div>

      <div className={styles.project}>
        <h3>Web Scraping Project (February 2023)</h3>
        <ul>
          <li>Designed and implemented a Ruby script for scraping educational content from web resources, utilizing CSS for effective data presentation.</li>
          <li>Incorporated advanced filtering features, which allowed for user-specific queries, enhancing the utility and accessibility of scraped data.</li>
          <li>Led project timeline and task distribution, ensuring the project stayed on schedule and team members contributed effectively.</li>
          <li>Focused on automating data extraction, generating large datasets required for training machine learning models.</li>
        </ul>
      </div>

      <div className={styles.project}>
        <h3>Information Dashboard (January 2024 — April 2024)</h3>
        <ul>
          <li>Developed a comprehensive information dashboard using PowerBI to consolidate and visualize employee data.</li>
          <li>Integrated custom Python scripts to convert ICS files to CSV format.</li>
          <li>Led project design and implementation, coordinating efforts between team members to ensure project milestones were met on time and within specifications.</li>
          <li>Focused on user-centric design principles, ensuring the dashboard met the specific needs of organizational stakeholders.</li>
          <li>Employed Agile project management methodologies, managing the project timeline effectively and adapting to feedback, which enhanced the final product's relevance and user satisfaction.</li>
        </ul>
      </div>

      {repos.length > 0 && (
        <>
          <h3>GitHub Projects</h3>
          <div className={styles.githubProjects}>
            {repos.map(repo => (
              <div key={repo.id} className={styles.repo}>
                <h4><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h4>
                <p>{repo.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Projects;
