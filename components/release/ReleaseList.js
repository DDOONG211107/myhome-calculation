import classes from "./ReleaseList.module.css";

export default function ReleaseList(props) {
  const releaseObj = props.releaseContent;
  const desArr = props.releaseContent.strArr;
  //   console.log(releaseObj);
  //   console.log(desArr);

  return (
    <li key={releaseObj.id} className={classes.releaseList}>
      <label
        className={
          releaseObj.isCompleted
            ? classes.completedList
            : classes.incompletedList
        }
      >
        <b>{releaseObj.date}</b>
        {releaseObj.isCompleted ? <b>{` - 완료`}</b> : <b>{` - 진행중`}</b>}
      </label>
      <h4>{releaseObj.title}</h4>
      {desArr.map((str) => {
        return <p>{str}</p>;
      })}
      {/* <hr className={classes.releaseListHr} /> */}
    </li>
  );
}
