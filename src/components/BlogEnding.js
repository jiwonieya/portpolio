const BlogEnding = () => {
  return (
    <section className="blog-ending">
      <h1>Remembrance</h1>
      <div className="section difficult-point">
        <h2>어려웠던 점</h2>
        <p>
          HTML과 CSS를 처음 배우고 정적인 웹페이지를 제작하다 보니 <br/> 전반적인
          과정이 어색하고 어려웠습니다. <br/> 특히 HTML 구조를 어떻게 설계해야 할지,
          CSS로 위치를 잡고 디자인을 <br/> 적용하는 방법에 대해 많은 고민이
          있었습니다. <br/> 그중에서도 p태그와 br태그의 위치와 순서를 어떻게 <br/> 결정해야
          하는지 감이 오지 않았습니다.
        </p>
      </div>

      <div className="section solution">
        <h2>해결방법</h2>
        <p>
          Figma를 활용해 페이지 영역을 시각적으로 분리하고, <br/> 각 영역에 어떤
          태그를 사용할지 하나씩 결정했습니다. <br/> 이 과정을 통해 HTML 구조를
          명확하게 잡을 수 있었고, <br/> position과 z-index 속성을 사용하여 요소의
          위치와 순서를 조정하며 <br/> 개념을 확실히 이해하게 되었습니다.
        </p>
      </div>

      <div className="section refactoring-point">
        <h2>리팩토링 포인트</h2>
        <p>
          정적인 웹페이지를 제작하다 보니 다소 단조롭게 느껴지는 부분이
          있었습니다. <br/> 추후에는 CSS 애니메이션과 트랜지션 효과를 적극적으로
          활용하여, <br/> 페이지에 시각적인 생동감을 더할 계획입니다.
        </p>
      </div>
    </section>
  );
};

export default BlogEnding;