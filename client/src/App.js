import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.';
import Home from './Pages/Home';
// import { ChakraProvider } from '@chakra-ui/react';
import Library from './Pages/library';
import Navbar from './Components/LandingPage/Navbar';
import BookDetails from "./Components/BookDetails/BookDetails";
import BookList from "./Components/BookList/BookList";

function App() {
  return (
    // <ChakraProvider>
      <AppProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </Router>
      </AppProvider>
    //  </ChakraProvider>
  );
}

export default App;
