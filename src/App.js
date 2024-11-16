import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.js";
import ElementTransfer from "./components/ElementTransfer/ElementTransfer.js";
import InfiniteScroll from "./components/Infinite-Scroll/InfiniteScroll.js";
import BoxGame from "./components/box-game/BoxGame.js";
import SquareGrid from "./components/square-box/SquareBox.js";
import Startgame from "./components/box-game/Startgame";
import FileHome from "./components/File/FileHome";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/scroll" element={<InfiniteScroll />} />
        <Route path="/parentchild" element={<FileHome />} />
        <Route path="/game" element={<Startgame />} />
        <Route path="/game/start" element={<BoxGame />} />

        <Route path="/" element={<ElementTransfer />} />
        <Route path="/box" element={<SquareGrid />} />
      </Routes>
    </div>
  );
}

export default App;
