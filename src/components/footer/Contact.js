import React, { useState } from "react";

function ModalOpen({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center bg-gray-800 bg-opacity-70 justify-center min-h-screen">
        <div className="bg-black rounded-2xl shadow-black shadow-2xl w-5/6">
          <div className="px-8 py-5">
            <h2 className="text-xl text-center font-bold text-white mb-5">
              Contacto
            </h2>
            <div className="text-xs text-center text-gray-400">
              <div className="text-gray-200">
                <p>Contáctanos para cualquier duda o consulta.</p>
              </div>
              <br></br>
              <p>
                En nuestro sitio web, nos esforzamos por brindarte la mejor
                información sobre las casas de apuestas más confiables de
                Latinoamérica. Si tienes alguna pregunta, comentario o
                sugerencia sobre nuestro sitio web, no dudes en ponerte en
                contacto con nosotros a través del siguiente correo electrónico:
                <span className="font-bold text-white">
                  test@test.com.
                </span>{" "}
                Nuestro equipo estará encantado de ayudarte en todo lo que
                necesites.
              </p>
            </div>
            <br></br>
            <div className="flex justify-center">
              <button className="rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-blue-900 w-28 h-10 lg:w-24">
                <a href="mailto:lunox.code@gmail.com">Enviar correo</a>
              </button>
            </div>
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

function Contact({ sportsbook }) {
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
        className=" text-xs mt-4 font-bold mb-4 text-white hover:underline hover:text-gray-400"
        onClick={handleOpenModal}
      >
        Contacto
      </button>
      <ModalOpen
        sportsbook={sportsbook}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Contact;
