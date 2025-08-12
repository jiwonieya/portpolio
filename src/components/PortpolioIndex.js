import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PortpolioIndex = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="aboutme-wrap" ref={containerRef}>
      <h1 className="aboutme-title">PORTFOLIO INDEX</h1>
      <ol>
        <li className="aboutme">
          <span className="label">About Me</span>
          <span className="hover-text">SKILLS & TOOLS</span>
        </li>
        <li className="main">
          <span className="label">Main-Project</span>
          <span className="hover-text">
            Ririm-TEAM PROJECT <br />
            P’IN-TEAM PROJECT <br />
            blog-style webpage
          </span>
        </li>
        <li className="clone">
          <span className="label">Clone-Coding</span>
          <span className="hover-text">
            NETFLIX <br />
            AIRBNB <br />
            TESLA
          </span>
        </li>
        <li className="practice">
          <span className="label">Practical Publishing</span>
        </li>
      </ol>
    </div>
  );
};

export default PortpolioIndex;