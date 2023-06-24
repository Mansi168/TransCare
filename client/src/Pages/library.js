import React from 'react';
import Header from '../Components/BookList/Header';
import { Outlet } from 'react-router-dom';

const Library = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Library
