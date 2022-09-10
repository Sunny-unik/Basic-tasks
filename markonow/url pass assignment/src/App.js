import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<First />} />
          <Route path="/:firstdata" element={<Second />} />
          <Route path="/:first/:second" element={<Third />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
