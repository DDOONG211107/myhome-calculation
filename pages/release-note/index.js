import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Release from "../../components/release/Release";
import Card from "@/components/ui/Card";

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
      <div>
        <div className="title">
          <h2>개발자 노트</h2>
          <Link href="/" className="linkButton">
            계산기로 돌아가기
          </Link>
        </div>
        <br />
        <hr className="line" />
        <br />
        <Card>
          <Release />
        </Card>
      </div>
    </Fragment>
  );
}
