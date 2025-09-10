const BlogOverview = () => {
  return (
    <section className="blog-overview">
      <h2 className="title">OVERVIEW</h2>

      <div className="section">
        <h3 className="label">스킬</h3>
        <p className="content">HTML5, SCSS3, PhotoShop, illustrator</p>
      </div>

      <div className="section">
        <h3 className="label">프로젝트를 <br/> 제작한 이유?</h3>
        <p className="content">
          평소 의류 쇼핑몰에 관심이 많아 진로와 맞물려 나만의 쇼핑몰을 <br />
          구상하게 되었고, 포토샵과 일러스트를 활용해 배너와 쿠폰 이미지를
          <br />직접 제작하여 쇼핑몰을 완성하게 되었습니다.
        </p>
      </div>

      <div className="section">
        <h3 className="label">프로젝트 <br/> 성과 및 특징</h3>
        <p className="content">
          이미지 제작 툴(PhotoShop, illustrator, Figma) 활용 능력 증명 참고
          <br />
          디자인을 코드로 재현하는 구현력 향상 <br />
          웹페이지 정보 구조(쿠폰, 베스트 아이템, 배너 등) 분석 및 재배치 경험
        </p>
      </div>

      <div className="section">
        <h3 className="label">프로젝트 개요</h3>

        <div className="sub-section">
          <h4 className="sub-label">UI 디자인 방식</h4>
          <p className="content">
            Figma를 이용한 디자인 시스템 구축 후 <br/>코드 구현
          </p>
        </div>

        <div className="sub-section">
          <h4 className="sub-label">레이아웃 제작 방식</h4>
          <p className="content">
            HTML의 시맨틱 태그를 활용해 구조를 명확히 배치 <br/>
            SCSS로 효율적이고 재사용 가능한 스타일을 작성 <br/>
            Flexbox를 통해 각 섹션의 요소들을 정렬 및 배치
          </p>
        </div>
      </div>

      <div className="section">
        <h3 className="label">제작기간</h3>
        <p className="content">총 4일</p>
      </div>

      <div className="section">
        <h3 className="label">제작 기여도</h3>
        <p className="content">100% (개인 프로젝트)</p>
      </div>
    </section>
  );
};

export default BlogOverview;
