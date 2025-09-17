import MainViewFinder from "./MainViewFinder";
import PortpolioIndex from "./PortpolioIndex";
import AboutMe from "./AboutMe";
import SkillsTools from "./SkillsTools";
import MainProject from "./MainProject";
import ClonecodingProject from "./CloneCodingProject";
import PracticalPublishing from "./PracticalPublishing";
import Ending from "./Ending";

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
      <Ending />
    </div>
  );
};

export default MainPage;
