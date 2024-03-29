import React, { useEffect, useRef } from "react";
import { Navbar, Nav, Container, NavDropdown, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FileDownload } from "../components/ResumeDownloadBtn";
import { gsap } from "gsap";
import classNames from "classnames";
import styles from "../scss/NavMenu.module.scss";

export const NavMenu = () => {
  const toggleRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    var gradients = [
      "linear-gradient(to right, #C8A2C8, #A692B7)",
      "linear-gradient(to right, #79aec1, #9B4F96)",
    ];

    gsap.to(".navbar", {
      duration: 5,
      backgroundImage: function () {
        return gradients[Math.floor(Math.random() * gradients.length)];
      },
      color: "#FFFFFF",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // const navbarHeight = navbarRef.current.offsetHeight;
    // console.log(navbarHeight);
  }, []);

  const handleLinkClick = () => {
    if (toggleRef.current && toggleRef.current.classList.contains("show")) {
      toggleRef.current.click();
    }
  };

  const handleClick = () => {
    if (toggleRef.current && toggleRef.current.classList.contains("show")) {
      toggleRef.current.click();
    }
  };

  const navColorClass = classNames(
    styles["nav-color"],
    styles["nav-colorshift"],
    styles["nav-padding"]
  );

  return (
    <Navbar
      expand="lg"
      className={`${navColorClass} fixed-top`}
      ref={navbarRef}
    >
      <Container fluid>
        <Navbar.Brand href="/" className={styles.brand}>
          <img
            alt="logo"
            src="data:image/png;base64,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"
            className={`d-inline-block align-middle ${styles.logo}`}
          />
          <span className={styles["site-name-font"]}>Elijah Iannucci</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          ref={toggleRef}
          onClick={handleClick}
        />
        <Navbar.Collapse id="basic-navbar-nav" className={"nav-collapse"}>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/pg-html-banners">Banner ads</Nav.Link>
            <Nav.Link as={Link} to="/pg-superhero-search">Super Hero Search</Nav.Link>
            <Nav.Link as={Link} to="/pg-cubewave">Cubewave</Nav.Link>
            <Nav.Link as={Link} to="/pg-multicube">Multicube</Nav.Link>
            <Nav.Link as={Link} to="/pg-insult-generator">Shakespearean Insults</Nav.Link>
            {/* <NavDropdown title="API's & Tools" id="api_tools">
              <NavDropdown.Item
                className={`${styles["nav-link"]}`}
                as={Link}
                to="/pg-superhero-search"
                onClick={() => {
                  handleLinkClick();
                  toggleRef.current.click();
                }}
              >
                Superhero Search
              </NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown title="Contact & Blog" id="contact_blog">
              <NavDropdown.Item href="mailto:elijah.iannucci@gmail.com?subject=Contact request from Elijah'a portfolio.">
                Email Me
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/elijahiannucci/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://elijahiannucci.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <FileDownload />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
