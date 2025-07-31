import { useRef, useEffect, useState } from "react";
import "./App.css";
import ColorButtons from "./components/ColorButtons";
import Ibutton from "./components/Ibutton";
import MainButtons from "./components/MainButtons";
import MainText from "./components/MainText";

function App() {
  const btnColor = ["green", "red", "yellow", "blue"];
const soundsRef = useRef({
  green: new Audio("/sounds/green.mp3"),
  red: new Audio("/sounds/red.mp3"),
  blue: new Audio("/sounds/blue.mp3"),
  yellow: new Audio("/sounds/yellow.mp3"),
});

  const gamePattern = useRef([]);
  const userPattern = useRef([]);
  const [isStart, setIsStart] = useState(true);
  var [num, setNum] = useState(1);
  var level = "Level " + num;
  const [mainText, setMainText] = useState("Press the Start Button");
  const [mainBtnText, setMainBtnText] = useState("Start");
  var checkAnswerCount = 0;

  const nextSequence = () => {
    const randomColor = btnColor[Math.floor(Math.random() * btnColor.length)];
    playSound(randomColor);
    flash(randomColor);
    gamePattern.current.push(randomColor);
    setNum((num = num + 1));
    setMainText(level);
    console.log(gamePattern.current);
  };

  const handelStart = () => {
    if (isStart) {
      setIsStart(false);
      // setNum(1)
      setMainBtnText("Start")
      nextSequence();
    }
  };

  const ColorClick = (e) => {
    const color = e.target.id;

    userPattern.current.push(color);
    playSound(color);
    flash(color);
    const gameCurrent = gamePattern.current;
    const userCurrent = userPattern.current;

    console.log("user=>" + userCurrent + "\ngame=> " + gameCurrent);

    console.log(
      gameCurrent[checkAnswerCount] === userCurrent[checkAnswerCount]
    );

    console.log(
      gamePattern.current[checkAnswerCount],
      userPattern.current[checkAnswerCount]
    );

    if (gameCurrent[checkAnswerCount] === userCurrent[checkAnswerCount]) {
      checkAnswerCount++;

      if (userCurrent.length === gameCurrent.length) {
        userPattern.current = [];
        checkAnswerCount = 0;
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      console.log("wrong Answer");
      gameOver();
      checkAnswerCount = 0;
      wrongChoice();
      setIsStart(true);
    }
  };

  const gameOver = () => {
    setNum(1);
    gamePattern.current = [];
    userPattern.current = [];
    setMainBtnText("ReStart")
  };

  const wrongChoice = () => {
    document.body.classList.add("game-over");
    playSound("wrong")
    setMainText("Game Over!\nPress Restart Button");
    setTimeout(function () {
      document.body.classList.remove("game-over");
    }, 400);
  };
  const playSound = (color) => {
    const sound = soundsRef.current[color];
    sound.currentTime = 0;
  sound.play();
  };

  const flash = (color) => {
    let cls = `.${color}`;
    const colorButton = document.querySelectorAll(cls);
    colorButton[0].classList.add("pressed");
    setTimeout(() => {
      colorButton[0].classList.remove("pressed");
    }, 200);
  };

  return (
    <div className="main">
      <Ibutton />
      <MainText text={mainText} />
      <ColorButtons colorList={btnColor} onClick={ColorClick} flash={""} />
      <MainButtons onClick={handelStart} className="start" text={mainBtnText} />
    </div>
  );
}

export default App;
