import MainViewFinder from "./MainViewFinder";
import PortpolioIndex from "./PortpolioIndex";
import AboutMe from './AboutMe';
import SkillsTools from './SkillsTools';
import MainProject from './MainProject';

const MainPage = () => {
    return (
        <div>
             <MainViewFinder />
            <PortpolioIndex />
            <AboutMe />
            <SkillsTools />
            <MainProject />
        </div>
    );
};

export default MainPage;