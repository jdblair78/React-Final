import "./genres.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const Genre = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState([]);
  const [crime, setCrime] = useState([]);
  const [horror, setHorror] = useState([]);

  async function fetchBySearch(searchTerm, searchAmount) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=c11d0770`,
    );
    if (data.Search) {
      searchAmount(data.Search.slice(0, 10));
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
    fetchBySearch("action", setAction);
    fetchBySearch("crime", setCrime);
    fetchBySearch("horror", setHorror);
  }, []);

  return (
    <>
      <div className="genres">
        <div className="container">
          <div className="row">
            <div className="genre__wrapper">
              <h4 className="genre__title">Action Packed</h4>
              <div className="top__picks">
                {action.map((movie) => (
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
            <div className="genre__wrapper">
              <h4 className="genre__title">True Crime</h4>
              <div className="top__picks">
                {crime.map((movie) => (
                  <img
                    key={movie.imdbID}
                    src={movie.Poster}
                    className="genre__img"
                    alt={movie.Title}
                    onClick={() => {
                      fetchMoviesDetails(movie.imdbID);
                      setShowModal(true);
                      console.log(fetchMoviesDetails(movie.imdbID));
                    }}
                    style={{ cursor: "pointer" }}
                  ></img>
                ))}
              </div>
            </div>
            <div className="genre__wrapper">
              <h4 className="genre__title">Gripping Suspense</h4>
              <div className="top__picks">
                {horror.map((movie) => (
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
