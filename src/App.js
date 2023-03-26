import "./App.css";
import Considerations from "./components/Considerations";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Promotions from "./components/Promotions";
import Recommended from "./components/Recommended";

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Recommended />
      <Considerations />
      <Promotions />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
