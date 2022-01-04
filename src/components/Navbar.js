import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.svg";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-0">
        <div>
          <img src={logo} className="w-28 md:w-36" alt="Gamecheck Logo" />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="font-inter font-medium link-hover">
            Home
          </Link>
          <Link to="/genres" className="font-inter font-medium link-hover">
            Genres
          </Link>
          <Link to="/platforms" className="font-inter font-medium link-hover">
            Platforms
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle}>
            {isOpen ? <IoMdClose className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "flex" : "hidden"} flex-col py-3 px-4 lg:px-0 transition`}>
        <Link
          to="/"
          className="font-inter font-medium link-hover py-2 hover:px-3 rounded hover:bg-primary hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/genres"
          className="font-inter font-medium link-hover py-2 hover:px-3 rounded hover:bg-primary hover:text-white"
        >
          Genres
        </Link>
        <Link
          to="/platforms"
          className="font-inter font-medium link-hover py-2 hover:px-3 rounded hover:bg-primary hover:text-white"
        >
          Platforms
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
