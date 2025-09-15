import MainViewFinder from "./MainViewFinder";
import PortpolioIndex from "./PortpolioIndex";
import AboutMe from './AboutMe';
import SkillsTools from './SkillsTools';
import MainProject from './MainProject';
import ClonecodingProject from "./CloneCodingProject";

const MainPage = () => {
    return (
        <div>
             <MainViewFinder />
            <PortpolioIndex />
            <AboutMe />
            <SkillsTools />
            <MainProject />
            <ClonecodingProject />
        </div>
    );
};

export default MainPage;