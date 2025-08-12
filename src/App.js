import React from 'react';
import MainViewFinder from "./components/MainViewFinder";
import PortpolioIndex from "./components/PortpolioIndex";
import './App.scss';
import AboutMe from './components/AboutMe';
import SkillsTools from './components/SkillsTools';

const App = () => {
  return (
    <div className="App">
      <MainViewFinder />
      <PortpolioIndex />
      <AboutMe />
      <SkillsTools />
    </div>
  );
};

export default App;