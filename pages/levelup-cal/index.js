import { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/ui/Header";
import MyFooter from "@/components/ui/MyFooter";
import Card from "@/components/ui/Card";

export default function LevelupCal(props) {
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
        <Card>여기에 결과 카드</Card>
      </main>
      {/* <footer className="footer">으아아ㅏ</footer> */}
      <MyFooter />
    </Fragment>
  );
}
