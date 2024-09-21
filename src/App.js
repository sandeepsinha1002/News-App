import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./Components/Favorites";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";


const App = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <Navbar favorites={favorites} />
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
