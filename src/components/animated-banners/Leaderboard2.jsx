import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import styles from '../../scss/AnimatedBannerAds.module.scss';

export const LeaderboardTopPanel = () => {
    const textRef2 = useRef(null);
    const logoRef2 = useRef(null);
    const btnRef2 = useRef(null);
    const aniPanelTop728 = useRef(null);

    const runBannerAnimation2 = () => {
        gsap.fromTo(
          textRef2.current,
          { x: '100%' },
          {
            x: '1rem',
            duration: 2,
            ease: 'bounce',
          }
        );
        gsap.fromTo(
          logoRef2.current,
          { x: '-100%' },
          {
            x: '0',
            duration: 2,
            ease: 'bounce',
            onComplete: () => {
              gsap.to(btnRef2.current, {
                opacity: 1,
                duration: 2,
                ease: 'linear',
                repeat: 0,
                delay: 1
              })
            }
          }
        );
        gsap.fromTo(
          aniPanelTop728.current,
          { top: '-100%' },
          { top: '0', duration: 1, repeat: 0, display: 'block', opacity: 1, delay: 1 }
        );
        gsap.set(btnRef2.current, { opacity: 0 }); // Set initial opacity to 0
        gsap.set(aniPanelTop728.current, { opacity: 1 }); // Set initial opacity to 0
      }

      useEffect(() => {
        runBannerAnimation2();
    
      }, []);

      return (
        <Container fluid className={`${styles.banner} ${styles.noRadius728} ${styles.gradient2}`}>
        <span ref={logoRef2}>
          <img width='65px' src="https://raw.githubusercontent.com/eiannucci/eiannucci.github.io/main/logo192.png" alt="logo" />
        </span>
        <span className={`${styles.text}`} ref={textRef2}>Donec id magna</span>
        <Container fluid className={styles['btn-pin-right']} ref={btnRef2}>
          <button onClick={runBannerAnimation2}>Run Again</button>
        </Container>
        <div className={styles['animated-panel']} ref={aniPanelTop728}>Space...</div>
        <div className={styles['parallelogram']}></div>
      </Container>
      )
}