const RirimDS = () => {
    return (
        <div className="ririmds">
            <h2>DESIGN SYSTEM</h2>
            <div className="colorfont-wrap">
                <img
                    src={`${process.env.PUBLIC_URL}/images/ririm-color-font.jpg`}
                    alt="Ririm 컬러 및 폰트 이미지"
                />
                <p className="colorfont">컬러 및 폰트</p>
            </div>
        </div>
    );
};

export default RirimDS;