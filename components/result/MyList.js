import classes from "./MyList.module.css";

export function MyList(props) {
  return (
    <p className={props.isItem ? classes.itemLabels : classes.labels}>
      <label className={classes.firstLabel}>{props.name}</label>
      <label className={classes.secondLabel}>{props.time}</label>
      <label className={classes.thirdLabel}>{props.portion}</label>
      <label className={classes.fourthLabel}>{props.experience}</label>
    </p>
  );
}
