import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [nav, setNav] = useState("Element-Transfer");
  const navigate = useNavigate();
  return (
    <div id="navbar" className="navbar-container">
      <div className="navbar-list">
        <p
          className={nav === "Element-Transfer" ? "border-bottom" : ""}
          onClick={() => {
            navigate("/");
            setNav("Element-Transfer");
          }}
        >
          Element Transfer
        </p>
        <p
          className={nav === "Nested-List" ? "border-bottom" : ""}
          onClick={() => {
            navigate("/parentchild");
            setNav("Nested-List");
          }}
        >
          Nested List
        </p>
        <p
          className={nav === "Infinite-Scroll" ? "border-bottom" : ""}
          onClick={() => {
            navigate("/scroll");
            setNav("Infinite-Scroll");
          }}
        >
          Infinite Scroll
        </p>
        <p
          className={nav === "Box-Game" ? "border-bottom" : ""}
          onClick={() => {
            navigate("/game");
            setNav("Box-Game");
          }}
        >
          Box Game
        </p>
        <p
          className={nav === "Box-Split" ? "border-bottom" : ""}
          onClick={() => {
            navigate("/box");
            setNav("Box-Split");
          }}
        >
          Box Split
        </p>
      </div>
    </div>
  );
}
