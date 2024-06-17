import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ReactTyped } from 'react-typed'; // Correct import
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Home.module.css';
import { Helmet } from 'react-helmet';

function Home() {
  const introRef = useRef(null);
  const descriptionRef = useRef(null);
  const photoRef = useRef(null);

  const introVisible = useIntersectionObserver(introRef, { threshold: 0.1 });
  const descriptionVisible = useIntersectionObserver(descriptionRef, { threshold: 0.1 });
  const photoVisible = useIntersectionObserver(photoRef, { threshold: 0.1 });

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrollingDown(currentScrollY > lastScrollY);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={styles.home}>
       <Helmet>
        <title>Faraz Khan | Home</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Helmet>
      <div
        ref={introRef}
        className={`${styles.intro} ${introVisible ? (isScrollingDown ? styles.fadeOut : styles.fadeIn) : ''}`}
      >
        <h1>
          <ReactTyped
            strings={['Hi']}
            typeSpeed={100}
            showCursor={true}
            cursorChar="|"
            loop={false}
          />
        </h1>
      </div>
      <div className={styles.descriptionSection}>
        <div
          ref={descriptionRef}
          className={`${styles.description} ${descriptionVisible ? (isScrollingDown ? styles.fadeOut : styles.fadeIn) : ''}`}
        >
          {descriptionVisible && (
            <ReactTyped
              strings={[
                "I'm Faraz Khan, a passionate software engineer. Explore my projects, learn more about me, and get in touch!"
              ]}
              typeSpeed={40}
              backSpeed={50}
              showCursor={false}
            />
          )}
        </div>
        <div ref={photoRef} className={`${styles.photo} ${photoVisible ? (isScrollingDown ? styles.fadeOut : styles.fadeIn) : ''}`}>
          {photoVisible && <img src="/photo.jpg" alt="Faraz Khan" />}
        </div>
      </div>
    </div>
  );
}

export default Home;
