import React, { useState } from "react";

function ModalOpen({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center bg-gray-800 bg-opacity-70 justify-center min-h-screen">
        <div className="bg-primary mt-28 mb-10 md:mb-0 md:mt-0 lg:mt-28 lg:mb-10 rounded-2xl shadow-black shadow-2xl w-5/6">
          <div className="px-8 py-5 text-start">
            <h1 className="text-xl text-center font-bold mb-5">
              Términos y condiciones de uso del sitio web
            </h1>
            <p>Última actualización: 10/04/2023</p>
            <br></br>
            <p>
              Por favor, lea estos términos y condiciones cuidadosamente antes
              de utilizar nuestro servicio.
            </p>
            <br></br>

            {/* section 0 */}
            <div className="text-xs text-justify-last text-gray-500 mb-5">
              <p>
                Estos son los Términos y Condiciones que rigen el uso de este
                Servicio y el acuerdo que opera entre Usted y la Compañía. Estos
                Términos y Condiciones establecen los derechos y obligaciones de
                todos los usuarios en cuanto al uso del Servicio.
              </p>
              <br></br>
              <p>
                Su acceso y uso del Servicio está condicionado a la aceptación y
                cumplimiento de estos Términos y Condiciones. Estos Términos y
                Condiciones se aplican a todos los visitantes, usuarios y otros
                que acceden o utilizan el Servicio.
              </p>
              <br></br>
              <p>
                Al acceder o utilizar el Servicio, aceptas quedar vinculado por
                estos Términos y Condiciones. Si no estás de acuerdo con alguna
                parte de estos Términos y Condiciones, no podrás acceder al
                Servicio.
              </p>
              <br></br>
              <p>
                Debes tener al menos 18 años para usar el Servicio. La Compañía
                no permite que los menores de 18 años usen el Servicio.
              </p>
              <br></br>
              <p>
                Tu acceso y uso del Servicio también está condicionado a la
                aceptación y cumplimiento de la Política de Privacidad de la
                Compañía. Nuestra Política de Privacidad describe nuestras
                políticas y procedimientos sobre la recopilación, uso y
                divulgación de tu información personal cuando utilizas la
                aplicación o el sitio web, y te informa sobre tus derechos de
                privacidad y cómo la ley te protege. Lee atentamente nuestra
                Política de Privacidad antes de utilizar nuestro Servicio.
              </p>
            </div>

            {/* section 1 */}
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">Enlaces a otros sitios web</h1>
              <p className="text-gray-500">
                Nuestro Servicio puede contener enlaces a sitios web o servicios
                de terceros que no son propiedad ni están controlados por la
                Compañía.
              </p>
              <h2 className="text-sm mb-2 mt-2">Datos de Uso</h2>
              <p className="text-gray-500">
                La Compañía no tiene control sobre el contenido, las políticas
                de privacidad o las prácticas de ningún sitio web o servicio de
                terceros. Además, reconoces y aceptas que la Compañía no será
                responsable ni tendrá ninguna responsabilidad, directa o
                indirectamente, por cualquier daño o pérdida causada o
                presuntamente causada por o en conexión con el uso o la
                confianza en cualquier contenido, bienes o servicios disponibles
                en o a través de cualquier sitio web o servicio de terceros.
              </p>
              <p className="text-gray-500">
                Te recomendamos encarecidamente que leas los términos y
                condiciones y las políticas de privacidad de cualquier sitio web
                o servicio de terceros que visites.
              </p>
            </div>

            {/* section 2 */}
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">Terminación</h1>
              <p className="text-gray-500">
                Podemos terminar o suspender su acceso inmediatamente, sin
                previo aviso ni responsabilidad, por cualquier motivo,
                incluyendo sin limitación si usted incumple estos Términos y
                Condiciones.
              </p>
              <p className="text-gray-500">
                Al terminar, su derecho a utilizar el Servicio cesará
                inmediatamente.
              </p>
            </div>
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">Traducción e Interpretación</h1>
              <p className="text-gray-500">
                Estos Términos y Condiciones pueden haber sido traducidos si los
                hemos puesto a su disposición en nuestro Servicio. Usted acepta
                que el texto original en inglés prevalecerá en caso de disputa.
              </p>
            </div>
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">
                Cambios a estos Términos y Condiciones
              </h1>
              <p className="text-gray-500">
                Nos reservamos el derecho, a nuestra sola discreción, de
                modificar o reemplazar estos Términos en cualquier momento. Si
                una revisión es material, haremos esfuerzos razonables para
                proporcionar al menos 30 días de aviso antes de que entren en
                vigencia los nuevos términos. Lo que constituye un cambio
                material será determinado a nuestra sola discreción.
              </p>
              <p className="text-gray-500">
                Al seguir accediendo o utilizando nuestro Servicio después de
                que esas revisiones entren en vigencia, usted acepta estar
                obligado por los términos revisados. Si no está de acuerdo con
                los nuevos términos, en su totalidad o en parte, por favor deje
                de usar el sitio web y el Servicio.
              </p>
            </div>
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">
                Información de derechos de autor
              </h1>
              <p className="text-gray-500">
                Toda la información contenida en este sitio, incluyendo pero no
                limitándose a imágenes, palabras, videos y blogs está sujeta a
                la ley de derechos de autor. Ningún contenido será reproducido
                en ninguna forma sin nuestro consentimiento previo por escrito.
              </p>
            </div>
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">Limitación de responsabilidad</h1>
              <p className="text-gray-500">
                Este sitio web no ofrece servicios de juegos de azar y cualquier
                información o consejo proporcionado es solo para fines
                informativos. No se hace responsable por ninguna pérdida, ya sea
                real o percibida. Cualquier queja sobre acuerdos con terceros
                proveedores de servicios debe ser dirigida directamente a la
                empresa. Además, el sitio web no será responsable de cualquier
                pérdida resultante de virus, malware, ataques de phishing u
                otros incidentes similares. El usuario acepta la responsabilidad
                y el riesgo al acceder al sitio web.
              </p>
            </div>
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">
                Privacidad y compartición de información
              </h1>
              <p className="text-gray-500">
                La empresa tomará medidas razonables para proteger la
                información personal de los usuarios, pero no se responsabiliza
                por accesos no autorizados a su sistema informático, divulgación
                no autorizada por parte de personal, virus o malware.
                Actualmente no se recopila información personal, pero si se
                proporciona, la empresa se reserva el derecho de utilizarla para
                fines de marketing. En caso de ser necesario, se compartirá
                información con la aplicación de la ley o tribunales para
                protegerse de fraude o acceso malicioso a los servidores.
                También pueden proporcionar información a un tercero si se
                sospecha una infracción de la ley.
              </p>
            </div>
            <div className="text-xs text-justify-last first-letter:mb-5">
              <h1 className="text-base mb-3">Términos generales</h1>
              <p className="text-gray-500">
                Este sitio web proporciona enlaces a sitios externos con el fin
                de brindar acceso a información y servicios que puedan resultar
                útiles o interesantes. No se hace responsable del contenido de
                estos sitios ni de cualquier cosa proporcionada por ellos. El
                registro con un socio de apuestas a través del Servicio de
                Registro Asistido forma un contrato entre usted y ese socio de
                apuestas en sus términos y condiciones, lo cual es su
                responsabilidad. Este sitio web no es responsable ni es parte de
                ningún contrato celebrado entre usted y un socio de apuestas.
              </p>
            </div>
            <div className="text-xs text-justify-last mb-5">
              <h2 className="text-sm mb-2 mt-2">Contáctanos</h2>
              <p className="text-gray-500">
                Si tienes alguna pregunta sobre esta Política de Privacidad,
                puedes contactarnos:
              </p>
              <p className="text-gray-500">
                Por correo electrónico:
                <span className=" font-extrabold text-white ">
                  test@test.com
                </span>
              </p>
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

function TermsAndConditions({ sportsbook }) {
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
        Términos y condiciones
      </button>
      <ModalOpen
        sportsbook={sportsbook}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default TermsAndConditions;
