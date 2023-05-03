import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../scss/MultiCube.module.scss";

export const MultiCube = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.container}>
            <div className={styles.cube}>
              <div style={{ "--x": -1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 0, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
            </div>
            <div className={styles.cube}>
              <div style={{ "--x": -1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 0, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
            </div>
            <div className={styles.cube}>
              <div style={{ "--x": -1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 0, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
