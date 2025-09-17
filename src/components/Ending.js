const Ending = () => {
  return (
    <section className="ending-container">
      <div className="ending-wrapper">
        <div className="ending-polaroid">
          <img
            src={`${process.env.PUBLIC_URL}/images/jiwon-prof2.jpg`}
            alt="마무리 프로필 이미지"
          />
        </div>
        <blockquote className="quote">
          <p>
            <span className="quote-line">
              “사용자의 하루를 조금 더 편하고 즐겁게 만드는 디자이너,”
            </span>
            <br />
            <span className="quote-line">
              오늘도 한 걸음씩 성장하고 있습니다.”
            </span>
          </p>
        </blockquote>
      </div>
      <div className="contact-info">
        정지원 | 010-****-**** | 003jung@naver.com |
      </div>
    </section>
  );
};

export default Ending;
