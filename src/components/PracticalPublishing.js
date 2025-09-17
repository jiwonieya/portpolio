const PracticalPublishing = () => {
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
          />
          <p>Grid (INTERACTIVE)</p>
        </div>

        <div className="image-box">
          <img
            src={`${process.env.PUBLIC_URL}/images/luckydory.png`}
            alt="luckdory 이미지"
          />
          <p>Luckydory</p>
        </div>

        <div className="image-box quiz-box">
          <img
            src={`${process.env.PUBLIC_URL}/images/quizgame.png`}
            alt="quiz game 이미지"
          />
          <p>QUIZ GAME</p>
        </div>
      </div>
    </div>
  );
};

export default PracticalPublishing;
