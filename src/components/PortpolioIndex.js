import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PortpolioIndex = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const items = container ? container.querySelectorAll("ol li") : [];

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "restart none restart reset",
        },
      });

      timeline
        .fromTo(
          container,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
        )
        .fromTo(
          items,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
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
