import MainViewFinder from "./MainViewFinder";
import PortpolioIndex from "./PortpolioIndex";
import AboutMe from "./AboutMe";
import SkillsTools from "./SkillsTools";
import MainProject from "./MainProject";
import ClonecodingProject from "./CloneCodingProject";
import PracticalPublishing from "./PracticalPublishing";

const MainPage = () => {
  return (
    <div>
      <MainViewFinder />
      <PortpolioIndex />
      <AboutMe />
      <SkillsTools />
      <MainProject />
      <ClonecodingProject />
      <PracticalPublishing />
    </div>
  );
};

export default MainPage;
