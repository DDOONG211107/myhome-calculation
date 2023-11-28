import dataArr from "../../src/data/dataArr";
import { Fragment } from "react";
import classes from "./Result.module.css";
import Card from "../ui/Card";
import { pickNumber, pickCondition } from "@/src/calculate";
import { useState } from "react";
import { useEffect } from "react";
import { MyCheckBox } from "../ui/MyCheckBox";
import { ResultTable } from "./ResultTable";

export function Result(props) {
  const percent = props.percent;
  // type: 1,2,3,4,5 (광산, 목재, 과일나무, 농사, 동물, 낚시)
  const [isMine, setIsMine] = useState(false);
  const [isTree, setIsTree] = useState(false);
  const [isFruit, setIsFruit] = useState(false);
  const [isFarm, setIsFarm] = useState(false);
  const [isAnimal, setIsAnimal] = useState(false);
  const [isFish, setIsFish] = useState(false);
  const [resultArr, setResultArr] = useState([]);

  // const [even, setEven] = useState(false);
  // const [three, setThree] = useState(false);
  // const [five, setFive] = useState(false);
  // const [numArr, setNumArr] = useState([]);
  // let numArr = [];

  // const numArr = pickNumber(percent);

  // useEffect(() => {
  //   // numArr = pickNumber(percent, even, three, five);
  //   setNumArr(pickNumber(percent, even, three, five));
  // }, [percent, even, three, five]);

  useEffect(() => {
    // console.log(percent, isMine, isTree, isFarm, isFish, isAnimal);
    setResultArr(
      pickCondition(percent, isMine, isTree, isFruit, isFarm, isAnimal, isFish)
    );
  }, [percent, isMine, isTree, isFruit, isFarm, isFish, isAnimal, isFish]);

  // dataArr.map((data) => {
  //   if (data < num) {
  //     numArr.push(data);
  //   }
  // });

  // let i = 1;
  // for (i = 1; i <= num; i++) {
  //   numArr.push(i);
  // }

  return (
    <Card>
      <p>결과</p>
      <p className={classes.checks}>
        <MyCheckBox value={isMine} setFunc={setIsMine} />
        <label>광산 채굴</label>
        <MyCheckBox value={isTree} setFunc={setIsTree} />
        <label>목재</label>
        <MyCheckBox value={isFruit} setFunc={setIsFruit} />
        <label>과일나무</label>
        <MyCheckBox value={isFarm} setFunc={setIsFarm} />
        <label>밭</label>
        <MyCheckBox value={isAnimal} setFunc={setIsAnimal} />
        <label>가축</label>
        <MyCheckBox value={isFish} setFunc={setIsFish} />
        <label>낚시</label>
      </p>

      <hr className="line" />
      {/* <p>{percent}</p> */}

      <ResultTable resultArr={resultArr} />
    </Card>
  );
}
