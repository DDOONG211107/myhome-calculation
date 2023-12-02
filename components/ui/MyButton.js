import classes from "./MyButton.module.css";

export default function MyButton(props) {
  return (
    <div onClick={props.onClick} className={classes.myButton}>
      {props.children}
    </div>
  );
}
