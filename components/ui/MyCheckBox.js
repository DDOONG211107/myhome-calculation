export function MyCheckBox(props) {
  return (
    <input
      type="checkbox"
      checked={props.value}
      onChange={() => {
        props.setFunc(!props.value);
        console.log(props.value);
      }}
    />
  );
}
