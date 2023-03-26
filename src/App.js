import "./App.css";
import Considerations from "./components/Considerations";
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
    </div>
  );
}

export default App;
