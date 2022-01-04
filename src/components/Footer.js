import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-dark.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row py-3 px-4 lg:px-0">
        <div>
          <img src={logo} className="w-28" alt="Gamecheck Logo" />
        </div>
        <div className="space-x-6 my-4 md:my-0">
          <Link to="/" className="font-inter text-gray-300 text-sm link-hover">
            Home
          </Link>
          <Link to="/genres" className="font-inter text-gray-300 text-sm link-hover">
            Genres
          </Link>
          <Link to="/platforms" className="font-inter text-gray-300 text-sm link-hover">
            Platforms
          </Link>
        </div>
        <div>
          <a
            href="https://rawg.io/apidocs"
            className="text-gray-300 text-sm link-hover"
            target="_blank"
            rel="noreferrer"
          >
            API Used
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
