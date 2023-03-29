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
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div class="grid items-center justify-center mt-5 mb-5 p-5">
        <h1 class="text-center text-white text-2xl md:text-2xl lg:text-3xl p-2">
          Top 4 mejores casas de apuestas deportivas recomendadas por expertos
        </h1>
        <h2 class="text-center text-xs text-gray-400 mt-5">
          This is the content of the card. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Duis eu sapien ut ipsum mollis sagittis.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          famr aliquet vehicula.
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-14 md:px-32 mb-10">
        <Slider {...settings}>
          {topSportsbooks.map((sportsbook) => (
            <div key={sportsbook.popular} className="px-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={sportsbook.img}
                  alt={sportsbook.imageAlt}
                />
                <h2 className="flex justify-center text-gray-900 font-bold text-xl mb-2 mt-2">
                  {sportsbook.name}
                </h2>

                <div className="mb-2 flex justify-center p-4">
                  <button className="rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-blue-900 w-full h-12">
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
