import React from "react";

export default function Promotions() {
  return (
    <div id="promociones">
      <div className="grid items-center justify-center mb-5 p-7">
        <h1 className="text-center mb-3 text-2xl md:text-3xl lg:text-3xl p-2">
          Ofertas y promociones exclusivas en apuestas deportivas
        </h1>
        <div className="flex flex-wrap p-5 md:p-10">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className=" text-base font-semibold mb-3">
                Bonos de Bienvenida
              </h2>
              <p className="text-gray-600 text-xs mb-7">
                Recompensa que ofrecen las casas de apuestas deportivas a los
                nuevos usuarios que se registran en la plataforma. Estos bonos
                pueden ser en forma de apuestas gratis, dinero en efectivo o
                giros gratis. ¡Aprovecha los bonos de bienvenida para aumentar
                tus posibilidades de ganar en tus apuestas deportivas favoritas!
              </p>
            </div>
            <div className="mb-1">
              <h2 className="text-base  font-semibold mb-3">Rollover</h2>
              <p className="text-gray-600 text-xs ">
                El Rollover es un requisito que debes cumplir para poder retirar
                las ganancias obtenidas con los bonos de bienvenida u otras
                promociones. Este requisito implica apostar una determinada
                cantidad de veces el valor del bono o la promoción antes de
                poder solicitar un retiro. Por ejemplo, si recibes un bono de
                $100 con un Rollover de 5x, deberás apostar un total de $500
                antes de poder retirar las ganancias. Es importante revisar los
                términos y condiciones de cada promoción para entender cuál es
                el Rollover necesario y cómo cumplir con él de manera efectiva.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-4">
              <h2 className="text-base font-semibold mb-3">Jugadas gratis</h2>
              <p className="text-gray-600 mb-7 text-xs ">
                Oferta que ofrecen algunas casas de apuestas deportivas para que
                los usuarios prueben algunos de los juegos o deportes
                disponibles en la plataforma sin tener que hacer una apuesta con
                dinero real. ¡Aprovecha las jugadas gratis para conocer mejor la
                plataforma y afinar tus estrategias de apuestas!
              </p>
            </div>
            <div className="mb-1">
              <h2 className="text-base font-semibold mb-3">
                Promociones Arena
              </h2>
              <p className="text-gray-600 text-xs ">
                Una de las mejores formas de sacar provecho a tu experiencia en
                apuestas deportivas es aprovechar las promociones que ofrecen
                algunas casas de apuestas deportivas. Las promociones Arena
                incluyen ofertas de apuestas gratuitas, reembolsos en caso de
                pérdida y más. ¡Aprovecha estas ofertas para maximizar tus
                posibilidades de ganar en las apuestas deportivas!
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
