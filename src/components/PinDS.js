const PinDS = () => {
    return (
        <div className="pinds">
            <h3>DESIGN SYSTEM</h3>
            <div className="cf-wrap">
                <div className="color-wrap">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/pin-color.jpg`}
                        alt="P'IN 컬러 이미지"
                        className="pincolor"
                    />
                    <p className="pincolorment">컬러</p>
                </div>
                <div className="font-wrap">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/pin-font.jpg`}
                        alt="P'IN 폰트 이미지"
                        className="pinfont"
                    />
                    <p className="pinfontment">폰트</p>
                </div>
            </div>
        </div>
    );
};

export default PinDS;