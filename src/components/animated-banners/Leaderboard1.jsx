import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import styles from '../../scss/AnimatedBannerAds.module.scss';

export const LeaderboardBottomPanel = () => {
  const textRef2 = useRef(null);
  const logoRef2 = useRef(null);
  const btnRef2 = useRef(null);
  const aniPanelTop728 = useRef(null);

  const runBannerAnimation = () => {

      gsap.fromTo(
        logoRef2.current,
        { x: '-100%' },
        {
          x: '0',
          duration: .5,
          ease: 'linear',
          onComplete: () => {
            gsap.to(btnRef2.current, {
              opacity: 1,
              duration: 1,
              ease: 'linear',
              repeat: 0,
              delay: 1
            })
          }
        }
      );
      gsap.fromTo(
        textRef2.current,
        { x: '100%' },
        {
          x: '1rem',
          duration: 1,
          ease: 'power',
        }
      );
      gsap.fromTo(
        aniPanelTop728.current,
        { top: '-200%' },
        { top: '0', duration: 1, repeat: 0, display: 'block', opacity: 1, delay: 1 }
      );
      gsap.set(btnRef2.current, { opacity: 0 });
      gsap.set(aniPanelTop728.current, { opacity: 1 });
    }

    useEffect(() => {
      runBannerAnimation();
  
    }, []);

    return (
      <Container fluid className={`${styles.banner} ${styles.topRadius728} ${styles.gradient2}`}>
      <span ref={logoRef2}>
        <img width='65px' src="https://raw.githubusercontent.com/eiannucci/eiannucci.github.io/main/logo192.png" alt="logo" />
      </span>
      <span className={`${styles.text}`} ref={textRef2}>Quisque lobortis</span>
      <Container fluid className={styles['btn-pin-right']} ref={btnRef2}>
      <button onClick={runBannerAnimation}>Run Again...</button>
      </Container>
      <div className={styles['animated-panel']} ref={aniPanelTop728}></div>
      <div className={styles['parallelogram']}></div>
    </Container>
    )
}