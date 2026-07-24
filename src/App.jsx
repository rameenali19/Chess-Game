import GamePage from "./Pages/GamePage";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HistoryPage from "./Pages/HistoryPage";
import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/aboutMe" element={<AboutMe />} />
    </Routes>
  );

}

export default App;