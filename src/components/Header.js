import BG from "../img/banner.png";

export default function Header() {
  return (
    <div className="App">
      <img src={BG} alt="Banner"></img>
      <div class="flex items-center justify-center mt-3 mb-3">
        <h1 class="text-center text-white text-2xl md:text-3xl lg:text-4xl md:p-10 p-2 lg:p-10">
          TOP CASAS DE APUESTAS DEPORTIVAS EN LATINOAMÉRICA 2023
        </h1>
      </div>
      <hr></hr>
    </div>
  );
}
