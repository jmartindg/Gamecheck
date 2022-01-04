import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import GameCard from "../components/cards/GameCard";
import Loader from "../components/Loader";

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    const getGames = () => {
      axios
        .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
          setGames(res.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getGames();
  }, []);

  const searchGames = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${searchInputValue}`)
      .then((res) => {
        setGames(res.data.results);
        setSearchInputValue("");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <section className="container mx-auto px-4 lg:px-0">
      <header className="flex justify-between items-center flex-col md:flex-row py-8">
        <h1 className="font-bold font-poppins text-3xl md:text-4xl">Discover</h1>
        <SearchBar search={searchGames} inputValue={searchInputValue} onChange={handleInputChange} />
      </header>
      <section className="pb-10">
        {loading ? (
          <Loader />
        ) : (
          <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7">
            {games.map((game) => (
              <Link to={`/${game.id}`} key={game.id}>
                <GameCard
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  bgImage={game.background_image}
                  rating={game.rating}
                />
              </Link>
            ))}
          </article>
        )}
      </section>
    </section>
  );
};

export default Home;
