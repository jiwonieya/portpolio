import { IoLogoGithub } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

const NetflixAlert = () => {
  return (
    <div className="netflix-alert-wrapper">
      <div className="content-section">
        <button className="close-button" aria-label="닫기">
          <IoIosCloseCircle />
        </button>

        {/* 전체 콘텐츠의 제목 */}
        <h2 className="content-title">NETFLIX CLONE SITE</h2>

        {/* TODO: 여기에 <img src="이미지링크" alt="넷플릭스 클론 스크린샷" className="project-screenshot" /> 태그를 넣어주세요. */}
        {/* 예시: <img src="https://example.com/netflix-screenshot.jpg" alt="넷플릭스 클론 스크린샷" className="project-screenshot" /> */}

        {/* 버튼 그룹 */}
        <div className="netflix-links">
          <a
            href="https://github.com/jiwonieya/netflix-clone"
            className="github-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub /> GitHub LINK
          </a>
          <a
            href="https://jiwonieya.github.io/netflix-clone/"
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
            <p>React, React-Router, SCSS</p>
          </div>

          <h3>프로젝트 설명</h3>
          <div className="paragraph">
            <h4>클론한 사이트명</h4>
            <p>
              넷플릭스(www.netflix.com)
              <br />
              실제 넷플릭스처럼 사용자가 인기 영화/TV 프로그램을 보고,
              <br />
              클릭 시 상세 정보를 확인할 수 있도록 구성한 프로젝트입니다.
            </p>
          </div>
          <div className="paragraph">
            <h3>프로젝트에서 배운 점</h3>
            <p>
              외부 API 연결을 통한 데이터 활용법
              <br />
              컴포넌트 단위 구조로 설계하고 재사용하는 방식
              <br />
              SCSS를 활용한 일관된 스타일링 적용
            </p>
          </div>

          <h3>프로젝트 개요</h3>
          <div className="paragraph">
            <h4>UI 디자인 방식</h4>
            <p> 직접 웹을 보고 구조 분석 후 유사한 디자인 구현</p>
          </div>
          <div className="paragraph">
            <h4>레이아웃 제작 방식</h4>
            <p>Flex와 Grid를 조합해 콘텐츠 정렬, 반응형 구조 제작</p>
          </div>
          <div className="paragraph">
            <h4>플러그인</h4>
            <p>TMDB API</p>
          </div>
          <div className="paragraph">
            <h4>제작 기간</h4>
            <p>2025.06</p>
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

export default NetflixAlert;
