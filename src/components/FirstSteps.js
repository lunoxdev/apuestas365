import { useState } from "react";

function FirstSteps() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Registro",
      description:
        "El primer paso para disfrutar de la experiencia de juego en una casa de apuestas en línea es registrarse. Para ello, se debe proporcionar información personal detallada y precisa, incluyendo su nombre completo, dirección, fecha de nacimiento, correo electrónico y número de teléfono. Además, se le solicitará que cree una contraseña segura para su cuenta. Este proceso es crucial para garantizar que los usuarios sean mayores de edad y para asegurar que sus datos personales se mantengan seguros.",
    },
    {
      number: 2,
      title: "Primer deposito",
      description:
        "Una vez que se ha completado el proceso de registro, debe depositar fondos en su cuenta para poder realizar apuestas. Las casas de apuestas en línea ofrecen una variedad de opciones de depósito, que pueden incluir tarjetas de crédito y débito, monederos electrónicos, transferencias bancarias y más. Estos métodos de pago están diseñados para garantizar la seguridad y la rapidez de las transacciones, y para ofrecer comodidad y flexibilidad a los usuarios. Debes tomar en cuenta que si este paso no se realiza, no se podrán realizar retiros.",
    },
    {
      number: 3,
      title: "Verificación de identidad",
      description:
        "Antes de poder realizar apuestas, es necesario que verifique su identidad. Este proceso es fundamental para garantizar la seguridad de los usuarios y la transparencia en el juego. La verificación de identidad suele implicar proporcionar una copia de su documento de identidad y una prueba de su dirección. La casa de apuestas en línea utiliza esta información para verificar la identidad del usuario y para cumplir con las regulaciones de juego responsable.",
    },
    {
      number: 4,
      title: "Apostar",
      description:
        "Una vez que el usuario ha registrado su cuenta, depositado fondos y verificado su identidad, está listo para realizar sus primeras apuestas. En las casas de apuestas en línea, el usuario tendrá acceso a una amplia gama de mercados de apuestas deportivas y opciones de juegos de casino, y podrá hacer sus apuestas utilizando los fondos que haya depositado en su cuenta. La casa de apuestas en línea utiliza tecnología avanzada para garantizar que los resultados sean justos y aleatorios, y para asegurar que el usuario tenga una experiencia de juego emocionante y entretenida.",
    },
  ];

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div
      id="primerospasos"
      className="grid items-center justify-center mt-5 p-7"
    >
      <h1 className="text-center text-white text-2xl md:text-2xl lg:text-3xl p-2">
        Primeros pasos
      </h1>
      <h2 className="text-center text-gray-400 text-xs mt-5">
        Antes de comenzar a jugar en una casa de apuestas en línea, es
        importante que los usuarios comprendan los términos y condiciones de la
        casa de apuestas y tomen medidas para garantizar que su experiencia de
        juego sea segura y responsable. Para ello, deben seguir cuatro pasos
        principales: el registro, el depósito de fondos, la verificación de
        identidad y la realización de apuestas. Los sitios web de las casas de
        apuestas en línea ofrecen una variedad de opciones de apuestas
        deportivas y juegos de casino, y se esfuerzan por proporcionar una
        experiencia de juego de alta calidad y segura.
        <br></br>
        <div className=" font-extrabold mt-2 mb-10">
          Recuerda verificar si la casa de apuestas ofrece bonos por primer
          depósito. Revisa los términos y condiciones del bono antes de
          depositar para aprovechar al máximo la promoción. ¡No pierdas la
          oportunidad de obtener más por tu dinero!
        </div>
      </h2>
      <div className="flex flex-col items-center mx-5 lg:mx-32 p-5 mb-14 border rounded-lg shadow-lg bg-gray-800 shadow-gray-500">
        <ol className="flex items-end justify-end w-full mb-4 sm:mb-5 lg:ml-36 text-end p-10">
          {[1, 2, 3, 4].map((step) => (
            <li
              key={step}
              className={`flex w-full items-center ${
                activeStep === step
                  ? "text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800"
                  : "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700"
              } ${step === 4 ? "after:hidden" : ""}`}
              onClick={() => handleStepClick(step)}
              style={{ flex: 1 }}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${
                  activeStep === step
                    ? "bg-blue-100 dark:bg-blue-800"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
                style={{ fontSize: "1.2rem", padding: "0.5rem" }}
              >
                {step}
              </div>
            </li>
          ))}
        </ol>
        <div className=" text-gray-400 text-sm text-center md:text-justify mb-5">
          <h2 className="text-lg text-white font-bold mb-3 text-center">
            {steps[activeStep - 1].title}
          </h2>
          <p>{steps[activeStep - 1].description}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default FirstSteps;
