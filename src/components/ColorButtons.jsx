import { forwardRef } from "react";
import PlayButtons from "./PlayButtons";

export default forwardRef((props, ref) => {
  const {colorList,onClick} = props;
  return (
    <div className="container">
      {colorList.map((color, index) => (
        <PlayButtons key={index} ref={ref} color={color} onClick={onClick} />
      ))}
    </div>
  );
});
