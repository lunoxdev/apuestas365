import React from "react";

export default function Footer() {
  return (
    <footer>
      <div id="nosotros" className="grid items-center justify-center mb-5 p-7">
        <h1 className="text-center text-white text-2xl md:text-2xl lg:text-3xl p-2">
          Acerca de nosotros
        </h1>
        <div className="mb-5 text-xs flex flex-col justify-center items-center md:justify-end lg:justify-end">
          <h2 className="text-center text-gray-400 mt-5 mb-5">
            Somos un equipo de apasionados por las apuestas deportivas en línea,
            comprometidos en brindarte la mejor información y comparativas de
            casas de apuestas deportivas para ayudarte a tomar decisiones
            informadas en tus apuestas. Nuestro equipo está formado por expertos
            en la industria de las apuestas deportivas, con amplia experiencia
            en el mercado latinoamericano. Nos esforzamos por brindarte una
            experiencia de usuario única, ofreciendo contenido relevante,
            actualizado y fácil de entender para que tengas una experiencia de
            apuestas deportivas en línea segura y emocionante.
            <br></br>
            <div className=" text-base text-white ont-extrabold mt-3">
              ¡Gracias por confiar en nosotros para tu experiencia de apuestas
              en línea!
            </div>
          </h2>
          <button className="rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-blue-900 w-28 h-10 lg:w-24">
            <a href="mailto:lunox.code@gmail.com">Contacto</a>
          </button>
        </div>
        <hr></hr>
        <div className="flex flex-col mt-5 text-xs text-white justify-center items-center">
          {/* Esto se habilita cuando existan canales de contacto */}
          {/* <div className="flex mb-5 mt-5">
            <img src="/logo1.png" alt="Logo 1" className="h-6 mr-4" />
            <img src="/logo2.png" alt="Logo 2" className="h-6 mr-4" />
            <img src="/logo3.png" alt="Logo 3" className="h-6 mr-4" />
            <img src="/logo4.png" alt="Logo 4" className="h-6" />
          </div> */}
          &copy; 2023 My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
