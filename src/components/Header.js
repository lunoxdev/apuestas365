import BG from "../img/banner.png";

export default function Header() {
  return (
    <div className="App">
      <img src={BG} alt="Banner"></img>
      <div class="grid items-center justify-center mb-5 p-7">
        <h1 class="text-center text-white text-2xl md:text-3xl lg:text-4xl p-2">
          APUESTAS DEPORTIVAS EN LATINOAMÉRICA 2023
        </h1>
        <div className="mb-3 text-xl flex flex-col justify-center items-center md:justify-end lg:justify-end">
          <h2 class="text-center text-gray-400 mt-3">
            Tú sitio web de información de apuestas deportivas en línea en
            Latinoamérica.
          </h2>
        </div>
        <div className=" text-xs flex flex-col justify-center items-center md:justify-end lg:justify-end">
          <h2 class="text-center text-gray-400 ">
            En nuestro sitio, te ofrecemos comparaciones detalladas de las
            principales casas de apuestas deportivas en Latinoamérica, para que
            puedas tomar la mejor decisión al momento de apostar en línea.
            Nuestro objetivo es simplificar tu búsqueda de la casa de apuestas
            deportivas perfecta y asegurarnos de que tomes decisiones informadas
            en tus apuestas deportivas.
            <br></br>
            <div className=" text-white ont-extrabold mt-3">
              ¡Confía en nosotros para llevar tu experiencia de apuestas
              deportivas en línea al siguiente nivel!
            </div>
          </h2>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
