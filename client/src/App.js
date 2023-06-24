import React from 'react'
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.';
import Home from './Pages/Home';

import Library from './Pages/library';

import Navbar from './Components/LandingPage/Navbar';
import BookDetails from "./Components/BookDetails/BookDetails";
import BookList from "./Components/BookList/BookList";

function App() {
  return (
    <AppProvider>
    <HashRouter>
      <Navbar/>
   
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/library" element = {<Library />}></Route>
      <Route path="/book" element={<BookList />} />
     
          <Route path = "/book/:id" element = {<BookDetails />} />
     </Routes>
   </HashRouter>
   </AppProvider>
  );
}

export default App;
