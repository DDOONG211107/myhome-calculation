import Card from "@/components/ui/Card";
import CommentsList from "@/components/comments/CommentsList";
import Link from "next/link";
import NewCommentForm from "@/components/comments/NewCommentForm";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

const DUMMY_COMMENTS = [
  {
    title: "댓글 제목 1",
    comment: "댓글 내용 1",
    writer: "작성자1",
    id: "c1",
  },
  {
    title: "댓글 제목 2",
    comment: "댓글 내용 2",
    writer: "작성자2",
    id: "c2",
  },
  {
    title: "댓글 제목 3",
    comment: "댓글 내용 3",
    writer: "작성자3",
    id: "c3",
  },
  {
    title: "댓글 제목 4",
    comment: "댓글 내용 4",
    writer: "작성자4",
    id: "c4",
  },
];

export default function commentsPage(props) {
  const router = useRouter();

  async function addCommentHandler(enteredCommentData) {
    const response = await fetch("/api/new-comment", {
      method: "POST",
      body: JSON.stringify(enteredCommentData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/comments");
  }

  return (
    <Fragment>
      <Head>
        <title>마이홈 계산기</title>
        <meta
          name="description"
          content="마이홈의 생단 효율을 계산할 수 있어요"
        />
      </Head>
      <div className="title">
        <h2>자유롭게 소통하기</h2>
        <Link href="/">계산기로 돌아가기</Link>
      </div>
      <div className="comments-warning">
        <h3>
          절대 이곳에 개인정보 및 민감한 글을 작성하지 마세요.
          <br />
          관리자는 모든 글을 읽을 수 있습니다.
        </h3>
      </div>
      <div className="conmments-intro">
        최근 30개의 글만 보여집니다.
        <br />
        작성된 글은 약 30초 후 게시됩니다.
        <br />
        글이 보이지 않는다면 약 1분 후 새로고침 해주세요.
      </div>

      <Card>
        <CommentsList comments={props.commentsArr} />
        <NewCommentForm onAddComment={addCommentHandler} />
      </Card>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_MONGODB_CONNECTION
  );
  const db = client.db();

  const commentsCollection = db.collection("comments");
  const comments = await commentsCollection
    .find()
    .sort({ _id: -1 })
    .limit(40)
    .toArray();

  client.close();
  return {
    props: {
      commentsArr: comments.map((comment) => {
        return {
          writer: comment.writer,
          title: comment.title,
          comment: comment.comment,
          id: comment._id.toString(),
        };
      }),
    },
    revalidate: 1,
  };
}
