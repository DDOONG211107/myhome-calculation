import { Fragment } from "react";
import classes from "./ResultTable.module.css";
import { MyList } from "./MyList";

export function ResultTable(props) {
  const resultArr = props.resultArr;
  return (
    <Fragment>
      <MyList
        name="아이템 이름"
        time="|남은 시간 (분)"
        portion="|필요 포션"
        experience="|획득 경험치"
      />
      <ul className={classes.list}>
        {resultArr.map((item) => {
          const floorTime = Math.floor(item.time * 100) / 100;
          return (
            <MyList
              isItem={true}
              name={item.name}
              time={floorTime}
              // time={item.time}
              portion={item.portion}
              isPossible={item.isPossible}
              experience={item.exp}
              key={item.id}
            />
          );
        })}
      </ul>
      {/* <ul className={classes.list}>
        {resultArr.map((item) => {
          return (
            <li key={item.id} className={classes.items}>
              {item.name}
            </li>
          );
        })}
      </ul> */}
    </Fragment>
  );
}
