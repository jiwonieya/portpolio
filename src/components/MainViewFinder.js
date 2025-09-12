import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MainViewFinder = () => {
  const containerRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    if (!maskRef.current || !containerRef.current) return;

    const tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    tl.fromTo(
      maskRef.current,
      { "--r": "160px", "--x": "50%", "--y": "50%" },
      { "--r": `${Math.hypot(window.innerWidth, window.innerHeight)}px`, ease: "none" }
    ).fromTo(".main-ment", { opacity: 1 }, { opacity: 0, ease: "none" }, 0);

    // 이미지 로드/리사이즈 후 재계산
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <img
        src={`${process.env.PUBLIC_URL}/images/jiwon-prof1.jpg`}
        alt="배경 프로필"
        className="background-image"
      />

      <div className="viewfinder">
        <div className="viewfinder__mask" ref={maskRef} />
      </div>

      <h1 className="main-ment">Jiwon's PortPolio</h1>
    </div>
  );
};
export default MainViewFinder;