import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ favorites }) => {
  return (
    <nav className="flex justify-between  items-center p-4 bg-[#32324e] bg text-white font-candal  shadow-md font-bold">

      <div className="text-4xl font-bold">
        Newzapp
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="text-2xl hover:text-gray-400">
          Home
        </Link>
        <Link to="/favorites" className="text-2xl hover:text-gray-400">
          Favorites ({favorites.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
