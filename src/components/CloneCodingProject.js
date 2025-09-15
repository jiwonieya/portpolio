import { RiNetflixFill } from "react-icons/ri";
import { SiAirbnb } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { MdOutlineFindInPage } from "react-icons/md";

const projects = [
  {
    id: 1,
    title: "넷플릭스 클론 사이트",
    subtitle: "Netflix Clone Site",
    description:
      "인기 콘텐츠를 보고 클릭해 상세 정보를 확인할 수 있는 넷플릭스 클론 웹페이지입니다.",
    Icon: RiNetflixFill,
    siteUrl: "https://jiwonieya.github.io/netflix-clone/", 
    githubUrl: "https://github.com/jiwonieya/netflix-clone", 
  },
  {
    id: 2,
    title: "에어비앤비 클론 사이트",
    subtitle: "Airbnb Clone Site",
    description:
      "HTML과 CSS만으로 에어비앤비 메인 페이지를 클론한 정적 웹페이지입니다.",
    Icon: SiAirbnb,
    siteUrl: "https://jiwonieya.github.io/airbnb-clone/", 
    githubUrl: "https://github.com/jiwonieya/airbnb-clone", 
  },
  {
    id: 3,
    title: "테슬라 클론 사이트",
    subtitle: "Tesla Clone Site",
    description:
      "영상 배경과 섹션 디자인으로 브랜드 감성을 재현한 테슬라 클론 웹페이지입니다.",
    Icon: SiTesla,
    siteUrl: "https://jiwonieya.github.io/tesla-clone/", 
    githubUrl: "https://github.com/jiwonieya/tesla-clone",
  },
];

const ClonecodingProject = () => {
  return (
    <section className="clonecoding-container">
      <h1 className="clonecoding-title">CLONE CODING PROJECT</h1>

      {projects.map(
        (
          { id, title, subtitle, description, Icon, siteUrl, githubUrl }
        ) => (
          <article key={id} className="clonecoding-item">
            <div className="clonecoding-info-group">
              <Icon
                className="clonecoding-icon"
                aria-label={`${title} 아이콘`}
              />
              <div>
                <h3 className="clonecoding-name">
                  {title}{" "}
                  <span className="clonecoding-subtitle">({subtitle})</span>
                </h3>
                <p className="clonecoding-desc">{description}</p>
              </div>
            </div>
            {/* ✨ 링크 연결 */}
            <div className="clonecoding-actions">
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} 관련 사이트 보기`}
              >
                <MdOutlineFindInPage className="clonecoding-action-icon" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub 리포지토리 이동`}
              >
                <FiGithub className="clonecoding-action-icon" />
              </a>
            </div>
          </article>
        )
      )}
    </section>
  );
};

export default ClonecodingProject;
