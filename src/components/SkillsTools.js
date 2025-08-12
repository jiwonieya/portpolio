const SkillsTools = () => {
    return (
        <div className="skillstools-wrapper">
            <h1>Skills & <br /> Tools</h1>
            <div className="img-wrapper">
                <img
                    src={`${process.env.PUBLIC_URL}/images/css.png`}
                    alt="css 이미지"
                    className="css"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/figma.png`}
                    alt="figma 이미지"
                    className="figma"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/github.png`}
                    alt="github 이미지"
                    className="github"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/html.png`}
                    alt="html 이미지"
                    className="html"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/illustrator.png`}
                    alt="illustrator 이미지"
                    className="illustrator"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/javascript.png`}
                    alt="javascript 이미지"
                    className="javascript"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/photoshop.png`}
                    alt="photoshop 이미지"
                    className="photoshop"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/react.png`}
                    alt="react 이미지"
                    className="react"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/sass.png`}
                    alt="sass 이미지"
                    className="sass"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/supabase.png`}
                    alt="supabase 이미지"
                    className="supabase"
                />
            </div>
        </div>
    );
};

export default SkillsTools;