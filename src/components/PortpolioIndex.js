import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SECTION_SELECTORS = {
  aboutme: "#about-me-section",
  main: "#main-project-section",
  clone: "#clone-coding-section",
  practice: "#practical-publishing-section",
};

const PortpolioIndex = () => {
  const containerRef = useRef(null);

  const scrollToSection = (sectionKey) => {
    const selector = SECTION_SELECTORS[sectionKey];

    if (!selector) {
      return;
    }

    const target = document.querySelector(selector);

    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleKeyDown = (event, sectionKey) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(sectionKey);
    }
  };

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
        <li
          className="aboutme"
          role="button"
          tabIndex={0}
          onClick={() => scrollToSection("aboutme")}
          onKeyDown={(event) => handleKeyDown(event, "aboutme")}
        >
          <span className="label">About Me</span>
          <span className="hover-text">SKILLS & TOOLS</span>
        </li>
        <li
          className="main"
          role="button"
          tabIndex={0}
          onClick={() => scrollToSection("main")}
          onKeyDown={(event) => handleKeyDown(event, "main")}
        >
          <span className="label">Main-Project</span>
          <span className="hover-text">
            Ririm-TEAM PROJECT <br />
            P’IN-TEAM PROJECT <br />
            blog-style webpage
          </span>
        </li>
        <li
          className="clone"
          role="button"
          tabIndex={0}
          onClick={() => scrollToSection("clone")}
          onKeyDown={(event) => handleKeyDown(event, "clone")}
        >
          <span className="label">Clone-Coding</span>
          <span className="hover-text">
            NETFLIX <br />
            AIRBNB <br />
            TESLA
          </span>
        </li>
        <li
          className="practice"
          role="button"
          tabIndex={0}
          onClick={() => scrollToSection("practice")}
          onKeyDown={(event) => handleKeyDown(event, "practice")}
        >
          <span className="label">Practical Publishing</span>
        </li>
      </ol>
    </div>
  );
};

export default PortpolioIndex;
