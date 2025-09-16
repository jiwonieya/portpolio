import { IoLogoGithub } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

const AirbnbAlert = () => {
  return (
    <div className="airbnb-alert-wrapper">
      <div className="content-section">
        <button className="close-button" aria-label="닫기">
          <IoIosCloseCircle />
        </button>

        {/* 전체 콘텐츠의 제목 */}
        <h2 className="content-title">AIRBNB CLONE SITE</h2>

        {/* TODO: 여기에 <img src="이미지링크" alt="에어비앤비 클론 스크린샷" className="project-screenshot" /> 태그를 넣어주세요. */}
        {/* 예시: <img src="https://example.com/netflix-screenshot.jpg" alt="에어비앤비 클론 스크린샷" className="project-screenshot" /> */}

        {/* 버튼 그룹 */}
        <div className="airbnb-links">
          <a
            href="https://github.com/jiwonieya/airbnb-clone"
            className="github-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub /> GitHub LINK
          </a>
          <a
            href="https://jiwonieya.github.io/airbnb-clone/"
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
              에어비앤비(www.airbnb.co.kr)
              <br />
              HTML과 CSS만으로
              <br /> 에어비앤비 메인 페이지를 클론한 정적 웹페이지입니다.
              <br />
              실사이트의 레이아웃, 폰트, 컬러, 섹션 구성을 최대한 유사하게
              <br />
              재현하며 웹디자인 감각을 키우는데 집중했습니다.
            </p>
          </div>
          <div className="paragraph">
            <h3>프로젝트에서 배운 점</h3>
            <p>
              반응형 웹디자인 구현을 통해
              <br /> 다양한 디바이스 환경에서의 레이아웃 설계를 익혔고,
              <br />
              SCSS를 통해 효율적인 스타일 관리와 CSS 연동 개념을
              <br />
              실습하며 기초를 탄탄히 다질 수 있었습니다.
            </p>
          </div>

          <h3>프로젝트 개요</h3>
          <div className="paragraph">
            <h4>UI 디자인 방식</h4>
            <p> Figma를 이용한 디자인 시스템 구축 후 코드 구현</p>
          </div>
          <div className="paragraph">
            <h4>레이아웃 제작 방식</h4>
            <p>Flex를 기반으로 카드 형태의 레이아웃 제작</p>
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
export default AirbnbAlert;
