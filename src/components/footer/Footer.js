import ResponsibleGaming from "../footer/ResponsibleGaming";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";

export default function Footer(sportsbook) {
  return (
    <footer id="nosotros">
      <div className="grid items-center justify-center mb-5 p-7">
        <h1 className="text-center text-2xl md:text-2xl lg:text-3xl p-2">
          Acerca de nosotros
        </h1>
        <div className="mb-5 text-xs flex flex-col justify-center items-center md:justify-end lg:justify-end">
          <h2 className="text-center text-gray-500 mt-5 mb-5">
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
            <div className=" text-base font-extrabold mt-3">
              ¡Gracias por confiar en nosotros para tu experiencia de apuestas
              en línea!
            </div>
          </h2>
        </div>
        <hr></hr>
        <div className="flex flex-col mt-5 text-xs justify-center items-center">
          {/* Esto se habilita cuando existan canales de contacto */}
          {/* <div className="flex mb-5 mt-5">
            <img src="/logo1.png" alt="Logo 1" className="h-6 mr-4" />
            <img src="/logo2.png" alt="Logo 2" className="h-6 mr-4" />
            <img src="/logo3.png" alt="Logo 3" className="h-6 mr-4" />
            <img src="/logo4.png" alt="Logo 4" className="h-6" />
          </div> */}
          <div className="flex gap-4 text-center mb-5">
            <TermsAndConditions />
            <PrivacyPolicy />
            <ResponsibleGaming />
            <Contact />
          </div>
          &copy; 2023 Mi Sitio Web. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
