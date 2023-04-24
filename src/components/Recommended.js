import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sportsbooks } from "./Data";
import "../index.css"; // importar el archivo de estilos aquí

const Recommended = () => {
  const topSportsbooks = sportsbooks.filter(
    (sportsbook) => sportsbook.top === 1
  );

  const settings = {
    centerMode: true,
    centerPadding: "5px",
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div id="recomendadas">
      <div className="grid items-center justify-center mt-5 mb-5 p-5">
        <h1 className="text-center text-2xl md:text-2xl lg:text-3xl p-2">
          Las mejores casas de apuestas deportivas recomendadas por expertos:
          <br></br>
          ¡Descúbrelas aquí!
        </h1>
        <h2 className="text-center text-xs mt-5 text-gray-500">
          Encuentra las mejores opciones de casas de apuestas deportivas
          recomendadas por expertos en nuestra página web. Ofrecemos opciones
          confiables y seguras para que puedas disfrutar de las apuestas
          deportivas con tranquilidad. Explora nuestra selección y encuentra la
          casa de apuestas perfecta para ti.
          <br></br>
          <div className="font-extrabold mt-1">
            ¡Comienza a ganar hoy mismo!
          </div>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto mb-10">
        <Slider
          prevArrow={<div>Previous</div>}
          nextArrow={<div>Next</div>}
          {...settings}
        >
          {topSportsbooks.map((sportsbook) => (
            <div key={sportsbook.popular} className="px-2">
              <div className="dark:shadow-black shadow-sm rounded-lg">
                <div className="bg-primary rounded-lg shadow-sm dark:shadow-white overflow-hidden">
                  <img
                    className="w-full h-32 object-cover"
                    src={sportsbook.img}
                    alt={sportsbook.imageAlt}
                  />
                  <h2 className="flex justify-center font-bold text-xl mt-2">
                    {sportsbook.name}
                  </h2>
                  <div className="flex justify-center mt-3 ">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 md:mb-0 lg:mb-0 ${
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
                  <div className=" flex justify-center p-4 ">
                    <button className="rounded-xl text-xs font-bold bg-btn text-white hover:bg-blue-900 w-full h-10">
                      JUGAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <hr></hr>
    </div>
  );
};

export default Recommended;
