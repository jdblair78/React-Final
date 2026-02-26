import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Genre from "./pages/Genres";
import Footer from "./pages/Footer"

function App() {
  return (
    <>
      <Nav />
      <Genre />
      <Footer />
    </>
  );
}

export default App;
