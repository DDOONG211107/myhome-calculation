import { Fragment } from "react";
import Head from "next/head";
import MyFooter from "@/components/ui/MyFooter";
import Header from "@/components/ui/Header";
import Card from "@/components/ui/Card";

export default function Notice(props) {
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
        <h3 className="pcTitle">레벨업 계산기 공지</h3>
        <h3 className="mobile-title">레벨업 계산기 주의사항</h3>

        <Card>
          <p className="levelupNotice">
            <b>
              다음 레벨업에 필요한 경험치값이
              <br /> 누락된 레벨:
            </b>
            <br />
            1~12, 15, 19, 20, 24, 25,
            <br />
            54, 55, 56, 110, 111, 112
            <br />
            <br />
            위 레벨을 포함하여 계산기를 실행하면 잘못된 값이 산출됩니다.
            <br />
            위 레벨의 경험치값을 아시는 분은 소통 게시판, 혹은 메일로 제보
            부탁드려요!
            <br />
            <br />
            <b>
              또한, 레벨업을 할때는 골드와 앰플에 약간 여유를 두고 진행해주세요!
            </b>
            <br />
            소수점 계산으로 인해 사이트에 표기 된 것보다 앰플이 1개 더 필요할 수
            있습니다.
          </p>
        </Card>
      </main>
      {/* <footer className="footer">으아아ㅏ</footer> */}
      <MyFooter />
    </Fragment>
  );
}
