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
            ? props.portion === "1시간 앰플 필요"
              ? classes.middleAmpleItem
              : classes.lowAmpleItem
            : classes.impossibleItemlabels
        }
      >
        <label className={classes.firstLabel}>{props.name}</label>
        <label className={classes.secondLabel}>{props.time} 분</label>
        <label className={classes.thirdLabel}>
          <b>{props.portion}</b>
        </label>
        <label className={classes.fourthLabel}>{props.experience} exp</label>
      </p>
    );
  }
}
