import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMe = () => {
  const keywords = [
    "개성을 담은 디자인",
    "세심하게 완성하는 디자인",
    "빠른 소통과 잔잔한 협업",
    "사람을 향한 섬세한 흐름",
  ];

  const colors = [
    "#4C72C2", // 부드러운 레드
    "#FFDF56", // 청록빛
    "#BC6D5E", // 차분한 블루 그레이
    "#749B58", // 상큼한 연두
  ];

  const [currentKeywordIdx, setCurrentKeywordIdx] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeywordIdx((prev) => (prev + 1) % keywords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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
    <div id="about-me-section" className="about-me-wrapper" ref={containerRef}>
      <div className="absolute-title">
        ABOUT <br />
        ME
      </div>
      <main className="main-content">
        <h2 className="main-heading">
          저는 <br />
          <span
            className="highlight-keyword"
            style={{
              color: colors[currentKeywordIdx],
              transition: "color 0.5s ease",
            }}
          >
            "{keywords[currentKeywordIdx]}"
          </span>
          을 <br />
          추구하는 사람입니다!
        </h2>
        <section className="description-text">
          <p>
            누구나 마음 한 켠에 가장 좋아하는 사이트 하나쯤은 있을 겁니다.
            <br />
            묵묵히 화면 뒤에서 오늘도 빛나는 작업을 하는 이들을 떠올리며,
            다짐했습니다.
          </p>
          <p>
            “사람들의 마음속에 오래도록 머무르는 사이트를 만드는 사람이
            되겠다”라고. <br /> 그 일념으로 지금 이 길을 걷기 시작했습니다.
          </p>
          <p>
            특히, 패션 의류 쇼핑몰처럼 브랜드 감성과 분위기를 섬세히 담아내며,{" "}
            <br /> 사용자가 자연스러운 흐름 속에서 편안히 이용할 수 있는 UI에
            관심이 많습니다.
          </p>
          <p>
            오롯이 사람을 위한 흐름을 따라, <br /> 나만의 감성을 담은 잔잔한
            파도 같은 디자이너를 꿈꿉니다.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutMe;
