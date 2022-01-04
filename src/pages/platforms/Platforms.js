import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoriesCard from "../../components/cards/CategoriesCard";
import Loader from "../../components/Loader";

const GenresPage = () => {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGenres = () => {
      axios
        .get(`https://api.rawg.io/api/platforms?key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
          setPlatforms(res.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getGenres();
  }, []);

  return (
    <main className="min-h-screen container mx-auto px-4 lg:px-0">
      <header>
        <h1 className="font-bold font-poppins text-3xl md:text-4xl py-8">Platforms</h1>
      </header>
      <section className="pb-10">
        {loading ? (
          <Loader />
        ) : (
          <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7">
            {platforms.map((platform) => (
              <CategoriesCard
                key={platform.id}
                name={platform.name}
                gamesCount={platform.games_count}
                imageBg={platform.image_background}
                lists={platform.games}
              />
            ))}
          </article>
        )}
      </section>
    </main>
  );
};

export default GenresPage;
