import { sportsbooks } from "./Data";

export default function MostPopular() {
  // Filtramos los elementos de la matriz que tienen la propiedad popular establecida en 1
  const popularSportsbooks = sportsbooks.filter(
    (sportsbook) => sportsbook.popular === 1
  );

  return (
    <div className="w-full max-w-md bg-white border-gray-200 rounded-lg shadow p-7 mr-6 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Más populares
        </h5>
      </div>
      <div className="flow-root">
        <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
          {/* Map over the filtered sportsbooks array */}
          {popularSportsbooks.map((sportsbook) => (
            <li key={sportsbook.id} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                {/* Description */}
                <div className="flex-shrink-0">
                  <img
                    className="ring-2 ring-gray-300 w-12 h-12 rounded-full"
                    src={sportsbook.img}
                    alt={sportsbook.imageAlt}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {sportsbook.name}
                  </p>
                  {/* Stars */}
                  <div className="flex mt-1">
                    {/* Renderizamos todas las estrellas */}
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < sportsbook.stars
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                      >
                        <title>Star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* Button Play */}
                <div className="p-3">
                  <a
                    href="."
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Apostar
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
