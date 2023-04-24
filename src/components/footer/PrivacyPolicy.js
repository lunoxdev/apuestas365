import React, { useState } from "react";

function ModalOpen({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center bg-gray-800 bg-opacity-70 justify-center min-h-screen">
        <div className="bg-primary mt-28 mb-10 md:mb-0 md:mt-0 lg:mt-28 lg:mb-10 rounded-2xl shadow-black shadow-2xl w-5/6">
          <div className="px-8 py-5 text-start">
            <h1 className="text-xl text-center font-bold mb-5">
              Política de privacidad y Cookies
            </h1>
            <p>Última actualización: 10/04/2023</p>
            <br></br>
            {/* section 0 */}
            <div className="text-xs text-justify-last text-gray-500 mb-5">
              <p>
                Esta Política de Privacidad describe nuestras políticas y
                procedimientos sobre la recopilación, uso y divulgación de su
                información cuando utiliza el servicio y le informa sobre sus
                derechos de privacidad.
              </p>
              <br></br>
              <p>
                Utilizamos tus datos personales para proporcionar y mejorar el
                Servicio. Al utilizar el Servicio, aceptas la recopilación y el
                uso de información de acuerdo con esta Política de Privacidad.
              </p>
            </div>

            {/* section 1 */}
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">Tipos de Datos Recopilados</h1>
              <h2 className="text-sm mb-2">Datos Personales</h2>
              <p className="text-gray-500">
                Mientras usa nuestro servicio, podemos solicitarle que nos
                proporcione cierta información personal identificable que se
                puede utilizar para contactarlo o identificarlo.
              </p>
              <h2 className="text-sm mb-2 mt-2">Datos de Uso</h2>
              <p className="text-gray-500">
                Los datos de uso se recopilan automáticamente al utilizar el
                servicio.
              </p>
              <p className="text-gray-500">
                Los datos de uso pueden incluir información como la dirección de
                Protocolo de Internet (IP) del dispositivo que utiliza, el tipo
                de navegador, las páginas de nuestro servicio que visita, la
                fecha y hora de su visita, el tiempo que pasa en esas páginas,
                identificadores únicos de dispositivos y otros datos de
                diagnóstico.
              </p>
              <p className="text-gray-500">
                Cuando accede al servicio a través de un dispositivo móvil,
                podemos recopilar cierta información automáticamente, como el
                tipo de dispositivo móvil que utiliza, su ID único de
                dispositivo móvil, la dirección IP de su dispositivo móvil, el
                sistema operativo móvil, el tipo de navegador de Internet móvil
                que utiliza, identificadores únicos de dispositivos y otros
                datos de diagnóstico.
              </p>
              <p className="text-gray-500">
                También podemos recopilar información que su navegador envía
                cada vez que visita nuestro servicio o cuando accede al servicio
                a través de un dispositivo móvil.
              </p>
            </div>

            {/* section 2 */}
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">
                Tecnologías de seguimiento y cookies
              </h1>
              <p className="text-gray-500">
                Utilizamos cookies y tecnologías de seguimiento similares para
                rastrear la actividad en nuestro servicio y almacenar cierta
                información. Las tecnologías de seguimiento utilizadas son
                balizas, etiquetas y scripts para recopilar y rastrear
                información, y para mejorar y analizar nuestro servicio. Las
                tecnologías que utilizamos pueden incluir:
              </p>
              <p className="text-gray-500">
                Cookies o cookies del navegador. Una cookie es un archivo
                pequeño que se coloca en su dispositivo. Puede indicarle a su
                navegador que rechace todas las cookies o que le avise cuando se
                envía una cookie. Sin embargo, si no acepta las cookies, es
                posible que no pueda utilizar algunas partes de nuestro
                servicio. A menos que haya ajustado la configuración de su
                navegador para que rechace las cookies, nuestro servicio puede
                utilizar cookies.
              </p>
              <p></p>
              <h2 className="text-sm mb-2 mt-2">
                Cookies necesarias / esenciales
              </h2>
              <p className="font-light">Tipo: Cookies de sesión:</p>
              <p className="text-gray-500">
                Propósito: estas cookies son esenciales para proporcionarle los
                servicios disponibles a través del sitio web y para permitirle
                utilizar algunas de sus funciones. Ayudan a autenticar a los
                usuarios y a evitar el uso fraudulento de las cuentas de
                usuario. Sin estas cookies, no se pueden proporcionar los
                servicios que ha solicitado, y solo utilizamos estas cookies
                para proporcionarle esos servicios.
              </p>
              <h2 className="text-sm mb-2 mt-2">
                Cookies de aceptación de política / aviso de cookies
              </h2>
              <p className="font-light">Tipo: Cookies persistentes:</p>

              <p className="text-gray-500 mb-2">
                Propósito: estas cookies identifican si los usuarios han
                aceptado el uso de cookies en el sitio web.
              </p>
              <p className="font-light">Tipo: Cookies persistentes:</p>
              <p className="text-gray-500">
                Propósito: estas cookies nos permiten recordar las opciones que
                realiza cuando utiliza el sitio web, como recordar sus detalles
                de inicio de sesión o sus preferencias de idioma. El propósito
                de estas cookies es proporcionarle una experiencia más personal
                y evitar que tenga que volver a ingresar sus preferencias cada
                vez que utilice el sitio web.
              </p>
            </div>

            {/* section 3 */}
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">Uso de sus datos personales</h1>
              <p className="font-light mb-3">
                La Compañía puede utilizar sus datos personales para los
                siguientes fines:
              </p>

              <ul className="list-disc text-gray-500">
                <li className=" mb-3">
                  Para proporcionar y mantener nuestro Servicio, incluido el
                  monitoreo del uso de nuestro Servicio.
                </li>
                <li className=" mb-3">
                  Para el desempeño de un contrato: el desarrollo, el
                  cumplimiento y la realización del contrato de compra de los
                  productos, artículos o servicios que ha comprado o de
                  cualquier otro contrato con nosotros a través del Servicio.
                </li>
                <li className=" mb-3">
                  Para contactarlo: para contactarlo por correo electrónico,
                  llamadas telefónicas, mensajes de texto (SMS) u otras formas
                  equivalentes de comunicación electrónica, como las
                  notificaciones push de una aplicación móvil, sobre
                  actualizaciones o comunicaciones informativas relacionadas con
                  las funcionalidades, productos o servicios contratados,
                  incluidas las actualizaciones de seguridad, cuando sean
                  necesarias o razonables para su implementación.
                </li>
                <li className=" mb-3">
                  Para proporcionarle noticias, ofertas especiales e información
                  general sobre otros bienes, servicios y eventos que ofrecemos
                  y que son similares a los que ya ha comprado o consultado, a
                  menos que haya optado por no recibir dicha información.
                </li>
                <li className=" mb-3">
                  Para gestionar sus solicitudes: para atender y gestionar sus
                  solicitudes hacia nosotros.
                </li>
                <li className=" mb-3">
                  Para transferencias comerciales: podemos utilizar su
                  información para evaluar o realizar una fusión, venta,
                  reestructuración, reorganización, disolución u otra venta o
                  transferencia de la totalidad o parte de nuestros activos, ya
                  sea como empresa en funcionamiento o como parte de un
                  procedimiento de quiebra, liquidación u otro procedimiento
                  similar, en el que los datos personales que tenemos sobre los
                  usuarios de nuestro Servicio sean uno de los activos
                  transferidos.
                </li>
                <li className=" mb-3">
                  Para otros fines: podemos utilizar su información para otros
                  fines, como el análisis de datos, la identificación de
                  tendencias de uso, la determinación de la efectividad de
                  nuestras campañas promocionales y para evaluar y mejorar
                  nuestro Servicio, productos, servicios, marketing y su
                  experiencia.
                </li>
                <li className=" mb-3">
                  Podemos compartir su información personal con proveedores de
                  servicios: podemos compartir su información personal con
                  proveedores de servicios para monitorear y analizar el uso de
                  nuestro Servicio y para contactarlo.
                </li>
                <li className=" mb-3">
                  Para transferencias comerciales: podemos compartir o
                  transferir su información personal en relación con, o durante
                  las negociaciones de, cualquier fusión, venta de activos de la
                  Compañía, financiamiento o adquisición de la totalidad o parte
                  de nuestro negocio a otra empresa.
                </li>
                <li className=" mb-3">
                  Con afiliados: podemos compartir su información con nuestros
                  afiliados, en cuyo caso requeriremos que esos afiliados
                  respeten esta Política de privacidad. Los afiliados incluyen
                  nuestra empresa matriz y cualquier otra subsidiaria, socio de
                  empresa conjunta u otras empresas que controlamos o que están
                  bajo control común con nosotros.
                </li>
                <li className=" mb-3">
                  Con socios comerciales: podemos compartir su información con
                  nuestros socios comerciales para ofrecerle ciertos productos,
                  servicios o promociones.
                </li>
                <li className=" mb-3">
                  Con otros usuarios: cuando comparte información personal o
                  interactúa de otra manera en áreas públicas con otros
                  usuarios, dicha información puede ser vista por todos los
                  usuarios y puede distribuirse públicamente.
                </li>
                <li className=" mb-3">
                  Con su consentimiento: podemos divulgar su información
                  personal para cualquier otro propósito con su consentimiento.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">
                Retención de sus datos personales
              </h1>
              <p className="text-gray-500">
                La Compañía retendrá sus datos personales solamente durante el
                tiempo que sea necesario para los propósitos establecidos en
                esta Política de Privacidad. Retendremos y utilizaremos sus
                datos personales en la medida necesaria para cumplir con
                nuestras obligaciones legales (por ejemplo, si estamos obligados
                a retener sus datos para cumplir con las leyes aplicables),
                resolver disputas y hacer cumplir nuestros acuerdos legales y
                políticas.
              </p>
              <p className="text-gray-500">
                La Compañía también retendrá los Datos de uso con fines de
                análisis internos. Los datos de uso se suelen retener durante un
                período de tiempo más corto, excepto cuando se utilizan para
                fortalecer la seguridad o mejorar la funcionalidad de nuestro
                Servicio, o cuando estamos legalmente obligados a retener estos
                datos por períodos más largos.
              </p>
              <h1 className="text-base mb-3 mt-2">
                Transferencia de sus datos personales
              </h1>
              <p className="text-gray-500">
                Su información, incluidos sus datos personales, se procesa en
                cualquier otro lugar donde se encuentren las partes involucradas
                en el procesamiento. Esto significa que esta información puede
                ser transferida y mantenida en computadoras ubicadas fuera de su
                estado, provincia, país u otra jurisdicción gubernamental donde
                las leyes de protección de datos pueden diferir de las de su
                jurisdicción.
              </p>
              <p className="text-gray-500">
                La Compañía tomará todas las medidas razonablemente necesarias
                para garantizar que sus datos sean tratados de manera segura y
                de acuerdo con esta Política de Privacidad, y ninguna
                transferencia de sus datos personales se realizará a una
                organización o país a menos que existan controles adecuados en
                vigor, incluyendo la seguridad de sus datos y otra información
                personal.
              </p>
              <h1 className="text-base mb-3 mt-2">
                Eliminación de sus datos personales
              </h1>
              <p className="text-gray-500">
                Usted tiene el derecho de eliminar o solicitar que ayudemos a
                eliminar los datos personales que hemos recopilado sobre usted.
              </p>
              <p className="text-gray-500">
                Nuestro Servicio puede brindarle la capacidad de eliminar cierta
                información sobre usted desde dentro del Servicio.
              </p>
              <p className="text-gray-500">
                Puede actualizar, modificar o eliminar su información en
                cualquier momento iniciando sesión en su cuenta, si tiene una, y
                visitando la sección de configuración de la cuenta que le
                permite administrar su información personal. También puede
                contactarnos para solicitar acceso, corrección o eliminación de
                cualquier información personal que nos haya proporcionado.
              </p>
              <p className="text-gray-500">
                Tenga en cuenta, sin embargo, que es posible que debamos retener
                cierta información cuando tengamos una obligación legal o una
                base legal para hacerlo.
              </p>
            </div>

            {/* Section 5 */}
            <div className="text-xs text-justify-last mb-5">
              <h1 className="text-base mb-3">
                Divulgación de tus Datos Personales
              </h1>
              <h2 className="text-sm mb-2 mt-2">Transacciones comerciales</h2>
              <p className="text-gray-500">
                Si la Compañía está involucrada en una fusión, adquisición o
                venta de activos, tus Datos Personales pueden ser transferidos.
                Proporcionaremos aviso antes de que tus Datos Personales sean
                transferidos y estén sujetos a una Política de Privacidad
                diferente.
              </p>
              <h2 className="text-sm mb-2 mt-2">Cumplimiento legal</h2>
              <p className="text-gray-500">
                Bajo ciertas circunstancias, la Compañía puede estar obligada a
                divulgar tus Datos Personales si se requiere por ley o en
                respuesta a solicitudes válidas de autoridades públicas (por
                ejemplo, un tribunal o una agencia gubernamental).
              </p>
              <h2 className="text-sm mb-2 mt-2">Otros requisitos legales</h2>
              <p className="text-gray-500">
                La Compañía puede divulgar tus Datos Personales en la creencia
                de buena fe de que dicha acción es necesaria para:
              </p>
              <h2 className="text-sm mb-2 mt-2">
                Cumplir con una obligación legal
              </h2>
              <p className="text-gray-500">
                Proteger y defender los derechos o propiedad de la Compañía
                Prevenir o investigar posibles infracciones en relación con el
                Servicio Proteger la seguridad personal de los Usuarios del
                Servicio o del público Proteger contra la responsabilidad legal
              </p>
              <h2 className="text-sm mb-2 mt-2">
                Seguridad de tus Datos Personales
              </h2>
              <p className="text-gray-500">
                La seguridad de tus Datos Personales es importante para
                nosotros, pero recuerda que ningún método de transmisión por
                Internet, o método de almacenamiento electrónico es 100% seguro.
                Si bien nos esforzamos por utilizar medios comercialmente
                aceptables para proteger tus Datos Personales, no podemos
                garantizar su seguridad absoluta.
              </p>
              <h2 className="text-sm mb-2 mt-2">Privacidad de los niños</h2>
              <p className="text-gray-500">
                Nuestro Servicio no está dirigido a ninguna persona menor de 13
                años. No recopilamos de forma consciente información personal
                identificable de ninguna persona menor de 13 años. Si eres padre
                o tutor y tienes conocimiento de que tu hijo nos ha
                proporcionado Datos Personales, contáctanos. Si nos damos cuenta
                de que hemos recopilado Datos Personales de alguien menor de 13
                años sin verificar el consentimiento parental, tomamos medidas
                para eliminar esa información de nuestros servidores.
              </p>
              <p className="text-gray-500">
                Si necesitamos confiar en el consentimiento como base legal para
                procesar tu información y tu país requiere el consentimiento de
                un padre, podemos requerir el consentimiento de tu padre antes
                de recopilar y usar esa información.
              </p>
              <h2 className="text-sm mb-2 mt-2">Enlaces a otros sitios web</h2>
              <p className="text-gray-500">
                Nuestro Servicio puede contener enlaces a otros sitios web que
                no son operados por nosotros. Si haces clic en un enlace de
                terceros, serás dirigido al sitio del tercero. Te recomendamos
                encarecidamente que revises la Política de Privacidad de cada
                sitio que visites.
              </p>
              <p className="text-gray-500">
                No tenemos control sobre y no asumimos ninguna responsabilidad
                por el contenido, políticas de privacidad o prácticas de sitios
                o servicios de terceros.
              </p>
              <h2 className="text-sm mb-2 mt-2">
                Cambios a esta Política de Privacidad
              </h2>
              <p className="text-gray-500">
                Podemos actualizar nuestra Política de Privacidad de vez en
                cuando. Te notificaremos cualquier cambio publicando la nueva
                Política de Privacidad en esta página.
              </p>
              <p className="text-gray-500">
                Te informaremos por correo electrónico y/o mediante un aviso
                destacado en nuestro Servicio, antes de que el cambio entre en
                vigencia y actualizaremos la fecha de "Última actualización" en
                la parte superior de esta Política de Privacidad.
              </p>
              <p className="text-gray-500">
                Se te aconseja que revises periódicamente esta Política de
                Privacidad para ver si hay cambios. Los cambios a esta Política
                de Privacidad son efectivos cuando se publican en esta página.
              </p>
              <h2 className="text-sm mb-2 mt-2">Contáctanos</h2>
              <p className="text-gray-500">
                Si tienes alguna pregunta sobre esta Política de Privacidad,
                puedes contactarnos:
              </p>
              <p className="text-gray-500">
                Por correo electrónico:{" "}
                <span className=" font-extrabold">test@test.com</span>
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

function PrivacyPolicy({ sportsbook }) {
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
        Política de privacidad y Cookies
      </button>
      <ModalOpen
        sportsbook={sportsbook}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default PrivacyPolicy;
