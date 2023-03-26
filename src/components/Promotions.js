import React from "react";

export default function Promotions() {
  return (
    <div class="grid items-center justify-center mt-5 mb-5 p-7">
      <h1 class="text-center mb-3 text-white text-3xl md:text-3xl lg:text-4xl p-2">
        Promociones, bonos de bienvenida y más
      </h1>
      <div className="flex flex-wrap p-5 md:p-10">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="mb-4">
            <h2 className="text-white text-xl font-semibold mb-3">
              Bonos de Bienvenida
            </h2>
            <p className="text-gray-600 mb-10">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>
          <div className="mb-1">
            <h2 className="text-white text-xl font-semibold mb-3">Rollover</h2>
            <p className="text-gray-600">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="mb-4">
            <h2 className="text-white text-xl font-semibold mb-3">
              Jugadas gratis
            </h2>
            <p className="text-gray-600 mb-10">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>
          <div className="mb-1">
            <h2 className="text-white text-xl font-semibold mb-3">
              Promociones Arena
            </h2>
            <p className="text-gray-600 ">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
