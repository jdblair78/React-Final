import "./genres.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Genre = (searchTerm) => {
  const [movies, setMovies] = useState([])
  async function fetchMovies() {
    const apiKey = "ab612e22"
  const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
  setMovies(data)
  console.log(data)
}
  useEffect(() => {
fetchMovies();
  }, [])

  return (
    <>
    <div className="genres">
      <div className="container">
        <div className="row">
          <h4 className="genre__title">Today's Top Picks for You</h4>
          <div className="top__picks">
            <img src={searchTerm.Poster} className="genre__img" alt=""></img>
          </div>
          <h4 className="genre__title">Makes You Laugh</h4>
          <div className="top__picks">
            <img src="#" className="genre__img" alt=""></img>
          </div>
          <h4 className="genre__title">Love Suspense</h4>
          <div className="top__picks">
            <img src="#" className="genre__img" alt=""></img>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Genre;
