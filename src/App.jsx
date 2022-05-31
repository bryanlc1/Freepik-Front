import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext";
import Home from "./pages/Home";
import ResultsPage from "./pages/ResultsPage";
import NavComponent from "./components/NavComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <PlayerProvider>
      <NavComponent />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </PlayerProvider>
  );
}

export default App;
