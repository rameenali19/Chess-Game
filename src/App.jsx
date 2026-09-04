import GamePage from "./pages/GamePage";
import { Routes, Route } from "react-router-dom"
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import Leaderboard from "./pages/Leaderboard";
import Layout from "./layout/Layout";
import socket from "./socket/socket";
import ModeSelectionPage from "./pages/ModeSelectionPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/mode-selection" element={<ModeSelectionPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Route>
    </Routes>
  );

}

export default App;