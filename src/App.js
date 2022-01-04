import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import GenresPage from "./pages/genres/GenresPage";
import PlatformsPage from "./pages/platforms/Platforms";
import GameDetails from "./pages/GameDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<GameDetails />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
