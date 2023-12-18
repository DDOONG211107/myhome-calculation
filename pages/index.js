import { calculateHandler } from "@/src/calculate";
import { useState, useEffect } from "react";
import { Result } from "../components/result/Result";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/ui/Header";
import { ContactUs } from "@/components/EmailForm/EmailLink";
import MyFooter from "@/components/ui/MyFooter";
import MyModal from "@/components/ui/MyModal";
import ShortenModal from "@/components/ShortenModal/ShortenModal";

export default function Home() {
  const [enteredPercent, setEnteredPercent] = useState("0");
  const [calculatedPercent, setCalculatedPercent] = useState("0");
  const [enteredExpPercent, setEnteredExpPercent] = useState("0");
  const [calculatedExpPercent, setCalculatedExpPercent] = useState("0");
  const [showShortenModal, setShowShortenModal] = useState(false);
  const [appliedShorten, setAppliedShorten] = useState("0");
  let reducPercent = 0;

  const clickShortenModalHandler = () => {
    setShowShortenModal(!showShortenModal);
  };

  const closeShortenModalHandler = () => {
    setShowShortenModal(false);
  };

  function clickHanlder() {
    console.log(" 버튼을 눌렀습니다");
    console.log(enteredPercent, enteredExpPercent);

    reducPercent = calculateHandler(enteredPercent);
    //console.log(result);
    setCalculatedPercent(reducPercent);
    if (enteredExpPercent >= 0 && enteredExpPercent <= 100) {
      setCalculatedExpPercent(enteredExpPercent);
      // console.log("생단:", calculatedPercent, "생경: ", calculatedExpPercent);
    } else {
      setCalculatedExpPercent(0);
      // console.log("생단:", calculatedPercent, "생경: ", calculatedExpPercent);
    }
  }

  function changeEnteredPercent(event) {
    setEnteredPercent(event.target.value);
  }

  function changeEnteredExpPercent(event) {
    setEnteredExpPercent(event.target.value);
  }

  useEffect(() => {
    setAppliedShorten(enteredPercent);
    console.log(enteredPercent);
  }, [showShortenModal]);

  return (
    <>
      <Head>
        <title>마이홈 계산기</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon/favicon.jpg"
          type="image/jpg"
          sizes="any"
        />
        <meta
          name="description"
          content="놀러와 마이홈의 생단 효율을 계산할 수 있어요"
        />
      </Head>
      <Header />
      <main>
        {/* <div className="title">
          <h2>마이홈 생단 계산기</h2>
          <Link className="linkButton" href="/comments">
            자유롭게 소통하기
          </Link>
          <Link className="linkButton" href="/release-note">
            개발자 노트 보기
          </Link>
        </div> */}
        {/* <button onclick={showCommentsPageHandler}>자유롭게 소통하기</button> */}
        {/* <h2>11.26.21:50</h2> */}
        <div onClick={clickShortenModalHandler} className="linkButton">
          생단셋 적용하기
        </div>

        <MyModal
          onClose={closeShortenModalHandler}
          isOpen={showShortenModal}
          onClick={clickShortenModalHandler}
          modalHeaderTitle={"생단셋 적용"}
        >
          <ShortenModal
            onClose={closeShortenModalHandler}
            onApply={setEnteredPercent}
          />
        </MyModal>
        <div className="reduceInputDiv">
          <label>
            <b>생산단축</b> (모든 포션, 펫 포함)
          </label>
          <input
            type="number"
            value={enteredPercent}
            onChange={changeEnteredPercent}
          />
          %
        </div>
        <div className="expInputDiv">
          <label>
            <b>생산경험치 증가</b> (모든 포션 포함)
          </label>
          <input
            type="number"
            value={enteredExpPercent}
            onChange={changeEnteredExpPercent}
          />
          %
        </div>

        {/* <h3>
          생산단축 퍼센트를 입력해주세요
          <br /> (모든 포션과 펫 포함)
        </h3>
        <input
          type="number"
          value={enteredPercent}
          onChange={changeEnteredPercent}
        /> */}
        <div onClick={clickHanlder} className="linkButton2">
          계산하기
        </div>
        {/* <button onClick={clickHanlder}>계산하기</button> */}
        {/* <hr className="line" /> */}

        <Result percent={calculatedPercent} expPercent={calculatedExpPercent} />
      </main>
      {/* <footer className="footer">계산기 footer</footer> */}
      <MyFooter>계산기 footer</MyFooter>
    </>
  );
}
