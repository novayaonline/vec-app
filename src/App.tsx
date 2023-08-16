import './App.css';
import {  HashRouter, Routes, Route,  } from 'react-router-dom';

//Routes
import Home from './Routes/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
