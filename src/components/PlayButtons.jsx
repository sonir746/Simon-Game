import { forwardRef } from "react";

export default forwardRef((props, ref) => {
  const { color, onClick } = props;
  // console.log(color)
  return (
    <div
      ref={ref}
      onClick={onClick}
      type="button"
      id={color}
      className={"btn " + color}
    ></div>
  );
});
