import { useState } from "react";
import { Fragment } from "react";
import classes from "./NewCommentForm.module.css";

export default function NewCommentForm(props) {
  const [enteredWriter, setEnteredWriter] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredComment, setEnteredComment] = useState("");

  function changeWriterHandler(event) {
    setEnteredWriter(event.target.value);
  }
  function changeTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function changeCommentHandler(event) {
    setEnteredComment(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("일단 제출 버튼 누름");
    console.log(enteredWriter, enteredTitle, enteredComment);
    const commentData = {
      writer: enteredWriter,
      title: enteredTitle,
      comment: enteredComment,
    };
    setEnteredWriter("");
    setEnteredTitle("");
    setEnteredComment("");

    props.onAddComment(commentData);
  }

  return (
    <form className={classes.newCommentForm} onSubmit={submitHandler}>
      <div className={classes.writerInput}>
        <label>작성자</label>
        <input
          type="text"
          value={enteredWriter}
          onChange={changeWriterHandler}
        />
      </div>
      <div className={classes.titleInput}>
        <label>제목</label>
        <input type="text" value={enteredTitle} onChange={changeTitleHandler} />
      </div>
      <div className={classes.contentInput}>
        <label>내용</label>
        <input
          type="text"
          value={enteredComment}
          onChange={changeCommentHandler}
          maxLength="500"
          placeholder="최대 500자 가능"
        />
      </div>

      <button className={classes.button}>글 등록하기</button>
    </form>
  );
}
