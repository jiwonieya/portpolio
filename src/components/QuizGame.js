import { IoLogoGithub } from "react-icons/io";
import { MdOutlineFindInPage } from "react-icons/md";

import { IoIosCloseCircle } from "react-icons/io";

const QuizGame = ({ onClose = () => {} }) => {
  return (
    <div className="quiz-container">
      <button
        className="close-btn"
        type="button"
        aria-label="닫기"
        onClick={onClose}
      >
        <IoIosCloseCircle />
      </button>

      <div className="quiz-inner">
        <div className="quiz-image-box">
          <img
            src={`${process.env.PUBLIC_URL}/images/quizgame.png`}
            alt="quiz game 이미지"
          />
        </div>

        <div className="quiz-content">
          <div className="quiz-icon-group">
            <a
              href="https://github.com/jiwonieya/quiz-game"
              className="github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://jiwonieya.github.io/quiz-game/"
              className="site-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOutlineFindInPage />
            </a>
          </div>

          <h2 className="quiz-title">QUIZ GAME</h2>

          <p className="quiz-tech-stack">React, SCSS</p>

          <p className="quiz-description">
            리액트에서 quizdata.js로 데이터를 분리해
            <br />
            재사용하고, 컴포넌트에 반복 작성 없이
            <br />
            4지선다형 퀴즈 게임을 구현한 프로젝트
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
