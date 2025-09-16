import MainViewFinder from "./MainViewFinder";
import PortpolioIndex from "./PortpolioIndex";
import AboutMe from './AboutMe';
import SkillsTools from './SkillsTools';
import MainProject from './MainProject';
import ClonecodingProject from "./CloneCodingProject";
import NetflixAlert from "./NetflixAlert";
import AirbnbAlert from "./AirbnbAlert";
import TeslaAlert from "./TeslaAlert";

const MainPage = () => {
    return (
        <div>
             <MainViewFinder />
            <PortpolioIndex />
            <AboutMe />
            <SkillsTools />
            <MainProject />
            <ClonecodingProject />
            <NetflixAlert />
            <AirbnbAlert />
            <TeslaAlert />
        </div>
    );
};

export default MainPage;