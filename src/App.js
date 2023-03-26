import "./App.css";
import Considerations from "./components/Considerations";
import Header from "./components/Header";
import List from "./components/List";
import Recommended from "./components/Recommended";

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Recommended />
      <Considerations />
    </div>
  );
}

export default App;
