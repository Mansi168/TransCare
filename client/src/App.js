import React from 'react'
import Home from './Pages/Home';
import './App.css';
import { HashRouter, Routes, Route} from 'react-router-dom';
import SignIn from 'Components/Auth/Signin';

function App() {
  return (

      <HashRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
