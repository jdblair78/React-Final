import "./genres.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Genre = () => {
  const [ movie, setMovie] = useState()
  async function fetchMovies() {
    const { data } = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=c11d0770",
    );
    console.log(data)
    setMovie(data)
  }

  useEffect(() => {
    fetchMovies()
  }, []);

  return (
    <>
      <div className="genres">
        <div className="container">
          <div className="row">
            <h4 className="genre__title">Today's Top Picks for You</h4>
            <div className="top__picks">
              {
              movie && (
              <img src={movie.Poster} className="genre__img" alt={movie.Title}></img>)
              }
            </div>
            <h4 className="genre__title">Makes You Laugh</h4>
            <div className="top__picks">
                {
              movie && (
              <img src={movie.Poster} className="genre__img" alt={movie.Title}></img>)
              }
            </div>
            <h4 className="genre__title">You Love Suspense</h4>
            <div className="top__picks">
                {
              movie && (
              <img src={movie.Poster} className="genre__img" alt={movie.Title}></img>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genre;
