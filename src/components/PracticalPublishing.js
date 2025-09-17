import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Grid from "./Grid";
import Luckydory from "./Luckydory";
import QuizGame from "./QuizGame";

gsap.registerPlugin(ScrollTrigger);

const PracticalPublishing = () => {
  const componentRef = useRef(null);
  const [isGridAlertOpen, setIsGridAlertOpen] = useState(false);
  const [isLuckydoryAlertOpen, setIsLuckydoryAlertOpen] = useState(false);
  const [isQuizAlertOpen, setIsQuizAlertOpen] = useState(false);

  useEffect(() => {
    if (!componentRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const root = componentRef.current;

      gsap.fromTo(
        root,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.utils.toArray(".image-box").forEach((box, index) => {
        gsap.fromTo(
          box,
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: box,
              start: "top 85%",
              toggleActions: "play none none reset",
            },
          }
        );
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

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
    <div
      ref={componentRef}
      id="practical-publishing-section"
      className="practical-publishing"
    >
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
