import PlayButtons from "./PlayButtons";

export default function ColorButtons() {
  const colorList = ["green", "red", "yellow", "blue"];
  return (
    <div className="container">
      {colorList.map((color, index) => (
        <PlayButtons 
        key={index} 
        color={color}
         />
      ))}
    </div>
  );
}
