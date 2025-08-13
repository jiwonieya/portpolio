import { useEffect, useState } from "react";

const skillsData = [
  { src: "/images/css.png", alt: "css 이미지", className: "css", name: "CSS3" },
  { src: "/images/figma.png", alt: "figma 이미지", className: "figma", name: "Figma" },
  { src: "/images/github.png", alt: "github 이미지", className: "github", name: "GitHub" },
  { src: "/images/html.png", alt: "html 이미지", className: "html", name: "HTML5" },
  { src: "/images/illustrator.png", alt: "illustrator 이미지", className: "illustrator", name: "illustrator" },
  { src: "/images/javascript.png", alt: "javascript 이미지", className: "javascript", name: "JavaScript" },
  { src: "/images/photoshop.png", alt: "photoshop 이미지", className: "photoshop", name: "Photoshop" },
  { src: "/images/react.png", alt: "react 이미지", className: "react", name: "React" },
  { src: "/images/sass.png", alt: "sass 이미지", className: "sass", name: "Sass" },
  { src: "/images/supabase.png", alt: "supabase 이미지", className: "supabase", name: "Supabase" },
];

const SkillsTools = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    skillsData.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, i]);
      }, i * 500); // 0.5초 간격
    });
  }, []);

  return (
    <div className="skillstools-wrapper">
      <h1>
        Skills & <br /> Tools
      </h1>
      <div className="img-wrapper">
        {skillsData.map((skill, i) => (
          <div
            key={i}
            className={`skill-item ${skill.className} ${visibleIndexes.includes(i) ? "visible" : ""}`}
          >
            <img
              src={`${process.env.PUBLIC_URL}${skill.src}`}
              alt={skill.alt}
            />
            <span className="tooltip">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTools;