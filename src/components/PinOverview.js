const PinOverview = () => {
    return (
        <section className="pin-overview">
            <h2 className="title">OVERVIEW</h2>

            <div className="section">
                <h3 className="label">스킬</h3>
                <p className="content">React, SCSS, JS, Supabase, Git/GitHub, PhotoShop, illustrator,
                    Premiere Pro</p>
            </div>

            <div className="section">
                <h3 className="label">목표</h3>
                <p className="content">
                    모든 기기에서 최적화된 반응형 UI 구현<br />
                    SUPABASE를 활용해 실시간 쿠폰 발급 기능을 구현
                </p>
            </div>

            <div className="section">
                <h3 className="label">프로젝트 개요</h3>

                <div className="sub-section">
                    <h4 className="sub-label">UI 디자인 방식</h4>
                    <p className="content">Figma를 이용한 <br/>디자인 시스템 구축 후 <br/>코드 구현</p>
                </div>

                <div className="sub-section">
                    <h4 className="sub-label">레이아웃 제작 방식</h4>
                    <p className="content">
                        React 컴포넌트를 기반으로 레이아웃을 배치 <br />
                        Flex와 Grid를 사용하여 컨텐츠를 효율적이고 가독성 높게 배치
                    </p>
                </div>
            </div>

            <div className="section">
                <h3 className="label">플러그인</h3>
                <p className="content">react-slick, slick-carousel, react-icons, AOS, canvas-confetti</p>
            </div>

            <div className="section">
                <h3 className="label">제작기간</h3>
                <p className="content">총 8일</p>
            </div>

            <div className="section">
                <h3 className="label">내가 맡은 역할</h3>
                <p className="content">
                    하단, 플로팅 메뉴 구현, 상세페이지 UI 제작 후 프로젝트 관련 내용을 <br />
                    정리하고 PPT를 제작하여 팀의 의사소통과 결과 공유를 도왔습니다.
                </p>
            </div>

            <div className="section">
                <h3 className="label">제작 기여도</h3>
                <p className="content">
                    60% (5인 팀 프로젝트)<br />
                    하단, 플로팅 메뉴 기능 구현을 주도적으로 수행 <br/>
                    상세페이지 UI를 JSX, SCSS로 제작
                </p>
            </div>
        </section>
    );
};

export default PinOverview;