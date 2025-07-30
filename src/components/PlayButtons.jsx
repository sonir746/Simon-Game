export default function PlayButtons(props) {

    // console.log(props.color)
  return (
    <div 
    type="button" 
    id={props.color} 
    className={`btn ${props.color}`}
    ></div>
  );
}
