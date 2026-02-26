import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="home">
      <div className="navbar">
        <div className="navbar__links">
          <div className="link__wrapper">
            <h1 className="nav__title">MOVIEFLIX</h1>
            <div className="nav__link--wrapper">
              <select id="language">
                <option value="English" className="select">English</option>
                <option value="Spanish" className="select">Español</option>
              </select>
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
          placeholder="Search Movies..."
        ></input>
      </div>
    </div>
  );
};

export default Nav;
