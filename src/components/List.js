import { useState } from "react";
import Card from "./Card";
import MostPopular from "./MostPopular";
import { sportsbooks } from "./Data";

export default function List() {
  const [numToShow, setNumToShow] = useState(4);
  const [sortType, setSortType] = useState("name-first");
  const [country, setCountry] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [metoPago, setMetoPago] = useState("");

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

  const filterByMetodoPago = (sportsbooks) => {
    if (metoPago !== "") {
      return sportsbooks.filter((sportsbook) =>
        sportsbook.metoPagos.includes(metoPago)
      );
    }
    return sportsbooks;
  };

  const filteredSportsbooks = sportsbooks.filter((sportsbook) =>
    sportsbook.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedSportsbooks = sortSportsbooks(
    filterByMetodoPago(filterByCountry(filteredSportsbooks)),
    sortType
  );

  const allShown = numToShow >= sortedSportsbooks.length;

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const clearButton =
    searchTerm.length > 0 ? (
      <button
        className="ml-20 lg:ml-28 h-6 w-6 text-gray-500 mx-auto my-auto"
        onClick={handleClearSearch}
      >
        X
      </button>
    ) : null;

  return (
    <div>
      <div className="flex px-5 gap-5">
        <div className="">
          <header className="flex flex-col justify-start items-start lg:justify-center lg:items-center bg-gray-800 p-2 rounded-lg mb-5">
            {/* Search bar */}
            <div className="flex w-full lg:w-96 bg-gray-300 rounded-md mt-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2 text-gray-400 my-auto"
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
                className="text-black ml-2 text-base bg-gray-300 rounded-md h-10 focus:outline-none "
                type="text"
                placeholder="Buscar"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              {clearButton}
            </div>

            {/* Por letras */}
            <div className="flex gap-3 mt-5 mb-2">
              <select
                className="text-white text-xs bg-gray-800 hover:text-zinc-300 rounded-md border-gray-600 border-2 py-1"
                value={sortType}
                onChange={(event) => setSortType(event.target.value)}
              >
                <option value="name-first">Letra (A-Z)</option>
                <option value="name-last">Letra (Z-A)</option>
                <option value="stars">Clasificación</option>
              </select>

              {/* Metodo de pago */}
              <select
                className="text-white text-xs bg-gray-800 hover:text-zinc-300 rounded-md border-gray-600 border-2"
                value={metoPago}
                onChange={(event) => setMetoPago(event.target.value)}
              >
                <option value="">Metodo de pago</option>
                <option value="Visa/Master Card">Visa/Master Card</option>
                <option value="Transferencia Bancaria">
                  Transferencia Bancaria
                </option>
                <option value="Criptomonedas">Criptomonedas</option>
                <option value="Nequi">Nequi</option>
              </select>

              {/* Por país */}
              <select
                className="text-white text-xs bg-gray-800 hover:text-zinc-300 rounded-md border-gray-600 border-2"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
                <option value="">País/Todos</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Panamá">Panamá</option>
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
              </select>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-3">
            {sortedSportsbooks.length > 0 ? (
              sortedSportsbooks
                .filter((sportsbook) =>
                  sportsbook.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .slice(0, numToShow)
                .map((sportsbook) => (
                  <div key={sportsbook.id}>
                    <Card sportsbook={sportsbook} />
                  </div>
                ))
            ) : (
              <div className=" flex w-96 text-gray-500 text-sm">
                No se encontró ningún resultado, intente nuevamente.
              </div>
            )}
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
          <div className="flex justify-center items-center mt-5 text-gray-500">
            <div>
              Mostrando <strong>{numToShow}</strong> de{" "}
              <strong>{sortedSportsbooks.length}</strong> resultados
            </div>
          </div>
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
