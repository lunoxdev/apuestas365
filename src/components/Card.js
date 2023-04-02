import { useState } from "react";

function Card({ sportsbook }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="max-w-md mx-auto mb-5 ">
      <div className="divide-y-2 md:divide-none lg:divide-none dark:bg-gray-800 rounded-xl overflow-hidden">
        <div className="grid p-5 md:p-0 lg:p-0 grid-cols-2 md:grid-cols-1 justify-center items-center md:border-b ">
          <div className="flex justify-center items-center">
            <img
              className="ring-2 ring-gray-300 md:ring-1 lg:ring-0 w-36 h-36 rounded-full md:w-full md:h-28 md:mb-0 md:rounded-none lg:h-28 lg:w-full lg:rounded-none object-cover"
              src={sportsbook.img}
              alt={sportsbook.imageAlt}
            />
          </div>

          <div className="flex lg:flex-col justify-center items-center ">
            <div className=" grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center mt-2 md:mt-0">
              <div className="ml-1">
                <h2 className=" text-xl md:text-base lg:text-base text-white font-bold">
                  {sportsbook.name}
                </h2>
                <div className="flex mt-3 ">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 mb-4 md:mb-0 lg:mb-0 ${
                        i < sportsbook.stars
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="mb-5 lg:ml-2">
                <button className=" rounded-xl text-base lg:text-xs font-bold bg-zinc-900 text-white hover:bg-blue-900 w-32 h-12 lg:w-24 md:mt-5 ">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {showDescription ? (
            <div>
              <p className="text-gray-400 text-xs p-4">
                {sportsbook.description}
              </p>
              {/* Description */}
              <div className="grid grid-cols-3 lg:grid-cols-2 gap-6 p-4 text-center text-white ">
                {/* Casino */}
                <div className="flex flex-col text-sm items-center">
                  Casino
                  <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                    <span
                      className={` font-extrabold ${
                        sportsbook.casino === "✓"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {sportsbook.casino}
                    </span>
                  </span>
                </div>

                {/* Cash Out */}
                <div className="flex flex-col text-sm items-center">
                  Cash Out
                  <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                    <span
                      className={` font-extrabold ${
                        sportsbook.cashOut === "✓"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {sportsbook.cashOut}
                    </span>
                  </span>
                </div>

                {/* Bet Builder */}
                <div className="flex flex-col text-sm items-center">
                  Bet Builder
                  <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                    <span
                      className={` font-extrabold ${
                        sportsbook.betBuilder === "✓"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {sportsbook.betBuilder}
                    </span>
                  </span>
                </div>

                {/* Transmisión en vivo */}
                <div className="flex flex-col text-sm items-center">
                  Transmisión en vivo
                  <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                    <span
                      className={` font-extrabold ${
                        sportsbook.enVivo === "✓"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {sportsbook.enVivo}
                    </span>
                  </span>
                </div>

                {/* Referidos */}
                <div className="flex flex-col text-sm items-center">
                  Programa de referidos
                  <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                    <span
                      className={` font-extrabold ${
                        sportsbook.referidos === "✓"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {sportsbook.referidos}
                    </span>
                  </span>
                </div>

                {/* Servicio al cliente */}
                <div className="flex flex-col text-sm items-center">
                  Servicio al cliente
                  <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                    <span
                      className={` font-extrabold ${
                        sportsbook.cs === "✓"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {sportsbook.cs}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-400 text-xs p-4 truncate">
                {sportsbook.description}
              </p>
            </div>
          )}
          <div className="text-center">
            <button
              className=" text-blue-600 text-xs font-bold mb-4"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? "Menos información" : "Ver más información"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
