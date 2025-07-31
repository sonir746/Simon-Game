import { forwardRef } from "react";




export default forwardRef((props, ref) => {
  const { onClick, className } = props;
  return (
    <div className="mainbutton">
      <button ref={ref} onClick={onClick} className={className}>
        {props.text}
      </button>
    </div>
  );
});
