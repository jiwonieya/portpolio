import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { IoLogoGithub } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import RirimOverview from "./RirimOverview";
import RirimDS from "./RirimDS";
import RirimUF from "./RirimUF";
import RirimRWD from "./RirimRWD";
import RirimEnding from "./RirimEnding";

gsap.registerPlugin(ScrollToPlugin);

const RirimIntro = () => {
  const navigate = useNavigate();

  const wrapperRef = useRef(null);
  const overviewRef = useRef(null);
  const dsRef = useRef(null);
  const ufRef = useRef(null);
  const rwdRef = useRef(null);
  const endingRef = useRef(null);

  const tlRef = useRef(null);
  const isStoppedRef = useRef(false);
  const [showTip, setShowTip] = useState(true); // 안내 문구 상태

  useEffect(() => {
    const startScroll = () => {
      window.scrollTo(0, 0);
      setShowTip(true); // 자동 스크롤 시작하면 팁 보이게

      const sections = [
        wrapperRef,
        overviewRef,
        dsRef,
        ufRef,
        rwdRef,
        endingRef,
      ];

      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power2.inOut" },
      });

      sections.forEach((section, i) => {
        if (i === 0) return; // 첫 섹션은 이미 화면에 있으므로 스킵
        tl.to(window, { scrollTo: section.current }, "+=1");
      });

      tl.to({}, { duration: 2 });
      tl.to(window, {
        scrollTo: wrapperRef.current,
        duration: 2,
        ease: "power2.inOut",
      });

      tl.eventCallback("onComplete", () => {
        if (!isStoppedRef.current) tl.restart();
      });

      tlRef.current = tl;
      tl.play();
    };

    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) startScroll();
        };
      }
    });

    if (loadedCount === images.length) startScroll();

    const handleClick = () => {
      if (!tlRef.current) return;
      tlRef.current.kill();
      gsap.killTweensOf(window);
      isStoppedRef.current = true;
      setShowTip(false); // 클릭하면 안내 문구 사라짐
    };

    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
      tlRef.current?.kill();
      gsap.killTweensOf(window);
    };
  }, []);

  const handleClose = () => {
    tlRef.current?.kill();
    gsap.killTweensOf(window);
    navigate(-1);
  };

  return (
    <div className="ririm-container">
      {showTip && (
        <div className="auto-scroll-tip-top">
          ✨ 클릭하면 멈춰서 볼 수 있어요! ✨
        </div>
      )}

      <section className="ririm-wrapper" ref={wrapperRef}>
        <button className="close-btn" onClick={handleClose}>
          <AiOutlineClose size={30} />
        </button>

        <div className="ririm-txt">
          <h2>Ririm</h2>
          <p className="ririm-ment">
            감정 공감과 자기표현, 꾸미기를 좋아하는 10~20대 소비자들의 트렌드를
            담아, <br /> 직접 고르고 즐길 수 있는 테마형 문구 쇼핑몰 제작
          </p>
        </div>

        <div className="link-img">
          <div className="ririm-links">
            <a
              href="https://github.com/jiwonieya/goods"
              className="github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub /> GitHub LINK
            </a>
            <a
              href="https://jiwonieya.github.io/goods/"
              className="site-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMapPin /> SITE LINK
            </a>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/ririm1.png`}
            alt="RIRIM 전체 이미지"
          />
        </div>
      </section>

      <section className="ririm-overview" ref={overviewRef}>
        <RirimOverview />
      </section>
      <section className="ririm-ds" ref={dsRef}>
        <RirimDS />
      </section>
      <section className="ririm-uf" ref={ufRef}>
        <RirimUF />
      </section>
      <section className="ririm-rwd" ref={rwdRef}>
        <RirimRWD />
      </section>
      <section className="ririm-ending" ref={endingRef}>
        <RirimEnding />
      </section>
    </div>
  );
};

export default RirimIntro;
