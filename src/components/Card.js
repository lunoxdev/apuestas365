import Modal from "./Modal"; // Importa el componente Modal

function Card({ sportsbook }) {
  return (
    <div className="max-w-md mx-auto mb-5 ">
      <div className="divide-y dark:divide-gray-700 bg-primary rounded-xl overflow-hidden">
        <div className="grid p-5 md:p-0 lg:p-0 grid-cols-2 md:grid-cols-1 justify-center items-center md:border-b ">
          <div className="flex justify-center items-center">
            <img
              className="ring-2 ring-gray-300 md:ring-1 lg:ring-0 w-36 h-36 rounded-full md:w-full md:h-28 md:mb-0 md:rounded-none lg:h-28 lg:w-full lg:rounded-none object-cover"
              src={sportsbook.img}
              alt={sportsbook.imageAlt}
            />
          </div>

          <div className="flex lg:flex-col justify-center items-center">
            <div className=" grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center mt-2 md:mt-0">
              <div className="ml-1">
                <h2 className=" text-xl md:text-base lg:text-base font-bold">
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
                <button className=" rounded-xl text-base lg:text-xs font-bold bg-btn text-white hover:opacity-80 w-32 h-10 lg:w-24 md:mt-5 shadow-gray-600 shadow-sm">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs text-justify p-3">
          <p>{sportsbook.description}</p>
          <div className="flex justify-center mt-6 mb-2">
            {sportsbook.app.map((image, index) => (
              <div key={index} className="w-6 h-6 mx-1">
                <img src={image} alt={`App screenshot ${index}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Modal sportsbook={sportsbook} />
        </div>
      </div>
    </div>
  );
}

export default Card;
