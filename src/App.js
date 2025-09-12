import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import RirimIntro from './components/RirimIntro';
import PinIntro from './components/PinIntro';
import BlogIntro from './components/BlogIntro';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="/ririm-intro" element={<RirimIntro />} />
        <Route path="/pin-intro" element={<PinIntro />} />
        <Route path="/blog-intro" element={<BlogIntro />} />
      </Routes>
    </Router>
  );
};
export default App;