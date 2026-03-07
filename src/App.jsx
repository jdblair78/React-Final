import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Genre from "./pages/Genres";
import Footer from "./pages/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

useEffect(() => {
    if (!searchTerm) return;

    async function fetchMovies() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=c11d0770`
      );

      if (data.Search) {
        setMovies(data.Search.slice(0, 6));
      }
    }

    fetchMovies();
  }, [searchTerm]);

  console.log(searchTerm);
console.log(movies);

  return (
    <>
      <Nav 
        setSearchTerm={setSearchTerm} 
        />
      <Genre 
        searchTerm={searchTerm} 
        movies={movies} />
      <Footer />
    </>
  );
}

export default App;
