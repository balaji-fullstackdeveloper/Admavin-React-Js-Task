import React from "react";
import { useNavigate } from "react-router-dom";

function Startgame() {
  const navigate = useNavigate();
  return (
    <div className="startgame-container">
      <h1>Box Game</h1>
      <button
        className="button-78"
        role="button"
        onClick={() => navigate("/game/start")}
      >
        Start
      </button>
    </div>
  );
}

export default Startgame;
