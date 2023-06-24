import React from 'react';
import Home from './Pages/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from './Pages/SignIn';
import Signup from './Components/Auth/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
