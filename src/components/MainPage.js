import MainViewFinder from "./MainViewFinder";
import PortpolioIndex from "./PortpolioIndex";
import AboutMe from "./AboutMe";
import SkillsTools from "./SkillsTools";
import MainProject from "./MainProject";
import ClonecodingProject from "./CloneCodingProject";
import PracticalPublishing from "./PracticalPublishing";
import Grid from "./Grid";
import Luckydory from "./Luckydory";
import QuizGame from "./QuizGame";

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
      <Grid />
      <Luckydory />
      <QuizGame />
    </div>
  );
};

export default MainPage;
