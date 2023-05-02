import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import styles from '../../scss/AnimatedBannerAds.module.scss';

export const LeaderboardSidePanel = () => {
  // const textRef1 = useRef(null);
  const textRef3 = useRef(null);
  const textRef3b = useRef(null);

  const logoRef3 = useRef(null);

  const btnRef3 = useRef(null);

  const aniPanelTop728 = useRef(null);
  const aniPanelRightSide728 = (null);

  const runBannerAnimation3 = () => {

    gsap.fromTo(
      logoRef3.current,
      { x: '-100%' },
      {
        x: '0',
        duration: .5,
        ease: 'linear',
        onComplete: () => {
          gsap.to(textRef3b.current, {
            x: '1rem',
            duration: .25,
            ease: 'bounce',
            repeat: 0,
            onComplete: () => {
              gsap.to(btnRef3.current, {
                opacity: 1,
                duration: 2,
                ease: 'linear',
                repeat: 0,
              })
            }
          })
        }
      }
    );
    gsap.fromTo(
      aniPanelTop728.current,
      { top: '-100%' },
      { top: '0', duration: 1, repeat: 0, display: 'block', opacity: 1, delay: 1 }
    );
    gsap.set(textRef3b.current, { x:0 });
    gsap.set(btnRef3.current, { opacity: 0 });
    gsap.set(aniPanelTop728.current, { opacity: 0 });
  }

  useEffect(() => {
    runBannerAnimation3();
  }, []);

  return (

          <Container fluid className={`${styles.banner} ${styles.bottomRadius728} ${styles.gradient3}`}>
            <span ref={logoRef3}>
              <img width='65px' src="https://raw.githubusercontent.com/eiannucci/eiannucci.github.io/main/logo192.png" alt="logo" />
            </span>
            <span className={`${styles.text}`} ref={textRef3b}>
              <div>Nulla facilisi.</div>
              <div className={styles['text-small']}>Lorem Ipsum dolor sit amet.</div>
            </span>
            <Container fluid className={styles['btn-pin-right']} ref={btnRef3}>
              <button className={'repeat-btn'} onClick={runBannerAnimation3}>Run Again</button>
            </Container>
            <div className={styles['animated-panel']} ref={aniPanelRightSide728}></div>

            
          </Container>
  );
};
