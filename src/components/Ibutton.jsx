import { useState } from "react";
import Icon from "./Icon";
import IList from "./IList";

export default function Ibutton() {
  const List = [
    ["👀 Watch carefully!", "The game will light up colors in a pattern."],
    [
      "👉 Tap in the same order!",
      "Click the buttons in the same order you saw.",
    ],
    ["🎉 Level up!", "Each round adds one more color to the pattern."],
    ["😬 Oops? Game Over!", "Tap the wrong button = Game ends. Try again!"],
    [
      "🏆 Challenge yourself!",
      "Remember more colors each time. How far can you go?",
    ],
  ];
   
  const [iClicked , setIClicked] =useState(false)

  const ctnt = () => {
    return (
      <div className="ictnt">
        <button onClick={()=>setIClicked(false)} className="close">
          X
        </button>
        <ul>
          {List.map((item, index) => (
            <IList key={index} heading={item[0]} text={item[1]} />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="ibutton">
      <button onClick={()=>setIClicked(true)} id="i" className="i">
        {Icon.i}
      </button>

      {iClicked?ctnt():null}
    </div>
  );
}
