import React from "react";
import noImage from "../../assets/no-image.png";

const GameCard = ({ name, released, bgImage, rating }) => {
  const options = { year: "numeric", month: "short", day: "numeric" };

  const bgStyle = (rating) => {
    return rating > 4.0
      ? "bg-green text-white font-medium p-2 rounded-full text-sm absolute z-50 top-3 right-3"
      : rating > 3.0
      ? "bg-yellow font-medium p-2 rounded-full text-sm absolute z-50 top-3 right-3"
      : "bg-red text-white font-medium p-2 rounded-full text-sm absolute z-50 top-3 right-3";
  };

  return (
    <div className="bg-white shadow rounded relative overflow-hidden">
      <span className={bgStyle(rating)}>{rating ? rating.toFixed(1) : "N/A"}</span>
      <div className="aspect-w-12 aspect-h-8">
        {bgImage ? (
          <img src={bgImage} className="object-cover bg-center hover:opacity-90 transition duration-150" alt={name} />
        ) : (
          <img src={noImage} className="object-cover bg-center hover:opacity-90 transition duration-150" alt={name} />
        )}
      </div>
      <div className="p-4">
        <h2 className="md:pb-3 md:text-xl font-poppins font-bold truncate hover:text-primary transition duration-100">
          {name}
        </h2>
        <div className="font-inter hidden md:flex items-center justify-between">
          <p className="text-sm">Release date:</p>
          <p className="text-sm">{new Date(released).toLocaleDateString("en-US", options)}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
