import React, { useState } from "react";

function ModalOpen({ isOpen, onClose, sportsbook }) {
  const [activeTab, setActiveTab] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center bg-gray-800 bg-opacity-70 justify-center min-h-screen">
        <div className="bg-black rounded-2xl shadow-black shadow-2xl w-5/6">
          <div className="px-4 py-2">
            <h2 className="text-3xl font-bold text-white">{sportsbook.name}</h2>
          </div>
          <div className="flex justify-center text-white">
            <div
              className={`px-4 py-2 ${
                activeTab === 1
                  ? "bg-gray-800 first:border-t-4 border-blue-700"
                  : ""
              } cursor-pointer`}
              onClick={() => setActiveTab(1)}
            >
              Resumen general
            </div>
            <div
              className={`px-4 py-2 ${
                activeTab === 2 ? "bg-gray-800 border-t-4 border-blue-700" : ""
              } cursor-pointer`}
              onClick={() => setActiveTab(2)}
            >
              Ventajas y desventajas
            </div>
            <div
              className={`px-4 py-2 ${
                activeTab === 3 ? "bg-gray-800 border-t-4 border-blue-700" : ""
              } cursor-pointer`}
              onClick={() => setActiveTab(3)}
            >
              Países disponibles
            </div>
          </div>
          <hr></hr>
          <div className="px-4 py-4">
            {activeTab === 1 && (
              <div>
                <div className=" text-xs p-2 mb-4 text-justify text-gray-500">
                  <p>
                    Hemos preparado los aspectos más importantes del tema, de
                    manera clara y concisa. Nuestro objetivo es ofrecerte una
                    visión general del tema para que puedas obtener una
                    comprensión rápida y fácil de los aspectos clave a
                    considerar.
                  </p>
                </div>
                {/* // Información */}
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 p-3 text-center mb-5 text-white">
                  {/* Casino */}
                  <div className="flex flex-col text-sm items-center">
                    Casino
                    <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                      <span
                        className={` font-extrabold ${
                          sportsbook.casino === "✓"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {sportsbook.casino}
                      </span>
                    </span>
                  </div>

                  {/* Cash Out */}
                  <div className="flex flex-col text-sm items-center">
                    Cash Out
                    <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                      <span
                        className={` font-extrabold ${
                          sportsbook.cashOut === "✓"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {sportsbook.cashOut}
                      </span>
                    </span>
                  </div>

                  {/* Bet Builder */}
                  <div className="flex flex-col text-sm items-center">
                    Bet Builder
                    <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                      <span
                        className={` font-extrabold ${
                          sportsbook.betBuilder === "✓"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {sportsbook.betBuilder}
                      </span>
                    </span>
                  </div>

                  {/* Transmisión en vivo */}
                  <div className="flex flex-col text-sm items-center">
                    Transmisión en vivo
                    <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                      <span
                        className={` font-extrabold ${
                          sportsbook.enVivo === "✓"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {sportsbook.enVivo}
                      </span>
                    </span>
                  </div>

                  {/* Referidos */}
                  <div className="flex flex-col text-sm items-center">
                    Programa de referidos
                    <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                      <span
                        className={` font-extrabold ${
                          sportsbook.referidos === "✓"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {sportsbook.referidos}
                      </span>
                    </span>
                  </div>

                  {/* Servicio al cliente */}
                  <div className="flex flex-col text-sm items-center">
                    Servicio al cliente
                    <span className=" mt-3 bg-blue-100 text-blue-800 p-2 rounded-2xl w-10 dark:bg-gray-700 dark:text-blue-400">
                      <span
                        className={` font-extrabold ${
                          sportsbook.cs === "✓"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {sportsbook.cs}
                      </span>
                    </span>
                  </div>
                </div>
                <hr></hr>
                <div className="text-white mt-5 text-base font-bold">
                  <p>Métodos de pagos disponibles</p>
                  <div className="flex justify-center mt-3">
                    <ul className="grid grid-cols-3 gap-6">
                      {sportsbook.metoPagos.map((metodoPago, index) => (
                        <div key={index}>
                          <li className="text-xs text-gray-300">
                            {metodoPago}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="text-start ml-7 text-white">
                <p className="mb-3 mt-3">
                  <span className="text-base font-bold">Ventajas</span>
                </p>
                <ul>
                  {sportsbook.ventajas.map((ventaja, index) => (
                    <li key={index} className="list-disc pl-4 text-xs">
                      {ventaja}
                    </li>
                  ))}
                </ul>
                <p className="mb-3 mt-3">
                  <span className="text-base font-bold">Desventajas</span>
                </p>
                <ul>
                  {sportsbook.desventajas.map((desventaja, index) => (
                    <li key={index} className="list-disc pl-4 text-xs ">
                      {desventaja}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 3 && (
              <div className="text-start text-white">
                <div className=" text-xs p-2 text-justify text-gray-500">
                  <p>
                    A continuación se presenta una lista de países que permiten
                    el acceso y uso de juegos sin restricciones ni limitaciones.
                  </p>
                </div>
                <p className="mb-3 mt-3 ml-4">
                  <span className="text-xl font-bold">Países:</span>
                </p>
                <ul>
                  {sportsbook.countries.map((country, index) => (
                    <li key={index} className="list-disc pl-4 ml-7">
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className=" mb-4 px-4 py-2 flex lg:justify-center">
            <button
              className="px-4 py-2 w-full lg:w-96 bg-gray-700 text-white hover:bg-blue-900 rounded-md"
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

function Modal({ sportsbook }) {
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
        className=" text-blue-600 text-sm mt-4 font-bold mb-4"
        onClick={handleOpenModal}
      >
        Ver reseñas
      </button>
      <ModalOpen
        sportsbook={sportsbook}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Modal;
