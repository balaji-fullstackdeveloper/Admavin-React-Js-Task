import React, { useState } from "react";
import "./squarebox.css";

//A single square component that can be split into four smaller squares.

const Square = ({ size }) => {
  const [isSplit, setIsSplit] = useState(false);
  //Handles a click on the square by setting isSplit to true.
  const handleClick = () => {
    setIsSplit(true);
  };
  // If the square is not split, return a single square with a click handler.
  if (!isSplit) {
    return (
      <div
        className="square"
        style={{ width: size, height: size }}
        onClick={handleClick}
      ></div>
    );
  }
  //Calculate the new size of the squares when splitting.
  const newSize = size / 2;
  //Return a container with four smaller squares.
  return (
    <div className="square-container" style={{ width: size, height: size }}>
      <Square size={newSize} />
      <Square size={newSize} />
      <Square size={newSize} />
      <Square size={newSize} />
    </div>
  );
};

const SquareGrid = () => {
  return (
    <div className="recursive-square-wrapper">
      <h1>Box Split</h1>
      <div className="square">
        <Square size={400} />
      </div>
    </div>
  );
};

export default SquareGrid;
