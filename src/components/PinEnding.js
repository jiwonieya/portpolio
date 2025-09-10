const PinEnding = () => {
    return (
        <section className="pin-ending">
            <h1 className="pin-ending-title">Remembrance</h1>
            <div className="section difficult-point">
                <h2>문제점</h2>
                <p>
                    현재 플로팅 메뉴에 ‘닫기’ 기능은 구현되어 있으나, 한 번 닫으면 페이지를
                    새로고침해야만 <br/>다시 표시되는 구조입니다. 이로 인해 사용자가 메뉴를 다시 열기 위해 불필요한 조작을 <br/>해야 하며,
                    UX 측면에서 불편함이 발생합니다.
                </p>
            </div>

            <div className="section solution">
                <h2>개선 사항</h2>
                <p>
                    일정 시간 동안만 메뉴를 숨기거나,
                    사용자가 원할 때 즉시 다시 열 수 있는 기능을 추가할 <br/>계획입니다. 이를 위해 useState와 조건부 렌더링을 활용하여,
                    버튼 클릭 시 메뉴가 사라지고 <br/>다시 표시될 수 있는 구조로 개선할 예정입니다.
                </p>
            </div>
        </section>
    );
};

export default PinEnding;