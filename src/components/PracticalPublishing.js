import { useState } from "react";
import Grid from "./Grid";
import Luckydory from "./Luckydory";
import QuizGame from "./QuizGame";

const PracticalPublishing = () => {
  const [isGridAlertOpen, setIsGridAlertOpen] = useState(false);
  const [isLuckydoryAlertOpen, setIsLuckydoryAlertOpen] = useState(false);
  const [isQuizAlertOpen, setIsQuizAlertOpen] = useState(false);

  const handleGridOpen = () => {
    setIsGridAlertOpen(true);
  };

  const handleGridClose = () => {
    setIsGridAlertOpen(false);
  };

  const handleLuckydoryOpen = () => {
    setIsLuckydoryAlertOpen(true);
  };

  const handleLuckydoryClose = () => {
    setIsLuckydoryAlertOpen(false);
  };

  const handleQuizOpen = () => {
    setIsQuizAlertOpen(true);
  };

  const handleQuizClose = () => {
    setIsQuizAlertOpen(false);
  };

  const handleOverlayClick = (event, onClose) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="practical-publishing">
      <h1 className="title">
        PRACTICAL
        <br />
        PUBLISHING
      </h1>

      <div className="image-grid">
        <div className="image-box">
          <img
            src={`${process.env.PUBLIC_URL}/images/grid.png`}
            alt="grid 이미지"
            onClick={handleGridOpen}
          />
          <p>Grid (INTERACTIVE)</p>
        </div>

        <div className="image-box">
          <img
            src={`${process.env.PUBLIC_URL}/images/luckydory.png`}
            alt="luckdory 이미지"
            className="luckydory-image"
            onClick={handleLuckydoryOpen}
          />
          <p>Luckydory</p>
        </div>

        <div className="image-box quiz-box">
          <img
            src={`${process.env.PUBLIC_URL}/images/quizgame.png`}
            alt="quiz game 이미지"
            onClick={handleQuizOpen}
          />
          <p>QUIZ GAME</p>
        </div>
      </div>
      {isGridAlertOpen && (
        <div
          className="project-alert-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Grid 프로젝트 상세 정보"
          onClick={(event) => handleOverlayClick(event, handleGridClose)}
        >
          <div className="project-alert-content">
            <Grid onClose={handleGridClose} />
          </div>
        </div>
      )}

      {isLuckydoryAlertOpen && (
        <div
          className="project-alert-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Luckydory 프로젝트 상세 정보"
          onClick={(event) => handleOverlayClick(event, handleLuckydoryClose)}
        >
          <div className="project-alert-content">
            <Luckydory onClose={handleLuckydoryClose} />
          </div>
        </div>
      )}

      {isQuizAlertOpen && (
        <div
          className="project-alert-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="퀴즈 게임 프로젝트 상세 정보"
          onClick={(event) => handleOverlayClick(event, handleQuizClose)}
        >
          <div className="project-alert-content">
            <QuizGame onClose={handleQuizClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticalPublishing;
