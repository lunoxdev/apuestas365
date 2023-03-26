import { useState } from "react";

function Card({ sportsbook }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="max-w-md mx-auto">
      <div className="divide-y-2 md:divide-none lg:divide-none dark:bg-gray-800 rounded-xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-1 justify-center items-center ">
          <div className="flex justify-center items-center">
            <img
              className="ring-2 ring-gray-300 md:ring-1 lg:ring-1 w-32 h-32 rounded-full md:w-full md:h-28 md:mb-0 md:rounded-none lg:h-28 lg:w-full lg:rounded-none object-cover"
              src={sportsbook.img}
              alt={sportsbook.imageAlt}
            />
          </div>

          <div className="flex justify-between p-3 ">
            <div className=" grid md:grid-cols-2 lg:grid lg:grid-cols-2 justify-center items-center">
              <div className="mt-4 ">
                <h2 className=" text-xl text-white font-bold">
                  {sportsbook.name}
                </h2>
                <div className="flex mt-2 ">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 mb-3  ${
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
              <div className="mb-5 flex justify-start md:justify-end lg:justify-end">
                <button className="rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-blue-900 w-32 h-12 lg:w-20">
                  JUGAR
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="p-4">
          {showDescription ? (
            <p className="text-gray-400 text-sm md:text-base">
              {sportsbook.description}
            </p>
          ) : (
            <p className="text-gray-400 text-sm md:text-base truncate">
              {sportsbook.description}
            </p>
          )}
          <button
            className="text-blue-600 text-sm font-bold"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Ver menos información" : "Ver más información"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
