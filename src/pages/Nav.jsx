import React, { useState } from "react";
import "./nav.css";
import axios from "axios";

const Nav = ({ setSearchTerm }) => {
  const [movies, setMovies] = useState([]);

  async function fetchBySearch(searchTerm) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=c11d0770`,
    );
   
  }

  return (
    <div className="home">
      <div className="navbar">
        <div className="navbar__links">
          <div className="link__wrapper">
            <h1 className="nav__title">MOVIEFLIX</h1>
            <div className="nav__link--wrapper">
              <button className="btn">Sign In</button>
            </div>
          </div>
        </div>
      </div>
      <div className="search__wrapper">
        <h1 className="search__title">Unlimited Movies</h1>
        <input
        type="text"
        className="search__input"
        placeholder="Search movies..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      </div>
      <div className="search__results">
        {movies.map((movie) => (
          <img className="search__img" key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
        ))}
      </div>
    </div>
  );
};

export default Nav;
