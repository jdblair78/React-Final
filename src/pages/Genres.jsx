import "./genres.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const Genre = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [topPicks, setTopPicks] = useState([]);
  const [feelGood, setFeelGood] = useState([]);
  const [suspense, setSuspense] = useState([]);

  async function fetchBySearch(searchTerm, setter) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=c11d0770`,
    );
    if (data.Search) {
      setter(data.Search.slice(0, 8));
    }
  }

  async function fetchMoviesDetails(id) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=c11d0770`,
    );

    setSelectedMovie(data);
    setShowModal(true);
  }

  useEffect(() => {
    fetchBySearch("drama", setTopPicks);
    fetchBySearch("comedy", setFeelGood);
    fetchBySearch("thriller", setSuspense);
  }, []);

  return (
    <>
      <div className="genres">
        <div className="container">
          <div className="row">
            <h4 className="genre__title">Drama keeping you intrigued</h4>
            <div className="top__picks">
              {topPicks.map((movie) => (
                <img
                  key={movie.imdbID}
                  src={movie.Poster}
                  className="genre__img"
                  alt={movie.Title}
                  onClick={() => {
                    fetchMoviesDetails(movie.imdbID);
                    setShowModal(true);
                  }}
                  style={{ cursor: "pointer" }}
                ></img>
              ))}
            </div>

            <h4 className="genre__title">Feel Good Movies</h4>
            <div className="top__picks">
              {feelGood.map((movie) => (
                <img
                  key={movie.imdbID}
                  src={movie.Poster}
                  className="genre__img"
                  alt={movie.Title}
                  onClick={() => {
                    fetchMoviesDetails(movie.imdbID);
                    setShowModal(true);
                  }}
                  style={{ cursor: "pointer" }}
                ></img>
              ))}
            </div>
            <h4 className="genre__title">Gripping Suspense</h4>
            <div className="top__picks">
              {suspense.map((movie) => (
                <img
                  key={movie.imdbID}
                  src={movie.Poster}
                  className="genre__img"
                  alt={movie.Title}
                  onClick={() => {
                    fetchMoviesDetails(movie.imdbID);
                    setShowModal(true);
                  }}
                  style={{ cursor: "pointer" }}
                ></img>
              ))}
            </div>
          </div>
          {showModal && selectedMovie && (
            <Modal movie={selectedMovie} onClose={() => setShowModal(false)} />
          )}
        </div>
      </div>
    </>
  );
};

export default Genre;
