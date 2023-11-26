import classes from "./CommentsList.module.css";

export default function CommentsList(props) {
  if (props.comments) {
    return (
      <ul className={classes.commentsList}>
        {props.comments.map((comment) => {
          return (
            <li key={comment.id}>
              <label>{"제목: " + comment.title} </label>
              <br />
              <label>{"작성자: " + comment.writer}</label>
              <br />
              {"내용: " + comment.comment}
              <br />
              <br />
            </li>
          );
        })}
      </ul>
    );
  } else {
    return;
  }
}
