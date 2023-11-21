export default function CommentsList(props) {
  return (
    <ul>
      {props.comments.map((comment) => {
        return (
          <li key={comment.id}>
            <label>{comment.title} </label>
            <label>{comment.writer}</label>
            <br />
            {comment.comment}
            <br />
            <br />
            <br />
          </li>
        );
      })}
    </ul>
  );
}
