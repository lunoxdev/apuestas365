import { useState, useEffect } from "react";
import deportes from "../img/deportes.gif";
import seguridad from "../img/seguridad.gif";
import cuotas from "../img/cuotas.gif";
import apps from "../img/apps.gif";
import soporte from "../img/soporte.gif";
import metodosPago from "../img/metodosPago.gif";
import usabilidad from "../img/usabilidad.gif";
import bonos from "../img/bonos.gif";

const items = [
  {
    id: 0,
    img: deportes,
    title: "Deportes",
    desc: "Asegúrate de elegir una casa de apuestas que ofrezca una amplia variedad de deportes y eventos deportivos para apostar, desde los más populares como fútbol, tenis y baloncesto, hasta deportes menos conocidos pero con seguidores apasionados como el voleibol de playa, carreras de caballos y rugby, especialmente aquellos que son populares en tu región. Esto te permitirá tener más opciones y encontrar oportunidades interesantes para apostar.",
  },
  {
    id: 1,
    img: seguridad,
    title: "Seguridad",
    desc: "A la hora de elegir una casa de apuestas deportivas, es crucial considerar la seguridad que ofrece la plataforma. Asegúrate de que la casa de apuestas tenga medidas de seguridad confiables, como autenticación de dos factores y encriptación de datos, para proteger tus datos personales y financieros. Además, verifica si cuenta con licencia y está regulada por una entidad competente para garantizar un ambiente seguro y confiable para realizar tus apuestas deportivas.",
  },
  {
    id: 2,
    img: cuotas,
    title: "Cuotas",
    desc: "Las cuotas son uno de los factores más importantes a la hora de elegir una casa de apuestas deportivas. Debe ofrecer cuotas competitivas y justas para cada evento deportivo, lo que permitirá al usuario maximizar sus ganancias.",
  },
  {
    id: 3,
    img: apps,
    title: "Plataforma móvil",
    desc: "Las aplicaciones móviles pueden facilitar mucho la experiencia de las apuestas deportivas. Asegúrate de que la casa de apuestas tenga una app funcional, fácil de usar y compatible con tus dispositivos móviles.",
  },
  {
    id: 4,
    img: soporte,
    title: "Asistencia al usuario",
    desc: "Un buen servicio de soporte al cliente es esencial al momento de elegir una casa de apuestas. Asegúrate de que la plataforma cuente con un equipo de atención al cliente disponible las 24 horas del día y en varios idiomas. Verifica si la casa de apuestas cuenta con canales de soporte como chat en vivo, correo electrónico o teléfono.",
  },
  {
    id: 5,
    img: metodosPago,
    title: "Métodos de pago",
    desc: "Una buena casa de apuestas deportivas debe ofrecer una amplia variedad de métodos de pago, desde tarjetas de crédito y débito hasta billeteras electrónicas y transferencias bancarias, para garantizar una experiencia de depósito y retiro de fondos fluida y segura.",
  },
  {
    id: 6,
    img: usabilidad,
    title: "Experiencia de usuario",
    desc: "La usabilidad de la plataforma es esencial para una experiencia de apuestas satisfactoria. Asegúrate de que la casa de apuestas cuente con una interfaz intuitiva y fácil de usar. Verifica si la plataforma cuenta con funciones útiles como estadísticas en tiempo real, historial de apuestas y marcadores en vivo.",
  },
  {
    id: 7,
    img: bonos,
    title: "Bonos y promociones",
    desc: "Los bonos y promociones son una excelente manera de aumentar tus ganancias. Verifica si la casa de apuestas cuenta con bonos de bienvenida, bonos por depósito y otras promociones que te permitan obtener beneficios adicionales. Asegúrate de leer los términos y condiciones de los bonos antes de aceptarlos.",
  },
];

function Considerations() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 800 && window.innerHeight >= 600);
    };

    handleResize(); // set initial state based on window width

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div class="grid items-center justify-center mt-5 mb-5 p-7">
        <h1 class="text-center text-white text-2xl md:text-2xl lg:text-3xl p-2">
          Consejos para seleccionar la mejor casa de apuestas deportivas en
          línea{" "}
        </h1>
        <h2 class="text-center text-gray-400 text-xs mt-5">
          Elegir la casa de apuestas deportivas en línea adecuada puede marcar
          una gran diferencia en la experiencia de apuestas en línea. Antes de
          tomar una decisión, considera aspectos como la seguridad, la variedad
          de deportes y mercados disponibles, las promociones y bonificaciones,
          la calidad del servicio al cliente, entre otros. En nuestra página web
          te presentamos las consideraciones clave que debes tener en cuenta
          antes de elegir una casa de apuestas deportivas en línea.
          <br></br>
          <div className=" font-extrabold mt-2">
            ¡Asegúrate de tomar una decisión informada y disfrutar al máximo de
            tus apuestas deportivas!
          </div>
        </h2>
        <div className="grid md:p-10 mt-10">
          <ul className="grid grid-cols-2 gap-5">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row items-start mb-4"
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.img}
                    alt="Banner"
                    className="w-40 h-40 md:w-32 md:h-32 lg:w-38 lg:h-38 rounded-lg object-cover"
                  />
                  ß
                </div>
                <div className="md:ml-5 text-start">
                  <h2 className="text-white text-base font-semibold mb-2">
                    {item.title}
                  </h2>

                  <div className="text-gray-600 text-xs">
                    {expandedItems.includes(item.id) || isDesktop ? (
                      <>
                        <p>{item.desc}</p>
                        <button
                          className={`text-blue-500 text-xs hover:text-zinc-300 underline mt-2 ${
                            isDesktop ? "invisible" : ""
                          }`}
                          onClick={() =>
                            setExpandedItems(
                              expandedItems.filter((id) => id !== item.id)
                            )
                          }
                        >
                          Conocer menos
                        </button>
                      </>
                    ) : (
                      <>
                        <p>{item.desc.substr(0, 50)}</p>
                        {item.desc.length > 50 && (
                          <button
                            className="text-blue-500 text-xs hover:text-zinc-300 underline mt-2"
                            onClick={() =>
                              setExpandedItems([...expandedItems, item.id])
                            }
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
