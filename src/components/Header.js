import BG from "../img/banner.png";

export default function Header() {
  return (
    <div id="inicio" className="App">
      <div className="relative mt-12">
        <img
          src={BG}
          alt="Banner"
          className="h-48 w-full md:h-full lg:h-80 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="grid items-center justify-center p-7">
            <div className=" flex flex-col font-bold justify-center items-center bg-slate-900 md:p-5 lg:p-10 bg-opacity-40 text-xl rounded-2xl shadow-2xl md:justify-end lg:justify-end">
              <h1 className="text-center text-white text-lg md:text-2xl lg:text-4xl p-2">
                APUESTAS DEPORTIVAS EN LATINOAMÉRICA 2023
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-5 md:justify-end lg:justify-end">
        <h2 className="text-center text-lg lg:text-2xl">
          Tú sitio web de información de apuestas deportivas en línea en
          Latinoamérica.
        </h2>
        <h2 className="text-center text-xs mt-1 text-gray-500">
          En nuestro sitio, te ofrecemos comparaciones detalladas de las
          principales casas de apuestas deportivas en Latinoamérica, para que
          puedas tomar la mejor decisión al momento de apostar en línea. Nuestro
          objetivo es simplificar tu búsqueda de la casa de apuestas deportivas
          perfecta y asegurarnos de que tomes decisiones informadas en tus
          apuestas deportivas.
          <div className="font-extrabold mt-3">
            ¡Confía en nosotros para llevar tu experiencia de apuestas
            deportivas en línea al siguiente nivel!
          </div>
        </h2>
      </div>
    </div>
  );
}
