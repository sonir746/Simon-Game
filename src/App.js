import { useEffect, useState } from "react";
import "./App.css";
import ColorButtons from "./components/ColorButtons";
import Ibutton from "./components/Ibutton";
import MainButtons from "./components/MainButtons";
import MainText from "./components/MainText";

function App() {





  // const [gamePattern, setgamePattern] = useState([]);
  // const [userPattern, setuserPattern] = useState([]);
  // const [start, setStart] = useState(true);
  // var level = "Level ";
  // var num = 1;

  // const Start = document.querySelector(".start");


  // useEffect(() => {
  //   const btn = btnRef.current;
  //   if (btn) {
  //     btn.addEventListener('click', () => {
  //       console.log('Button clicked!');
  //     });
  //   }














  return (
    <div className="main">
      <Ibutton />
      <MainText />
      <ColorButtons />
      <MainButtons />
    </div>
  );
}

export default App;
