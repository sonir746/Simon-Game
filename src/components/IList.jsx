export default function IList(props) {
  return (
    <li>
      <p className="heading">{props.heading}</p>
      <p className="explain">{props.text}</p>
    </li>
  );
}
