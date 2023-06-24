import React from 'react'
import Home from './Pages/Home';
import './App.css';
import { HashRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (

      <HashRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
