import dataArr from "@/src/data/dataArr";
import classes from "./LevelupResult.module.css";
import { Man } from "@/src/calculate";

export default function LevelupResult(props) {
  // console.log(props.itemId);
  const itemArr = props.itemArr;
  // console.log(itemArr);
  const pickedItem = itemArr.find((item) => item.id === +props.itemId);

  // function Man(num) {
  //   if (num < 10000) {
  //     return num;
  //   }
  //   if (num < 100000000) {
  //     let man = Math.floor(num / 10000);
  //     let one = num - man * 10000;
  //     return man + "만 " + one;
  //   }
  //   if (num < 1000000000000) {
  //     let uck = Math.floor(num / 100000000);
  //     let man = Math.floor((num - uck * 100000000) / 10000);
  //     return uck + "억 " + man + "만";
  //   }
  // }

  console.log(pickedItem);
  return (
    <div className={classes.levelupResult}>
      <div className={classes.levelupResultLabel}>
        <ul>
          <li key="requiredAmple">필요 앰플 개수</li>
          <li key="requiredGold">필요 골드</li>
          <li key="getItem">획득 아이템 개수</li>
          <li key="getExp">획득 경험치</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>{Man(pickedItem?.reqAmple)}개</li>
          <li>{Man(pickedItem?.gold)}G</li>
          <li>{Man(pickedItem?.getItem)}개</li>
          <li>{Man(pickedItem?.totalExp)}Exp</li>
        </ul>
      </div>
      {/* <ul>
        <li key="requiredAmple">
          <div>필요 앰플 개수: </div>
          <div>{200}</div>
        </li>
        <li key="requiredGold">
          <div>필요 골드: </div>
          <div>{pickedItem?.gold}</div>
        </li>
        <li key="getItem">
          <div>획득 아이템: </div>
          <div>{pickedItem?.name}</div>
        </li>
        <li key="getExp">
          <div>획득 경험치: </div>
          <div> {pickedItem?.exp}</div>
        </li>
      </ul> */}
    </div>
  );
}
