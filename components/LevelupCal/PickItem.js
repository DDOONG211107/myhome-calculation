import classes from "./PickItem.module.css";

export default function PickItem(props) {
  return (
    <div>
      <div className={classes.pickItemTitle}>
        <b>{props.title}</b>
      </div>

      <label>
        <input
          type="radio"
          onChange={props.onChange}
          name={props.name}
          value="1304"
          // checked={true}
        />
        호두 &nbsp;
      </label>
      <label>
        <input
          type="radio"
          onChange={props.onChange}
          name={props.name}
          value="1509"
        />
        백금 &nbsp;
      </label>
      <label>
        <input
          type="radio"
          onChange={props.onChange}
          name={props.name}
          value="1507"
        />
        금 &nbsp;
      </label>
      <br />
      <label>
        <input
          type="radio"
          onChange={props.onChange}
          name={props.name}
          value="1505"
        />
        석회석 &nbsp;
      </label>
      <label>
        <input
          type="radio"
          onChange={props.onChange}
          name={props.name}
          value="1503"
        />
        철 &nbsp;
      </label>
    </div>
  );
}
