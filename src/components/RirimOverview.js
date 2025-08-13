const RirimOverview = () => {
    return (
        <section className="ririm-overview">
            <h2 className="title">OVERVIEW</h2>

            <div className="section">
                <h3 className="label">스킬</h3>
                <p className="content">React, SCSS, JS, GSAP, Git/GitHub, PhotoShop, illustrator</p>
            </div>

            <div className="section">
                <h3 className="label">목표</h3>
                <p className="content">
                    반응형 UI 구현<br />
                    로그인, 장바구니, 마이페이지 등 핵심 기능 중심의 사용자 맞춤 인터페이스 제작
                </p>
            </div>

            <div className="section">
                <h3 className="label">프로젝트 개요</h3>

                <div className="sub-section">
                    <h4 className="sub-label">UI 디자인 방식</h4>
                    <p className="content">Figma를 이용한 디자인 시스템 구축 후 코드 구현</p>
                </div>

                <div className="sub-section">
                    <h4 className="sub-label">레이아웃 제작 방식</h4>
                    <p className="content">
                        React 기반으로 기능별 컴포넌트를 나누고, 재사용과 유지 보수가 쉽도록 설계<br />
                        Flex와 Grid를 활용해 콘텐츠를 정리하고,<br />
                        상품 리스트는 2~4열로 나눈 카드 형태로 배치<br />
                        React Router를 이용해 주요 기능이 담긴 여러 페이지를 자연스럽게 연결
                    </p>
                </div>
            </div>

            <div className="section">
                <h3 className="label">플러그인</h3>
                <p className="content">react-slick, slick-carousel, react-icons, AOS</p>
            </div>

            <div className="section">
                <h3 className="label">제작기간</h3>
                <p className="content">총 5일</p>
            </div>

            <div className="section">
                <h3 className="label">내가 맡은 역할</h3>
                <p className="content">
                    컴포넌트 기획 및 제작, 프로젝트 관련 내용을 정리하고,<br />
                    PPT를 제작하여 팀의 의사소통과 결과 공유를 도왔습니다
                </p>
            </div>

            <div className="section">
                <h3 className="label">제작 기여도</h3>
                <p className="content">
                    60% (5인 팀 프로젝트)<br />
                    로그인, 로그인 후 마이페이지 기능 구현을 주도적으로 수행<br />
                    상품 상세 페이지용 이미지를 포토샵으로 제작
                </p>
            </div>
        </section>
    );
};

export default RirimOverview;