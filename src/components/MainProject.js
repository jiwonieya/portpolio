import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MainProject = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "restart none restart reset",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="main-project-section" className="main-project" ref={containerRef}>
      <div className="header-menu">
        <h2>Main Project</h2>
        <div className="menu-buttons">
          <button onClick={() => navigate("/ririm-intro")}>Ririm</button>
          <button onClick={() => navigate("/pin-intro")}>P’IN</button>
          <button onClick={() => navigate("/blog-intro")}>BLOG</button>
        </div>
      </div>

      <div className="project-list">
        <section className="project-item">
          <img
            src={`${process.env.PUBLIC_URL}/images/ririm1.png`}
            alt="Ririm 전체 이미지"
          />
          <h3>Ririm</h3>
        </section>

        <section className="project-item">
          <img
            src={`${process.env.PUBLIC_URL}/images/pin1.png`}
            alt="P'IN 전체 이미지"
          />
          <h3>P’IN</h3>
        </section>

        <section className="project-item">
          <img
            src={`${process.env.PUBLIC_URL}/images/blog1.png`}
            alt="BLOG-WRBPAGE 전체 이미지"
          />
          <h3>Blog-Style WebPage</h3>
        </section>
      </div>
    </div>
  );
};


export default MainProject;