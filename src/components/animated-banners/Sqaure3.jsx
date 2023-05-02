import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import styles from '../../scss/AnimatedBannerAds.module.scss';

export const Square3 = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const logoRef = useRef(null);
  const btnRef = useRef(null);

  const runBannerAnimation = () => {
    gsap.fromTo(
      textRef1.current,
      { y: '100%' },
      {
        y: 0,
        duration: 2,
        ease: 'linear',
        opacity: 1,
      }
    );
    gsap.fromTo(
      textRef2.current,
      { opacity: 0, x: '-100%' },
      {
        x: 0,
        duration: 2,
        ease: 'linear',
        opacity: 1,
      }
    );
    gsap.set(textRef1.current, { y: '100%' });
    gsap.set(textRef2.current, { opacity: 0, x: '-100%' });
    gsap.set(btnRef.current, { opacity: 0 });
  }

  useEffect(() => {
    runBannerAnimation();
  }, []);

  return (
    <Container fluid className={`${styles.banner} ${styles.bannerWidth300} ${styles.gradient1}`}>
      <Row className={styles['top-bg']}>
        <Col className='g-0 py-2 px-2' xs={2}>
          <span ref={logoRef}>
            <img width='45px' src="https://raw.githubusercontent.com/eiannucci/eiannucci.github.io/main/logo192.png" alt="logo" />
          </span>
        </Col>
        <Col xs={10} className={`${styles.text}`}>
          <span ref={textRef1}>Aliquam</span>
        </Col>
      </Row>
      <Row>
        <Col className={`${styles.bodyTxt}`} ref={textRef2}>
          <h3>In tincidunt maximus</h3>
          <p>Maecenas lacinia euismod mi vel auctor. Donec vel lacinia magna, at auctor velit.</p>
        </Col>
      </Row>
      <Row>
        <Col className={styles['animated-text']}>
          <span className={'g-0'} >
            <button type="button" class="btn btn-primary" className={styles['repeat-btn']} onClick={runBannerAnimation}>Run Again</button>
            <button type="button" class="btn btn-primary" className={styles['repeat-btn']} onClick={runBannerAnimation}>Run Again</button>
          </span>
        </Col>
      </Row>
    </Container>
  );
};
