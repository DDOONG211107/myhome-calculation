export default function HairShorten(props) {
  return (
    <div>
      {props.title}
      <br />
      <label>
        <input
          type="radio"
          onChange={props.onChange}
          name={props.name}
          value="8"
        />
        8% &nbsp;
      </label>
      <label>
        <input
          type="radio"
          onChange={props.onChange}
          name={props.name}
          value="6"
        />
        6%&nbsp;
      </label>
      <label>
        <input
          type="radio"
          onChange={props.onChange}
          name={props.name}
          value="0"
        />
        0%&nbsp;
      </label>
    </div>
  );
}
