import React, { useState } from "react";

const juegoResponsable = [
  {
    pais: "México",
    sitioWeb: "https://www.juegoresponsable.com.mx/",
  },
  {
    pais: "Perú",
    sitioWeb: "https://www.juegoresponsable.pe/",
  },
  {
    pais: "Colombia",
    sitioWeb: "https://www.juegoresponsable.co/",
  },
  {
    pais: "Argentina",
    sitioWeb: "https://www.juegoresponsable.com.ar/",
  },
  {
    pais: "Chile",
    sitioWeb: "https://www.juegoresponsable.cl/",
  },
  {
    pais: "Uruguay",
    sitioWeb: "http://www.ajru.com.uy/",
  },
  {
    pais: "Bolivia",
    sitioWeb: "http://www.juegoresponsable.com.bo/",
  },
  {
    pais: "Paraguay",
    sitioWeb: "http://www.juegoresponsable.com.py/",
  },
  {
    pais: "Brasil",
    sitioWeb: "https://www.jogoresponsavel.org/",
  },
  {
    pais: "Costa Rica",
    sitioWeb: "https://www.juegoresponsable.co.cr/",
  },
  {
    pais: "Ecuador",
    sitioWeb: "https://www.juegoresponsable.ec/",
  },
  {
    pais: "El Salvador",
    sitioWeb: "http://juegoresponsable.sv/",
  },
  {
    pais: "Guatemala",
    sitioWeb: "https://juegoresponsable.gt/",
  },
  {
    pais: "Honduras",
    sitioWeb: "http://www.juegoresponsable.hn/",
  },
  {
    pais: "Nicaragua",
    sitioWeb: "https://www.juegoseguro.ni/",
  },
  {
    pais: "Panamá",
    sitioWeb: "https://www.juegoseguro.pa/",
  },
  {
    pais: "República Dominicana",
    sitioWeb: "http://juegoseguro.com.do/",
  },
];

const juegoResponsableen = [
  {
    pais: "GamCare",
    sitioWeb: "https://www.gamcare.org.uk/",
  },
  {
    pais: "BeGambleAware",
    sitioWeb: "https://www.begambleaware.org/",
  },
  {
    pais: "MGA",
    sitioWeb: "https://www.mga.org.mt/",
  },
];

function ModalOpen({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center bg-gray-800 bg-opacity-70 justify-center min-h-screen">
        <div className="bg-primary mt-28 mb-10 md:mb-0 md:mt-0 lg:mt-28 lg:mb-10 rounded-2xl shadow-black shadow-2xl w-5/6">
          <div className="px-8 py-5 text-start">
            <h2 className="text-xl text-center font-bold mb-5">
              Juego responsable
            </h2>
            <div className="text-xs text-justify-last text-gray-500">
              <p>
                El juego responsable es un enfoque que busca promover prácticas
                de juego saludables y equilibradas, al mismo tiempo que se
                protege a los jugadores vulnerables de los efectos negativos del
                juego. En el contexto de las apuestas en línea, el juego
                responsable es una parte importante de la industria, ya que
                ayuda a garantizar que los usuarios disfruten del juego de
                manera responsable y segura.
              </p>
              <br></br>
              <p>
                El juego responsable implica tomar decisiones informadas sobre
                las apuestas y el juego, y establecer límites claros en cuanto
                al tiempo y dinero que se dedica a este tipo de entretenimiento.
                Algunos de los elementos clave del juego responsable incluyen:
              </p>
              <br></br>
              <ul className="list-disc px-7">
                <li>
                  Establecer un presupuesto y límites de tiempo claros para el
                  juego.
                </li>
                <li>
                  No perseguir pérdidas o apostar más de lo que se puede
                  permitir.
                </li>
                <li>
                  Tomarse descansos regulares durante el juego para evitar la
                  fatiga y la impulsividad.
                </li>
                <li>
                  Buscar ayuda si se siente que el juego está afectando
                  negativamente la vida personal o financiera.
                </li>
              </ul>
              <br></br>
              <p>
                En nuestro sitio web, nos tomamos el juego responsable muy en
                serio y nos comprometemos a promover prácticas de juego
                saludables entre nuestros usuarios. Te alentamos a tomar medidas
                para jugar de manera responsable y a buscar ayuda si sientes que
                necesitas apoyo en este ámbito. Recuerda que el juego debe ser
                una forma de entretenimiento, y que la diversión y la
                responsabilidad van de la mano.
              </p>
            </div>
            <br></br>
            <div className="mt-5">
              <p>
                <span className="text-base font-bold">
                  Centro de ayuda en Latinoamérica
                </span>
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 mt-3">
                {juegoResponsable.map((item) => (
                  <div className="flex flex-col mb-3" key={item.pais}>
                    {item.pais}:
                    <a
                      href={item.sitioWeb}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      {item.sitioWeb}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <p>
                <span className="text-base font-bold">
                  Centro de ayuda en inglés
                </span>
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 mt-3">
                {juegoResponsableen.map((item) => (
                  <div className="flex flex-col mb-3" key={item.pais}>
                    {item.pais}:
                    <a
                      href={item.sitioWeb}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      {item.sitioWeb}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <p>
                <span className="text-base font-bold">Gamblock</span>
              </p>
              <p className="mt-2 mb-3">
                <span className="text-gray-500">
                  Es un software de bloqueo de apuestas en línea diseñado para
                  ayudar a las personas a controlar su comportamiento de juego.
                  Este software funciona bloqueando el acceso a sitios web de
                  juegos de azar y apuestas en línea. Gamblock se puede instalar
                  en una computadora o dispositivo móvil y es compatible con la
                  mayoría de los navegadores web.
                </span>
              </p>
            </div>
            <div className="flex flex-col mb-3">
              <a
                href="https://www.gamblock.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                https://www.gamblock.com/
              </a>
            </div>
          </div>

          <div className=" mb-4 px-4 py-2 flex lg:justify-center">
            <button
              className="font-bold px-4 py-2 w-full lg:w-96 bg-btn hover:opacity-80 rounded-md text-white"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResponsibleGaming() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        className=" text-xs mt-4 font-bold mb-4 hover:underline hover:text-gray-400"
        onClick={handleOpenModal}
      >
        Juego responsable
      </button>
      <ModalOpen isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default ResponsibleGaming;
