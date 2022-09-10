import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectCountry from "./components/select_country";
import Universities from "./components/universities";
import Link from "./components/link";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/* <Select_country/> */}
          <Routes>
            <Route exact path="/" element={<SelectCountry />} />
            <Route path="/universities/:country" element={<Universities />} />
            <Route path="/university/:country/:university" element={<Link />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
