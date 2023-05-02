import React, { useEffect } from "react";
import { gsap } from "gsap";

export const Cube = () => {
  useEffect(() => {
    const numRowsCols = getComputedStyle(document.documentElement).getPropertyValue('--numRowsCols');
    const cubeWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cube-size').replace("px", ""));
    const numCubes = numRowsCols * numRowsCols;
    const cube = document.querySelector('.cube');
    const grid = document.querySelector('.grid');

    for (let i = 0; i < numCubes - 1; i++) {
      const clone = cube.cloneNode(true);
      grid.appendChild(clone);
    }

    gsap.set('.container', { autoAlpha: 1 });
    gsap.set('.cube', { rotateY: 90, transformOrigin: "right center" });

    gsap.to('.grid', { 
      x: "random(-100, 100)", 
      y: "random(-100, 50)", 
      rotateY: "random(-40, -50)", 
      repeat: -1, 
      repeatDelay: 0.5, 
      yoyo: true, 
      ease: "back.inOut(2)"
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="cube">
            <div className="face face--front"></div>
            <div className="face face--back"></div>
            <div className="face face--left"></div>
            <div className="face face--right"></div>
            <div className="face face--top"></div>
            <div className="face face--bottom"></div>
          </div>
        </div>
      </div>

      <div className="collection">
        <a className="collection__link" href="https://codepen.io/collection/02388423440b98155f8e4002bde094f2" target="_blank">
          View the collection<span></span>
        </a>
      </div>

      <a href="https://greensock.com">
        <img className="gsap-3-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-3-logo.svg" width="150" />
      </a>
    </>
  );
};
