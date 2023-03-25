import { useState } from "react";
import Card from "./Card";
import MostPopular from "./MostPopular";
import { sportsbooks } from "./Data";

export default function List() {
  const [numToShow, setNumToShow] = useState(4);
  const [sortType, setSortType] = useState("name-first");

  function handleLoadMore() {
    setNumToShow(numToShow + 4);
  }

  function sortSportsbooks(sportsbooks, sortType) {
    return [...sportsbooks].sort((a, b) => {
      switch (sortType) {
        case "stars":
          return b.stars - a.stars;
        case "name-first":
          return a.name.localeCompare(b.name);
        case "name-last":
          return b.name.localeCompare(a.name);
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }

  const sortedSportsbooks = sortSportsbooks(sportsbooks, sortType);
  const allShown = numToShow >= sortedSportsbooks.length;

  return (
    <div>
      <div className="flex mt-5 mb-5 p-4 gap-5">
        <div className="text-white flex-1">
          <header className="flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-5 ">
            <div className="flex items-center">
              <span className="text-white mr-2">Ordenar por:</span>
              <select
                className="text-white bg-gray-800 rounded-md border-gray-600 border-2 p-1"
                value={sortType}
                onChange={(event) => setSortType(event.target.value)}
              >
                <option value="name-first">Letra inicial</option>
                <option value="name-last">Letra final</option>
                <option value="stars">Clasificación</option>
              </select>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
            {sortedSportsbooks.slice(0, numToShow).map((sportsbook) => (
              <div key={sportsbook.id}>
                <Card sportsbook={sportsbook} />
              </div>
            ))}
          </div>

          {!allShown && (
            <div className="flex justify-center items-center mt-5">
              <button
                type="button"
                className="text-blue-600 underline cursor-pointer"
                onClick={handleLoadMore}
              >
                Cargar más
              </button>
            </div>
          )}
        </div>

        <div className="text-white hidden sm:block md:basis-52 lg:basis-80">
          <div className="flex-auto text-white">
            <MostPopular />
          </div>
        </div>
      </div>
      <hr className="mb-5 mt-5" />
    </div>
  );
}
