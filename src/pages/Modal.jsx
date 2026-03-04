import "./modal.css";
import React, { useEffect } from "react";

const Modal = ({ movie, onClose }) => {
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <>
      <div className="modal__overlay" onClick={onClose}>
        <div
          className="modal__content"
          onClick={(event) => event.stopPropagation}>
          <div className="img__detail--wrapper">
            <img
              src={movie.Poster}
              className="modal__img"
              alt={movie.Title}>
              </img>
            <div className="modal__details--left">
              <h1 className="modal__title">{movie.Title}</h1>
              <p className="modal__para">
                <span className="gray">Time </span>
                {movie.Runtime}
              </p>
              <p className="modal__para">
                <span className="gray">Released </span>
                {movie.Released}
              </p>
              <p className="modal__para">
                <span className="gray">Genre </span>
                {movie.Genre}
              </p>
              <p className="modal__para">
                <span className="gray">Rated </span>
                {movie.Rated}
              </p>
              <p className="modal__para plot">{movie.Plot}</p>
            </div>
          </div>
          <div className="modal__details--bottom">
            <p className="modal__para">
              <span className="gray">Stars </span>
              {movie.Actors}
            </p>
            <p className="modal__para">
              <span className="gray">Awards </span>
              {movie.Awards}
            </p>
            <p className="modal__para">
              <span className="gray">Direct by </span>
              {movie.Director}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
