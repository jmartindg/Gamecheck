import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../assets/page-not-found.svg";

const ErrorPage = () => {
  let navigate = useNavigate();

  return (
    <section className="my-20">
      <img src={error} className="mx-auto w-56 md:w-1/5" alt="Page not found" />
      <div className="text-center">
        <p className="font-poppins font-bold text-xl md:text-3xl py-5">Oh no! Page not found!</p>
        <button
          className="md:mt-2 hover:underline"
          onClick={() => {
            navigate("/");
          }}
        >
          &larr; Return to home page
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
