import "./App.css";
import Eyefind from "./components/eyefind";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Eyefind />} />
      </Routes>
    </Router>
  );
}

export default App;
