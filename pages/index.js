import { calculateHandler } from "@/src/calculate";
import { useState, useEffect } from "react";
import { Result } from "../components/result/Result";
import Link from "next/link";

export default function Home() {
  const [enteredPercent, setEnteredPercent] = useState("");
  const [calculatedPercent, setCalculatedPercent] = useState("");
  let result = 0;
  function clickHanlder() {
    console.log(" 버튼을 눌렀습니다");

    result = calculateHandler(enteredPercent);
    //console.log(result);
    setCalculatedPercent(result);
  }

  function changeEnteredPercent(event) {
    setEnteredPercent(event.target.value);
  }

  return (
    <>
      <Link href="/comments">자유롭게 소통하기</Link>
      {/* <button onclick={showCommentsPageHandler}>자유롭게 소통하기</button> */}
      <h3>생산단축 퍼센트를 입력해주세요 (포션 제외)</h3>
      <input
        type="text"
        value={enteredPercent}
        onChange={changeEnteredPercent}
      />
      <hr className="line" />
      <button onClick={clickHanlder}>계산하기</button>
      <Result percent={calculatedPercent} />
    </>
  );
}
