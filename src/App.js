import "./App.css";
import Considerations from "./components/Considerations";
import Faq from "./components/Faq";
import FirstSteps from "./components/FirstSteps";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import List from "./components/List";
import NavBar from "./components/NavBar";
import Promotions from "./components/Promotions";
import Recommended from "./components/Recommended";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <List />
      <Recommended />
      <FirstSteps />
      <Considerations />
      <Promotions />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
