import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Recommended from "./components/Recommended";

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Recommended />
    </div>
  );
}

export default App;
