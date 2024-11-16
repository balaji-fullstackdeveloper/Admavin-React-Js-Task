import React, { useState, useEffect } from "react";
import "./boxgame.css";

//BoxGame component

const BoxGame = () => {
  const [boxes, setBoxes] = useState(Array(9).fill("")); // Initialize 9 empty boxes
  const [keyword, setKeyword] = useState(""); // Initialize the keyword to be searched
  const [score, setScore] = useState(0); // Initialize the score
  const [timeLeft, setTimeLeft] = useState(60); // Initialize the time left
  const [gameOver, setGameOver] = useState(false); // Initialize the game over state

  // Handles the reset button click

  function handleReset() {
    setTimeLeft(60);
    setScore(0);
    setGameOver(false);
    window.location.reload();
  }

  //Set up the timer

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    } else {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  //Handles the click event on the boxes

  const handleClick = (index) => {
    if (boxes[index] === keyword) {
      setScore(score + 5);
      document.getElementById(index).classList.add("green");
    } else {
      setScore(score - 2.5);
      document.getElementById(index).classList.add("red");
    }
  };

  // Set up the keyword and boxes

  useEffect(() => {
    if (!gameOver) {
      const randomIndex = Math.floor(Math.random() * 9);
      const newBoxes = [...boxes];
      newBoxes[randomIndex] = keyword;
      setBoxes(newBoxes);
      setTimeout(() => {
        newBoxes[randomIndex] = "";
        setBoxes(newBoxes);
        setKeyword("Hit" + Math.random().toString(36).substring(7));
      }, 1000);
      for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("box")[i].classList.remove("red");
        document.getElementsByClassName("box")[i].classList.remove("green");
      }
    }
  }, [keyword, gameOver]);

  return (
    <div>
      {!gameOver ? (
        <div className="game-div">
          <h1 className="box-game-title">Box Game</h1>
          <div className="box-game-Header">
            <div className="time-left">Time Left: {timeLeft}</div>
            <div className="score">Score: {score}</div>
          </div>

          <div className="boxes-container">
            {boxes.map((box, index) => (
              <div
                id={index}
                key={index}
                className="box"
                onClick={() => handleClick(index)}
              >
                {box.startsWith("Hit") ? "Hit" : ""}
              </div>
            ))}
          </div>
          <button className="button-78" role="button" onClick={handleReset}>
            Restart
          </button>
        </div>
      ) : (
        <div className="final-score">
          <p>Final Score: {score}</p>
          <button onClick={handleReset} className="button-78" role="button">
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default BoxGame;
