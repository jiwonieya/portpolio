const PinRWD = () => {
    return (
        <div className="pinrwd">
            <h1 className="pinrwd-title">Responsive Web Design</h1>
            <div className="pin-img-wrap">
                <div className="pin-box">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/pin-mobile.jpg`}
                        alt="pin 모바일 반응형 이미지"
                        className="pin-img"
                    />
                    <p className="pin-sub-title">Mobile</p>
                </div>
                <div className="pin-box">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/pin-tablet.jpg`}
                        alt="pin 태블릿 반응형 이미지"
                        className="pin-img"
                    />
                    <p className="pin-sub-title">Tablet</p>
                </div>
                <div className="pin-box">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/pin-desktop.jpg`}
                        alt="pin 데스크탑 반응형 이미지"
                        className="pin-img"
                    />
                    <p className="pin-sub-title">Desktop</p>
                </div>
            </div>
        </div>
    );
};

export default PinRWD;