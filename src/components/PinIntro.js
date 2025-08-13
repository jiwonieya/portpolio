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

const PinIntro = () => {
    return (
        <div className="pin-container">
            {/* {showTip && (
                <div className="auto-scroll-tip-top">
                    ✨ 클릭하면 멈춰서 볼 수 있어요! ✨
                </div>
            )} */}

            <section className="pin-wrapper" /*ref={wrapperRef}*/>
                <button
                    className="close-btn"
                    // onClick={() => navigate('/main-project')}
                >
                    <AiOutlineClose size={30} />
                </button>

                <div className="pin-txt">
                    <h2>P'IN</h2>
                    <p className="pin-ment">
                        주차장 현황 안내, 정기권 혜택, 이벤트 쿠폰 제공 등 <br/>
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

            <section className="pin-overview" /*ref={overviewRef}*/><PinOverview /></section>
            <section className="pin-ds" /*ref={dsRef}*/><PinDS /></section>
            <section className="pin-uf" /*ref={ufRef}*/><PinUF /></section>
            <section className="pin-rwd" /*ref={rwdRef}*/><PinRWD /></section>
            <section className="pin-ending" /*ref={endingRef}*/><PinEnding /></section>
        </div>
    );
};

export default PinIntro;