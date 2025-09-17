import { IoLogoGithub } from "react-icons/io";
import { MdOutlineFindInPage } from "react-icons/md";

import { IoIosCloseCircle } from "react-icons/io";

const Grid = () => {
  return (
    <div className="grid-container">
      <button className="close-btn" type="button" aria-label="닫기">
        <IoIosCloseCircle />
      </button>

      <div className="grid-image-box">
        <img
          src={`${process.env.PUBLIC_URL}/images/grid.png`}
          alt="grid 이미지"
        />
      </div>

      <div className="grid-icon-group">
        <a
          href="https://github.com/jiwonieya/grid-practice"
          className="github-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub />
        </a>
        <a
          href="https://jiwonieya.github.io/grid-practice/"
          className="site-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineFindInPage />
        </a>
      </div>

      <h2 className="grid-title">Grid (INTERACTIVE)</h2>

      <p className="grid-tech-stack">HTML5, CSS3, JavaScript</p>

      <p className="grid-description">
        Grid 레이아웃과 클릭 시 이동하는
        <br />
        간단한 JavaScript 기능을 직접 구현해보기 위해 만든 프로젝트
      </p>
    </div>
  );
};

export default Grid;
