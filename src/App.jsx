import GamePage from "./pages/GamePage";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Layout from "./layout/Layout";
import socket from "./Socket/socket";
import ModeSelectionPage from "./pages/ModeSelectionPage";

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