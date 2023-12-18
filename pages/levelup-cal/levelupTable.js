import Head from "next/head";
import Header from "@/components/ui/Header";
import Card from "@/components/ui/Card";
import MyFooter from "@/components/ui/MyFooter";
import { Fragment } from "react";
import levelExpArr from "@/src/data/levelExpArr";
import { Man } from "@/src/calculate";

export default function levelupTable() {
  let i = -1;
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
        <h3 className="pcTitle">레벨별 필요 경험치량</h3>
        <h3 className="mobile-title">레벨별 필요 경험치량</h3>
        <Card>
          <h4 className="levelupTableTitle">
            {/* 각 레벨별 다음 레벨로 <br />
            가기 위한 경험치입니다
            <br /> */}
            ex{")"} 13-&gt;14 렙업 하기 위해서는 2만 9394 exp 필요
          </h4>
          <div className="levelupTable">
            <ol className="level">
              {levelExpArr.map((level) => {
                i++;
                return <li>{i === 0 ? "레벨" : i}</li>;
              })}
            </ol>

            {/* <div className="reqExp"> */}
            <ol className="reqExp">
              {levelExpArr.map((level) => {
                return <li>{level === 0 ? "미확인" : Man(level)}</li>;
              })}
            </ol>
          </div>
        </Card>
      </main>
      {/* <footer className="footer">으아아ㅏ</footer> */}
      <MyFooter />
    </Fragment>
  );
}
