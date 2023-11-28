import { calculateHandler } from "@/src/calculate";
import { useState, useEffect } from "react";
import { Result } from "../components/result/Result";
import Link from "next/link";
import Head from "next/head";

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
      <Head>
        <title>마이홈 계산기</title>
        <meta
          name="description"
          content="놀러와 마이홈의 생단 효율을 계산할 수 있어요"
        />
      </Head>
      <div className="title">
        <h2>마이홈 생단 계산기</h2>
        <Link className="linkButton" href="/comments">
          자유롭게 소통하기
        </Link>
        <Link className="linkButton" href="/release-note">
          개발자 노트 보기
        </Link>
      </div>
      {/* <button onclick={showCommentsPageHandler}>자유롭게 소통하기</button> */}
      {/* <h2>11.26.21:50</h2> */}
      <p></p>
      <h3>
        생산단축 퍼센트를 입력해주세요
        <br /> (모든 포션과 펫 포함)
      </h3>
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
