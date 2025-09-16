import { IoLogoGithub } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

const TeslaAlert = () => {
  return (
    <div className="tesla-alert-wrapper">
      <div className="content-section">
        <button className="close-button" aria-label="닫기">
          <IoIosCloseCircle />
        </button>

        {/* 전체 콘텐츠의 제목 */}
        <h2 className="content-title">TESLA CLONE SITE</h2>

        {/* TODO: 여기에 <img src="이미지링크" alt="테슬라 클론 스크린샷" className="project-screenshot" /> 태그를 넣어주세요. */}
        {/* 예시: <img src="https://example.com/netflix-screenshot.jpg" alt="테슬라 클론 스크린샷" className="project-screenshot" /> */}

        {/* 버튼 그룹 */}
        <div className="tesla-links">
          <a
            href="https://github.com/jiwonieya/tesla-clone"
            className="github-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub /> GitHub LINK
          </a>
          <a
            href="https://jiwonieya.github.io/tesla-clone/"
            className="site-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMapPin /> SITE LINK
          </a>
        </div>

        {/* 설명 텍스트 */}
        <div className="description-section">
          <div className="paragraph">
            <h3>기술 스택</h3>
            <p>HTML5, CSS3</p>
          </div>

          <h3>프로젝트 설명</h3>
          <div className="paragraph">
            <h4>클론한 사이트명</h4>
            <p>
              테슬라(www.tesla.com)
              <br />
              HTML과 CSS로 제작한 테슬라 웹페이지로,
              <br /> 영상 배경과 섹션 디자인을 통해
              <br /> 브랜드 감성을 정적으로 재현한 프로젝트입니다.
            </p>
          </div>
          <div className="paragraph">
            <h3>프로젝트에서 배운 점</h3>
            <p>
              영상이 반복재생되고 소리없이 자연스럽게
              <br />
              배경에 녹아드는 웹 구성 방식이 궁금했는데,
              <br />
              해당 프로젝트를 통해
              <br />
              video 태그의 다양한 속성을 직접 적용해보며
              <br />
              웹에서 영상 활용법을 배웠습니다.
            </p>
          </div>

          <h3>프로젝트 개요</h3>
          <div className="paragraph">
            <h4>UI 디자인 방식</h4>
            <p> Figma를 이용한 디자인 시스템 구축 후 코드 구현</p>
          </div>
          <div className="paragraph">
            <h4>레이아웃 제작 방식</h4>
            <p>
              Flex를 기반으로 레이아웃을 구성하며
              <br />각 섹션을 유연하게 배치
            </p>
          </div>
          <div className="paragraph">
            <h4>제작 기간</h4>
            <p>2025.04</p>
          </div>
          <div className="paragraph">
            <h4>제작 참여율</h4>
            <p>100%(개인 프로젝트)</p>
          </div>
          <div className="paragraph">
            <h4>배포 방식</h4>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeslaAlert;
