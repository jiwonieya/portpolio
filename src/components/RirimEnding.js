const RirimEnding = () => {
    return (
        <section className="ririm-ending">
            <h1>Remembrance</h1>
            <div className="section difficult-point">
                <h2>어려웠던 점</h2>
                <p>
                    로그인 후 웹페이지 제작 과정에서, 데스크탑과 태블릿 화면은 동일한 UI 구조였지만, 모바일 화면은 전혀 다른 UI 디자인으로 제작해야했습니다.
                    하나의 컴포넌트 안에서 각기 다른 구조를 처리하려다 보니,
                    HTML 구조와 SCSS 작성이 복잡해졌고, 특히 SCSS로 반응형 처리를 하는 과정에서 유지보수 난이도가 크게 높아졌습니다.
                </p>
            </div>

            <div className="section solution">
                <h2>해결방법</h2>
                <p>
                    데스크톱·태블릿 전용 컴포넌트와 모바일 전용 컴포넌트를 분리하여 제작했습니다.
                    각각의 SCSS 파일도 따로 관리하여, width 값이 768px 이하가 되면 모바일 전용 페이지로 전환되도록 설정하여 구조적 복잡성을 줄이고,
                    스타일 충돌 문제를 방지할 수 있었습니다.
                </p>
            </div>

            <div className="section refactoring-point">
                <h2>리팩토링 포인트</h2>
                <p>
                    추후에는 반복되는 UI 요소를 재사용 가능한 컴포넌트 단위로 쪼개고,
                    props나 조건부 렌더링을 활용해 하나의 컴포넌트 안에서 다양한 뷰를 유연하게 처리할 수 있도록 개선할 계획입니다.
                </p>
            </div>
        </section>
    );
};

export default RirimEnding;