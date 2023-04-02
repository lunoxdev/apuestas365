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
    centerPadding: "60px",
    slidesToShow: 3,
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
    <div>
      <div class="grid items-center justify-center mt-5 mb-5 p-5">
        <h1 class="text-center text-white text-2xl md:text-2xl lg:text-3xl p-2">
          Las mejores casas de apuestas deportivas recomendadas por expertos:
          <br></br>
          ¡Descúbrelas aquí!
        </h1>
        <h2 class="text-center text-xs text-gray-400 mt-5">
          Encuentra las mejores opciones de casas de apuestas deportivas
          recomendadas por expertos en nuestra página web. Ofrecemos opciones
          confiables y seguras para que puedas disfrutar de las apuestas
          deportivas con tranquilidad. Explora nuestra selección y encuentra la
          casa de apuestas perfecta para ti.
          <br></br>
          <div className=" font-extrabold mt-1">
            ¡Comienza a ganar hoy mismo!
          </div>
        </h2>
      </div>

      <div className=" max-w-2xl mx-auto mb-10">
        <Slider {...settings}>
          {topSportsbooks.map((sportsbook) => (
            <div key={sportsbook.popular} className="px-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-32 object-cover"
                  src={sportsbook.img}
                  alt={sportsbook.imageAlt}
                />
                <h2 className="flex justify-center text-gray-900 font-bold text-xl mt-2">
                  {sportsbook.name}
                </h2>

                <div className=" flex justify-center p-4 ">
                  <button className="rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-blue-900 w-full h-10">
                    JUGAR
                  </button>
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
