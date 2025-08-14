import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { IoLogoGithub } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import PinOverview from './PinOverview';
import PinDS from "./PinDS";
import PinUF from './PinUF';
import PinRWD from './PinRWD';
import PinEnding from './PinEnding';

gsap.registerPlugin(ScrollToPlugin);

const PinIntro = () => {
    const navigate = useNavigate();

    const wrapperRef = useRef(null);
    const overviewRef = useRef(null);
    const dsRef = useRef(null);
    const ufRef = useRef(null);
    const rwdRef = useRef(null);
    const endingRef = useRef(null);

    const tlRef = useRef(null);
    const isStoppedRef = useRef(false);
    const [showTip, setShowTip] = useState(true);

    useEffect(() => {
        const startScroll = () => {
            window.scrollTo(0, 0);
            setShowTip(true);

            const sections = [
                wrapperRef,
                overviewRef,
                dsRef,
                ufRef,
                rwdRef,
                endingRef
            ];

            const tl = gsap.timeline({ defaults: { duration: 2, ease: "power2.inOut" } });

            sections.forEach((section, i) => {
                if (i === 0) return;
                tl.to(window, { scrollTo: section.current }, "+=1");
            });

            tl.to({}, { duration: 2 });
            tl.to(window, { scrollTo: wrapperRef.current, duration: 2, ease: "power2.inOut" });

            tl.eventCallback("onComplete", () => {
                if (!isStoppedRef.current) tl.restart();
            });

            tlRef.current = tl;
            tl.play();
        };

        const images = document.querySelectorAll("img");
        let loadedCount = 0;

        images.forEach(img => {
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
        return () => document.body.removeEventListener("click", handleClick);
    }, []);

    return (
        <div className="pin-container">
            {showTip && (
                <div className="auto-scroll-tip-top">
                    ✨ 클릭하면 멈춰서 볼 수 있어요! ✨
                </div>
            )}

            <section className="pin-wrapper" ref={wrapperRef}>
                <button
                    className="close-btn"
                    onClick={() => navigate('/main-project')}
                >
                    <AiOutlineClose size={30} />
                </button>

                <div className="pin-txt">
                    <h2>P'IN</h2>
                    <p className="pin-ment">
                        주차장 현황 안내, 정기권 혜택, 이벤트 쿠폰 제공 등 <br />
                        주요 기능을 소개하는 브랜드형 홍보 웹사이트
                    </p>
                </div>

                <div className="link-img">
                    <div className="pin-links">
                        <a
                            href="https://github.com/jiwonieya/parkin"
                            className="github-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoGithub /> GitHub LINK
                        </a>
                        <a
                            href="https://jiwonieya.github.io/parkin/"
                            className="site-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiMapPin /> SITE LINK
                        </a>
                    </div>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/pin1.png`}
                        alt="P'IN 전체 이미지"
                    />
                </div>
            </section>

            <section className="pin-overview" ref={overviewRef}><PinOverview /></section>
            <section className="pin-ds" ref={dsRef}><PinDS /></section>
            <section className="pin-uf" ref={ufRef}><PinUF /></section>
            <section className="pin-rwd" ref={rwdRef}><PinRWD /></section>
            <section className="pin-ending" ref={endingRef}><PinEnding /></section>
        </div>
    );
};

export default PinIntro;
