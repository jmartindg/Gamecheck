import React from "react";
import spinner from "../assets/spinner.svg";

const Loader = () => {
  return (
    <div className="mt-10 min-h-screen">
      <img src={spinner} className="w-24 mx-auto" alt="Loading..." />
    </div>
  );
};

export default Loader;
