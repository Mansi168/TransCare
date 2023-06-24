import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SigninPage from './Pages/SignIn';
import Signup from './Components/Auth/Signup';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
