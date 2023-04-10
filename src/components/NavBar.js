import { useState } from "react";

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
            className="inline-flex mt-3 lg:mt-0 font-medium py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mr-2 rounded-full"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3900 3900"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                strokeWidth={300}
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              <g fill="#fff">
                <g id="d">
                  <g id="c">
                    <g id="e">
                      <g id="b">
                        <path
                          id="a"
                          d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                        />
                        <use xlinkHref="#a" y={420} />
                        <use xlinkHref="#a" y={840} />
                        <use xlinkHref="#a" y={1260} />
                      </g>
                      <use xlinkHref="#a" y={1680} />
                    </g>
                    <use xlinkHref="#b" x={247} y={210} />
                  </g>
                  <use xlinkHref="#c" x={494} />
                </g>
                <use xlinkHref="#d" x={988} />
                <use xlinkHref="#c" x={1976} />
                <use xlinkHref="#e" x={2470} />
              </g>
            </svg>
            English (US)
          </button>

          {isLanguage && (
            <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-0 left-0 lg:left-auto top-14 lg:top-10">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 rounded-full"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 3900 3900"
                      >
                        <path fill="#0055a4" d="M0 0h1300v3900H0z" />
                        <path fill="#fff" d="M1300 0h1300v3900H1300z" />
                        <path fill="#f31830" d="M2600 0h1300v3900H2600z" />
                      </svg>
                      Français
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-5 w-5 rounded-full mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg>
                      Deutsch
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <div className="inline-flex items-center">
                        <svg
                          className="h-5 w-5 rounded-full mr-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-de"
                          viewBox="0 0 512 512"
                        >
                          <g fill-rule="evenodd" stroke-width="1pt">
                            <path fill="#fff" d="M0 0h512v512H0z" />
                            <path fill="#009246" d="M0 0h170.7v512H0z" />
                            <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                          </g>
                        </svg>
                        Italiano
                      </div>
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
