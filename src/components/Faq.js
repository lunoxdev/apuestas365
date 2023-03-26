import { useState } from "react";

function SimpleAccordion() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    {
      title: "¿Que son casas de apuestas deportivas?",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      title: "¿Qué casa de apuestas deportiva elegir?",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      title: "¿Qué casa de apuesta paga más y más rápido?",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      title: "¿Qué considerar antes de elegir un nuevo operador?",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      title: "¿Cuál casa de apuestas tiene mejores cuotas?",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      title: "¿Cuáles casas de apuestas debo evitar?",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
  ];

  return (
    <div>
      <div class="grid items-center justify-center mt-5 mb-5 p-7">
        <h1 class="text-center mb-3 text-white text-3xl md:text-3xl lg:text-4xl p-2">
          Preguntas frecuentes acerca de las casas de apuestas deportivas
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
              <span className="font-medium text-base text-white hover:text-zinc-400">
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
              <div className="px-8 py-4 text-sm md:text-base bg-black rounded-b-md text-gray-400">
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
