import "./genres.css";
import React, { useEffect, useState, onClick, onClose } from "react";
import axios from "axios";
import Modal from "./Modal";

const Genre = () => {
  const [ movie, setMovie] = useState()
  const [showModal, setShowModal] = useState(false)

  async function fetchMovies() {
    const { data } = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=c11d0770",
    );
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
              <img
              src={movie.Poster}
              className="genre__img"
              alt={movie.Title}
              onClick={() => setShowModal(true)}
              style={{ cursor: "pointer"}}>
              </img>
              )}
            </div>
            {
            showModal && (
              <Modal
              movie={movie}
              onClose={() => setShowModal(false)} />
            )}
            <h4 className="genre__title">Feel Good Movies</h4>
            <div className="top__picks">
              {
              movie && (
              <img
              src={movie.Poster}
              className="genre__img"
              alt={movie.Title}
              onClick={() => setShowModal(true)}
              style={{ cursor: "pointer"}}>
              </img>
              )}
            </div>
            {
            showModal && (
              <Modal
              movie={movie}
              onClose={() => setShowModal(false)} />
            )}
             <h4 className="genre__title">Gripping Suspense</h4>
            <div className="top__picks">
              {
              movie && (
              <img
              src={movie.Poster}
              className="genre__img"
              alt={movie.Title}
              onClick={() => setShowModal(true)}
              style={{ cursor: "pointer"}}>
              </img>
              )}
            </div>
            {
            showModal && (
              <Modal
              movie={movie}
              onClose={() => setShowModal(false)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Genre;
