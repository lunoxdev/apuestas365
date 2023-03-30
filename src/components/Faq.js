import { useState } from "react";

function SimpleAccordion() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    {
      title: "¿Cómo funcionan las casas de apuestas deportivas en línea?",
      content:
        "Las casas de apuestas deportivas en línea funcionan como intermediarios entre los apostadores y los eventos deportivos, ofreciendo cuotas y líneas de apuestas en diferentes deportes y eventos. Los apostadores pueden realizar apuestas en línea y esperar ganar dinero si aciertan.",
    },
    {
      title: "¿Es seguro apostar en línea?",
      content:
        "Sí, siempre y cuando elija una casa de apuestas deportivas en línea confiable y segura, que cuente con licencias y regulaciones en su país de origen. Además, debe asegurarse de tomar medidas de seguridad básicas, como utilizar contraseñas seguras y evitar compartir información personal y financiera con terceros.",
    },
    {
      title:
        "¿Cómo puedo depositar y retirar dinero en una casa de apuestas deportivas en línea?",
      content:
        "Las casas de apuestas deportivas en línea ofrecen una variedad de opciones de depósito y retiro, que pueden incluir tarjetas de crédito y débito, transferencias bancarias, billeteras electrónicas y criptomonedas. Los tiempos de procesamiento y los límites de depósito y retiro pueden variar según el método elegido.",
    },
    {
      title: "¿Qué son las apuestas en vivo y cómo funcionan?",
      content:
        "Las apuestas en vivo permiten a los apostadores realizar apuestas en tiempo real mientras se desarrolla un evento deportivo. Las cuotas y las líneas de apuestas se ajustan constantemente durante el evento, lo que permite a los apostadores tomar decisiones informadas sobre sus apuestas.",
    },
    {
      title: "¿Puedo cancelar una apuesta después de haberla realizado?",
      content:
        "En general, no. Una vez que has hecho una apuesta, no se puede cancelar. Sin embargo, algunas casas de apuestas deportivas pueden tener políticas de cancelación en circunstancias excepcionales, como si un evento deportivo se cancela o pospone. Asegúrate de leer cuidadosamente los términos y condiciones de tu casa de apuestas en relación con la cancelación de apuestas.",
    },
    {
      title:
        "¿Qué deportes se pueden apostar en las casas de apuestas deportivas en línea?",
      content:
        "Las casas de apuestas deportivas en línea ofrecen una amplia variedad de deportes en los que se pueden realizar apuestas, que pueden incluir fútbol, baloncesto, béisbol, fútbol americano, tenis, boxeo, carreras de caballos y muchos más.",
    },
    {
      title:
        "¿Es necesario pagar impuestos sobre las ganancias de las apuestas deportivas en línea?",
      content:
        "Depende del país en el que se encuentre la persona, ya que en algunos países se deben pagar impuestos sobre las ganancias de las apuestas deportivas en línea. Es importante consultar las leyes de cada país al respecto.",
    },
    {
      title:
        "¿Qué debo hacer si tengo un problema con una apuesta o mi cuenta?",
      content:
        "Si tienes algún problema o duda relacionada con una apuesta o tu cuenta de usuario, puedes contactar al servicio de atención al cliente de la casa de apuestas deportivas. La mayoría de las casas de apuestas ofrecen diferentes canales de soporte, como chat en vivo, correo electrónico o teléfono.",
    },
    {
      title: "¿Es legal apostar en línea?",
      content:
        "Depende del país en el que te encuentres. Algunos países tienen leyes que permiten las apuestas deportivas en línea, mientras que en otros no está permitido. Es importante que revises las leyes de tu país antes de apostar en línea.",
    },
    {
      title: "¿Puedo retirar mis ganancias en cualquier momento?",
      content:
        "En general, sí. Sin embargo, cada casa de apuestas deportivas tiene sus propias políticas de retiro, y algunas pueden tener ciertas restricciones o requerir verificación de identidad antes de procesar un retiro. Asegúrate de leer cuidadosamente los términos y condiciones de retiro de tu casa de apuestas.",
    },
  ];

  return (
    <div>
      <div class="grid items-center justify-center mt-5 p-7">
        <h1 class="text-center text-white text-2xl md:text-3xl p-2">
          Preguntas y respuestas sobre apuestas deportivas
        </h1>
      </div>
      <div className="max-w-4xl mx-auto px-14 mb-16">
        {items.map((item, index) => (
          <div key={index}>
            <button
              className="flex justify-between items-center w-full py-4 px-6 bg-black rounded-md shadow-md hover:shadow-lg focus:outline-none border-y-2"
              onClick={() =>
                setSelectedIndex(index === selectedIndex ? null : index)
              }
            >
              <span className="font-medium text-sm text-white hover:text-zinc-400">
                {item.title}
              </span>
              <svg
                className={`h-6 w-6 transition-all text-white duration-500 transform ${
                  index === selectedIndex ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {selectedIndex === index && (
              <div className="px-8 py-4 text-xs md:text-xs bg-black rounded-b-md text-gray-600">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <hr></hr>
    </div>
  );
}

export default SimpleAccordion;
