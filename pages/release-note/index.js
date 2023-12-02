import { Fragment } from "react";
import Head from "next/head";
import Release from "../../components/release/Release";
import Card from "@/components/ui/Card";
import Header from "@/components/ui/Header";
import { Link } from "@react-email/components";
import MyFooter from "@/components/ui/MyFooter";

export default function releaseNotePage() {
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
      {/* <div className="title">
          <h2>개발자 노트</h2>
          <Link href="/" className="linkButton">
            계산기로 돌아가기
          </Link>
        </div> */}
      <main>
        <h3 className="pcTitle">개발자 노트</h3>
        <br />
        <h3 className="mobile-title">개발자 노트</h3>

        <br />
        <Card>
          <Release />
        </Card>
      </main>
      {/* <footer className="footer">으아아ㅏ</footer> */}
      <MyFooter>개발자 노트 footer</MyFooter>
    </Fragment>
  );
}
