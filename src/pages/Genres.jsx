import React from "react";
import "./genres.css";

const Genre = () => {
  return (
    <>
    <div className="genres">
      <div className="container">
        <div className="row">
          <h3 className="genre__title">Today's Top Picks for You</h3>
          <div className="top__picks">
            <img src="#" className="genre__img" alt=""></img>
          </div>
          <h3 className="genre__title">Makes You Laugh</h3>
          <div className="top__picks">
            <img src="#" className="genre__img" alt=""></img>
          </div>
          <h3 className="genre__title">Love Suspense</h3>
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
