import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import styles from './Resume.module.css';

function Resume() {
  const resumeRef = useRef(null);
  const resumeVisible = useIntersectionObserver(resumeRef, { threshold: 0.1 });
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className={`${styles.resume} ${resumeVisible ? styles.fadeIn : ''}`} ref={resumeRef}>
      <h2>Resume</h2>
      <div className={styles.pdfViewer}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl="/Faraz_Khan_-_Software_Engineer.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
}

export default Resume;
