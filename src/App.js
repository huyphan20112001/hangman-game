import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";
import WrongLetters from "./components/WrongLetters/WrongLetter";
import { useState } from "react";
import { words } from "./constants";
import Word from "./components/Word/Word";
import Notification from "./components/Notification/Notification";
import Popup from "./components/Popup/Popup";
let randomWord = words[Math.floor(Math.random() * words.length)];
// console.log(randomWord);
function App() {
  const [play, setPlay] = useState(true);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useState(() => {
    const handleTyping = (e) => {
      const { keyCode, key } = e;
      if (play && keyCode >= 65 && keyCode <= 90) {
        const letterEntered = key;
        // console.log(key);
        console.log(correctLetters.includes(letterEntered));
        if (randomWord.includes(letterEntered)) {
          if (!correctLetters.includes(letterEntered)) {
            setCorrectLetters((lastLetter) => [...lastLetter, letterEntered]);
            console.log("correct insert");
          } else {
            show(setShowNotification);
            console.log(123);
          }
        } else {
          if (!wrongLetters.includes(letterEntered)) {
            setWrongLetters((lastLetter) => [...lastLetter, letterEntered]);
            console.log("wrong insert");
          } else {
            console.log(123);
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keyup", handleTyping);

    return () => window.removeEventListener("keyup", handleTyping);
  }, [play, wrongLetters, correctLetters]);
  // console.log(correctLetters);
  // console.log(wrongLetters);

  const show = (setter) => {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000);
  };

  const playAgain = () => {
    setPlay(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * words.length);
    randomWord = words[random];
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="game-container">
        <Characters wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word randomWord={randomWord} correctLetters={correctLetters} />
      </div>
      <Popup
        wrongLetters={wrongLetters}
        correctLetters={correctLetters}
        randomWord={randomWord}
        setPlay={setPlay}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
