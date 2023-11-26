import classes from "./MyList.module.css";

export function MyList(props) {
  if (!props.isItem) {
    return (
      <p className={classes.labels}>
        <label className={classes.firstLabel}>{props.name}</label>
        <label className={classes.secondLabel}>{props.time}</label>
        <label className={classes.thirdLabel}>{props.portion}</label>
        <label className={classes.fourthLabel}>{props.experience}</label>
      </p>
    );
  } else {
    return (
      <p
        className={
          props.isPossible
            ? classes.possibleItemLabels
            : classes.impossibleItemlabels
        }
      >
        <label className={classes.firstLabel}>{props.name}</label>
        <label className={classes.secondLabel}>{props.time}</label>
        <label className={classes.thirdLabel}>{props.portion}</label>
        <label className={classes.fourthLabel}>{props.experience}</label>
      </p>
    );
  }
}
