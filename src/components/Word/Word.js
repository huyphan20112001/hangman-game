import React from "react";
import "./Word.scss";

function Word({ randomWord, correctLetters }) {
  return (
    <div className="word">
      {randomWord.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
}

export default Word;
