import { IoLogoGithub } from "react-icons/io";
import { MdOutlineFindInPage } from "react-icons/md";

import { IoIosCloseCircle } from "react-icons/io";

const Luckydory = () => {
  return (
    <div className="luckydory-container">
      <button className="close-btn" type="button" aria-label="닫기">
        <IoIosCloseCircle />
      </button>

      <div className="luckydory-image-box">
        <img
          src={`${process.env.PUBLIC_URL}/images/luckydory.png`}
          alt="luckydory 이미지"
        />
      </div>

      <div className="luckydory-icon-group">
        <a
          href="https://github.com/jiwonieya/luckydory"
          className="github-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub />
        </a>
        <a
          href="https://jiwonieya.github.io/luckydory/"
          className="site-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineFindInPage />
        </a>
      </div>

      <h2 className="luckydory-title">Luckydory</h2>

      <p className="luckydory-tech-stack">React, SCSS</p>

      <p className="luckydory-description">
        리액트로 컴포넌트 구성, alert창 사용,
        <br />
        라우터를 통한 페이지 이동 등을 연습하기 위해 만든 프로젝트
      </p>
    </div>
  );
};

export default Luckydory;
