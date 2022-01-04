import React from "react";
import { GiConsoleController } from "react-icons/gi";

const CategoriesCard = ({ name, gamesCount, imageBg, lists }) => {
  return (
    <div className="w-full rounded shadow overflow-hidden relative">
      <img src={imageBg} className="absolute inset-0 w-full h-full object-cover" alt={name} />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative">
        <header className="font-poppins">
          <h2 className="text-xl md:text-2xl text-white font-semibold text-center pt-8 pb-2 px-5">{name}</h2>
        </header>
        <div className="text-center font-inter">
          <h3 className="font-medium text-white px-5">Games count</h3>
          <span className="text-gray-200 text-sm px-5">{gamesCount.toLocaleString()}</span>
        </div>
        <div className="text-white px-5 py-5">
          {lists
            .map((list) => (
              <div key={list.id} className="flex items-center justify-between gap-8">
                <div className="truncate">
                  <span className="text-sm">{list.name}</span>
                </div>
                <div>
                  <span className="text-sm flex items-center">
                    {list.added.toLocaleString()} <GiConsoleController className="ml-1" />
                  </span>
                </div>
              </div>
            ))
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
