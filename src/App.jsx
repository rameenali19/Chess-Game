import GamePage from "./Pages/GamePage";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HistoryPage from "./Pages/HistoryPage";
import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import Layout from "./Layout/Layout";
import socket from "./Socket/socket";
import ModeSelection from "./Pages/ModeSelectionPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/modeSelection" element={<ModeSelectionPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Route>
    </Routes>
  );

}

export default App;