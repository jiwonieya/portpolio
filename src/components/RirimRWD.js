const RirimRWD = () => {
    return (
        <div className="ririmrwd">
            <h1>Responsive Web Design</h1>
            <div className="img-wrap">
                <div className="box">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/ririm-mobile.png`}
                        alt="ririm 모바일 반응형 이미지"
                    />
                    <p>Mobile</p>
                </div>
                <div className="box">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/ririm-tablet.png`}
                        alt="ririm 태블릿 반응형 이미지"
                    />
                    <p>Tablet</p>
                </div>
                <div className="box">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/ririm-pc.png`}
                        alt="ririm 데스크탑 반응형 이미지"
                    />
                    <p>Desktop</p>
                </div>
            </div>
        </div>
    );
};

export default RirimRWD;