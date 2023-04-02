import { useState } from "react";
import Card from "./Card";
import MostPopular from "./MostPopular";
import { sportsbooks } from "./Data";

export default function List() {
  const [numToShow, setNumToShow] = useState(4);
  const [sortType, setSortType] = useState("name-first");
  const [country, setCountry] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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

  const filterByCountry = (sportsbooks) => {
    if (country !== "") {
      return sportsbooks.filter((sportsbook) =>
        sportsbook.countries.includes(country)
      );
    }
    return sportsbooks;
  };

  const filteredSportsbooks = sportsbooks.filter((sportsbook) =>
    sportsbook.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedSportsbooks = sortSportsbooks(
    filterByCountry(filteredSportsbooks),
    sortType
  );

  const allShown = numToShow >= sortedSportsbooks.length;

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const clearButton =
    searchTerm.length > 0 ? (
      <button
        className="h-6 w-6 text-gray-500 mx-2 my-auto cursor-pointer"
        onClick={handleClearSearch}
      >
        X
      </button>
    ) : null;

  return (
    <div>
      <div className="flex p-5 gap-5">
        <div>
          <header className=" flex flex-col lg:flex-row bg-gray-800 p-8 rounded-lg mb-5">
            <div className="flex flex-row mb-5 bg-gray-300 rounded-md lg:w-96 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 mx-2 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.5 15.5l5.5 5.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 10a8 8 0 10-4.93 7.45"
                />
              </svg>
              <input
                className="text-black text-base bg-gray-300 rounded-md w-full h-10 focus:outline-none px-2 py-1"
                type="text"
                placeholder="Buscar"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              {clearButton}
            </div>
            <div class="flex justify-center lg:ml-10">
              <div className="flex divide-x-2">
                <div className=" grid justify-center items-center">
                  <span className="text-white text-xs ml-1 mb-3">
                    Ordenar por:
                  </span>
                  <select
                    className="text-white text-xs bg-gray-800 hover:text-zinc-300 rounded-md border-gray-600 border-2 p-1 mr-5"
                    value={sortType}
                    onChange={(event) => setSortType(event.target.value)}
                  >
                    <option value="name-first">Letra inicial</option>
                    <option value="name-last">Letra final</option>
                    <option value="stars">Clasificación</option>
                  </select>
                </div>
                <div className=" grid justify-center items-center">
                  <span className="text-white text-xs ml-5 mb-2">
                    Selecciona el país:
                  </span>
                  <select
                    className="text-white text-xs ml-5 bg-gray-800 hover:text-zinc-300 rounded-md border-gray-600 border-2 p-1 px-2"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                  >
                    <option value="">Todos</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Panamá">Panamá</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Colombia">Colombia</option>
                  </select>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-3">
            {sortedSportsbooks
              .filter((sportsbook) =>
                sportsbook.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .slice(0, numToShow)
              .map((sportsbook) => (
                <div key={sportsbook.id}>
                  <Card sportsbook={sportsbook} />
                </div>
              ))}
          </div>

          {!allShown && (
            <div className="flex justify-center items-center mt-5">
              <button
                type="button"
                className="text-blue-600 hover:text-zinc-300 underline cursor-pointer"
                onClick={handleLoadMore}
              >
                Cargar más
              </button>
            </div>
          )}
        </div>

        <div className="text-white hidden sm:block md:basis-52">
          <div className="flex-auto text-white">
            <MostPopular />
          </div>
        </div>
      </div>
      <hr className="mb-5 mt-5" />
    </div>
  );
}
