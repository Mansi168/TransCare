import React from 'react';
// import Navbar from "../Navbar/Navbar";
import SearchForm from "./SearchForm";
import "./BookList.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            {/* <Navbar /> */}
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Unleash your literary odyssey!</h2><br />
                <p className='header-text fs-15 fw-4'>TransBookShelf library is a curated collection of books, articles, personal narratives, and educational materials that cover a wide range of topics including transgender history, gender identity, transitioning, healthcare, mental health, legal rights, and so much more. Whether you're seeking information, inspiration, or simply a sense of belonging, we invite you to explore our virtual shelves and discover a wealth of resources tailored to your needs. Together, let us celebrate the diversity, strength, and resilience of the transgender community, as we strive for greater understanding, acceptance, and equality.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header
