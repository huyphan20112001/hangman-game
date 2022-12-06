import React from "react";
import "./WrongLetters.scss";

function WrongLetters({ wrongLetters }) {
  return (
    <div className="wrong-letters">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </div>
  );
}

export default WrongLetters;
