import { useState, useEffect } from "react";
import deportes from "../img/deportes.png";
import seguridad from "../img/seguridad.png";
import cuotas from "../img/cuotas.png";
import apps from "../img/apps.png";
import soporte from "../img/soporte.png";
import metodosPago from "../img/metodosPago.png";
import usabilidad from "../img/usabilidad.png";
import bonos from "../img/bonos.png";

function Considerations() {
  const [showMore, setShowMore] = useState(-1);
  const [isDesktop, setIsDesktop] = useState(false);

  const items = [
    {
      id: 0,
      img: deportes,
      title: "Deportes",
      desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 1,
      img: seguridad,
      title: "Seguridad",
      desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 2,
      img: cuotas,
      title: "Cuotas",
      desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 3,
      img: apps,
      title: "Apps",
      desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 4,
      img: soporte,
      title: "Soporte",
      desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 5,
      img: metodosPago,
      title: "Métodos de pago",
      desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 6,
      img: usabilidad,
      title: "Usabilidad",
      desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: 7,
      img: bonos,
      title: "Bonos",
      desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000 && window.innerHeight >= 700);
    };

    handleResize(); // set initial state based on window width

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div class="grid items-center justify-center mt-5 mb-5 p-7">
        <h1 class="text-center text-white text-3xl md:text-3xl lg:text-4xl p-2">
          ¿Qué debo considerar antes de elegir una casa de apuestas?{" "}
        </h1>
        <h2 class="text-center text-gray-400 mt-5">
          This is the content of the card. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Duis eu sapien ut ipsum mollis sagittis.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          famr aliquet vehicula.
        </h2>
        <div className="grid md:p-10 mt-10">
          <ul className="grid grid-cols-2 mt-5 gap-5">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row items-start mb-4"
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.img}
                    alt="Banner"
                    className="w-32 h-32 md:w-32 md:h-32 lg:w-38 lg:h-38 rounded-lg"
                  />
                </div>
                <div className="md:ml-5 text-start">
                  <h2 className="text-white text-xl font-semibold mb-2 mt-4">
                    {item.title}
                  </h2>

                  <div className="text-gray-600 text-base">
                    {showMore === item.id || isDesktop ? (
                      <>
                        <p>{item.desc}</p>
                        {showMore === item.id && (
                          <button
                            className="text-blue-500 underline mt-2"
                            onClick={() => setShowMore(null)}
                          >
                            Conocer menos
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        <p>{item.desc.substr(0, 50)}</p>
                        {item.desc.length > 50 && (
                          <button
                            className="text-blue-500 underline mt-2"
                            onClick={() => setShowMore(item.id)}
                          >
                            Conocer más
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Considerations;
