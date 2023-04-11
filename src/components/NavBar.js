import { useState } from "react";
import es from "../img/language/mexico.png";
import pt from "../img/language/brasil.png";
import en from "../img/language/usa.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);
  const [isOn, setIsOn] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between flex-wrap bg-black p-5">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">LOGO</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:w-auto lg:items-center`}
      >
        <div className="text-sm lg:flex-grow lg:text-center">
          <a
            href="#inicio"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Inicio
          </a>
          <a
            href="#recomendadas"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Recomendaciones
          </a>
          <a
            href="#primerospasos"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Como comenzar
          </a>
          <a
            href="#consejos"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Consejos
          </a>
          <a
            href="#promociones"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Promociones
          </a>
          <a
            href="#faq"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            FAQ
          </a>
          <a
            href="#nosotros"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:underline hover:underline-offset-4"
          >
            Nosotros
          </a>
        </div>
        <div className="relative flex justify-between ">
          <button
            type="button"
            onClick={() => setIsLanguage(!isLanguage)}
            className="inline-flex mt-3 lg:mt-0 font-medium py-2 px-2 text-base text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <img
              src={es}
              alt="Español"
              className="w-6 h-6 mr-2 border rounded-xl"
            ></img>
            Español (ES)
          </button>

          {isLanguage && (
            <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-0 left-0 lg:left-auto top-14 lg:top-10">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        src={en}
                        alt="Português"
                        className="w-6 h-6 mr-2 border rounded-xl"
                      ></img>
                      English (EN)
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        src={pt}
                        alt="Português"
                        className="w-6 h-6 mr-2 border rounded-xl"
                      ></img>
                      Português (PT)
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}
          <div
            onClick={() => setIsOn(!isOn)}
            className={`w-10 h-6 rounded-full mt-5 lg:mt-2 lg:ml-5 ${
              isOn ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`transform transition-transform ease-in-out w-6 h-6 rounded-full ${
                isOn ? "translate-x-4 bg-white" : "translate-x-0 bg-gray-500"
              }`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
