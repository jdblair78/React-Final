import "./genres.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const Genre = ({ movies, searchTerm }) => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState([]);
  const [crime, setCrime] = useState([]);
  const [horror, setHorror] = useState([]);

  const filterMovies = movies.filter((movie) => searchTerm);

  async function fetchBySearch(searchTerm, searchAmount) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=c11d0770`,
    );
    if (data.Search) {
      searchAmount(data.Search.slice(0, 8));
    }
  }

  async function fetchMoviesDetails(id, searchAmount) {
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
        {filterMovies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
        <div className="container">
          <div className="row">
              {searchTerm && (
                <div className="search__results">
                  <h2 className="genre__title">Search Results:</h2>
                  <div className="search__picks">
                    {movies.map((movie) => (
                        <img
                        className="genre__img"
                          key={movie.imdbID}
                          src={movie.Poster}
                          alt={movie.Title}
                          onClick={() => {
                      fetchMoviesDetails(movie.imdbID);
                      setShowModal(true);
                    }}
                    style={{ cursor: "pointer" }}
                        />
                    ))}
                  </div>
                  </div>
              )}

            <div className="genre__wrapper">
              <h4 className="genre__title">Action Packed</h4>
              <div className="genre__picks">
                {action.map((movie) => (
                  <img
                    className="genre__img"
                    key={movie.imdbID}
                    src={movie.Poster}
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
              <div className="genre__picks">
                {crime.map((movie) => (
                  <img
                    className="genre__img"
                    key={movie.imdbID}
                    src={movie.Poster}
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
                    className="genre__img"
                    key={movie.imdbID}
                    src={movie.Poster}
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
