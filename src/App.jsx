import GameState from "./Pages/GameState";
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<GameState />} />
    </Routes>
  );

}

export default App;