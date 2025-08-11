import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const MainViewFinder = () => {
  const viewfinderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const minSize = 400;
    const maxSize = Math.min(window.innerWidth, window.innerHeight);

    gsap.to(viewfinderRef.current, {
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress*4; // 0~1
          const size = minSize + (maxSize - minSize) * progress;

          gsap.set(viewfinderRef.current, {
            width: size,
            height: size,
            borderRadius: size > maxSize * 0.8 ? 0 : "15px",
          });
        },
      },
      ease: "power1.out",
    });

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: 250,
        scrub: true,
      },
      opacity: 0,
      ease: "power1.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="container">
      <img
        src={`${process.env.PUBLIC_URL}/images/jiwon-prof.jpg`}
        alt="배경 프로필"
        className="background-image"
      />

      <div ref={viewfinderRef} className="viewfinder">
        <div className="viewfinder__mask" />
      </div>

      <h1 
      className="main-ment"
      ref={textRef}>Jiwon's PortPolio</h1>
    </div>
  );
};

export default MainViewFinder;