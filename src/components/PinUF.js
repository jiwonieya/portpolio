const PinUF = () => {
    return (
        <div className="pinuf">
            <h1 className="pin-user-flow">USER FLOW</h1>
            <img
                src={`${process.env.PUBLIC_URL}/images/pin-user-flow.jpg`}
                alt="pin 유저플로우 이미지"
                className="pin-user-flow-img"
            />
        </div>
    );
};

export default PinUF;