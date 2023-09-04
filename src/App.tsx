import './App.css';
import {  HashRouter, Routes, Route,  } from 'react-router-dom';

//Routes
import Home from './Routes/Home';
//Components
import Navbar from './Components/Navbar/Navbar';
import SocialBox from './Components/SocialBox/SocialBox';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <SocialBox />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
