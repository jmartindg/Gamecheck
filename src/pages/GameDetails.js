import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { FaSteam, FaWindows, FaXbox, FaPlaystation, FaGooglePlay, FaApple, FaLinux } from "react-icons/fa";
import { SiNintendo, SiNintendoswitch, SiGogdotcom, SiEpicgames, SiNintendo3Ds, SiMacos } from "react-icons/si";
import { DiAppstore, DiAndroid } from "react-icons/di";
import ReadMore from "../components/ReadMore";

const GameDetails = () => {
  let { id } = useParams();
  const options = { year: "numeric", month: "short", day: "numeric" };
  const regex = /(<([^>]+)>)/gi;

  const [gameDetails, setGameDetails] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [stores, setStores] = useState({});
  const [ratings, setRatings] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [specificPlatforms, setSpecificPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [loading, setLoading] = useState(true);

  const ratingTitle = (rating) => {
    return rating.title === "exceptional" ? (
      <>🙌</>
    ) : rating.title === "recommended" ? (
      <>👌</>
    ) : rating.title === "meh" ? (
      <>😐</>
    ) : (
      <>👎</>
    );
  };

  const storeLogo = (store) => {
    return store.store.name === "PlayStation Store" ? (
      <span>
        <FaPlaystation className="ml-2" />
      </span>
    ) : store.store.name === "Epic Games" ? (
      <span>
        <SiEpicgames className="ml-2" />
      </span>
    ) : store.store.name === "Steam" ? (
      <span>
        <FaSteam className="ml-2" />
      </span>
    ) : store.store.name === "Xbox 360 Store" || store.store.name === "Xbox Store" ? (
      <span>
        <FaXbox className="ml-2" />
      </span>
    ) : store.store.name === "Nintendo Store" ? (
      <span>
        <SiNintendo className="ml-2" />
      </span>
    ) : store.store.name === "GOG" ? (
      <span>
        <SiGogdotcom className="ml-2" />
      </span>
    ) : store.store.name === "Google Play" ? (
      <span className="ml-2">
        <FaGooglePlay />
      </span>
    ) : (
      <span className="ml-2">
        <DiAppstore />
      </span>
    );
  };

  const platformLogo = (platform) => {
    return platform.platform.name === "Xbox" ? (
      <FaXbox />
    ) : platform.platform.name === "PlayStation" ? (
      <FaPlaystation />
    ) : platform.platform.name === "PC" ? (
      <FaWindows />
    ) : platform.platform.name === "Android" ? (
      <DiAndroid />
    ) : platform.platform.name === "iOS" ? (
      <FaApple />
    ) : platform.platform.name === "Apple Macintosh" ? (
      <SiMacos />
    ) : platform.platform.name === "Nintendo 3DS" ? (
      <SiNintendo3Ds />
    ) : platform.platform.name === "Linux" ? (
      <FaLinux />
    ) : platform.platform.name === "Nintendo" ? (
      <SiNintendoswitch />
    ) : (
      platform.platform.name
    );
  };

  const storeBg = (store) => {
    return store.store.name === "PlayStation Store"
      ? "text-center text-sm text-white rounded-md bg-blue-600 p-3 inline-block"
      : store.store.name === "Epic Games"
      ? "text-center text-sm text-white rounded-md bg-black p-3 inline-block"
      : store.store.name === "Steam"
      ? "text-center text-sm text-white rounded-md bg-gray-900 p-3 inline-block"
      : store.store.name === "Xbox 360 Store" || store.store.name === "Xbox Store"
      ? "text-center text-sm text-white rounded-md bg-green p-3 inline-block"
      : store.store.name === "Nintendo Store"
      ? "text-center text-sm text-white rounded-md bg-red p-3 inline-block"
      : store.store.name === "Google Play"
      ? "text-center text-sm text-white rounded-md bg-emerald-600 p-3 inline-block"
      : store.store.name === "GOG"
      ? "text-center text-sm text-white rounded-md bg-purple-600 p-3 inline-block"
      : "text-center text-sm text-white rounded-md bg-gray-800 p-3 inline-block";
  };

  const metacriticColor = (metacritic) => {
    return gameDetails.metacritic > 80
      ? "border border-green text-green font-semibold p-1 rounded-full"
      : gameDetails.metacritic > 40
      ? "border border-amber-500 text-amber-500 font-semibold p-1 rounded-full"
      : "border border-red text-red font-semibold p-1 rounded-full";
  };

  useEffect(() => {
    const getGameDetails = () => {
      axios
        .get(`https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
          setGameDetails(res.data);
          setRatings(res.data.ratings);
          setStores(res.data.stores);
          setPlatforms(res.data.parent_platforms);
          setSpecificPlatforms(res.data.platforms);
          setGenres(res.data.genres);
          setDevelopers(res.data.developers);
          setPublishers(res.data.publishers);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getGameDetails();
  }, [id]);

  useEffect(() => {
    const getGameDetails = () => {
      axios
        .get(`https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
          setScreenshots(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getGameDetails();
  }, [id]);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section
            style={{ backgroundImage: `url(${gameDetails.background_image})` }}
            className="bg-center bg-cover bg-no-repeat relative"
          >
            <div className="min-h-screen w-full bg-black absolute top-0 opacity-60"></div>
            <div className="min-h-screen container font-inter mx-auto flex flex-col md:flex-row py-14 px-4 lg:px-0 -z-10">
              <div className="flex-1 z-10">
                <span className="bg-primary text-white text-sm py-2 px-3 rounded-full">
                  {new Date(gameDetails.released).toLocaleDateString("en-US", options)}
                </span>
                <span className="uppercase text-white text-sm tracking-wider ml-4 leading-9 md:leading-none">
                  Average Playtime: {gameDetails.playtime} hours
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-poppins font-bold pt-5">
                  {gameDetails.name}
                </h1>

                <div className="py-4 space-x-3 flex items-center">
                  {platforms.map((platform) => (
                    <span key={platform.id} className="text-white">
                      {platformLogo(platform)}
                    </span>
                  ))}
                </div>

                <h2 className="text-white tracking-wider uppercase pb-3">Ratings</h2>
                <div className="flex items-center flex-wrap md:flex-row gap-3">
                  {ratings.map((rating) => (
                    <div key={rating.id} className="border border-gray-300 rounded-md py-2 px-4">
                      <h2 className="capitalize text-white font-semibold">
                        {rating.title}
                        <span className="ml-2">{ratingTitle(rating)}</span>
                      </h2>
                      <span className="text-white">{rating.percent.toFixed(0)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="font-inter container mx-auto py-10 px-4 lg:px-0">
            <h2 className="font-bold text-2xl pb-3">Screenshots</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {screenshots.map((screenshot) => (
                <div key={screenshot.id} className="aspect-w-16 aspect-h-9">
                  <img src={screenshot.image} className="rounded-md" alt="Screenshot" />
                </div>
              ))}
            </div>
            <h2 className="font-bold text-2xl pb-3 pt-8">About</h2>
            <div className="grid gap-x-12 lg:grid-cols-12">
              <div className="md:col-span-8">
                <ReadMore maxCharacterCount={600}>{gameDetails.description.replace(regex, "")}</ReadMore>
                <div className="pt-5 grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold">Platforms</h3>
                    <div className="pt-3 flex flex-wrap gap-2">
                      {specificPlatforms.map((specificPlatform) => (
                        <span key={specificPlatform.id} className="border border-black rounded-full px-3 py-1 text-sm">
                          {specificPlatform.platform.name}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold pt-4">Genre</h3>
                    <div className="pt-3 flex flex-wrap gap-2">
                      {genres.length === 0 ? (
                        <span className="border border-black rounded-full px-3 py-1 text-sm">N/A</span>
                      ) : (
                        genres.map((genre) => (
                          <span key={genre.id} className="border border-black rounded-full px-3 py-1 text-sm">
                            {genre.name}
                          </span>
                        ))
                      )}
                    </div>
                    <h3 className="font-bold pt-4">Age rating</h3>
                    <div className="pt-3 flex flex-wrap gap-2">
                      <span className="border border-black rounded-full px-3 py-1 text-sm">
                        {gameDetails.esrb_rating === null ? "N/A" : gameDetails.esrb_rating.name}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold pb-3">Metascore</h3>
                    <span className={metacriticColor(gameDetails.metacritic)}>
                      {gameDetails.metacritic ? gameDetails.metacritic : "No rating available"}
                    </span>
                    <h3 className="font-bold pt-4">Release date</h3>
                    <p className="pt-2 text-sm">
                      {new Date(gameDetails.released).toLocaleDateString("en-US", options)}
                    </p>
                    <h3 className="font-bold pt-4">{developers.length > 1 ? "Developers" : "Developer"}</h3>
                    <div className="pt-3 flex flex-wrap gap-2">
                      {developers.map((developer) => (
                        <span key={developer.id} className="border border-black rounded-full px-3 py-1 text-sm">
                          {developer.name}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold pt-4">{publishers.length > 1 ? "Publishers" : "Publisher"}</h3>
                    <div className="pt-3 flex flex-wrap gap-2">
                      {publishers.map((publisher) => (
                        <span key={publisher.id} className="border border-black rounded-full px-3 py-1 text-sm">
                          {publisher.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 pt-5 md:pt-0">
                <h2 className="font-semibold text-lg pb-3">Where to buy</h2>
                <div className="grid grid-cols-2 gap-3">
                  {stores.map((store) => (
                    <div key={store.store.id} className={storeBg(store)}>
                      <p className="flex items-center justify-center">
                        {store.store.name}
                        {storeLogo(store)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default GameDetails;
