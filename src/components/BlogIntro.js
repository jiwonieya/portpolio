import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { IoLogoGithub } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import BlogEnding from "./BlogEnding";
import BlogOverview from "./BlogOverview";

gsap.registerPlugin(ScrollToPlugin);

const BlogIntro = () => {
  const navigate = useNavigate();

  const wrapperRef = useRef(null);
  const overviewRef = useRef(null);
  const endingRef = useRef(null);

  const tlRef = useRef(null);
  const isStoppedRef = useRef(false);
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const startScroll = () => {
      window.scrollTo(0, 0);
      setShowTip(true);

      const sections = [wrapperRef, overviewRef, endingRef];

      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power2.inOut" },
      });

      sections.forEach((section, i) => {
        if (i === 0) return; // 첫 섹션은 스킵
        if (section.current) {
          tl.to(window, { scrollTo: section.current }, "+=1");
        }
      });

      if (wrapperRef.current) {
        tl.to({}, { duration: 2 });
        tl.to(window, {
          scrollTo: wrapperRef.current,
          duration: 2,
          ease: "power2.inOut",
        });
      }

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
      setShowTip(false);
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
    <div className="blog-container">
      {showTip && (
        <div className="auto-scroll-tip-top">
          ✨ 클릭하면 멈춰서 볼 수 있어요! ✨
        </div>
      )}

      <section className="blog-wrapper" ref={wrapperRef}>
        <button className="close-btn" onClick={handleClose}>
          <AiOutlineClose size={30} />
        </button>

        <div className="blog-txt">
          <h2>Blog Style WebPage</h2>
          <p className="blog-ment">
            핀터레스트에서 발견한 블로그형 쇼핑몰 웹페이지 <br /> 레이아웃을
            참고하여, HTML과 CSS를 사용해 <br /> 정적인 쇼핑몰 웹페이지로 구현
          </p>
        </div>

        <div className="link-img">
          <div className="blog-links">
            <a
              href="https://github.com/jiwonieya/blog-webpage"
              className="github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub /> GitHub LINK
            </a>
            <a
              href="https://jiwonieya.github.io/blog-webpage/"
              className="site-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMapPin /> SITE LINK
            </a>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/blog1.png`}
            alt="Blog 전체 이미지"
          />
        </div>
      </section>

      <section className="blog-overview" ref={overviewRef}>
        <BlogOverview />
      </section>

      <section className="blog-ending" ref={endingRef}>
        <BlogEnding />
      </section>
    </div>
  );
};

export default BlogIntro;
