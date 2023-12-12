import { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/ui/Header";
import MyFooter from "@/components/ui/MyFooter";
import Card from "@/components/ui/Card";
import { MyCheckBox } from "@/components/ui/MyCheckBox";
import LevelupResult from "../../components/LevelupCal/LevelupResult";
import { useState, useEffect } from "react";
import PickItem from "@/components/LevelupCal/PickItem";
import { calculateLevelup } from "@/src/calculate";

export default function LevelupCal(props) {
  const [enteredExpPercent, setEnteredExpPercent] = useState("");
  const [enteredCurrentLevel, setEnteredCurrentLevel] = useState("");
  const [enteredCurrentExp, setEnteredCurrentExp] = useState(0);
  const [portion1Exp, setPortion1Exp] = useState(false);
  const [portion2Exp, setPortion2Exp] = useState(false);
  const [portion3Exp, setPortion3Exp] = useState(false);
  const [enteredGoalLevel, setEnteredGoalLevel] = useState("");
  const [totalExpPercent, setTotalExpPercent] = useState(0);
  const [pickedItem, setPickedItem] = useState("");
  const [resultItemArr, setResultItemArr] = useState([]);
  const [clicked, setClicked] = useState(false);

  const itemArr = [
    {
      name: "호두 목재",
      exp: 65340,
      gold: 14370,
      quantity: 10,
      id: 1304,
    },
    {
      name: "백금 원석",
      exp: 8413,
      gold: 2709,
      quantity: 3,
      id: 1509,
    },
    {
      name: "철",
      exp: 734,
      gold: 1510,
      quantity: 10,
      id: 1503,
    },
  ];

  //   let resultItemArr = [];

  function changeEnteredExpPercent(event) {
    setEnteredExpPercent(event.target.value);
  }

  function changeEnteredCurrentLevel(event) {
    setEnteredCurrentLevel(event.target.value);
  }

  function changeEnteredGoalLevel(event) {
    setEnteredGoalLevel(event.target.value);
  }

  function changeEnteredCurrentExp(event) {
    setEnteredCurrentExp(event.target.value);
  }

  function handlePickItem(event) {
    console.log(event.target.value);
    setPickedItem(event.target.value);
  }

  useEffect(() => {
    const enteredExp = +enteredExpPercent;
    const portion1 = portion1Exp ? 10 : 0;
    const portion2 = portion2Exp ? 20 : 0;
    const portion3 = portion3Exp ? 20 : 0;

    const total = enteredExp + portion1 + portion2 + portion3;
    setTotalExpPercent(total);
  }, [enteredExpPercent, portion1Exp, portion2Exp, portion3Exp]);

  function clickExpCalHandler() {
    console.log(enteredCurrentLevel);
    console.log(enteredExpPercent);
    console.log(enteredCurrentExp);
    console.log(totalExpPercent);
    setResultItemArr(
      calculateLevelup(
        enteredCurrentLevel,
        enteredCurrentExp,
        totalExpPercent,
        enteredGoalLevel
      )
    );
    // setClicked(!clicked);
    // console.log(clicked);
  }

  //   useEffect(() => {
  //     console.log(enteredCurrentLevel);
  //     console.log(enteredExpPercent);
  //     console.log(enteredCurrentExp);
  //     console.log(totalExpPercent);
  //     setResultItemArr(
  //       calculateLevelup(
  //         enteredCurrentLevel,
  //         enteredCurrentExp,
  //         totalExpPercent,
  //         enteredGoalLevel
  //       )
  //     );
  //   }, [clicked]);

  return (
    <Fragment>
      <Head>
        <title>마이홈 계산기</title>
        <meta
          name="description"
          content="놀러와 마이홈의 생단 효율을 계산할 수 있어요"
        />
      </Head>
      <Header />
      <main>
        <h3 className="pcTitle">레벨업 계산기</h3>
        <h3 className="mobile-title">레벨업 계산기</h3>
        <div className="levelupCalDiv">
          <div>
            <label>현재 레벨</label>&nbsp;
            <input
              type="number"
              value={enteredCurrentLevel}
              onChange={changeEnteredCurrentLevel}
            />
            &nbsp;&nbsp;&nbsp;
            <label>생산경험치 증가</label>&nbsp;
            <input
              type="number"
              value={enteredExpPercent}
              onChange={changeEnteredExpPercent}
            />
            %
            <br />
            <label>현재 경험치</label>&nbsp;
            <input
              className="expInput"
              type="number"
              value={enteredCurrentExp}
              onChange={changeEnteredCurrentExp}
            />
            <div className="portionChecks">
              <MyCheckBox value={portion1Exp} setFunc={setPortion1Exp} />
              <label>10% 경험치 포션</label>
              <br />
              <MyCheckBox value={portion2Exp} setFunc={setPortion2Exp} />
              <label>20% 경험치 포션</label>
              <MyCheckBox value={portion3Exp} setFunc={setPortion3Exp} />
              <label>20% 경험치 포션</label>
            </div>
          </div>
          <div className="goalLevel">
            <label>
              <b>목표 레벨</b>
            </label>
            &nbsp;
            <input
              type="number"
              value={enteredGoalLevel}
              onChange={changeEnteredGoalLevel}
            />
          </div>
        </div>
        <div className="linkButton2" onClick={clickExpCalHandler}>
          계산하기
        </div>
        <br />
        <br />

        <Card>
          <br />
          <PickItem
            title="생산물"
            itemArr={itemArr}
            name="pickItem"
            onChange={handlePickItem}
          />

          <LevelupResult itemId={pickedItem} itemArr={resultItemArr} />
        </Card>
      </main>
      {/* <footer className="footer">으아아ㅏ</footer> */}
      <MyFooter />
    </Fragment>
  );
}
