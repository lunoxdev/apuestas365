import React from "react";

export default function Footer() {
  return (
    <footer>
      <div class="grid items-center justify-center mb-5 p-7">
        <h1 class="text-center text-white text-2xl md:text-2xl lg:text-3xl p-2">
          Acerca de nosotros
        </h1>
        <div className="mb-5 text-xs flex flex-col justify-center items-center md:justify-end lg:justify-end">
          <h2 class="text-center text-gray-400 mt-5 mb-5">
            This is the content of the card. Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Pemalesuada famr aliquet vehicula.
          </h2>
          <button class="rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-blue-900 w-28 h-10 lg:w-24">
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
