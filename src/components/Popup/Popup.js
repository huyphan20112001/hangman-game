import React, { useEffect, useState } from "react";
import "./Popup.scss";

function Popup({
  correctLetters,
  wrongLetters,
  randomWord,
  setPlay,
  playAgain,
}) {
  const [finalMessage, setFinalMessage] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  const checkWin = (correct, wrong, word) => {
    setStatus("win");
    word.split("").forEach((letter) => {
      if (!correct.includes(letter)) {
        setStatus("");
        setFinalMessage("");
      }
    });

    //  wrong.length === 6 && setStatus("lose") && playAgain();
    if (wrong.length === 6) {
      setStatus("lose");
    }
    return status;
  };

  useEffect(() => {
    if (checkWin(correctLetters, wrongLetters, randomWord) === "win") {
      setFinalMessage("Congratulations! You won! 😃");
      setPlay(false);
    } else if (checkWin(correctLetters, wrongLetters, randomWord) === "lose") {
      setFinalMessage("Unfortunately you lost. 😕");
      setResult(`...the word was: ${randomWord}`);
      setPlay(false);
    }
  }, [status, wrongLetters, correctLetters, setPlay]);
  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{result}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;
